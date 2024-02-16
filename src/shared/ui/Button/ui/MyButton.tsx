import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './MyButton.module.scss';
import classNames from 'shared/lib/classNames/classNames';

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export enum ThemeButton {
  CLEAR = 'clear',
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.btn, {}, [className, cls[theme], cls.hovered])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { MyButton };
