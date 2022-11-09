const validator = require("validator");
const mongoose = require('mongoose')




const roominfo_Schema = mongoose.Schema({
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel"
    }
})

module.exports = mongoose.model("Room", roominfo_Schema)