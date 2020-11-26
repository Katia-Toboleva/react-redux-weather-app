import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './store.reducers';

const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: [
    createLogger(),
    thunk,
  ],
});

export default store;
