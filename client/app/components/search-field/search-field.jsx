import React from 'react';
import { Row, Column } from '../grid';
import LocationInput from '../location-input';
import Button from '../button';
import styles from './search-field.scss';

const SearchField = ({ onChange, onSubmit, onEnterKeyDown }) => (
  <div className={styles['search-field']}>
    <Row direction="row" gutters="small">
      <Column grow>
        <LocationInput onChange={onChange} onKeyDown={onEnterKeyDown} />
      </Column>
      <Column shrink>
        <Button onClick={onSubmit} text="go!" type="submit" />
      </Column>
    </Row>
  </div>
);

export default SearchField;
