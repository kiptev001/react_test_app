import { lazy } from 'react';

const LoginPageAsync = lazy(() => {
  return import('./loginPage');
});

export { LoginPageAsync };
