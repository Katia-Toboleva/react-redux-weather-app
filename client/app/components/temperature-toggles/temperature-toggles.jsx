import React from 'react';
import styles from './temperature-toggles.scss';
import Button from '../button';

const TemperatureToggles = ({ onClick }) => (
  <div className={styles['temperature-toggles']}>
    <Button type="metric" text="C" onClick={onClick} />
    <Button type="imperial" text="F" onClick={onClick} />
  </div>
);

export default TemperatureToggles;
