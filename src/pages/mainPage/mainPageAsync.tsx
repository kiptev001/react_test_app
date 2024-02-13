import { lazy } from 'react';

const MainPageAsync = lazy(() => {
  return import('./mainPage');
});

export default MainPageAsync;
