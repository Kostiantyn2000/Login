import { getAuthLoading } from "@/store/auth/selectors";
import { postTableUsers } from "@/store/users/slice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { schema } from "./validate";
import { IFromUser } from "@/typings/interfaces/users";

export const useData = () => {
  const dispatch = useDispatch<any>();
  const isLoading = useSelector(getAuthLoading);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFromUser>({
    defaultValues: {
      address: "",
      birthday_date: "",
      phone_number: "",
      email: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFromUser) => {
    dispatch(postTableUsers( data ));
  };

  return {
    control,
    errors,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
