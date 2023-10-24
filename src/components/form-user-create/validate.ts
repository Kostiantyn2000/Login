import { string, object } from "yup";

export const schema = object().shape({
  name: string().required("required"),
  email: string().email().required("required"),
  birthday_date: string().required("required"),
  phone_number: string().required("required"),
  address: string().required("required"),
});
