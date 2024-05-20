import { type stateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (state: stateSchema) => state.profile?.data;
