import { Switch, Table } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import CustomModal from "../../../components/common/Modal";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../components/common/Breadcrumbs";

const NewCar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const list = [
    {
      name: "Car Management",
      link: "/",
      isActive: true,
    },
    {
      name: "New Car",
      link: "/",
      isActive: false,
    },
  ];

  const columns = [
    {
      title: "Post Id",
      dataIndex: "postId",
      key: "postId",
      render: (row) => (
        <div>
          <div>{row.id}</div>
        </div>
      ),
    },
    {
      title: "Car name/title",
      dataIndex: "title",
      key: "title",
      render: (row) => (
        <div>
          <div>{row.title}</div>
        </div>
      ),
    },
    {
      title: "Brand",
      dataIndex: "Brand",
      key: "Brand",
      render: (row) => (
        <div>
          <div>{row.Brand}</div>
        </div>
      ),
    },
    {
      title: "Selling Price",
      dataIndex: "price",
      key: "price",
      render: (row) => (
        <div>
          <div>{row.price}</div>
        </div>
      ),
    },
    {
      title: "Location  ",
      dataIndex: "location",
      key: "location",
      render: (row) => (
        <div>
          <div>{row.place}</div>
        </div>
      ),
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
      render: (row) => (
        <div>
          <div>{row.seller}</div>
        </div>
      ),
    },
    {
      title: "Package Type",
      dataIndex: "package",
      key: "location",
      render: (row) => (
        <div>
          <div>{row.package}</div>
        </div>
      ),
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: () => (
        <span>
          <Switch />
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <div className="d-flex userAction">
            <div className="mar-right-8">
              <EyeOutlined style={{ fontSize: "20px" }} />
            </div>
            <Link to="/newCar/edit" className="mar-right-8">
              {" "}
              <EditOutlined style={{ fontSize: "20px", color: "white" }} />
            </Link>
            <div onClick={showModal} className="cPointer">
              <DeleteOutlined style={{ fontSize: "20px" }} />
            </div>
          </div>
        </>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      postId: { id: "01" },
      title: { title: "nano" },
      Brand: { Brand: "tata" },
      price: { price: "230" },
      location: { place: "Gujarat" },
      seller: { seller: "james" },
      package: { package: "one" },
      tags: ["Active"],
    },
    {
      key: "2",
      postId: { id: "02" },
      title: { title: "polo" },
      Brand: { Brand: "tata" },
      price: { price: "230" },
      location: { place: "Gujarat" },
      seller: { seller: "james" },
      package: { package: "one" },
      tags: ["Inactive"],
    },
  ];

  return (
    <>
      <BreadCrumbs list={list} />
      <div className="singleCarPost shadow-paper auto-height">
        <Table columns={columns} dataSource={data} scroll={{ x: 980 }} />
      </div>
      <CustomModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete?</p>
      </CustomModal>
    </>
  );
};

export default NewCar;
