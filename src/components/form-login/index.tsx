"use client";
import { Button, Input } from "@/core";
import styles from "./style.module.css";
import { useData } from "./use-data";
import { Controller } from "react-hook-form";

export const FormLogin = () => {
  const { control, errors, onSubmit } = useData();

  return (
    <div className={styles.wrapper}>
      <Controller
        name="username"
        control={control}
        render={({ field: { value, name, onChange } }) => (
          <Input
            styleWrapper={{ marginBottom: 30 }}
            label="Email"
            placeholder="email@gmail.com"
            error={errors[name]?.message}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { value, name, onChange } }) => (
          <Input
            styleWrapper={{ marginBottom: 30 }}
            label="Password"
            placeholder="P@ssw0rd"
            onChange={onChange}
            value={value}
            error={errors[name]?.message}
          />
        )}
      />

      <Button
        onClick={onSubmit}
        type="submit"
        title={"Login"}
        width={"350px"}
      />
    </div>
  );
};
