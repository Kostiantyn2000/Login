import { combineReducers } from "@reduxjs/toolkit";

//types
import { UserState } from "./users";
import { AuthState } from "./auth";

//reducers
import { usersReducer } from "./users";
import { authReducer } from "./auth";
const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export type RootState = {
  users: UserState;
  auth: AuthState;
};

export default rootReducer;
