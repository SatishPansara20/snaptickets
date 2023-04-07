import { Table, Typography } from "antd";
import React, { useState } from "react";

import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import CustomModal from "../../../../components/common/Modal";
import { useNavigate } from "react-router-dom";

let data = [];

const aa = ["Active", "Inactive", "Sold"];

for (let i = 0; i < 50; i++) {
  data.push({
    key: i + 1,
    postId: i + 1,
    carCount: i + 5,
    location:
      " Leside.St.Xaviers College Cross Road, Nr. Vasant Vihar Bunglows, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad",

    seller: "John Hennessey",
    package: "one",
    Brand: "Hennessey",
    price: "$2.3M",
    status: aa[Math.floor(Math.random() * aa.length)],
  });
}

const UsedMutipleCarTable = () => {
  const navigate = useNavigate();
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

  // Edit Row Data
  const editRow = (record) => {
    console.log("Edit Row", record);
    navigate(`/usedCar/multipleCar/edit`);
  };

  // View Row Data
  const viewRow = (record) => {
    console.log("From viewRow", record);
    navigate(`/usedCar/multipleCar/view`);
  };
  const columns = [
    // Post Id
    {
      title: "Post Id",
      dataIndex: "postId",
      key: "postId",
      // width: "150px",
      ellipsis: true,
    },

    // Seller
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
      // width: "150px",
      ellipsis: true,
    },
    // Number of Cars
    {
      title: "Number of Cars",
      dataIndex: "carCount",
      key: "carCount",
      // width: "150px",
      ellipsis: true,
    },

    //Package Type
    {
      title: "Package Type",
      dataIndex: "package",
      key: "package",
      // width: "150px",
      ellipsis: true,
    },
    //Status
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      // width: "150px",
      ellipsis: true,

      render: (_, { status }) => {
        return status.toUpperCase() === "ACTIVE" ? (
          <div className="active status">{status.toUpperCase()}</div>
        ) : status.toUpperCase() === "INACTIVE" ? (
          <div className="status inActive">{status.toUpperCase()}</div>
        ) : (
          <div className="sold status">{status.toUpperCase()}</div>
        );
      },
    },
    // Location
    {
      title: "Location  ",
      dataIndex: "location",
      key: "location",
      // width: "150px",
      ellipsis: true,
    },
    //Actions
    {
      title: "Action",
      className: "text-clip",
      dataIndex: "operation",
      key: "operation",
      // width: "150px",
      ellipsis: true,
      render: (_, record) => {
        return (
          <div className="d-flex userAction">
            {/* View */}
            <Typography.Link
              className="mar-right-8"
              onClick={() => viewRow(record)}
            >
              <EyeOutlined style={{ fontSize: "20px", color: "white" }} />
            </Typography.Link>
            {/* Edit  */}
            <Typography.Link
              className="mar-right-8"
              style={{
                borderColor: "white",
              }}
              onClick={() => editRow(record)}
            >
              <EditOutlined style={{ fontSize: "20px", color: "white" }} />
            </Typography.Link>

            {/*   Delete  */}
            <Typography.Link
              className="mar-right-8"
              onClick={showModal}

              // onClick={() => deleteRow(record)}
            >
              <DeleteOutlined style={{ fontSize: "20px", color: "white" }} />
            </Typography.Link>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} scroll={{ x: 980 }} />

      <CustomModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete?</p>
      </CustomModal>
    </>
  );
};

export default UsedMutipleCarTable;
