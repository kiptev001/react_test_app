import React, { useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal, getUserAuthData } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';

export interface NavbarProps {
  readonly className?: string;
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalOpened(prev => !prev);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <MyButton
          className={cls.links}
          onClick={handleLogout}
          theme={ThemeButton.CLEAR}
        >
          {t('Выйти')}
        </MyButton>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <MyButton
        className={cls.links}
        onClick={handleModal}
        theme={ThemeButton.CLEAR}
      >
        {t('Войти')}
      </MyButton>
      <LoginModal isOpen={isModalOpened} onClose={handleModal} />
    </div>
  );
}

export { Navbar };
