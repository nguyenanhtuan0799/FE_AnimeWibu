import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Type from "./Type";

import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import InputSearch from "../../../components/header/InputSearch";

function Header() {
  const tabs = [
    {
      title: "Trang Chủ",
      path: "/",
    },
    {
      title: "Thể Loại",
      component: <Type />,
    },
    {
      title: "Năm",
      component: <Type />,
    },
    {
      title: "Bảng Xếp Hạng",
      path: "/top",
    },
    {
      title: "Tìm Kiếm Nâng Cao",
      path: "/searchadv",
    },
  ];
  return (
    <Row>
      <Col span={4}>
        <MenuLeft />
      </Col>
      <Col span={8}>
        <div
          style={{
            background: "transparent",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {tabs.map((element, i) => (
            <div
              style={{ padding: "0 16px" }}
              className="header-tab"
              key={i + 1}
            >
              {element.path ? (
                <Link className="tab-link" to={element.path}>
                  {element.title}
                </Link>
              ) : (
                element.component
              )}
            </div>
          ))}
        </div>
      </Col>
      <Col span={7}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <InputSearch />
        </div>
      </Col>
      <Col span={5}>
        <MenuRight />
      </Col>
    </Row>
  );
}

export default Header;
