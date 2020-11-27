import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import styles from './weather-app.scss';
import SearchResults from '../search-results';
import SearchField from '../search-field';

import actions from './state/weather-app.actions';

const Weather = ({ onChange, onSubmit, data }) => (
  <div className={styles['weather-app']}>
    <div className={styles['weather-app__wrapper']}>
      <SearchResults items={data} />
      <SearchField
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  </div>
);

const WeatherContainer = (props) => {
  const handleWeatherInputChange = (value) => {
    props.actions.handleInputChange(value);
  };

  const handleSubmit = () => {
    props.actions.fetchWeather(props.state.inputValue); // should pass location as args
  };

  return (
    <Weather
      onChange={handleWeatherInputChange}
      onSubmit={handleSubmit}
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
