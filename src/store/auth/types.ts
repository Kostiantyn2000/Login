import { ILoginUser } from "@/typings";

export type AuthState = {
  loginStatus: boolean;
  loading: boolean;
};

export interface IPayloadLoginUser {
  data: ILoginUser;
}
