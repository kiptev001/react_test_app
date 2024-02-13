import { createContext, Dispatch } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContext {
  theme?: Theme;
  setTheme?: Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const LOCAL_STORAGE_THEME_DEFAULT_VALUE = Theme.LIGHT;
