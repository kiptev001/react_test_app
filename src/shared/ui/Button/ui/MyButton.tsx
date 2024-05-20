import React, { type ButtonHTMLAttributes, type FC } from 'react';
import cls from './MyButton.module.scss';
import classNames, { type ModsType } from 'shared/lib/classNames/classNames';

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly className?: string;
  readonly theme?: ThemeButton;
  readonly size?: SizeButton;
  readonly disabled?: boolean;
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
  const {
    className,
    children,
    theme = ThemeButton.BACKGROUND,
    size = SizeButton.MEDIUM,
    disabled,
    ...otherProps
  } = props;
  const mods: ModsType = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.disabled]: disabled
  };

  return (
    <button
      className={classNames(cls.btn, mods, [className])}
      disabled={disabled}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { MyButton };
