import React from 'react';
import styles from './search-field.scss';
import { Row, Column } from '../grid';
import LocationInput from '../location-input';
import Button from '../button';

const SearchField = () => {
  const handleButtonClick = () => {

  };

  return (
    <div className={styles['search-field']}>
      <Row direction="row" gutters="small">
        <Column>
          <LocationInput />
        </Column>
        <Column>
          <Button onClick={handleButtonClick} text="go!" type="search" />
        </Column>
      </Row>
    </div>
  );
};

export default SearchField;
