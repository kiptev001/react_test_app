import type React from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  readonly children: React.ReactNode;
  readonly element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
  const { children, element } = props;
  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
  const app = document.querySelector('div.app') as Element;
  return createPortal(children, element || app);
};

export default Portal;
