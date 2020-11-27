import React from 'react';
import { connect } from 'react-redux';
import styles from './location-input.scss';

const LocationInput = ({ state, onChange, onClick }) => {
  const handleOnChange = (event) => {
    const { value } = event.currentTarget;
    onChange(value);
  };

  return (
    <input
      className={styles['location-input']}
      placeholder="Location..."
      onChange={handleOnChange}
      onClick={onClick}
      value={state.inputValue}
    />
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.weather,
  },
});

export default connect(mapStateToProps)(LocationInput);

// export default LocationInput;
