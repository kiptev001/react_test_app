import React from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

export interface NavbarProps {
  readonly className?: string
}

function Navbar ({ className }: NavbarProps) {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
            className={cls.loginLink}
            theme={AppLinkTheme.PRIMARY}
            to="/login"
        >
          {t('Войти')}
        </AppLink>

        <AppLink
            className={cls.mainLink}
            theme={AppLinkTheme.PRIMARY}
            to="/"
        >
          {t('Главная')}
        </AppLink>
      </div>
    </div>
  )
}

export { Navbar }
