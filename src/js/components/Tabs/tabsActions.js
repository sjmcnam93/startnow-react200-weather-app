import axios from 'axios';

export function updateSanDiego(userInput) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  userInput = 'San Diego'

  return {
    type: 'UPDATE_SAN_DIEGO',
    payload: axios({
      method: 'get',
      url: `${weather}${userInput}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateTampa(userInput) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  userInput = 'Tampa';

  return {
    type: 'UPDATE_TAMPA',
    payload: axios({
      method: 'get',
      url: `${weather}${userInput}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateSilverSpring(userInput) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  userInput = 'Silver Spring';

  return {
    type: 'UPDATE_SILVER_SPRING',
    payload: axios({
      method: 'get',
      url: `${weather}${userInput}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateOgden(userInput) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  userInput = 'Ogden';

  return {
    type: 'UPDATE_OGDEN',
    payload: axios({
      method: 'get',
      url: `${weather}${userInput}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateRexburg(userInput) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  userInput = 'Rexburg';

  return {
    type: 'UPDATE_REXBURG',
    payload: axios({
      method: 'get',
      url: `${weather}${userInput}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};
