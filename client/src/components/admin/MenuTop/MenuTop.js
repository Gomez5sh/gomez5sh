import React from "react";
import G5shLogo from "../../../assets/img/png/G5shLogo.png";
import "./MenuTop.scss";
import { Button } from "antd";
import { Icon } from "@ant-design/compatible";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapse } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={G5shLogo}
          alt="Emmanuel Antonio Gomez Martinez"
        />
        <Button type="link" onClick={() => setMenuCollapse(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("You push me")}>
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
}
