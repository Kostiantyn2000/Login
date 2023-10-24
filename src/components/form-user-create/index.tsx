"use client";
import { Button, Input } from "@/core";
import { Controller } from "react-hook-form";
import styles from "./style.module.css";
import { useData } from "./use-data";

export const FormUserCreate = () => {
  const { control, errors, onSubmit } = useData();

  return (
    <div className={styles.wrapper}>
      <Controller
        name="name"
        control={control}
        render={({ field: { value, name, onChange } }) => (
          <Input
            styleWrapper={{ marginBottom: 30 }}
            label="Name"
            placeholder="Igor"
            error={errors[name]?.message}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { value, name, onChange } }) => (
          <Input
            styleWrapper={{ marginBottom: 30 }}
            label="Email"
            placeholder="email"
            onChange={onChange}
            value={value}
            error={errors[name]?.message}
          />
        )}
      />
      <Controller
        name="birthday_date"
        control={control}
        render={({ field: { value, name, onChange } }) => (
          <Input
            type="date"
            styleWrapper={{ marginBottom: 30 }}
            label="birthday_date"
            placeholder="28.04.2000"
            onChange={onChange}
            value={value}
            error={errors[name]?.message}
          />
        )}
      />
      <Controller
        name="phone_number"
        control={control}
        render={({ field: { value, name, onChange } }) => (
          <Input
            styleWrapper={{ marginBottom: 30 }}
            label="Phone number"
            placeholder="phone_number"
            onChange={onChange}
            value={value}
            error={errors[name]?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field: { value, name, onChange } }) => (
          <Input
            styleWrapper={{ marginBottom: 30 }}
            label="Address"
            placeholder="address"
            onChange={onChange}
            value={value}
            error={errors[name]?.message}
          />
        )}
      />

      <Button
        onClick={onSubmit}
        type="submit"
        title={"Create"}
        width={"350px"}
      />
    </div>
  );
};
