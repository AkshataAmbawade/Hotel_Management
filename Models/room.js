const validator = require("validator");
const mongoose = require('mongoose')




const roominfo_Schema = mongoose.Schema({
    // customer_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Customer"
    // },
    room_type:{
        type:String,
    required:true,
    additionnal_Properties:true
    },
    room_floor:{
        type:String,
        required:true,
        addiontion_Properties:true
    
        }    ,
    room_number:{
        type:Number,
        required:true,
        additionnal_Properties:true
    },
    // booking_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Booking"
    // }
    
})

module.exports = mongoose.model("Room", roominfo_Schema)