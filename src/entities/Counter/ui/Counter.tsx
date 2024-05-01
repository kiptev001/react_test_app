import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyButton } from 'shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import type { stateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector((state: stateSchema) => state.counter.value);
  const plus = () => {
    console.log('+');
    dispatch(counterActions.increment());
  };
  const minus = () => {
    console.log('-');
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <div>
        {t('Значение')}:{counterValue}
      </div>
      <MyButton onClick={plus}>{t('Плюс')}</MyButton>
      <MyButton onClick={minus}>{t('Минус')}</MyButton>
    </div>
  );
};
