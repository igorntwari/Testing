const axios = require('axios');

const fetchData = () => {
  return Promise.resolve({title: 'delectus aut autem'})
};

exports.fetchData = fetchData;
