"use client";
import { FormUserCreate, FormUserUpdate, TableComponent } from "@/components";
import { useData } from "./use-data";
import { Modal, Pagination } from "antd";
import { Button } from "@/core";

export const HomePages = () => {
  const {
    users,
    onChange,
    current,
    isLoading,
    setCreateUser,
    setUpdateUser,
    createUser,
    updateUser,
    count,
    pagination,
  } = useData();

  return (
    <div>
      <Button
        width={"50px"}
        style={{ width: 125, height: 40, fontSize: 14, padding: 0 }}
        title="Create User"
        onClick={() => setCreateUser({ isShow: true })}
      />
      <TableComponent
        onPressUpdate={(data) => setUpdateUser((prev) => (prev = data))}
        isLoading={isLoading}
        data={users}
      />
      <Pagination
        style={{ marginTop: 30 }}
        responsive
        current={current}
        onChange={onChange}
        total={count * 1 + 10}
        showSizeChanger={false}
      />
      <Modal
        footer={null}
        title="Update user"
        open={updateUser?.isShow}
        onCancel={() => setUpdateUser((prev) => (prev = { isShow: false }))}
      >
        <FormUserUpdate idUser={updateUser?.id} />
      </Modal>
      <Modal
        footer={null}
        title="Create user"
        open={createUser?.isShow}
        onCancel={() => setCreateUser((prev) => (prev = { isShow: false }))}
      >
        <FormUserCreate />
      </Modal>
    </div>
  );
};
