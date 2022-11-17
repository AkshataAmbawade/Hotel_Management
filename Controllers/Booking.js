const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId
const { booking, payment } = require("./export")

const booking_info = async (req, res) => {
    try {
        data = req.body;
        let result1 = await booking.create(data);
        console.log(result1);
        let result = await payment.create(data);
        console.log(result)
        // const pay=result._id
        result = await booking.updateOne({ _id: result1._id }, { payment_id: result._id })
        // console.log(pay)

        res.status(200).json(result)

    } catch (err) {
        res.status(500).json(err.message)
    }
}
const populateBooking = async (req, res) => {
    try {
        const result = await booking.find().populate('customer_id').populate('payment_id')
        console.log(result);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const status = async (req, res) => {

    try {
        const result = await booking.aggregate([
            //   {$project:{_id:0,customer_id:1,grand_total:1,status:1}},
            //   { $group: {_id: {status:"$status"}, total: { $sum: "$grand_total" } } },
            { $group: { _id: { customer_id: "$customer_id",customer_name:"$customer_name", status: "$status" }, total: { $sum: "$grand_total" } } },
            { $project: { _id: 0,customer_name:"$_id.customer_name" ,customer_id: "$_id.customer_id", total: 1, status: "$_id.status" } },
        ])
        res.status(200).json(result)
        console.log(result)
    } catch (err) {
        res.status(500).json(err.message)
    }
}
const total=async(req,res)=>{
    try{
      const result=await booking.aggregate([
        {$group:{_id:{customer_id:"$customer_id", status:"$status"}}}
      ])
      res.status(200).json(result)
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports = { booking_info, populateBooking, status ,total}












    // {$group:{_id:{id:"$customer_id"}}},
        // { $facet: {status: [{$match: {$expr: { $eq: [ "$status","paid" ]}}} ] }} ,
    // {$project:{_id:0,customer_id:1,grand_total:1,status:1}},
        // { $group: {_id: {id:"$customer_id"}, total: { $sum: "$grand_total" } } },
