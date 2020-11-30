import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({ onClick, active, text, type }) => {
  const handleClick = () => {
    onClick(type);
  };

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

export default Button;
