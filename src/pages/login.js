import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Button, Form, Input, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import app from "../config.js";
import AuthLayout from "../layout/auth_layout";
import { AuthContext } from "../components/auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      console.log(event);
      const { email, password } = event;
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <AuthLayout>
      <div className="auth_login_wrapper">
        <h3 className="auth_login_title">НЭВТРЭХ ХЭСЭГ</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Нэвтрэх
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default withRouter(Login);
