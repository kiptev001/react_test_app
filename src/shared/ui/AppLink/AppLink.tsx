import React, { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import classNames from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

export interface AppLinkProps extends LinkProps {
  readonly className?: string;
  readonly theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = props => {
  const {
    children,
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
