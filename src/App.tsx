import React, { Suspense, useContext, useState } from 'react';
import Counter from './components/Counter';
import { Route, Routes, Link } from 'react-router-dom';
import LoginPageAsync from './pages/loginPage/loginPage.async';
import MainPageAsync from './pages/mainPage/mainPageAsync';
import './styles/index.scss';
import useTheme from './styles/themeContext/useTheme';
import classNames from './helpers/classNames/classNames';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true }, [theme])}>
      <Link to={'/counter'}>Counter</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/'}>Main page</Link>
      <button onClick={toggleTheme}>Change theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<LoginPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
