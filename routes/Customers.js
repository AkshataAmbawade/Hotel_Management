const express = require('express');
const router = express.Router();


const { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, projectCustomers, paginationCustomers,populatCustomers, saveCustomers, keyword, searchCustomers, insertmanyHotels, keywordPagination, output, } = require('../Controllers/cust');
const {rooms}=require('../Controllers/Rooms');
const{booking_info,populateBooking}=require('../Controllers/Booking');
const{getHotels, createHotels, findHotels, deleteHotels, updateHotels, paginationHotels}=require("../Controllers/Hotel")



router.route('/getCustomers').get(getCustomers);
router.route("/createCustomers").post(createCustomers);
router.route("/deleteCustomers").delete(deleteCustomers);
router.route("/findCustomers/:id").get(findCustomers);
router.route("/updateCustomers").put(updateCustomers);

router.route("/findprojectCustomer").get(projectCustomers);
router.route("/paginationCustomers").get(paginationCustomers);

router.route("/populateCustomer").get(populatCustomers);
router.route("/savecustomers").post(saveCustomers);
router.route("/keyword").post(keyword);
router.route("/searchCustomers").get(searchCustomers);
router.route("/insertmanyHotels").post(insertmanyHotels);
router.route("/keywordpagination").get(keywordPagination);
router.route("/output").get(output);
router.route("/createRooms").post(rooms);
router.route("/book").post(booking_info);
router.route("/populateBooking").get(populateBooking);
router.route("/gethotels").get(getHotels);
router.route("/createHotels").post(createHotels);
router.route("/findHotels").post(findHotels);
router.route("/deleteHotels").post(deleteHotels);
router.route("/updateHotels").put(updateHotels);
router.route("/paginationHotels").get(paginationHotels)






module.exports = router