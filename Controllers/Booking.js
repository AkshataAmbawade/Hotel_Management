const mongoose=require('mongoose');
const {booking, payment}=require("./export")

    const booking_info = async (req, res) => {
        try {
             data = req.body;
            let result1 = await booking.create(data);
            console.log(result1);
            let result = await payment.create(data);
            console.log(result)
            // const pay=result._id
            result=await booking.updateOne({_id:result1._id},{payment_id:result._id})
            // console.log(pay)
            
            res.status(200).json(result)
        
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    const populateBooking = async (req, res) => {
        try {
            const result = await booking.find().populate('customer_id' ).populate('payment_id')
            console.log(result);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    module.exports={booking_info,populateBooking}