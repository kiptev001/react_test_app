import type { stateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getLoginState = (state: stateSchema) => state?.login;
