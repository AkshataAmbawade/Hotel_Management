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
    },
    payment_date: {
        type: Date,
        required: true
    },
    amount: Number,
    tax: Number,
    grand_total: Number,
    mode: {
        type: String,
        enum: ["cash", "card"]
    },
    status: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid"
    }




})

module.exports = mongoose.model("Booking", bookingino_Schema)
