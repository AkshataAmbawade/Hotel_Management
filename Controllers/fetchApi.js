const fetch = require("node-fetch")



const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=London'
const options = {     method: 'GET',     headers: {         'X-RapidAPI-Key': '5ce2c2b0femsh943921cfa13a6fap1a3871jsnfc945cf9d7e6',         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'     } };
const fetchapi = async (req, res) => {
    try {
        const fetchData = await fetch(url, options).then((res) => res.json())
        res.status(200).json(fetchData)
        // console.log(fetchapi)
    }
    catch (err) { res.status(500).json(err.message) }
}
// fetchApi()

module.exports = { fetchapi }

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));

// const axiosApi=async(req,res)=>{
//     try{
//         const fetchurl=await axios(options).then((res) => res.json())
//         console.log(fetchurl)
//     }catch(err){
//         console.log(err.message)
//     }
// }
// axiosApi();