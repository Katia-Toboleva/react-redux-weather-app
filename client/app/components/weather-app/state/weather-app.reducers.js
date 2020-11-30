import CONSTANTS from './weather-app.constants';

const defaultState = {
  location: '',
  temperature: '',
  conditions: '',
  tempType: 'metric',
  inputValue: '',
};

const fetchWeatherSuccess = (state, action) => {
  const { location, temperature, conditions } = action.payload;

  const newState = {
    ...state,
    location,
    temperature,
    conditions,
    fetchWeatherRequestStatus: 'success',
    inputValue: '',
  };

  return newState;
};

const fetchWeatherPending = (state) => {
  const newState = {
    ...state,
    fetchWeatherRequestStatus: 'pending',
  };

  return newState;
};

const fetchWeatherRejected = (state) => {
  const newState = {
    ...state,
    fetchWeatherRequestStatus: 'rejected',
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

const handleSwitch = (state, action) => {
  const newState = {
    ...state,
    tempType: action.payload,
  };

  return newState;
};

const weatherAppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
    case CONSTANTS.FETCH_WEATHER_PENDING: return fetchWeatherPending(state, action);
    case CONSTANTS.FETCH_WEATHER_REJECTED: return fetchWeatherRejected(state, action);
    case CONSTANTS.INPUT_CHANGE: return handleInputChange(state, action);
    case CONSTANTS.TEMP_SWITCH: return handleSwitch(state, action);
    default: return state;
  }
};

export default weatherAppReducer;
