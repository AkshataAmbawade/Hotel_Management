const axios = require("axios");

const imdbPagination = async (req, res) => {
  const keyword = req.query.keyword
  const page = req.query.page;
  const limit = req.query.limit

  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/find',
    params: { title: keyword, limit: limit, paginationKey: page, sortArg: 'moviemeter,asc' },
    headers: {
      'X-RapidAPI-Key': 'c16818ccbemsh7d5a751f3197c73p1570fdjsn70bf9799245b',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  await axios.request(options).then(function (response) {
    res.status(200).json(response.data);
    console.log(response.data)
  }).catch(function (error) {
    res.status(500).json(error);
  });
}
module.exports = { imdbPagination }

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });