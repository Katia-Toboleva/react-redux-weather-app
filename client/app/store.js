import { configureStore, combineResucers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import reducers from './store.reducers';

const store = configureStore({
  reducer: combineResucers(reducers),
  middleware: [
    createLogger(),
  ],
});

export default store;
