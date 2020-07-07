import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../assets/img/png/G5shLogo.png";

import "./SingIn.scss";

export default function Singin() {
  const { Content } = Layout;
  const { TabPanel } = Tabs;
  return (
    <Layout className="sing-in">
      <Content className="sing-in__content">
        <h1 className="sin-in__content-logo">
          <img src={Logo} alt="Emmanuel Gomez" />
        </h1>
      </Content>
    </Layout>
  );
}
