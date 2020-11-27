import React from 'react';
import styles from './temperature-toggles.scss';
import Button from '../button';

const TemperatureToggles = ({ onSwitch }) => (
  <div className={styles['temperature-toggles']}>
    <Button type="metric" text="C" onClick={onSwitch} />
    <Button type="imperial" text="F" onClick={onSwitch} />
  </div>
);

export default TemperatureToggles;
