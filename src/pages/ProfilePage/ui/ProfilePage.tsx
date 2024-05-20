import { fetchProfileData, profileReducer } from 'entities/Profile';
import ProfileCard from 'entities/Profile/ui/ProfileCard';
import React, { useEffect } from 'react';
import DynamicReducerLoader, {
  type ReducersList
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer
};

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicReducerLoader>
  );
}
