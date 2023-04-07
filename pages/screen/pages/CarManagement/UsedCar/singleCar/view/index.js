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
    name: "Single Car",
    link: "/usedCar/singleCar",
    isActive: true,
  },
  {
    name: "View Car Details",
    link: "/usedCar/singleCar/edit",
    isActive: false,
  },
];

const data = {
  number: "768",
  carName: "Hennessey Venom F5 ",
  brand: "Hennessey Venom GT",
  sellingPrice: "$2.5M",

  seller: "John Hennessey",
  carAvailable: "Yes",
  status: "Active",
  packageType: "Vehicle",
  location:
    "Beside.St.Xaviers College Cross Road, Nr. Vasant Vihar Bunglows, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad",
};
const ViewSignleCar = () => {
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

export default ViewSignleCar;
