const request = require('request');

// const searchKW = process.argv.slice(2)[0];

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (!data.length) {
      callback(`Unable to find the cat breed ${breedName}`, null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };