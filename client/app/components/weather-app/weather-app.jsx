import React from 'react';
import styles from './weather-app.scss';
import SearchResults from '../search-results';
import SearchField from '../search-field';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componetDidMount() {

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
