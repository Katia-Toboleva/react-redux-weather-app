import CONSTANTS from './weather-app.constants';

const defaultState = {
  location: '',
  temperature: '',
  conditions: '',
};

const fetchWeatherSuccess = (state, action) => {
  const newState = {
    ...state,
    location: action.payload.name,
    temperature: action.payload.main.temp,
    conditions: action.payload.weather[0].main,
    removeCvRequestStatus: 'success',
    loading: false,
  };

  return newState;
};

const fetchWeatherPending = (state) => {
  const newState = {
    ...state,
    removeCvRequestStatus: 'pending',
    loading: true,
  };

  return newState;
};

const fetchWeatherRejected = (state) => {
  const newState = {
    ...state,
    removeCvRequestStatus: 'rejected',
    loading: false,
  };

  return newState;
};

const weatherAppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
    case CONSTANTS.FETCH_WEATHER_PENDING: return fetchWeatherPending(state, action);
    case CONSTANTS.FETCH_WEATHER_REJECTED: return fetchWeatherRejected(state, action);
    default: return state;
  }
};

export default weatherAppReducer;
