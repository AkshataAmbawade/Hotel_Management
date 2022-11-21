const express = require('express');
const router = express.Router();


const { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, projectCustomers, paginationCustomers,populatCustomers, saveCustomers, keyword, searchCustomers, insertmanyHotels, keywordPagination, output, } = require('../Controllers/cust');
const {rooms}=require('../Controllers/Rooms');
const{booking_info,populateBooking, status, total,lastEntry}=require('../Controllers/Booking');
const{getHotels, createHotels, findHotels, deleteHotels, updateHotels, paginationHotels}=require("../Controllers/Hotel");
const { fetchapi } = require('../Controllers/fetchApi');
const { axiosApi } = require('../Controllers/axiosApi');




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
router.route("/paginationHotels").get(paginationHotels);
router.route("/bookingInfo").post(booking_info);


router.route("/status").get(status);
router.route("/total").get(total);
router.route("/lastEntry").get(lastEntry)


router.route("/api").get(fetchapi)
router.route("/axiosApi").get(axiosApi)






module.exports = router


// const fetchapi = async (req, res) => {
//     try {
//         const fetchData = await fetch(url, options).then((res) => res.json())
//         res.status(200).json(fetchData)
//         // console.log(fetchapi)
//     }
//     catch (err) { res.status(500).json(err.message) }
// }
// // fetchApi()

// module.exports = { fetchapi }
