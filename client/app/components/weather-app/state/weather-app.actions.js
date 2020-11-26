import CONSTANTS from './weather-app.constants';

const fetchWeatherSuccess = (data) => ({
  type: CONSTANTS.FETCH_WEATHER_SUCCESS,
  payload: data,
});

const fetchWeatherPending = () => ({
  type: CONSTANTS.FETCH_WEATHER_PENDING,
});

const fetchWeatherRejected = () => ({
  type: CONSTANTS.FETCH_WEATHER_REJECTED,
});

export default {
  fetchWeatherSuccess,
  fetchWeatherPending,
  fetchWeatherRejected,
};
