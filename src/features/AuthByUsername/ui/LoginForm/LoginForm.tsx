import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import styles from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  loginActions,
  loginReducer
} from 'features/AuthByUsername/model/slice/LoginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { authByUsername } from 'features/AuthByUsername/model/services/authByUsername';
import Text, { ThemeText } from 'shared/ui/Text/Text';
import DynamicReducerLoader from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

export interface ILoginFormProps {
  readonly onClose: () => void;
}

const LoginForm = ({ onClose }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
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

  const onLoginClick = async (event: React.MouseEvent) => {
    const result = await dispatch(authByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onClose();
      dispatch(loginActions.clearData());
    }
  };

  return (
    <DynamicReducerLoader reducers={{ login: loginReducer }} removeAfterUnmount>
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
    </DynamicReducerLoader>
  );
};

export default memo(LoginForm);
