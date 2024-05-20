import React, {
  memo,
  type InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  type MutableRefObject
} from 'react';
import styles from './Input.module.scss';
import classNames from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface IInputProps extends HTMLInputProps {
  readonly className?: string;
  readonly value?: string;
  readonly onChange?: (value: string) => void;
}

const Input = (props: IInputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true);
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const onSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={styles.inputWrapper}>
      {placeholder ? (
        <div className={styles.placeholder}>{`${placeholder}>`}</div>
      ) : null}
      <div className={styles.caretWrapper}>
        <input
          className={classNames(styles.input, {}, [className])}
          onBlur={() => {
            setIsFocus(false);
          }}
          onChange={onChangeHandler}
          onFocus={() => {
            setIsFocus(true);
          }}
          onSelect={onSelectHandler}
          ref={inputRef}
          type={type}
          value={value}
        />
        {isFocus ? (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default memo(Input);
