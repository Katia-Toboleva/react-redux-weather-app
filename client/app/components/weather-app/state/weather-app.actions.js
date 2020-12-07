import CONSTANTS from './weather-app.constants';
import { get } from './weather-app.api';

const fetchWeatherSuccess = (data) => ({
  type: CONSTANTS.FETCH_WEATHER_SUCCESS,
  payload: {
    location: data.location.name,
    temperature: {
      metric: data.current.temp_c,
      imperial: data.current.temp_f,
    },
    conditions: {
      condition: data.current.condition.text,
      conditionCode: data.current.condition.code,
      isDay: data.current.is_day,
    },
  },
});

const fetchWeatherPending = () => ({
  type: CONSTANTS.FETCH_WEATHER_PENDING,
});

const fetchWeatherRejected = (e) => ({
  type: CONSTANTS.FETCH_WEATHER_REJECTED,
  payload: e,
});

// async
const fetchWeather = (location) => (dispatch) => {
  const success = data => {
    dispatch(fetchWeatherSuccess(data));
  };

  const rejected = err => {
    dispatch(fetchWeatherRejected(err));
  };

  const queryParams = {
    location,
  };

  dispatch(fetchWeatherPending());

  return get(queryParams)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};

// geolocation
const getLocationSuccess = (position) => ({
  type: CONSTANTS.GET_LOCATION_SUCCESS,
  payload: {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  },
});

const getLocationPending = () => ({
  type: CONSTANTS.GET_LOCATION_PENDING,
});

const getLocationRejected = (e) => ({
  type: CONSTANTS.GET_LOCATION_REJECTED,
  payload: e,
});

const getLocation = () => (dispatch) => {
  const geolocation = navigator.geolocation;

  const success = position => {
    dispatch(getLocationSuccess(position));
  };

  const rejected = err => {
    dispatch(getLocationRejected(err));
  };

  dispatch(getLocationPending());

  return geolocation.getCurrentPosition(success, rejected);
};

function handleInputChange(value) {
  return ({
    type: CONSTANTS.INPUT_CHANGE,
    payload: value,
  });
}

const handleSwitch = (type) => ({
  type: CONSTANTS.TEMP_SWITCH,
  payload: type,
});

export default {
  fetchWeather,
  handleInputChange,
  handleSwitch,
  getLocation,
};
