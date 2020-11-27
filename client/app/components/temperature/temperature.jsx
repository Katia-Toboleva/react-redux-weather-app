import React from 'react';
import styles from './temperature.scss';

const Temperature = ({temperature}) => (
  <div className={styles.temperature}>
    {temperature}
  </div>
);

export default Temperature;
