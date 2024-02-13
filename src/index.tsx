import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './styles/themeContext/themeContextProvider';

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
