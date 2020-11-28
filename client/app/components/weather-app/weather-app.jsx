import React from 'react';
// import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import styles from './weather-app.scss';
import SearchResults from '../search-results';
import SearchField from '../search-field';
import actions from './state/weather-app.actions';
import * as weatherConditions from './images';

// const cx = classnames.bind(styles);

const Weather = ({
  onChange,
  onSubmit,
  onSwitch,
  onEnterKeyDown,
  data,
}) => {
  const { conditions } = data;
  const style = {
    background: url(`${weatherConditions[conditions]}`),
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
      </div>
    </div>
  );
};

const WeatherContainer = (props) => {
  const handleWeatherInputChange = (value) => {
    props.actions.handleInputChange(value);
  };

  const handleSubmit = () => {
    props.actions.fetchWeather(props.state.inputValue);
  };

  const handleEnterKeyDown = (event) => {
    if (event.keyCode === 13) {
      props.actions.fetchWeather(props.state.inputValue);
    }
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
