import { getProfileData } from './model/selectors/getProfileData';
import { getProfileError } from './model/selectors/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading';

export { fetchProfileData } from './model/services/fetchProfileData';

export type { Profile, ProfileSchema } from './model/types';

export { profileReducer, profileActions } from './model/slice/profileSlice';

export { getProfileIsLoading, getProfileData, getProfileError };
