import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App';
import store from './src/app/store';
import { Provider } from 'react-redux';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Initial render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
