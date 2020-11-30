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
    city: location,
  };

  dispatch(fetchWeatherPending());

  return get(queryParams)
    .then(response => response.json())
    .then(success)
    .catch(rejected);
};

const handleInputChange = (value) => ({
  type: CONSTANTS.INPUT_CHANGE,
  payload: {
    value,
  },
});

const handleSwitch = (type) => ({
  type: CONSTANTS.TEMP_SWITCH,
  payload: type,
});

const handleInputError = (error) => ({
  type: CONSTANTS.INPUT_ERROR,
  payload: error,
});

export default {
  fetchWeather,
  handleInputChange,
  handleSwitch,
  handleInputError,
};
