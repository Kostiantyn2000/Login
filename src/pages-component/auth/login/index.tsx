import Image from "next/image";
import styles from "./index.module.css";
import { Input } from "@/core";
import { FormLogin } from "@/components";

export const AuthPages = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.main}>
        <Image
          src={require("@/assets/svg/login-icon.svg")}
          alt="icon user play games computer"
        />
        <FormLogin />
      </div>
    </div>
  );
};
