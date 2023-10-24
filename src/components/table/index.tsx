import React, { FC } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { IUser } from "@/typings/interfaces/users";
import { Button } from "@/core";
import { IModalTable } from "@/typings/interfaces/shared";

const columnsConfig = (onPressUpdate: (update: IModalTable) => void) => {
  const columns: ColumnsType<IUser> = [
    {
      key: "id",
      title: "iD",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 3,
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Birthday",
      dataIndex: "birthday_date",
      key: "birthday_date",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, record) => {
        return (
          <div>
            <Button
              title="Update User"
              width={"50px"}
              onClick={() => onPressUpdate({ id: record.id, isShow: true })}
              style={{
                width: 125,
                height: 40,
                padding: 0,
                fontSize: 14,
                marginBottom: 10,
              }}
            />
          </div>
        );
      },
    },
  ];
  return columns;
};

const onChange: TableProps<IUser>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

interface IProps {
  data: IUser[];
  isLoading: boolean;
  onPressUpdate: (update: IModalTable) => void;
}

export const TableComponent: FC<IProps> = ({
  data,
  isLoading,
  onPressUpdate,
}) => {
  return (
    <Table
      style={{
        maxWidth: "80%",
        background: "#fff",
        position: "relative",
        zIndex: 10,
      }}
      columns={columnsConfig(onPressUpdate)}
      dataSource={data}
      onChange={onChange}
      pagination={false}
      loading={isLoading}
    />
  );
};
