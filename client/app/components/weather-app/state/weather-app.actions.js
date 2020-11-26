import CONSTANTS from './weather-app.constants';
import WeatherApi from './weather-app.api';

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

const fetchWeatherRejected = () => ({
  type: CONSTANTS.FETCH_WEATHER_REJECTED,
});

// async
const fetchWeather = () => (dispatch, getState) => {
  const { weather } = getState();

  const success = data => {
    dispatch(fetchWeatherSuccess(data));
  };

  const rejected = () => {
    dispatch(fetchWeatherRejected());
  };

  const queryParams = {
    city: weather.city,
  };

  dispatch(fetchWeatherPending());

  return WeatherApi.get(queryParams)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};

export default {
  fetchWeather,
};
