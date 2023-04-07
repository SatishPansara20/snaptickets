import React from "react";
import SingleCarTable from "./SingleCarTable";

import "../../CarManagement.scss";
import { Checkbox, Col, Input, Row } from "antd";
const { Search } = Input;

const statusFilter = [
  {
    label: "Active",
    value: "Active",
    disabled: false,
  },
  {
    label: "In Active",
    value: "inActive",
    disabled: false,
  },
  {
    label: "Sold",
    value: "Sold",
    disabled: false,
  },
];

const packageTypeFilter = [
  {
    label: "Car car car",
    value: "Car",
    disabled: false,
  },
  {
    label: "Car car car",
    value: "KTM",
    disabled: false,
  },
  {
    label: "1",
    value: "1",
    disabled: false,
  },
  {
    label: "2",
    value: "2",
    disabled: false,
  },
  {
    label: "3",
    value: "3",
    disabled: false,
  },
];

const SingleCar = () => {
  const onSearch = (value) => console.log(value);
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <>
      <div className="multipleCarPost shadow-paper auto-height "> 
        <Row className="search-filter-container mar-bottom-8">
          <Col  xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 14 }}>
            <div className="searchGrp">
              <Search
                placeholder="Input search text"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </Col>
          {/* <Col lg={16}>
            <div className="filter">
              <div className="dropdown">
                <button className="dropbtn">
                  Filter
                  <div className="dropdown-content">
                    <ul>
                      <li className="filteTitle">
                        Status:
                        <ul>
                          <li>
                            {" "}
                            <Checkbox.Group
                              options={statusFilter}
                              onChange={onChange}
                            />
                          </li>
                        </ul>
                      </li>
                      <li className="filteTitle">
                        Package Type:
                        <ul>
                          <li>
                            <Checkbox.Group
                              style={{ width: "100%" }}
                              onChange={onChange}
                            >
                              <Row>
                                {packageTypeFilter.map((item, i) => {
                                  return (
                                    <Col
                                      key={i}
                                      span={8}
                                      // sm={{ span: 16 }}
                                      // lg={{ span: 8 }}
                                    >
                                      <Checkbox
                                        disabled={item.disabled}
                                        value={item.value}
                                      >
                                        {item.label}
                                      </Checkbox>
                                    </Col>
                                  );
                                })}
                              </Row>
                            </Checkbox.Group>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
            </div>
          </Col> */}
        </Row>
        <SingleCarTable />
      </div>
    </>
  );
};

export default SingleCar;
