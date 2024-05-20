import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/themeProvider/index';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
