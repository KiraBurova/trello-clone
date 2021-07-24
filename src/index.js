import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
);
