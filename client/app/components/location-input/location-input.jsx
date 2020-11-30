import React from 'react';
import { connect } from 'react-redux';
import styles from './location-input.scss';
import { validate } from './location-input.utilities';

const LocationInput = ({
  state,
  onChange,
  onClick,
  onKeyDown,
}) => {
  const handleOnChange = (event) => {
    const { value } = event.currentTarget;
    const isValueValid = validate(value);

    if (isValueValid) {
      onChange(value);
    }
  };

  return (
    <input
      className={styles.['location-input']}
      placeholder="Location..."
      onChange={handleOnChange}
      onClick={onClick}
      onKeyDown={onKeyDown}
      value={state.inputValue || ''}
      required
    />
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.weather,
  },
});

export default connect(mapStateToProps)(LocationInput);
