import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

require('./fonts/calibre.css');

render(
  <App />,
  document.getElementById('app')
);
