import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import SignUpForm from "../../components/admin/SignUpForm";
import Logo from "../../assets/img/png/logologin.png";

import "./SingIn.scss";

export default function Signin() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Emmanuel Gomez" />
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Sign in</span>} key="1">
              Componete sign in form
            </TabPane>
            <TabPane tab={<span>Sign Up</span>} ke="2">
              <SignUpForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
