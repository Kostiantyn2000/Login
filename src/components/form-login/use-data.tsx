import { getAuthLoading } from "@/store/auth/selectors";
import { postAuthLogin } from "@/store/auth/slice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { schema } from "./validate";
import { ILoginUser } from "@/typings";

export const useData = () => {
  const dispatch = useDispatch<any>();
  const isLoading = useSelector(getAuthLoading);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginUser) => {
    dispatch(postAuthLogin(data));
  };

  return {
    control,
    errors,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
