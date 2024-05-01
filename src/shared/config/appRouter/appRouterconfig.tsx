import { ErrorPage } from 'pages/ErrorPage';
import { LoginPage } from 'pages/loginPage';
import { MainPage } from 'pages/mainPage';
import React from 'react';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  ERROR = 'error'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.ERROR]: '*'
};

export const RouterConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <ErrorPage />
  }
};
