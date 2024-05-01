import type React from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  readonly children: React.ReactNode;
  readonly element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
  const { children, element } = props;
  const app = document.querySelector('div.app');
  return createPortal(children, element || app);
};

export default Portal;
