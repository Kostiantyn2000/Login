import { RootState } from "../rootReducer";

export const getAuthLogin = (state: RootState) => state.auth.loginStatus;
export const getAuthLoading = (state: RootState) => state.auth.loading;
