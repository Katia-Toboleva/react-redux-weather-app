import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({ onClick, text, type }) => {
  const handleClick = () => {
    onClick(type);
  };

  return (
    <div
      className={cx('button', {
        [`button--${type}`]: type,
      })}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Button;
