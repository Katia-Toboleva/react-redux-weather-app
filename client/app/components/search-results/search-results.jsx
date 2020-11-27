import React from 'react';
import styles from './search-results.scss';
import { Row, Column } from '../grid';
import Conditions from '../conditions';
import Temperature from '../temperature';
import TemperatureToggles from '../temperature-toggles';

const SearchResults = ({ onSwitch }) => (
  <div className={styles['search-results']}>
    <Row direction="row" position="center">
      <Column>
        <Conditions />
      </Column>
      <Column>
        <Temperature />
      </Column>
      <Column>
        <TemperatureToggles onSwitch={onSwitch} />
      </Column>
    </Row>
  </div>
);

export default SearchResults;
