import { getUsers, getLoadingUsers, getCount } from "@/store/users/selectors";
import { getTableUsers } from "@/store/users/slice";
import { IModalTable, IPaginationTable } from "@/typings/interfaces/shared";
import { PaginationProps } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useData = () => {
  const dispatch = useDispatch<any>();
  const loadParams = { limit: 10, offset: 0 };

  const [pagination, setPagination] = useState<IPaginationTable>(loadParams);
  const [current, setCurrent] = useState(1);
  const [updateUser, setUpdateUser] = useState<IModalTable>({ isShow: false });
  const [createUser, setCreateUser] = useState<IModalTable>({ isShow: false });

  const users = useSelector(getUsers);
  const isLoading = useSelector(getLoadingUsers);
  const count = useSelector(getCount);

  const onChange: PaginationProps["onChange"] = (page) => {
    const offset = page * 10;
    setCurrent((prev) => (prev = offset / 10));
    setPagination((prev) => (prev = { offset: offset }));
  };

  useEffect(() => {
    dispatch(getTableUsers(pagination));
  }, [pagination, updateUser, createUser]);

  return {
    users,
    current,
    onChange,
    isLoading,
    setCreateUser,
    setUpdateUser,
    updateUser,
    createUser,
    count,
    pagination,
  };
};
