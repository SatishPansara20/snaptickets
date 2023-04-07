import React from "react";
import BreadCrumbs from "../../../../../components/common/Breadcrumbs";
import Card from "../../../../../components/common/Card";
import { Button } from "antd";
import { Link } from "react-router-dom";

const list = [
  {
    name: "Used Car",
    link: "/usedCar",
    isActive: true,
  },
  {
    name: "Multiple Car",
    link: "/usedCar/multipleCar",
    isActive: true,
  },
  {
    name: "View Car Details",
    link: "/usedCar/multipleCar/View",
    isActive: false,
  },
];

const data = {
  number: "768",
  carCount: "10",
  seller: "John Hennessey",
  carAvailable: "Yes",
  status: "Active",
  packageType: "Vehicle",
  location:
    "Beside.St.Xaviers College Cross Road, Nr. Vasant Vihar Bunglows, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad",
};
const ViewUsedMultipleCarRow = () => {
  return (
    <>
      <BreadCrumbs list={list} />

      <Card className="viewRowDataLayout">
        {Object.keys(data).map((value, i) => {
          return value === "location" ? (
            <div key={i} className="field col-span">
              <p className="filed-label">{value}</p>
              <p className="filed-content ">{data[value]}</p>
            </div>
          ) : (
            <div key={i} className="field">
              <p className="filed-label">{value}</p>
              <p className="filed-content ">{data[value]}</p>
            </div>
          );
        })}
        <Button className="back-button">
          <Link to="/usedCar">Back</Link>
        </Button>
      </Card>
    </>
  );
};

export default ViewUsedMultipleCarRow;
