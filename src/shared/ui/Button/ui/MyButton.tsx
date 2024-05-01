import React, { type ButtonHTMLAttributes, type FC } from 'react';
import cls from './MyButton.module.scss';
import classNames from 'shared/lib/classNames/classNames';

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly className?: string;
  readonly theme?: ThemeButton;
  readonly size?: SizeButton;
}

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

const MyButton: FC<MyButtonProps> = props => {
  const { className, children, theme, size, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.btn, {}, [className, cls[theme], cls[size]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { MyButton };
