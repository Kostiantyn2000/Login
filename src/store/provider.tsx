"use client";

import { store } from "./index";
import { Provider } from "react-redux";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const ReduxProvider: FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <>{children}</>
    </Provider>
  );
};
