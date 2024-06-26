import {
  useState,
  type ReactNode,
  useRef,
  useEffect,
  useCallback
} from 'react';
import cls from './Modal.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/themeProvider';

export interface ModalProps {
  readonly isOpen?: boolean;
  readonly className?: string;
  readonly children?: ReactNode;
  readonly onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>(null);
  const { theme } = useTheme();

  const closeHandler = useCallback(
    (e: React.MouseEvent) => {
      if (e.target !== e.currentTarget) return;
      if (onClose) {
        setIsClosing(true);
        timeRef.current = setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 200);
      }
    },
    [onClose]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (onClose) {
          setIsClosing(true);
          timeRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
          }, 200);
        }
      }
    },
    [onClose]
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
