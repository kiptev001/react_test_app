import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/themeProvider/index';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
