import React from "react";
import { Menu, Select, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { UserOutlined, HeartOutlined, LogoutOutlined } from "@ant-design/icons";
import { auth } from "../../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { LogoutAccount } from "../../../redux/actions/actions";
const { Text, Title } = Typography;
const { Option } = Select;
const { Item } = Menu;

function MenuRight() {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.infoAnimeApp);
  const { accountUser } = state;
  const format = (values) => {
    const i = values.indexOf("@");
    const cut = values.slice(0, i);
    return cut.charAt(0).toUpperCase() + cut.slice(1);
  };
  const style = {
    margin: "6px 0",
  };
  const style1 = {
    marginRight: "10px",
  };
  const menu = (
    <Menu style={{ minWidth: "9vw" }}>
      <Item style={style} key="1">
        <UserOutlined style={style1} />
        <Link to="/">Profile</Link>
      </Item>
      <Item style={style} key="2">
        <HeartOutlined style={style1} />
        <Link to="/">Theo Doi</Link>
      </Item>
      <Item
        style={style}
        key="3"
        onClick={() => {
          LogoutAccount(dispatch);
        }}
      >
        <LogoutOutlined style={style1} />
        Logout
      </Item>
    </Menu>
  );
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
        {accountUser ? (
          <Text style={{ color: "white", fontSize: "18px" }}>
            {format(accountUser)}
          </Text>
        ) : (
          <Link className="tab-link" to="/login">
            Đăng Nhập
          </Link>
        )}
      </div>
      <div>
        {accountUser ? (
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        ) : (
          <Link className="tab-link" to="/register">
            Đăng Ký
          </Link>
        )}
      </div>
    </div>
  );
}

export default MenuRight;
