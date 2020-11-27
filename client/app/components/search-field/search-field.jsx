import React from 'react';
import { Row, Column } from '../grid';
import LocationInput from '../location-input';
import Button from '../button';
import styles from './search-field.scss';

const SearchField = ({ onChange, onSubmit, onInputClick }) => (
  <div className={styles['search-field']}>
    <Row direction="row" gutters="small">
      <Column grow>
        <LocationInput onChange={onChange} onClick={onInputClick} />
      </Column>
      <Column shrink>
        <Button onClick={onSubmit} text="go!" type="search" />
      </Column>
    </Row>
  </div>
);

export default SearchField;
