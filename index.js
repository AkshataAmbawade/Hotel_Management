



const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Hotel_Management")
    .then(() => {
        console.log("--Welcome to the Hotel--")
    })
    .catch((err) => {
        console.log(err)
    })




// const createDoc = async () => {
//     try {
//         const cus1 = new Customer({
//             name: "Akshata",
//             phone_no: "9834493328",
//             aadhar_no: 12345678901,
//             pan_no: 1234567890,
//             email: "akshata@gmail.com",
//             city_name: "Badlapur",
//             address: "301,lotus park",
//             check_in: 2022 - 10 - 10,
//             check_out: 2022 - 10 - 11,
//             executive_name: "mamta"
//         })
//         const result = await cus1.save();
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }


// }

// createDoc();
