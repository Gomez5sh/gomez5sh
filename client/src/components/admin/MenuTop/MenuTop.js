import React from "react";
import G5shLogo from "../../../assets/img/png/G5shLogo.png";
import "./MenuTop.scss";
import { Button, Icon } from "antd";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={G5shLogo}
          alt="Emmanuel Antonio Gomez Martinez"
        />
        <Button type="link" onClick={() => console.log("You push me")}>
          <MenuOutlined type="menu-fold" />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("You push me")}>
          <LogoutOutlined />
        </Button>
      </div>
    </div>
  );
}
