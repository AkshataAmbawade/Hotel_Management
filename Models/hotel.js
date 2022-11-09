const validator = require("validator");
const mongoose = require('mongoose')


const hotelinfo_Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("The Email  is Invalid")
            }
        }
    },
    address: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
        unique: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("The Phone Number is Invalid")
            }
        }
    },
    pin_no: {
        type: Number,
        required: true,

        validate(value) {
            if (!value === 6) {
                throw new Error("The Postal Index Number(PIN) should consists of 6 digits")
            }
        }
    },
    location_url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true
    },
    check_in: {
        type: Date,
        required: true,
    },
    check_out: {
        type: Date,
        required: true
    }

})
module.exports = mongoose.model("Hotel", hotelinfo_Schema)
