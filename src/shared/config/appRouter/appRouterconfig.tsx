import { ErrorPage } from 'pages/ErrorPage';
import { LoginPage } from 'pages/LoginPage/index';
import { MainPage } from 'pages/MainPage/index';
import { ProfilePage } from 'pages/ProfilePage';
import React from 'react';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  ERROR = 'error',
  PROFILE = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.PROFILE]: '/profile',
  // LAST
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
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />
  }
};
