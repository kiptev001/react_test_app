import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation('login');
  return (
    <>
      <Counter />
      <div>{t('Страница входа')}</div>
    </>
  );
};

export default LoginPage;
