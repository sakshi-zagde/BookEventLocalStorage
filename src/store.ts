

import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Load initial state from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState')!)
  : {};

const store = createStore(rootReducer, persistedState);

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;

