const mongoose=require('mongoose');
const{Room}=require("./export")
const Ajv = require('ajv')
const hotel = require('../Models/hotel');
// mongoose.connect("mongodb://localhost:27017/Hotel_Management")
//     .then(() => {
//         console.log("--Welcome to the Hotel--")
//     })
//     .catch((err) => {
//         console.log(err)
//     })
    const rooms = async (req, res) => {
    try {
        const data = req.body;
        const result = await Room.create(data);
        console.log(result);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports={rooms}