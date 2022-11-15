const mongoose=require('mongoose');
const {booking}=require("./export")
mongoose.connect("mongodb://localhost:27017/Hotel_Management")
    .then(() => {
        console.log("--Welcome to the Hotel--")
    })
    .catch((err) => {
        console.log(err)
    })
    const booking_info = async (req, res) => {
        try {
            const data = req.body;
            const result = await booking.create(data);
            console.log(result);
            res.status(200).json(result)
            // const pay={
            //     customer_id:"",
            //     booking_id:"",
            //     payment_date:"",
            //     amount:"",
            //     tax:"",
            //     grand_total:"",
            //     mode:"",
            //     status:""
            // }
    
            const result1 = await payment.create(data);
            res.status(200).json(result1)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    const populateBooking = async (req, res) => {
        try {
            const result = await booking.find().populate('customer_id ')
            console.log(result);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    module.exports={booking_info,populateBooking}