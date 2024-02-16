import React from 'react';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/themeProvider/index';
import classNames from 'shared/lib/classNames/classNames';
import Moon from 'shared/icons/moon.svg';
import Sun from 'shared/icons/sun.svg';
import { Theme } from 'app/providers/themeProvider/index';
import { MyButton, ThemeButton } from 'shared/ui/Button/index';

export interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <MyButton
        theme={ThemeButton.CLEAR}
        className={classNames(cls.btn, {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? (
          <Sun className={cls.icon} />
        ) : (
          <Moon className={cls.icon} />
        )}
      </MyButton>
    </>
  );
};

export { ThemeSwitcher };
