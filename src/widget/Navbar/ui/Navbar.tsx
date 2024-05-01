import React, { useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

export interface NavbarProps {
  readonly className?: string;
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = useCallback(() => {
    setIsModalOpened(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <MyButton
        className={cls.links}
        onClick={handleModal}
        theme={ThemeButton.CLEAR}
      >
        {t('Войти')}
      </MyButton>
      <Modal isOpen={isModalOpened} onClose={handleModal}>
        MODAL WINDOW
      </Modal>
    </div>
  );
}

export { Navbar };
