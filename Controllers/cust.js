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
    var cusSchema = {
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
    res.send("Added")

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


module.exports = { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers };