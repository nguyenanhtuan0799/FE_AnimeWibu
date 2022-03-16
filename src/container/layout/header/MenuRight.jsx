import React from "react";
import { Menu, Select } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Item } = Menu;
function MenuRight() {
  return (
    <div
      style={{
        background: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <div>
        <Select style={{ color: "black" }} defaultValue="VI">
          <Option value="VI">VI</Option>
          <Option value="EN">EN</Option>
        </Select>
      </div>
      <div style={{ marginLeft: "16px", padding: "0 24px" }}>
        <Link className="tab-link" to="/login">
          Đăng Nhập
        </Link>
      </div>
      <div>
        <Link className="tab-link" to="/register">
          Đăng Ký
        </Link>
      </div>
    </div>
  );
}

export default MenuRight;
