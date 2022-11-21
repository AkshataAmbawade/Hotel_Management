const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { booking, payment } = require("./export");

const booking_info = async (req, res) => {
    try {
        data = req.body;
        let result1 = await booking.create(data);
        console.log(result1);
        let result = await payment.create(data);
        console.log(result);
        // const pay=result._id
        result = await booking.updateOne(
            { _id: result1._id },
            { payment_id: result._id }
        );
        // console.log(pay)

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
const populateBooking = async (req, res) => {
    try {
        const result = await booking
            .find()
            .populate("customer_id")
            .populate("payment_id");
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const status = async (req, res) => {
    try {
        const result = await booking.aggregate([
            //   {$project:{_id:0,customer_id:1,grand_total:1,status:1}},
            //   { $group: {_id: {status:"$status"}, total: { $sum: "$grand_total" } } },
            {
                $group: {
                    _id: {
                        customer_id: "$customer_id",
                        customer_name: "$customer_name",
                        status: "$status",
                    },
                    total: { $sum: "$grand_total" },
                },
            },
            {
                $project: {
                    _id: 0,
                    customer_name: "$_id.customer_name",
                    customer_id: "$_id.customer_id",
                    total: 1,
                    status: "$_id.status",
                },
            },
        ]);
        res.status(200).json(result);
        console.log(result);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
const total = async (req, res) => {
    try {
        const result = await booking.aggregate([
            {
                $group: {
                    _id: {
                        customer_id: "$customer_id",
                        customer_name: "$customer_name",
                        status: "$status",
                    },
                    total: { $sum: "$grand_total" },
                },
            },

            {
                $project: {
                    _id: 0,
                    customer_id: "$_id.customer_id",
                    customer_name: "$_id.customer_name",
                    status: "$_id.status",
                    total: 1,
                },
            },
            {
                $group: {
                    _id: {
                        customer_id: "$customer_id",
                        customer_name: "$customer_name",
                    },
                   
                    Paid: {
                        $push: {
                            $cond: [
                                { $eq: ["$status", "paid"] },
                                { paid: "$total" },
                                "$$REMOVE",
                            ],
                        },
                    },
                    Unpaid: {
                        $push: {
                            $cond: [
                                { $eq: ["$status", "unpaid"] },
                                { unpaid: "$total" },
                                "$$REMOVE",
                                
                            ],
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    customer_id: "$_id.customer_id",
                    customer_name: "$_id.customer_name",
                    total: 1,
                    Paid: "$Paid.paid",
                    Unpaid: "$Unpaid.unpaid",
                
                },
            },
            {
                $project: {
                    _id: 0,
                    customer_id: 1,
                    customer_name: 1,
                    Paid: { $arrayElemAt: ["$Paid", 0] },
                    Unpaid: { $arrayElemAt: ["$Unpaid", 0] },
                    
                    // Total: { $sum: ["$Paid", "$Unpaid"] }

                },
            },
            {
                $project: {
                    // _id: 0,
                    customer_id: 1,
                    customer_name: 1,
                    Total: { $sum: ["$Paid", "$Unpaid"] },
                    Unpaid: { $ifNull: ["$Unpaid", 0] },
                    Paid: { $ifNull: ["$Paid", 0] },

                },
            },
            {
                $project: {
                    _id: 0,
                    customer_id: 1,
                    customer_name: 1,
                    Paid: 1,
                    Unpaid: 1,
                    Total: 1,
                    Status: {
                        $cond: [{ $eq: ["$Unpaid", 0] }, "Paid", "Unpaid"],
                    },
                },
            },
            {$project:{_id:0,customer_id:1,customer_name:1,Paid:1,Unpaid:1,  Total: { $sum: ["$Paid", "$Unpaid"] },
            Status: { $cond: [{ $eq: ["$Unpaid", 0] }, "Paid", "Unpaid"] }}}

            // {$group:{_id:{Paid:"$Paid", Unpaid:"$Unpaid"}}}
        ]);

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
const lastEntry = async (req, res) => {
    try {
        const result = await booking.aggregate([
            {
                $lookup: {
                    from: "payment",
                    localField: "_id",
                    foreignField: "payment_id",
                    as: "entry",
                },
            },
            {
                $group: {
                    _id: { customer_id: "$customer_id" },
                    lastEntry: { $last: "$$ROOT" },
                },
            },
            {
                    $lookup: {
                      from: "booking",
                      localField: "payment_id",
                      foreignField: "_id",
                      as: "payment",
                    },
                  },
                
            {
                $project: {
                    _id: 0,
                    customer_id: "$lastEntry.customer_id",
                    customer_name: "$lastEntry.customer_name",
                    payment_date: "$lastEntry.payment_date",
                    amount: "$lastEntry.amount",
                    tax: "$lastEntry.tax",
                    grand_total: "$lastEntry.grand_total",
                    mode: "$lastEntry.mode",
                    status: "$lastEntry.mode",
                    status: "$lastEntry.status",
                },
            },
        ]);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err.message);
    }
};


module.exports = { booking_info, populateBooking, status, total, lastEntry };

// {
//     "$project": {
//         _id:0,
//         // customer_name:"$_id.customer_name",
//         customer_id:"$_id.customer_id",
//         // status:"$_id.status",
//       "paid": {
//         $getField: "grand_total"
//       },
//       total:1
//     }
//   }

// const lastEntry=async(req,res)=>{
//     try{
//         const result=await payment.aggregate([
//             {$group:{_id:{customer_id:"$customer_id"} ,lastEntry: { "$last": "$$ROOT" }}}

//         ])
//         res.status(200).json(result)
//     }catch(err){res.status(500).json(err.message)}
// }
// {$group:{_id:{customer_id:"$customer_id",customer_name:"$customer_name"},Paid:{$push:{$cond:[{$eq:["$status","paid"]},{paid:"$total"},"$$REMOVE"]}},Unpaid:{$push:{$cond:[{$eq:["$status","unpaid"]},{unpaid:"$total"},"$$REMOVE"]}}}},

// {$group:{_id:{id:"$customer_id"}}},
// { $facet: {status: [{$match: {$expr: { $eq: [ "$status","paid" ]}}} ] }} ,
// {$project:{_id:0,customer_id:1,grand_total:1,status:1}},
// { $group: {_id: {id:"$customer_id"}, total: { $sum: "$grand_total" } } },
