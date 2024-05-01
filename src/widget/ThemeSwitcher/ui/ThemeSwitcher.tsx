import React from 'react';
import cls from './ThemeSwitcher.module.scss';
import { useTheme, Theme } from 'app/providers/themeProvider/index';
import classNames from 'shared/lib/classNames/classNames';
import Moon from 'shared/icons/moon.svg';
import Sun from 'shared/icons/sun.svg';
import { MyButton, ThemeButton } from 'shared/ui/Button/index';

export interface ThemeSwitcherProps {
  readonly className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <MyButton
      className={classNames(cls.btn, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? (
        <Sun className={cls.icon} />
      ) : (
        <Moon className={cls.icon} />
      )}
    </MyButton>
  );
}

export { ThemeSwitcher };
