import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import styles from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/LoginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { authByUsername } from 'features/AuthByUsername/model/services/authByUsername';
import Text, { ThemeText } from 'shared/ui/Text/Text';

interface ILoginFormProps {
  readonly onClose?: () => void;
}

const LoginForm = ({ onClose }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(
    (event: React.MouseEvent) => {
      dispatch(authByUsername({ username, password }));
      dispatch(loginActions.clearData());
      onClose();
    },
    [dispatch, username, password, onClose]
  );

  return (
    <form className={styles.loginForm}>
      {error ? (
        <Text text={error} theme={ThemeText.ERROR} title="Error" />
      ) : null}
      <Input
        autoFocus
        className={styles.usernameInput}
        onChange={onChangeUsername}
        placeholder={t('Имя пользователя')}
        value={username}
      />
      <Input
        className={styles.passwordInput}
        onChange={onChangePassword}
        placeholder={t('Пароль')}
        value={password}
      />
      <MyButton
        className={styles.submitBtn}
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ThemeButton.OUTLINE}
      >
        {t('Войти')}
      </MyButton>
    </form>
  );
};

export default memo(LoginForm);
