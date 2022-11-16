const mongoose = require('mongoose');
const Ajv = require('ajv')
const { Customer, hotel } = require('./export');


const getCustomers = async (req, res) => {
    try {
        const result = await Customer.find();
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createCustomers = async (req, res) => {
    const cusSchema = {
        type: 'array',
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
        return res.status(500).json(error)
    }

    const data = req.body
    console.log(data);
    const result = await Customer.insertMany(data)
    console.log(result)
    res.status(200).json(result)

}

const deleteCustomers = async (req, res) => {
    try {
        const data = req.body._id;
        console.log(data);
        const result = await Customer.deleteOne({ _id: data });
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const findCustomers = async (req, res) => {
    try {
        const data = req.params.id;
        console.log(data);
        const result = await Customer.findOne({ _id: data })
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateCustomers = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const result = await Customer.findByIdAndUpdate({ _id: data._id }, data, { new: true, runvalidator: true })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const projectCustomers = async (req, res) => {
    try {
        const result = await Customer.aggregate([
            { $project: { _id: 0, name: 1 } }
        ])
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err.message)
    }
}
const paginationCustomers = async (req, res) => {
    const page = req.query.page;
    const limit = parseInt(req.query.limit);
    console.log(page);
    console.log(limit);

    try {
        const result = await Customer.aggregate([
            { $skip: (page - 1) * limit },
            { $limit: limit },
            { $sort: { name: 1 } }
        ])
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err.message)
    }
}
const saveCustomers = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const result = await Customer.create(data);
        console.log(result)
        
        const customer = {
            results: result
        }
        res.status(200).json(customer)
        console.log(result)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const populatCustomers = async (req, res) => {
    try {
        const result = await Customer.find().populate('hotel_id')
        console.log(result);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}
const insertmanyHotels = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const result = await hotel.create(data)
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error).message
    }
}

const keyword = async (req, res) => {
    const name = req.query.name;

    try {
        const result = await Customer.aggregate([
            { $match: { $expr: { $eq: ["$name", name] } } },
        ])
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err.message)
    }

}

const searchCustomers = async (req, res) => {
    const name = req.query.name
    try {
        const result = await Customer.find({ name: { $regex: name, $options: 'i' } });
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err.message)
    }
}
const keywordPagination = async (req, res) => {
    const name = req.query.name;
    const page = req.query.page;
    const limit = parseInt(req.query.limit);
    try {
        const result = await Customer.aggregate([
            { $match: { name: { $regex: name, $options: 'i' } } },
            { $skip: (page - 1) * limit },
            { $limit: limit * 1 }
        ])
        console.log(result);
        res.json(result)
    } catch (err) {
        res.json(err.message)
    }

}
const output = async (req, res) => {
    const name = req.query.name;
    const page = req.query.page;
    const limit = parseInt(req.query.limit);
    try {
        const result = await Customer.aggregate([
            { $match: { name: { $regex: name, $options: 'i' } } },
            { $skip: (page - 1) * limit },
            { $limit: limit * 1 }
        ])
        console.log(result);
        res.json({ options: { page: page, limit: limit, keyword: name }, results: result, totalcount: result.length })
    } catch (err) {
        res.json(err.message)
    }
}


module.exports = { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, projectCustomers, paginationCustomers, populatCustomers, insertmanyHotels, saveCustomers, keyword, searchCustomers, keywordPagination, output, };


// $expr to compare two fields inside a document. Where $expr is an operator but not an aggregation stage. So operators needs to be used inside stages, can't stand on their own in an aggregation pipeline 