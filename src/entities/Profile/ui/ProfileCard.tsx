import React from 'react';
import { useTranslation } from 'react-i18next';
import { getProfileData, getProfileError, getProfileIsLoading } from '../index';
import classNames from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader';

interface ProfileCardProps {
  readonly className?: string | undefined;
}

export default function ProfileCard({ className }: ProfileCardProps) {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  return (
    <div className={classNames(styles.card, {}, [className])}>
      {isLoading ? <Loader /> : null}
      {error ? <div>{error}</div> : null}
      <div>
        {t('Имя')}
        {data?.firstName}
      </div>
      {t('Возраст')}
      <div>{data?.age}</div>
    </div>
  );
}
