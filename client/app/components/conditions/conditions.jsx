import React from 'react';
import styles from './conditions.scss';
import Text from '../text';

const Conditions = ({ conditions }) => (
  <div className={styles.conditions}>
    <Text text={conditions} center size="small" color="dark-blue" weight="400" />
  </div>
);

export default Conditions;
