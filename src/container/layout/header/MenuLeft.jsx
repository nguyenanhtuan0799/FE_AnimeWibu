import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/neko.png";
import { Typography } from "antd";

const { Text } = Typography;
function MenuLeft() {
  return (
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="logo"
        style={{ width: "64px", height: "50px", marginRight: "10px" }}
      />
      <Text style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
        AnimeWibu
      </Text>
    </Link>
  );
}

export default MenuLeft;
