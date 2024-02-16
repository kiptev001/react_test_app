import { LoginPage } from 'pages/loginPage';
import { MainPage } from 'pages/mainPage';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouterConfig } from 'shared/config/appRouter/appRouterconfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouterConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="pageWrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
