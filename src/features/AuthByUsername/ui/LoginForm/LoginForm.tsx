import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import styles from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';

export default function LoginForm() {
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className={styles.loginForm}>
      <Input
        autoFocus
        className={styles.usernameInput}
        onChange={setUserName}
        placeholder={t('Имя пользователя')}
        value={userName}
      />
      <Input
        className={styles.passwordInput}
        onChange={setPassword}
        placeholder={t('Пароль')}
        value={password}
      />
      <MyButton
        className={styles.submitBtn}
        theme={ThemeButton.OUTLINE}
        type="submit"
      >
        {t('Войти')}
      </MyButton>
    </form>
  );
}
