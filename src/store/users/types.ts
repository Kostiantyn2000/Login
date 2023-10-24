import { IUser } from "@/typings/interfaces/users";

export type UserState = {
  users: IUser[];
  loading: boolean;
  count: number;
};

export type SetPayloadUser = {
  user: {};
};
