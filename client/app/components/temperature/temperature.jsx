import React from 'react';
import styles from './temperature.scss';
import Text from '../text';

const Temperature = ({ temperature }) => (
  <div className={styles.temperature}>
    <Text text={temperature} color="dark-blue" size="x-large" weight="700" />
  </div>
);

export default Temperature;
