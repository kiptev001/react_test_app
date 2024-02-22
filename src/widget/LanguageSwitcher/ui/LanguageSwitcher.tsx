import React, { FC } from 'react';
import cls from './LanguageSwitcher.module.scss';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';

export interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { i18n, t } = useTranslation();
  const translate = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <MyButton
      className={classNames(cls.languageSwitcher, {}, [])}
      theme={ThemeButton.CLEAR}
      onClick={translate}
    >
      {t('Перевод')}
    </MyButton>
  );
};

export { LanguageSwitcher };
