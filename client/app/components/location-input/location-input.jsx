import React from 'react';
import styles from './location-input.scss';

const LocationInput = ({ onChange }) => {
  const handleOnChange = (event) => {
    const { value } = event.currentTarget;
    onChange(value);
  };

  return (
    <input
      className={styles['location-input']}
      placeholder="Location..."
      onChange={handleOnChange}
    />
)};

export default LocationInput;
