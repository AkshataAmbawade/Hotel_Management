const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: { q: 'London' },
  headers: { 'X-RapidAPI-Key': '5ce2c2b0femsh943921cfa13a6fap1a3871jsnfc945cf9d7e6', 'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com' }
};


const axiosApi = async (req, res) => {
  await axios.request(options).then(function (response) {
    res.status(200).json(response.data);
  }).catch(function (error) {
    res.status(500).json(error);
  });
}
module.exports = { axiosApi }
