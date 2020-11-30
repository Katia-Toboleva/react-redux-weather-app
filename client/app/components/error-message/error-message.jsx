import React from 'react';
import styles from './error-message.scss';
import Text from '../text';

const ErrorMessage = () => (
  <div className={styles['error-message']}>
    <Text
      text="please check if the location is correct and try again..."
      center
      size="medium"
      color="dark-blue"
      weight="500"
    />
  </div>
);

export default ErrorMessage;
