import { profileReducer } from 'entities/Profile';
import React from 'react';
import DynamicReducerLoader, {
  type ReducersList
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

const reducers: ReducersList = {
  profile: profileReducer
};

export default function ProfilePage() {
  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div>ProfilePage</div>
    </DynamicReducerLoader>
  );
}
