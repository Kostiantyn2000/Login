import React, { FC } from "react";
import styles from "./style.module.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  width: string;
}

export const Button: FC<IProps> = ({ title, width, ...props }) => {
  return (
    <>
      <button style={{ width: width }} className={styles.button} {...props}>
        {title}
      </button>
    </>
  );
};
