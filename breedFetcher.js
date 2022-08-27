const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    
    if (Array.isArray(data) && data.length) {
      return callback(null, data[0].description);
    }
    if (Array.isArray(data) && !data.length) {
      return callback(null, null);
    }

  });
};

module.exports = { fetchBreedDescription };

