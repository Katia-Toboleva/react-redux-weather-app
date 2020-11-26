import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import reducers from './store.reducers';

const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: [
    createLogger(),
  ],
});

export default store;
