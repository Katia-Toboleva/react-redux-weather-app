import React from 'react';
import styles from './weather-app.scss';
import SearchResults from '../search-results';
import SearchField from '../search-field';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('working');
    this.fetchWeather();
  }

  fetchWeather() {
    this.fetchWeatherPending();

    fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '1309b0fb73msh701dd5b07f4d0f1p1bdbf5jsnaab2ae4a11ba',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    })
      .then(response => response.json())
      .then(data => this.fetchWeatherSuccess(data))
      .catch(() => this.fetchWeatherRejected());
  }

  fetchWeatherSuccess(data) {
    console.log(data);
  }

  fetchWeatherPending() {
  }

  fetchWeatherRejected() {

  }

  render() {
    return (
      <div className={styles['weather-app']}>
        <div className={styles['weather-app__wrapper']}>
          <SearchResults />
          <SearchField />
        </div>
      </div>
    );
  }
}

export default WeatherApp;
