import React from 'react';
import styles from './weather-app.scss';
import { Row, Column } from '../grid';
import SearchField from '../search-field';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componetDidMount() {

  }

  render() {
    return (
      <div className={styles['weather-app']}>
        <Row direction="column" center>
          <Column>
            <SearchField />
          </Column>
        </Row>
      </div>
    );
  }
}

export default WeatherApp;
