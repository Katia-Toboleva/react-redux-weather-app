import React from 'react';
import styles from './search-results.scss';
import { Row, Column } from '../grid';
import Conditions from '../conditions';
import Temperature from '../temperature';
import TemperatureToggles from '../temperature-toggles';
import { calcTemperatureValue } from './search-results.utilities';

const SearchResults = ({ data, onSwitch }) => {
  const {
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
        <Row direction="row" center>
          <Column shrink>
            <Conditions conditions={conditions} />
          </Column>
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
