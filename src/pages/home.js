import React from "react";
import app from "../config";

import { Layout, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header className="header">
        {/* <div className="logo" /> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Захиалга</Menu.Item>
          <Menu.Item key="2">Бүтээгдэхүүн</Menu.Item>
          <Menu.Item key="3">Тайлан</Menu.Item>
          <Menu.Item
            key="4"
            className="logout_button"
            onClick={() => app.auth().signOut()}
          >
            <LogoutOutlined className="m-24" /> Гарах
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", height: "calc(100vh - 134px)" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Content style={{ padding: "0 24px" }}>
            <>
              <h1>Home</h1>
            </>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center", background: "white" }}>
        ©2020 Бүх эрх хуулийн дагуу
      </Footer>
    </Layout>
  );
};

export default Home;
