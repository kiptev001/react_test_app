import React, { type FC } from 'react'
import cls from './LanguageSwitcher.module.scss'
import { MyButton, ThemeButton } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'

export interface LanguageSwitcherProps {
  readonly className?: string
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  className
}: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation()
  const translate = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <MyButton
        className={classNames(cls.languageSwitcher, {}, [])}
        onClick={translate}
        theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </MyButton>
  )
}

export { LanguageSwitcher }
