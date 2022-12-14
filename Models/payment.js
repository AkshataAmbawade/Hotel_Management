const validator = require("validator");
const mongoose = require('mongoose')


const payment_Schema = mongoose.Schema({
customer_name:String,
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
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

module.exports = mongoose.model('Payment', payment_Schema)