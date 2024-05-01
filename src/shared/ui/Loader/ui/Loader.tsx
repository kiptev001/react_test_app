import React from 'react';
import cls from './Loader.module.scss';
import classNames from 'shared/lib/classNames/classNames';

export interface LoaderProps {
  readonly className?: string;
}

function Loader({ className }: LoaderProps) {
  return <div className={classNames(cls.loader, {}, [className])} />;
}

export { Loader };
