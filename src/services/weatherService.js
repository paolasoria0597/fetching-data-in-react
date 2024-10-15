// src/services/weatherService.js
const API_KEY = '5071632d3af9478f86a175858241510';
const BASE_URL =  `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

// src/services/weatherService.js
const show = async (city) => {
    try {
      const queryString = `&q=${city}`;
      const res = await fetch(BASE_URL + queryString);
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  show('New York');

  export {show};