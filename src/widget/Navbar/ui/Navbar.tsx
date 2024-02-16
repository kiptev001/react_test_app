import React from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <AppLink
            className={cls.loginLink}
            to="/login"
            theme={AppLinkTheme.PRIMARY}
          >
            {t('Войти')}
          </AppLink>
          <AppLink className={cls.mainLink} to="/" theme={AppLinkTheme.PRIMARY}>
            {t('Главная')}
          </AppLink>
        </div>
      </div>
    </>
  );
};

export { Navbar };
