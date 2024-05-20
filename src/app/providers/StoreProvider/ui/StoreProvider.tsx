import React, { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/index';
import type { stateSchema } from '../config/stateSchema';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  readonly children?: ReactNode;
  readonly initialState?: stateSchema;
}

export const StoreProvider = ({
  children,
  initialState
}: StoreProviderProps) => {
  const navigate = useNavigate();
  const store = createReduxStore(initialState, navigate);
  return <Provider store={store}>{children}</Provider>;
};
