const express = require('express');
const app = express();

const Router = require('./routes/Customers');
// const hotelRouter=require("./route/Hotels")
app.use(express.json())//middleware
app.use("/api/v1/customers",Router);
// app.use("/api/v1/hotels",hotelRouter)



app.listen(8000, () => {
    console.log('listening the port at 8000')
});