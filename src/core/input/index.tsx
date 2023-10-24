import React, { CSSProperties, FC } from "react";
import styles from "./index.module.css";

interface IProps {
  type?: string;
  placeholder?: string;
  onChange: (val: string) => void;
  error?: string;
  value?: string;
  label?: string;
  styleWrapper?: CSSProperties;
}
export const Input: FC<IProps> = ({
  type = "text",
  placeholder,
  onChange,
  error,
  value,
  label,
  styleWrapper,
}) => {
  return (
    <div style={styleWrapper} className={styles.input}>
      {label ? <label className={styles.label}>{label}</label> : null}
      <div
        className={styles.inputArea}
        style={error ? { border: "1px solid #F64747" } : {}}
      >
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};
