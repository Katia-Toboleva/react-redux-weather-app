import CONSTANTS from './weather-app.constants';

const defaultState = {
  location: '',
  temperature: '',
  conditions: '',
};

const fetchWeatherSuccess = (state, action) => {
  const { location, temperature, conditions } = action;

  const newState = {
    ...state,
    location,
    temperature,
    conditions,
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
