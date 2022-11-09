const mongoose = require('mongoose');
const Ajv = require('ajv')
const { Customer, hotel, booking, payment, room } = require('./export');
mongoose.connect("mongodb://localhost:27017/Hotel_Management")
    .then(() => {
        console.log("--Welcome to the Hotel--")
    })
    .catch((err) => {
        console.log(err)
    })

const getCustomers = async (req, res) => {
    const result = await Customer.find();
    console.log(result);
    res.send(result)
}

const createCustomers = async (req, res) => {
    const cusSchema = {
        type: 'object',
        properties: {
            name: {
                type: 'string',
            },
            address: {
                type: 'string'
            },
            check_in: {
                type: 'string',
            },
            check_out: {
                type: 'string',
            },
            executive_name: {
                type: 'string',
            }

        },
        required: ['name', 'address', 'check_in', 'check_out', 'executive_name'],
        additionalProperties: true
    };

    const ajv = new Ajv();
    try {
        const validate = ajv.addSchema(cusSchema).compile(cusSchema);
        const valid = validate(req.body);
        if (!valid) {
            throw validate.errors[0].message;
        }
    } catch (error) {
        console.log(error);
        return res.send(error)
    }

    const data = req.body
    console.log(data);
    const result = await Customer.insertMany([data])
    console.log(result)
    res.send( " Customer Added Successfully")

}

const deleteCustomers = async (req, res) => {
    const data = req.body._id;
    console.log(data);
    const result = await Customer.deleteOne({ _id: data });
    console.log(result)
    res.send("Deleted")
}
const findCustomers = async (req, res) => {
    const data = req.body._id;
    console.log(data);
    const result = await Customer.findOne({ _id: data })
    console.log(result);
    res.send("Found")
}
const updateCustomers = async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await Customer.findByIdAndUpdate({ _id: data._id }, data, { new: true, runvalidator: true })
    res.send(result)
}

const gethotels=async(req,res)=>{
    const result=await hotel.find();
    console.log(result);
    res.send(result)
}
const createHotels=
async (req, res) => {
    const hotelSchema = {
        type: 'object',
        properties: {
            name:
            { 
                type:"string"
            },
            email: {
                type:"string"
            },
            address:{
                type:"string"},
            city:{
                type:"string"
            },
            phone_no:{
                type:"string"
            },
            pin_no:{
                type:"string"
            },
            location_url:{
                type: "string"
            },
            description:{ 
                type:"string"
            },
            features:{
                type:"string"
            },
            rating:{
                type:"string"
            },
            check_in:{ 
                type:"string"
            },
            check_out:{
                type:"string"}

        },
        required: ['name', 'email', 'address', 'city', 'phone_no','location_url','description','features','rating','check_in','check_out'],
        additionalProperties: true
    };

    const ajv = new Ajv();
    try {
        const validate = ajv.addSchema(hotelSchema).compile(hotelSchema);
        const valid = validate(req.body);
        if (!valid) {
            throw validate.errors[0].message;
        }
    } catch (error) {
        console.log(error);
        return res.send(error)
    }
    const data=req.body;
    console.log(data);
    const result=await hotel.insertMany([data])
    console.log(result);
    res.send("Hotel Added Successfully!!")
}
const findHotels=async(req,res)=>{
    const data=req.body._id;
    console.log(data);
    const result=await hotel.findOne({_id:data});
    console.log(result)
    res.send("Found Hotel Successfully!!")
}
const deleteHotels=async(req,res)=>{
    const data=req.body._id;
    console.log(data);
    const result=await hotel.deleteOne({_id:data})
    console.log(result);
    res.send("Hotel Deleted successfully")
}
const updateHotels = async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await Customer.findByIdAndUpdate({ _id: data._id }, data, { new: true, runvalidator: true })
    res.send("Hotel Details Updated successfully!!")
}


module.exports = { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers ,gethotels,createHotels,findHotels, deleteHotels,updateHotels};