const validator = require("validator");
const mongoose = require('mongoose')
const bookingino_Schema = mongoose.Schema({
    customer_name: String,
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Custormer"
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel"
    },
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    check_in: {
        type: Date,
        required: this
    },
    check_out: {
        type: Date,
        required: true
    },
    booking_date: {
        type: Date,
        required: true
    }



})

module.exports = mongoose.model("Booking", bookingino_Schema)
