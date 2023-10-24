import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, IPayloadLoginUser } from "./types";
import { ILoginUser } from "@/typings";
import { apiAuth } from "@/api";
import { message } from "antd";
import { AxiosError } from "axios";

export const postAuthLogin = createAsyncThunk(
  "Auth/fetchData",
  async (userData: ILoginUser) => {
    try {
      const { data } = await apiAuth.postAuthLoginReq(userData);
      message.success(data.message);
      return data;
    } catch (error: any) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);
    }
  }
);

const initialState: AuthState = {
  loginStatus: false,
  loading: true,
};

const slice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    saveItems: (state: AuthState, action: PayloadAction<IPayloadLoginUser>) => {
      state.loginStatus = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAuthLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAuthLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.loginStatus = !!action.payload?.message;
      })
      .addCase(postAuthLogin.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export default slice.reducer;
