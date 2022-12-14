const { default: axios } = require('axios');
const express = require('express');
const mongoose=require('mongoose');
const { pagination } = require('./Controllers/export');
const app = express();
mongoose.connect("mongodb://localhost:27017/Hotel_Management")
    .then(() => {
        console.log("--Welcome to the Hotel--")
    })
    .catch((err) => {
        console.log(err)
    })

const Router = require('./routes/Customers');
const hotelRouter = require('./routes/Customers');
const roomRouter = require('./routes/Customers');
const bookingRouter=require('./routes/Customers');
const paymentRouter=require("./routes/Customers");
const fetchApi=require("./routes/Customers");
const axiosapi=require("./routes/Customers");
const paginationNews=require("./routes/Customers")
app.use(express.json())//middleware
app.use("/api/v1/customers",Router);
app.use("/api/v1/hotels",hotelRouter);
app.use("/api/v1/rooms",roomRouter);
app.use("/api/v1/booking",bookingRouter);
app.use("/api/v1/payment",paymentRouter);
app.use("/api/v1/fetchApi",fetchApi);

app.use("/api/v1/axiosApi",axiosapi);


app.use("/api/v1/axiosApi",paginationNews)




app.listen(8000, () => {
    console.log('listening the port at 8000')
});