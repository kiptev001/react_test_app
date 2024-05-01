import React, { type FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import { LanguageSwitcher } from 'widget/LanguageSwitcher';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/appRouter/appRouterconfig';
import HomeIcon from 'shared/icons/home.svg';
import LoginIcon from 'shared/icons/login.svg';

export interface SidebarProps {
  readonly className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const openSidebar = () => {
    setCollapsed(pr => !pr);
  };
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
      data-testid="test-sidebar"
    >
      <div className={cls.links}>
        <AppLink
          className={cls.loginLink}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.login}
        >
          {collapsed ? (
            <LoginIcon className={cls.loginIcon} />
          ) : (
            <div className={cls.link}>
              <LoginIcon className={cls.homeIcon} />
              {t('Войти')}
            </div>
          )}
        </AppLink>

        <AppLink
          className={cls.mainLink}
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.main}
        >
          {collapsed ? (
            <HomeIcon className={cls.homeIcon} />
          ) : (
            <div className={cls.link}>
              <HomeIcon className={cls.homeIcon} />
              {t('Главная')}
            </div>
          )}
        </AppLink>
      </div>
      <MyButton
        className={classNames(cls.collapseBtn, {}, ['white'])}
        data-testid="test-sidebar-button"
        onClick={openSidebar}
        theme={ThemeButton.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </MyButton>

      <div
        className={classNames(cls.switchers, { [cls.column]: collapsed }, [])}
      >
        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </div>
  );
};

export { Sidebar };
