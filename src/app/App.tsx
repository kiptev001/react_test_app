import React, { Suspense } from 'react';
import 'app/styles/index.scss';
import classNames from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider/index';
import { AppRouter } from 'app/providers/appRouter/index';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="LOADING...">
        <Navbar />
        <div className="contentPage">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
