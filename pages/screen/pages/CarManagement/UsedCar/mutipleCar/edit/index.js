import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Link } from "react-router-dom";
import Card from "../../../../../components/common/Card";
import BreadCrumbs from "../../../../../components/common/Breadcrumbs";
const { TextArea } = Input;

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
    name: "Edit Car Details",
    link: "/usedCar/multipleCar/edit",
    isActive: false,
  },
];

const status = [
  {
    value: "Active",
    label: "Active",
  },
  {
    value: "Inactive",
    label: "Inactive",
  },
  {
    value: "Sold",
    label: "Sold",
  },
];

const EditUsedCar = () => {
  const handleCarAvailableChange = (value) => {
    console.log(value);
  };

  const onFinish = async (values) => {
    console.log("From SingleCarTable Edit:", values);
  };
  return (
    <>
      <div className="editMultipleCarPost">
        <BreadCrumbs list={list} />
        <Card>
          <Form
            initialValues={{
              number: "768",
              carCount: "Hennessey Venom F5 ",
              seller: "John Hennessey",
              carAvailable: "Yes",
              status: "Active",
              packageType: "Vehicle",
              location:
                "Beside.St.Xaviers College Cross Road, Nr. Vasant Vihar Bunglows, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad",
            }}
            layout="vertical"
            onFinish={onFinish}
          >
            <div className="row">
              {/* Title */}
              <div className="col-xl-12">
                <h3 className="pageLabel mar-bottom-18">Edit Used Car</h3>
              </div>

              {/* Post Id */}
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

              {/* Number of Car */}
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Number of Car"
                  labelWrap={true}
                  name="carCount"
                >
                  <InputNumber />
                </Form.Item>
              </div>
              {/*   Status */}
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Status"
                  labelWrap={true}
                  name="status"
                >
                  <Select
                    defaultValue={status[0]}
                    size="large"
                    onChange={handleCarAvailableChange}
                    options={status.map((item) => ({
                      label: item.label,
                      value: item.value,
                    }))}
                  />
                </Form.Item>
              </div>
              {/*   Package Type */}
              <div className="col-xl-6">
                <Form.Item
                  className="form-group"
                  label="Package Type"
                  labelWrap={true}
                  name="packageType"
                >
                  <Input />
                </Form.Item>
              </div>
              {/*  Location */}
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

              {/*  Cancle Button */}
              <div className="col-xl-12 d-flex justify-content-end">
                <Button className="mar-right-8">
                  <Link to="/usedCar">Cancel</Link>
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

export default EditUsedCar;

// /* Seller */
//                <div className="col-xl-6">
//                 <Form.Item
//                   className="form-group"
//                   label="Seller"
//                   disabled
//                   labelWrap={true}
//                   name="seller"
//                 >
//                   <Input />
//                 </Form.Item>
//               </div>
