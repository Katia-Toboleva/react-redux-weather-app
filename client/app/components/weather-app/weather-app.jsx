import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import styles from './weather-app.scss';
import SearchResults from '../search-results';
import SearchField from '../search-field';

import actions from './state/weather-app.actions';

const Weather = ({ onChange, onSubmit, onSwitch, onInputClick, data }) => (
  <div className={styles['weather-app']}>
    <div className={styles['weather-app__wrapper']}>
      <SearchResults data={data} onSwitch={onSwitch} />
      <SearchField
        onChange={onChange}
        onSubmit={onSubmit}
        onInputClick={onInputClick}
      />
    </div>
  </div>
);

const WeatherContainer = (props) => {
  const handleWeatherInputChange = (value) => {
    props.actions.handleInputChange(value);
  };

  const handleSubmit = () => {
    props.actions.fetchWeather(props.state.inputValue);
  };

  const handleTemperatureSwitch = (type) => {
    props.actions.handleSwitch(type);
  };

  const handleInputClick = () => {
    props.actions.handleInputClick();
  };

  return (
    <Weather
      onChange={handleWeatherInputChange}
      onInputClick={handleInputClick}
      onSubmit={handleSubmit}
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
