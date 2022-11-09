const express = require('express');
const router = express.Router();


const { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, gethotels, createHotels, findHotels, deleteHotels, updateHotels } = require('../Controllers/cust')

router.route('/').get(getCustomers);
router.route("/createCustomers").post(createCustomers)
router.route("/deleteCustomers").delete(deleteCustomers)
router.route("/findCustomers").get(findCustomers);
router.route("/updateCustomers").post(updateCustomers)
router.route("/gethotels").get(gethotels);
router.route("/createhotels").post(createHotels);
router.route("/findhotels").get(findHotels);
router.route("/deletehotels").delete(deleteHotels);
router.route("/updatehotels").post(updateHotels);




module.exports = router