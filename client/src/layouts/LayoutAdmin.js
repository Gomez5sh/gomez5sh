import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";
//import routes from "../config/routes";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Admin Sider Menu</h2>
      <Layout>
        <Header>Header</Header>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
        <Footer>Emmanuel Gomez</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRouters(props) {
  const { routes } = props;

  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
