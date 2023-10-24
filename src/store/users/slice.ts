import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { SetPayloadUser, UserState } from "./types";
import { apiUsers } from "@/api";
import { message } from "antd";
import { IPaginationTable } from "@/typings/interfaces/shared";
import { IFromUser, IUser } from "@/typings/interfaces/users";

export const getTableUsers = createAsyncThunk(
  "Users/getTableUsers",
  async (pagination: IPaginationTable) => {
    try {
      const { data } = await apiUsers.getTableUsers(pagination);
      return data;
    } catch (error: any) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);
    }
  }
);

export const putTableUsers = createAsyncThunk(
  "Users/putTableUsers",
  async ({ body, id }: { body: IFromUser; id: number }) => {
    console.log("UPDATE", body, id);

    try {
      await apiUsers.putTableUsers(id, body);
      message.success("Update user info success");
    } catch (error: any) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);
    }
  }
);

export const postTableUsers = createAsyncThunk(
  "Users/postTableUsers",
  async (body: IFromUser) => {
    console.log("Create", body);

    try {
      await apiUsers.postTableUsers(body);
      message.success("Create user info success");
    } catch (error: any) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);
    }
  }
);

const initialState: UserState = {
  users: [],
  loading: true,
  count: 0,
};

const slice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    saveItems: (state: UserState, action: PayloadAction<SetPayloadUser>) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTableUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTableUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload?.results || [];
        state.count = action.payload?.count || 0;
      })
      .addCase(getTableUsers.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export default slice.reducer;
