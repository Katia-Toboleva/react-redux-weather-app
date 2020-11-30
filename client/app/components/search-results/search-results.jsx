import React from 'react';
import { connect } from 'react-redux';
import styles from './search-results.scss';
import { Row, Column } from '../grid';
import Conditions from '../conditions';
import Location from '../location';
import Temperature from '../temperature';
import TemperatureToggles from '../temperature-toggles';
import Spinner from '../spinner';
import { getCalcTemperatureValue } from './search-results.utilities';
import ErrorMessage from '../error-message';

const SearchResults = ({ state, data, onSwitch }) => {
  const {
    location,
    conditions,
    fetchWeatherRequestStatus,
    temperature,
    tempType,
  } = data;

  const { condition } = conditions;

  if (fetchWeatherRequestStatus === 'pending') {
    return (
      <Spinner />
    );
  }

  if (fetchWeatherRequestStatus === 'rejected') {
    return (
      <ErrorMessage />
    );
  }

  if (fetchWeatherRequestStatus === 'success') {
    return (
      <div className={styles['search-results']}>
        <Location location={location} />
        <Conditions condition={condition} />
        <Row direction="row" center>
          <Column grow>
            <Temperature temperature={getCalcTemperatureValue(tempType, temperature)} />
          </Column>
          <Column shrink>
            <TemperatureToggles onSwitch={onSwitch} tempType={state.tempType} />
          </Column>
        </Row>
      </div>
    );
  }

  return null;
};

const mapStateToProps = (store) => ({
  state: {
    ...store.weather,
  },
});

export default connect(mapStateToProps)(SearchResults);
