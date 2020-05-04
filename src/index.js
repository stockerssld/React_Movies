import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseModdleware from 'redux-promise'
import {rootReducer} from './reducers'

const storeWithMiddlere = applyMiddleware(promiseModdleware)(createStore)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeWithMiddlere(rootReducer)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
