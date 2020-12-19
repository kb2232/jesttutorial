import React from 'react';
import {hydrate, render, ReactDOM} from 'react-dom';
import './index.scss';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const rootElement = document.getElementById('main_app');
const rootComponent = <App />;

if(rootElement.hasChildNodes()) {
  hydrate(rootComponent,rootElement);
} else{
  render(rootComponent,rootElement);
}