import { LoginPage } from 'pages/loginPage';
import { MainPage } from 'pages/mainPage';
import React from 'react';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
};

export const RouterConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: '/login',
    element: <LoginPage />,
  },
};
