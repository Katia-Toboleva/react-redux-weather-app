import CONSTANTS from './weather-app.constants';

const defaultState = {
  location: '',
  temperature: '',
  conditions: '',
  tempType: 'metric',
  inputValue: '',
  coords: [0, 0],
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

const handleGetLocationSuccess = (state, action) => {
  const newState = {
    ...state,
    coords: [
      action.payload.latitude,
      action.payload.longitude,
    ],
    getLocationRequestStatus: 'success',
  };

  return newState;
};

const handleGetLocationPending = (state) => {
  const newState = {
    ...state,
    getLocationRequestStatus: 'pending',
  };

  return newState;
};

const handleGetLocationRejected = (state) => {
  const newState = {
    ...state,
    getLocationRequestStatus: 'rejected',
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
    case CONSTANTS.GET_LOCATION_SUCCESS: return handleGetLocationSuccess(state, action);
    case CONSTANTS.GET_LOCATION_PENDING: return handleGetLocationPending(state, action);
    case CONSTANTS.GET_LOCATION_REJECTED: return handleGetLocationRejected(state, action);
    default: return state;
  }
};

export default weatherAppReducer;
