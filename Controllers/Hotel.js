const mongoose=require('mongoose');
const Ajv = require('ajv')
const hotel = require('../Models/hotel');

    const getHotels = async (req, res) => {
        try {
            const result = await hotel.find();
            console.log(result);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    const createHotels =
    async (req, res) => {
        const hotelSchema = {
            type: 'array',
            properties: {
                name:
                {
                    type: "string"
                },
                email: {
                    type: "string"
                },
                address: {
                    type: "string"
                },
                city: {
                    type: "string"
                },
                phone_no: {
                    type: "string"
                },
                pin_no: {
                    type: "string"
                },
                location_url: {
                    type: "string"
                },
                description: {
                    type: "string"
                },
                features: {
                    type: "string"
                },
                rating: {
                    type: "string"
                },
                check_in: {
                    type: "string"
                },
                check_out: {
                    type: "string"
                }

            },
            required: ['name', 'email', 'address', 'city', 'phone_no', 'location_url', 'description', 'features', 'rating', 'check_in', 'check_out'],
            additionalProperties: true
        };

        const ajv = new Ajv();
        try {
            const validate = ajv.addSchema(hotelSchema).compile(hotelSchema);
            const valid = validate(req.body);
            if (!valid) {
                throw validate.errors[0].message;
            }
        } catch (err) {
            console.log(err);
        }
        const data = req.body;
        console.log(data);
        const result = await hotel.insertMany(data)
        console.log(result);
        res.status(200).json(result)
    }
const findHotels = async (req, res) => {
    try {
        const data = req.params.id;
        console.log(data);
        const result = await hotel.findOne({ _id: data });
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const deleteHotels = async (req, res) => {
    try {
        const data = req.body._id;
        console.log(data);
        const result = await hotel.deleteOne({ _id: data })
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateHotels = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const result = await hotel.findByIdAndUpdate({ _id: data._id }, data, { new: true, runvalidator: true })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(result)
    }
}
const paginationHotels = async (req, res) => {
    const page = req.query.page;
    const limit = parseInt(req.query.limit);
    console.log(page);
    console.log(limit);
    try {
        const result = await hotel.aggregate([
            { $skip: (page - 1) * limit },
            { $limit: limit },
            { $sort: { name: 1 } },


        ])
        console.log(result);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports={getHotels, createHotels, findHotels, deleteHotels, updateHotels, paginationHotels, }