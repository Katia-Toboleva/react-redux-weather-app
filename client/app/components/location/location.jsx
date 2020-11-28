import React from 'react';
import styles from './location.scss';
import Text from '../text';

const Location = ({ location }) => (
  <div className={styles.location}>
    <Text text={location} center size="large" weight="500" color="dark-blue" />
  </div>
);

export default Location;
