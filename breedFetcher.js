const request = require('request');

const searchKW = process.argv.slice(2)[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchKW}`;

request(url, (error, response, body) => {
  if (error) {
    console.error("error:", error);
    return;
  }

  const data = JSON.parse(body);

  if (!data.length) {
    console.error(`Unable to find the cat breed ${searchKW}`);
    return;
  }

  console.log("Cat breed description: ", data[0].description);
});