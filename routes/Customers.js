const express = require('express');
const router = express.Router();


const { getCustomers, createCustomers, deleteCustomers, findCustomers, updateCustomers, findallCustomers } = require('../Controllers/cust')

router.route('/').get(getCustomers);
router.route("/createCustomers").post(createCustomers)
router.route("/deleteCustomers").post(deleteCustomers)
router.route("/findCustomers").get(findCustomers);
router.route("/updateCustomers").post(updateCustomers)




module.exports = router