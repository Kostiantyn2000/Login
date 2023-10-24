import { stat } from "fs";
import { RootState } from "../rootReducer";

export const getUsers = (state: RootState) => state.users.users;
export const getLoadingUsers = (state: RootState) => state.users.loading;
export const getCount = (state: RootState) => state.users.count;
