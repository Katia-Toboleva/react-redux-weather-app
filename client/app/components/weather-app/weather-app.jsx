/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import styles from './weather-app.scss';
import SearchResults from '../search-results';
import SearchField from '../search-field';
import actions from './state/weather-app.actions';
import weatherConditions from './images';

const Weather = ({
  onChange,
  onSubmit,
  onSwitch,
  onEnterKeyDown,
  data,
}) => {
  const { conditions, inputValue } = data;
  const { conditionCode } = conditions;
  const isValidValue = !inputValue && typeof inputValue === 'boolean';
  
  const style = {
    backgroundImage: `url(${weatherConditions[conditionCode]})`,
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
          isValidValue={!!isValidValue}
        />
      </div>
    </div>
  );
};

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleWeatherInputChange = this.handleWeatherInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
    this.handleTemperatureSwitch = this.handleTemperatureSwitch.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchWeather('London');
  }

  handleWeatherInputChange(value) {
    this.props.actions.handleInputChange(value);
  }

  handleSubmit() {
    const { state } = this.props;
    const { inputValue } = state;
    const regex = /^[^0-9]+$/;
    const isValueFormatCorrect = regex.test(inputValue);

    if (inputValue && isValueFormatCorrect) {
      this.props.actions.fetchWeather(inputValue);
    }

    if (!isValueFormatCorrect) {
      this.props.actions.handleInputError();
    }
  }

  handleEnterKeyDown(event) {
    const { state } = this.props;
    const { inputValue } = state;
    const regex = /^[^0-9]+$/;
    const isValueFormatCorrect = regex.test(inputValue);

    if (event.keyCode === 13 && inputValue && isValueFormatCorrect) {
      this.props.actions.fetchWeather(inputValue);
    }

    if (!isValueFormatCorrect) {
      this.props.actions.handleInputError();
    }
  }

  handleTemperatureSwitch(type) {
    this.props.actions.handleSwitch(type);
  }

  render() {
    return (
      <Weather
        onChange={this.handleWeatherInputChange}
        onSubmit={this.handleSubmit}
        onEnterKeyDown={this.handleEnterKeyDown}
        onSwitch={this.handleTemperatureSwitch}
        data={this.props.state}
      />
    );
  }
}

const mapStateToProps = (store) => ({
  state: {
    ...store.weather,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
