import { IUser } from "@/typings/interfaces/users";

export interface ITableUsersRes {
  count: number;
  results: IUser[];
}
