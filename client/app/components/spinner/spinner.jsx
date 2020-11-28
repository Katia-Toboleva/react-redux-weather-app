import React from 'react';
import classnames from 'classnames/bind';
import styles from './spinner.scss';
import { Row } from '../grid';

const cx = classnames.bind(styles);

const Spinner = () => (
  <Row center>
    <div className={styles.spinner}>
      <div className={cx('spinner__item', 'spinner__item--1')} />
      <div className={cx('spinner__item', 'spinner__item--2')} />
      <div className={cx('spinner__item', 'spinner__item--3')} />
      <div className={cx('spinner__item', 'spinner__item--4')} />
      <div className={cx('spinner__item', 'spinner__item--5')} />
    </div>
  </Row>
);

export default Spinner;
