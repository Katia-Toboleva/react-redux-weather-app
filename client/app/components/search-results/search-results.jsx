import React from 'react';
import styles from './search-results.scss';
import { Row, Column } from '../grid';
import Conditions from '../conditions';
import Location from '../location';
import Temperature from '../temperature';
import TemperatureToggles from '../temperature-toggles';
import { calcTemperatureValue } from './search-results.utilities';

const SearchResults = ({ data, onSwitch }) => {
  const {
    location,
    conditions,
    fetchWeatherRequestStatus,
    temperature,
    tempType,
  } = data;

  return (
    (fetchWeatherRequestStatus === 'pending' && <div>loading</div>) ||
    (fetchWeatherRequestStatus === 'rejected' && <div>server is not responding</div>) ||
    (fetchWeatherRequestStatus === 'success' && (
      <div className={styles['search-results']}>
        <Location location={location} />
        <Conditions conditions={conditions} />
        <Row direction="row" center>
          <Column grow>
            <Temperature temperature={calcTemperatureValue(tempType, temperature)} />
          </Column>
          <Column shrink>
            <TemperatureToggles onSwitch={onSwitch} />
          </Column>
        </Row>
      </div>
    ))
  );
};

export default SearchResults;
