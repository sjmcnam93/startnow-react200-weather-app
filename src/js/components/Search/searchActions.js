import axios from 'axios';

export function findSearch(userInput) {
  
  return {
    type: 'CITY_SEARCH',
    payload: userInput
  };
};

export function updateWeatherInfo(userInput) {

  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';

  return {
    type: 'UPDATE_WEATHER_INFO',
    payload: axios({
      method: 'get',
      url: `${weather}${userInput}${farenheit}${key}`
    })
      .then(response => {
        
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateHistory(userInput) {

  return {
    type: 'UPDATE_HISTORY',
    payload: {
      cityName: userInput.replace(/\b\w/g, l => l.toUpperCase()),
      searchDate: new Date().toString()
    }
  };
};