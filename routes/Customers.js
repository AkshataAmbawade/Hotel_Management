const express = require('express');
const router = express.Router();


const { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, gethotels, createHotels, findHotels, deleteHotels, updateHotels, projectCustomers, paginationCustomers,paginationhotels,populatCustomers} = require('../Controllers/cust');
// const { populate } = require('../Models/customer');

router.route('/').get(getCustomers);
router.route("/createCustomers").post(createCustomers);
router.route("/deleteCustomers").delete(deleteCustomers);
router.route("/findCustomers/:id").get(findCustomers);
router.route("/updateCustomers").put(updateCustomers);
router.route("/gethotels").get(gethotels);
router.route("/createhotels").post(createHotels);
router.route("/findhotels/:id").get(findHotels);
router.route("/deletehotels").delete(deleteHotels);
router.route("/updatehotels").put(updateHotels);
router.route("/findprojectCustomer").get(projectCustomers);
router.route("/paginationCustomers").get(paginationCustomers);
// router.route("/skipCustomers").get(skipCustomers);
router.route("/paginationhotels").get(paginationhotels);
// router.route("/limithotels").get(limithotels);
// router.route("/sorthotels").get(sortHotels);
router.route("/populateCustomer").get(populatCustomers);




module.exports = router