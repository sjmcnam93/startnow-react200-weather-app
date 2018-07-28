const defaultState = {
  history: [].reverse(),
  userInput: '',
  weatherInfo: {
    data: {
      name: '',
      coord: {
        lat: '',
        lon: ''
      },
      main: {
        humidity: '',
        pressure: '',
        temp_max: '',
        temp_min: '',
        temp: '',
      },
      weather: [{
        icon: ''
      }],
      wind: {
        speed: ''
      }
    }
  }
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CITY_SEARCH': {
      return {
        ...state,
        userInput: payload
      };
    };
    case 'UPDATE_WEATHER_INFO_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload
      };
    };
    case 'UPDATE_SAN_DIEGO_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_TAMPA_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_SILVER_SPRING_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_OGDEN_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_REXBURG_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_HISTORY': {
      return {
        ...state,
        history: [...state.history, payload].reverse()
      };
    };
    default: {
      return state;
    };
  };
};