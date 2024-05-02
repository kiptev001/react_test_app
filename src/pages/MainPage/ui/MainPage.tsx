import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');
  return (
    <>
      <Counter />
      <div>{t('Главная страница')}</div>
    </>
  );
}

export default MainPage;
