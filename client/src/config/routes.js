// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Pages

import AdminHome from "../Pages/Admin";
import AdminSingIn from "../Pages/Admin/SingIn";

//Home pages

import Home from "../Pages/Home";
import Contac from "../Pages/Contact";
import { Layout } from "antd";

//Others
import Error404 from "../Pages/Error404";

//Routes Config

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSingIn,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contac",
        component: Contac,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
