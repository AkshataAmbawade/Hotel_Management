const Customer = require('../Models/customer');
const hotel = require('../Models/hotel');
const booking = require('../Models/booking');
const payment = require('../Models/payment');
const Room = require('../Models/room');
const fetch=require("./fetchApi");
const axios=require("./axiosApi");
const pagination=require('./newsPagination')


module.exports = { Customer, hotel, booking, payment, Room ,fetch,axios,pagination}


