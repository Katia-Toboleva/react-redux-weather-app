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
  const { conditions } = data;
  const { conditionCode } = conditions;

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
    this.props.actions.getLocation();
    // const lat = this.props.state.coords[0];
    // const long = this.props.state.coords[1];

    // this.props.actions.fetchWeather('51.470326899999996, -0.0615237');
    // this.props.actions.fetchWeather(`${lat}, ${long}`);
  }

  handleWeatherInputChange(value) {
    this.props.actions.handleInputChange(value);
  }

  handleSubmit() {
    const { state } = this.props;
    const { inputValue } = state;

    this.props.actions.fetchWeather(inputValue);
  }

  handleEnterKeyDown(event) {
    const { state } = this.props;
    const { inputValue } = state;

    if (event.keyCode === 13 && inputValue) {
      this.props.actions.fetchWeather(inputValue);
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
