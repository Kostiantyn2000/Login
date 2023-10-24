import { string, object } from "yup";

export const schema = object().shape({
  username: string().required("required"),
  password: string().required("required"),
});
