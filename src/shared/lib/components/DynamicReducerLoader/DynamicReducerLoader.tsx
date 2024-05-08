import { type Reducer } from '@reduxjs/toolkit';
import { type storeWithManager } from 'app/providers/StoreProvider/config/reducerManager';
import { type stateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema';
import React, { type FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export interface IDynamicReducerLoaderProps {
  readonly reducers: ReducersList;
  readonly removeAfterUnmount?: boolean;
}

export type ReducersList = {
  [name in stateSchemaKey]?: Reducer;
};

type ReducersListEntry = [stateSchemaKey, Reducer];

const DynamicReducerLoader: FC<IDynamicReducerLoaderProps> = props => {
  const { reducers, children, removeAfterUnmount = false } = props;
  const dispatch = useDispatch();
  const store = useStore() as storeWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducersListEntry) => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${name} reducer` });
          }
        );
      }
    };
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line
  return <>{children}</>;
};

export default DynamicReducerLoader;
