const fetch = require("node-fetch")



const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';

const options = {

    method: 'GET',

    headers: {

      'X-RapidAPI-Key': '91b97c0bd3msh87fcde39a957e16p1673aejsn7d06c0f7c9b7',

      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'

    }

  };

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