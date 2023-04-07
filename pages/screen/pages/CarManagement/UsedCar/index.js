import { Tabs } from "antd";
import React, { useState } from "react";

import BreadCrumbs from "../../../components/common/Breadcrumbs";

import UsedSingleCar from "../UsedCar/singleCar/index";
import UsedMultipleCar from "../UsedCar/mutipleCar/index";

const UsedCar = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const list = [
    {
      name: "Car Management",
      link: "/usedCar",
      isActive: true,
    },
    {
      name: "Used Car",
      link: "/",
      isActive: false,
    },
  ];

  const tabNames = [
    {
      label: `Single car post`,
      key: "1",
      children: <UsedSingleCar />,
    },
    {
      label: `Multiple car post`,
      key: "2",
      children: <UsedMultipleCar />,
    },
  ];

  const onChange = (key) => {
    setCurrentTab(key);
  };

  return (
    <>
      <BreadCrumbs list={list} />
      <Tabs
        onChange={onChange}
        size="middle"
        activeKey={currentTab}
        items={tabNames}
      />
    </>
  );
};

export default UsedCar;
