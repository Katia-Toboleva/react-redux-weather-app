import React from 'react';
import styles from './search-results.scss';
import { Row, Column } from '../grid';
import Conditions from '../conditions';
import Temperature from '../temperature';

const SearchResults = () => (
  <div className={styles['search-results']}>
    <Row direction="row">
      <Column>
        <Conditions />
      </Column>
      <Column>
        <Temperature />
      </Column>
    </Row>
  </div>
);

export default SearchResults;
