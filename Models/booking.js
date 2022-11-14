const validator = require("validator");
const mongoose = require('mongoose')
const bookingino_Schema = mongoose.Schema({
    customer_name: String,
    Customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    
    check_in: {
        type: Date,
        required: true
    },
    check_out: {
        type: Date,
        required: true
    },
    booking_date: {
        type: Date,
        required: true
    },
    payment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'payment'
    }



})

module.exports = mongoose.model("Booking", bookingino_Schema)
