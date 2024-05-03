import React from 'react';
import { Modal } from 'shared/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface ILoginModalProps {
  readonly className?: string;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function LoginModal({
  className,
  isOpen,
  onClose
}: ILoginModalProps) {
  return (
    <Modal isOpen={isOpen} lazy onClose={onClose}>
      <LoginForm />
    </Modal>
  );
}
