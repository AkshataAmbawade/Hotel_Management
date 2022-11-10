



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


// "name": "Grand Residency Hotel ",
// "email":"GrandResidencyHotel@gmail.com",
// "address":"Apollo bandar, colaba , Mumbai,Maharashtra",
// "city": "Mumbai",
// "phone_no":"1112111111",
// "pin_no": "402001",
// "location_url": "gfgjkhafkj",
// "description": "The Taj Mahal Palace is a heritage, five-star, luxury hotel in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India.",
// "features":"Options of smoking & non-smoking accommodation.Complimentary Wi-Fi for resident guests.Luxurious rooms & suites with iconic Arabian Sea & Gateway of India views.Marble bathrooms with luxury bath amenities OR Five-fixture bathrooms with luxury bath amenities.",
// "rating": "*****",
// "check_in": "2022-10-11",
// "check_out": "2022-10-12"

