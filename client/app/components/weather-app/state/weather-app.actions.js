import CONSTANTS from './weather-app.constants';
import { get } from './weather-app.api';

const fetchWeatherSuccess = (data) => ({
  type: CONSTANTS.FETCH_WEATHER_SUCCESS,
  payload: {
    location: data.name,
    temperature: data.main.temp,
    conditions: data.weather[0].main,
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
    city: location,
  };

  dispatch(fetchWeatherPending());

  return get(queryParams)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};

export default {
  fetchWeather,
};
