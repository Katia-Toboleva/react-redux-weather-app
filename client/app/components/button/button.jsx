import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({ state, onClick, text, type }) => {
  const handleClick = () => {
    onClick(type);
  };

  const active = state.tempType === type;

  return (
    <div
      className={cx('button', {
        [`button--${type}`]: type,
        'button--active': active,
      })}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.weather,
  },
});

export default connect(mapStateToProps)(Button);
