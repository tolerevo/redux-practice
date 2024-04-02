import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import { App } from './app/App.js';
import { store } from './app/store.js';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)