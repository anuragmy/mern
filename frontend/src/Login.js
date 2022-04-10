import React from "react";
import axios from "axios";
import { Form, Input, Button, Typography } from "antd";
import { useState } from "react";
const { Title } = Typography;

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [vals, setVals] = useState("");

  const onFinish = async (values) => {
    console.log("Success:", values);
    setVals(values);
    const data = {
      email: values.email,
      password: values.password,
    };

    console.log("data", data);

    if (!isSignIn) data["name"] = vals?.username;

    const res = await axios.post(
      `http://localhost:3001/api/auth/${isSignIn ? "sign-in" : "signup"}`,
      data
    );
    if (res) {
      console.log(res.data.token);
      if (res.data.token) localStorage.setItem("token", res.data.token);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ marginTop: "10%" }}>
      <Title level={2}>{isSignIn ? "Login" : "Sign Up"}</Title>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {!isSignIn && (
          <Form.Item
            label="username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input type={"text"} />
          </Form.Item>
        )}
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input type={"email"} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <h4>
          {isSignIn ? "Not have an account ?" : "Already have an account ?"}
        </h4>
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setSignIn(!isSignIn)}
        >
          {isSignIn ? "Sign up" : "Sign in"}
        </span>
      </Form>
    </div>
  );
};
export default Login;
