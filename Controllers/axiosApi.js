const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  params: {lat: '35.5', lon: '-78.5'},
  headers: {
    'X-RapidAPI-Key': 'c16818ccbemsh7d5a751f3197c73p1570fdjsn70bf9799245b',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};
const axiosApi=async(req,res)=>{
    await axios.request(options).then(function (response) {
        res.status(200).json(response.data);
    }).catch(function (error) {
        res.status(500).json(error);
    });
}
module.exports={axiosApi}
