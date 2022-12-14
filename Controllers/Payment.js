const mongoose=require('mongoose');
const {payment}=require("./export");


    const paymentInfo = async (req, res) => {
        try {
            const data = req.body;
            const result = await payment.create(data);
            console.log(result);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
    const populatePayment = async (req, res) => {
        try {
            const result = await payment.find().populate('customer_id ')
            console.log(result);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    module.exports={paymentInfo,populatePayment}

