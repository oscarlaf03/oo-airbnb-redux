import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import flatsReducer from './reducers/flats_reducer.js';

const reducers = combineReducers({
  flats: flatsReducer
});

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<App />, root);
// }

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  root
);
 