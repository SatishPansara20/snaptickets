import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../components/common/Breadcrumbs";
import Card from "../../../components/common/Card";
const { TextArea } = Input;

const list = [
  {
    name: "New Car",
    link: "/newCar",
    isActive: true,
  },
  {
    name: "Edit New Car",
    link: "/newCar/edit",
    isActive: false,
  },
];

const EditNewCar = () => {
  return (
    <>
      <div className="editSingleCarPost">
        <BreadCrumbs list={list} />
        <Card>
          <Form layout="vertical">
            <div className="row">
              <div className="col-xl-12">
                <h3 className="pageLabel mar-bottom-18">Edit New Car</h3>
              </div>
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Post Id"
                  labelWrap={true}
                  name="number"
                >
                  <InputNumber />
                </Form.Item>
              </div>
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Car Name"
                  labelWrap={true}
                  name="carName"
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Brand"
                  labelWrap={true}
                  name="brand"
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Selling Price"
                  labelWrap={true}
                  name="sellingPrice"
                >
                  <InputNumber />
                </Form.Item>
              </div>
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Seller"
                  labelWrap={true}
                  name="seller"
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Package Type"
                  labelWrap={true}
                  name="seller"
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="col-xl-12">
                <Form.Item
                  className="form-group"
                  label="Location"
                  labelWrap={true}
                  name="location"
                >
                  <TextArea rows={3} />
                </Form.Item>
              </div>
              <div className="col-xl-12 d-flex justify-content-end mar-top-8">
                <Button className="mar-right-8">
                  <Link to="/newCar">Cancel</Link>
                </Button>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default EditNewCar;
