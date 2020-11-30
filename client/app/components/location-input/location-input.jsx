import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './location-input.scss';

const cx = classnames.bind(styles);

const validate = value => {
  const regex = /^[a-zA-Z\s]*$/;
  const validValue = (value === '') || regex.test(value);
  return !!validValue;
};

const LocationInput = ({
  state,
  onChange,
  onClick,
  onKeyDown,
  isValidValue,
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
      className={cx(['location-input'], {
        'location-input--error': isValidValue,
      })}
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
