import axios from "@/services/axios";
import { AuthLoginRes } from "./interfaces";
import { ILoginUser } from "@/typings";

export const postAuthLoginReq = async (user: ILoginUser) => {
  return await axios.post<AuthLoginRes>("/login/", user);
};

export const apiAuth = {
  postAuthLoginReq,
};
