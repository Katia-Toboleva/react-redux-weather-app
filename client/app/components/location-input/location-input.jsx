import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './location-input.scss';

const cx = classnames.bind(styles);

const LocationInput = ({
  state,
  onChange,
  onClick,
  onKeyDown,
  hasError,
}) => {
  const handleOnChange = (event) => {
    const { value } = event.currentTarget;
    onChange(value);
  };

  return (
    <input
      className={cx(['location-input'], {
        'location-input--error': hasError,
      })}
      placeholder="Location..."
      onChange={handleOnChange}
      onClick={onClick}
      onKeyDown={onKeyDown}
      value={state.inputValue}
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
