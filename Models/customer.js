
const validator = require("validator");
const mongoose = require('mongoose')



const customerinfo_Schema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        trim: true
    },
    phone_no: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("The Phone Number is Invalid")
            }

        }
    },
    aadhar_no: {
        type: Number,
        unique: true,
        required: true,
        validate(value) {
            if (!value === 12) {
                throw new Error("The Aadhar Number should consists 12 digits")
            }
        }

    },
    pan_no: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!value === 10) {
                throw new Error("The Pan Number should consistes of 10 alphsnumeric number")
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("The Email address is Invalid")
            }
        }
    },
    city_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    check_in: {
        type: Date,
        required: true
    },
    check_out: {
        type: Date,
        required: true
    },
    executive_name: {
        type: String,
        require: true,
        trim: true
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel"
    },
    room_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    booking_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    },
    payment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payment"

    }
})

module.exports = mongoose.model('Customer', customerinfo_Schema)




