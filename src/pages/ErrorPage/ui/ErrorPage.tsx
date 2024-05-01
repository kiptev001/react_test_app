import React from 'react';
import cls from './ErrorPage.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

export interface ErrorPageProps {
  readonly className?: string;
}

function ErrorPage({ className }: ErrorPageProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.err, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
}

export { ErrorPage };
