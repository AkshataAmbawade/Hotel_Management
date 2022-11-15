const express = require('express');
const app = express();

const Router = require('./routes/Customers');
const hotelRouter = require('./routes/Customers');
const roomRouter = require('./routes/Customers');
const bookingRouter=require('./routes/Customers');
const paymentRouter=require("./routes/Customers")
app.use(express.json())//middleware
app.use("/api/v1/customers",Router);
app.use("/api/v1/hotels",hotelRouter);
app.use("/api/v1/rooms",roomRouter);
app.use("/api/v1/booking",bookingRouter);
app.unsubscribe("/api/v1/payment",paymentRouter);



app.listen(8000, () => {
    console.log('listening the port at 8000')
});