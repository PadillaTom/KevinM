import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CocktailProvider from './context/cocktails';

ReactDOM.render(
  <CocktailProvider>
    <App />
  </CocktailProvider>,
  document.getElementById('root')
);
