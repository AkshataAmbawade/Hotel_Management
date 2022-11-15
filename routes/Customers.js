const express = require('express');
const router = express.Router();


const { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, projectCustomers, paginationCustomers,populatCustomers, saveCustomers, keyword, searchCustomers, insertmanyHotels, keywordPagination, output, paymentInfo, } = require('../Controllers/cust');
const { createHotels, deleteHotels,findHotels,updateHotels ,paginationHotels,getHotels} = require('../Controllers/Hotel');
const {rooms}=require('../Controllers/Rooms');
const {booking_info,populateBooking}=require("../Controllers/Booking")


router.route('/getCustomers').get(getCustomers);
router.route("/createCustomers").post(createCustomers);
router.route("/deleteCustomers").delete(deleteCustomers);
router.route("/findCustomers/:id").get(findCustomers);
router.route("/updateCustomers").put(updateCustomers);
// router.route("/gethotels").get(getHotels);
// router.route("/createhotels").post(createHotels);
// router.route("/findhotels/:id").get(findHotels);
// router.route("/deletehotels").delete(deleteHotels);
// router.route("/updatehotels").put(updateHotels);
router.route("/findprojectCustomer").get(projectCustomers);
router.route("/paginationCustomers").get(paginationCustomers);
// router.route("/paginationhotels").get(paginationHotels);
router.route("/populateCustomer").get(populatCustomers);
router.route("/savecustomers").post(saveCustomers);
router.route("/keyword").post(keyword);
router.route("/searchCustomers").get(searchCustomers);
router.route("/insertmanyHotels").post(insertmanyHotels);
router.route("/keywordpagination").get(keywordPagination);
router.route("/output").get(output);
// router.route("/createRooms").post(rooms);
// router.route("/bookingInfo").post(booking_info);
// router.route("/populateBooking").get(populateBooking);
// router.route("/payment").post(paymentInfo);
// router.route("/populatePayments").get(populatePayments);
router.route("/createHotels").post(createHotels);
router.route("/deleteHotels").delete(deleteHotels);
router.route("/findHotels/:id").get(findHotels);
router.route("/updateHotels").post(updateHotels);
router.route("/paginationHotels").get(paginationHotels);
router.route("/getHotels").get(getHotels)
router.route("/createRooms").post(rooms);
router.route("/booking_info").post(booking_info);
router.route("/populateBooking").get(populateBooking);






module.exports = router