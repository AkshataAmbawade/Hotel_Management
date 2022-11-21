const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://myallies-breaking-news-v1.p.rapidapi.com/GetCompanyDetailsBySymbol',
  params: {symbol: 'twtr'},
  headers: {
    'X-RapidAPI-Key': 'c16818ccbemsh7d5a751f3197c73p1570fdjsn70bf9799245b',
    'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com'
  }
};
const requestAxios=async(req,res)=>{
         await axios.request(options).then(function (response) {
            res.status(200).json(response.data);
        }).catch(function (error) {
            res.status(500).json(error);
        });
    
}
module.exports={requestAxios}

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });