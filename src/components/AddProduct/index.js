/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox, Select } from "antd";
import { CustomButton } from "../CustomButton";
import { addProd } from "../actions";
import Uploader from "./Uploader";

const AddProduct = () => {
  const [state, setState] = React.useState({
    name: "",
    description: "",
    price: "",
    catagories: [],
    catagory: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
  });

  const {
    name,
    description,
    price,
    catagories,
    catagory,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
  } = state;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const { Option } = Select;

  const handleChange = (name) => (e) => {
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <div>
      <Container>
        <Grid item container spacing={2}>
          <Grid item xs={12}>
            <Form
              style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please add name!" }]}
              >
                <Input onChange={handleChange("name")} />
              </Form.Item>
              <Form.Item
                label="Description"
                name="desc"
                rules={[{ required: true, message: "Please add description!" }]}
              >
                <Input onChange={handleChange("description")} />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please add price!" }]}
              >
                <Input onChange={handleChange("price")} />
              </Form.Item>
              <Form.Item label="Quantity" name="quantity">
                <Input onChange={handleChange("quantity")} />
              </Form.Item>

              <Form.Item label="Catagory">
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  onChange={handleChange}
                >
                  <Option key="hats">hats</Option>
                  <Option key="sneakers">sneakers</Option>
                  <Option key="mens">mens</Option>
                  <Option key="womens">womens</Option>
                  <Option key="jackets">jackets</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Shipping" name="shipping">
                <Select
                  initialvalues={["Yes"]}
                  name="shipping"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="yes">Yes</Option>
                  <Option value="no">No</Option>
                </Select>
              </Form.Item>
              <Uploader />
              <CustomButton>Add</CustomButton>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddProduct;
