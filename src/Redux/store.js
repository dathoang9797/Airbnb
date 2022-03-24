import { AnyAction, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';

export const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});


