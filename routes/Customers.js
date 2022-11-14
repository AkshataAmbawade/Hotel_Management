const express = require('express');
const router = express.Router();


const { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, getHotels, createHotels, findHotels, deleteHotels, updateHotels, projectCustomers, paginationCustomers,paginationHotels,populatCustomers, saveCustomers, keyword, searchCustomers, insertmanyHotels, keywordPagination, output, rooms, booking_info, populateBooking, paymentInfo, populatePayments} = require('../Controllers/cust');


router.route('/getCustomers').get(getCustomers);
router.route("/createCustomers").post(createCustomers);
router.route("/deleteCustomers").delete(deleteCustomers);
router.route("/findCustomers/:id").get(findCustomers);
router.route("/updateCustomers").put(updateCustomers);
router.route("/gethotels").get(getHotels);
router.route("/createhotels").post(createHotels);
router.route("/findhotels/:id").get(findHotels);
router.route("/deletehotels").delete(deleteHotels);
router.route("/updatehotels").put(updateHotels);
router.route("/findprojectCustomer").get(projectCustomers);
router.route("/paginationCustomers").get(paginationCustomers);
router.route("/paginationhotels").get(paginationHotels);
router.route("/populateCustomer").get(populatCustomers);
router.route("/savecustomers").post(saveCustomers);
router.route("/keyword").post(keyword);
router.route("/searchCustomers").get(searchCustomers);
router.route("/insertmanyHotels").post(insertmanyHotels);
router.route("/keywordpagination").get(keywordPagination);
router.route("/output").get(output);
router.route("/createRooms").post(rooms);
router.route("/bookingInfo").post(booking_info);
router.route("/populateBooking").get(populateBooking);
router.route("/payment").post(paymentInfo);
router.route("/populatePayments").get(populatePayments)




module.exports = router