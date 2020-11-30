import React from 'react';
import styles from './search-results.scss';
import { Row, Column } from '../grid';
import Conditions from '../conditions';
import Location from '../location';
import Temperature from '../temperature';
import TemperatureToggles from '../temperature-toggles';
import Spinner from '../spinner';
import { calcTemperatureValue } from './search-results.utilities';
import ErrorMessage from '../error-message';

const SearchResults = ({ data, onSwitch }) => {
  const {
    location,
    conditions,
    fetchWeatherRequestStatus,
    temperature,
    tempType,
  } = data;

  const { condition } = conditions;

  const requestPending = fetchWeatherRequestStatus === 'pending' && <Spinner />;
  const requestRejected = fetchWeatherRequestStatus === 'rejected' &&
    <ErrorMessage />;
  const requestSuccessful = fetchWeatherRequestStatus === 'success';

  return (
    requestPending || requestRejected ||
    (requestSuccessful && (
      <div className={styles['search-results']}>
        <Location location={location} />
        <Conditions condition={condition} />
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
