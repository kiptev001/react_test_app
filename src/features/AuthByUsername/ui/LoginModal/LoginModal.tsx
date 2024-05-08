import React, { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader';

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
      <Suspense fallback={<Loader />}>
        <LoginForm onClose={onClose} />
      </Suspense>
    </Modal>
  );
}
