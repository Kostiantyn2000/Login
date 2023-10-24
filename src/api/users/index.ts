import axios from "@/services/axios";
import { ITableUsersRes } from "./interfaces";
import { IPaginationTable } from "@/typings/interfaces/shared";
import { IFromUser, IUser } from "@/typings/interfaces/users";

export const getTableUsers = async (params: IPaginationTable) => {
  return await axios.get<ITableUsersRes>("/table/", { params });
};

export const putTableUsers = async (id: number, data: IFromUser) => {
  return await axios.put<IUser>(`/table/${id}/`, data);
};

export const postTableUsers = async (data: IFromUser) => {
  return await axios.post<IUser>(`/table/`, data);
};

export const apiUsers = {
  getTableUsers,
  putTableUsers,
  postTableUsers,
};
