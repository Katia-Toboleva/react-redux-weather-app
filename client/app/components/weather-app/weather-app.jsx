import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import styles from './weather-app.scss';
import SearchResults from '../search-results';
import SearchField from '../search-field';
import actions from './state/weather-app.actions';
import * as weatherConditions from './images';
import Spinner from '../spinner';
import { reducer } from './state';

const Weather = ({
  onChange,
  onSubmit,
  onSwitch,
  onEnterKeyDown,
  data,
}) => {
  const { conditions } = data;
  const conditionsLow = conditions.toLowerCase();

  const style = {
    backgroundImage: `url(${weatherConditions[conditionsLow]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles['weather-app']} style={style}>
      <div className={styles['weather-app__wrapper']}>
        <SearchResults data={data} onSwitch={onSwitch} />
        <SearchField
          onChange={onChange}
          onSubmit={onSubmit}
          onEnterKeyDown={onEnterKeyDown}
        />
        <Spinner />
      </div>
    </div>
  );
};

const WeatherContainer = (props) => {
  const { state} = props;
  const { inputValue } = state;
  const regex = /^[^0-9]+$/;
  const isValueFormatCorrect = regex.test(inputValue);

  const handleWeatherInputChange = (value) => {
    props.actions.handleInputChange(value);
  };

  const handleSubmit = () => {
    if (inputValue && isValueFormatCorrect) {
      props.actions.fetchWeather(inputValue);
    }

    if (!isValueFormatCorrect) {
      console.log('not a valid value');
    }

    return console.log('type in location');
  };

  const handleEnterKeyDown = (event) => {
    if (event.keyCode === 13 && inputValue && isValueFormatCorrect) {
      props.actions.fetchWeather(inputValue);
    }

    if (!isValueFormatCorrect) {
      console.log('not a valid value');
    }

    return console.log('type in location');
  };

  const handleTemperatureSwitch = (type) => {
    props.actions.handleSwitch(type);
  };

  return (
    <Weather
      onChange={handleWeatherInputChange}
      onSubmit={handleSubmit}
      onEnterKeyDown={handleEnterKeyDown}
      onSwitch={handleTemperatureSwitch}
      data={props.state}
    />
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.weather,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
