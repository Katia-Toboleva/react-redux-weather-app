import React from 'react';
import styles from './temperature-toggles.scss';
import Button from '../button';

const TemperatureToggles = ({ onSwitch, tempType }) => (
  <div className={styles['temperature-toggles']}>
    <Button active={tempType === 'metric'} type="metric" text="C" onClick={onSwitch} />
    <Button active={tempType === 'imperial'} type="imperial" text="F" onClick={onSwitch} />
  </div>
);

export default TemperatureToggles;
