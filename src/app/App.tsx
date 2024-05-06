import React, { Suspense, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider/index';
import { AppRouter } from 'app/providers/appRouter/index';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar';
import { Loader } from 'shared/ui/Loader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

export default function App(): JSX.Element {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="contentPage">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
