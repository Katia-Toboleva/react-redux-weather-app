import CONSTANTS from './weather-app.constants';

const defaultState = {
  location: '',
  temperature: '',
  conditions: '',
};

const fetchWeatherSuccess = (state, action) => {
  const { location, temperature, conditions } = action.payload;

  const newState = {
    ...state,
    location,
    temperature,
    conditions,
    fetchWeatherRequestStatus: 'success',
    loading: false,
  };

  return newState;
};

const fetchWeatherPending = (state) => {
  const newState = {
    ...state,
    fetchWeatherRequestStatus: 'pending',
    loading: true,
  };

  return newState;
};

const fetchWeatherRejected = (state) => {
  const newState = {
    ...state,
    fetchWeatherRequestStatus: 'rejected',
    loading: false,
  };

  return newState;
};

const handleInputChange = (state, action) => {
  const newState = {
    ...state,
    inputValue: action.payload,
  };

  return newState;
};

const weatherAppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
    case CONSTANTS.FETCH_WEATHER_PENDING: return fetchWeatherPending(state, action);
    case CONSTANTS.FETCH_WEATHER_REJECTED: return fetchWeatherRejected(state, action);
    case CONSTANTS.HANDLE_INPUT_CHANGE: return handleInputChange(state, action);
    default: return state;
  }
};

export default weatherAppReducer;
