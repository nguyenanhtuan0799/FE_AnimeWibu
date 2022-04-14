import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { typeC } from "../../../constants/constain";
const { Item } = Menu;
function Type({ title }) {
  const year = [
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
  ];
  const menuType = (data) => (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          background: "rgba(25, 25, 25, 0.9)",
          borderRadius: "10px",
          width: title === "Thể Loại" ? "720px" : "300px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px 10px 10px 10px",
        }}
      >
        {data.map((e, i) => (
          <div
            style={{
              minWidth: "130px",
              margin: "4px",
              padding: "8px",
              textAlign: "left",
            }}
            key={i}
          >
            <Link className="type-item" to={`/type/${e.slug}`}>
              {e.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <Dropdown
      overlay={title === "Thể Loại" ? menuType(typeC) : menuType(year)}
      placement="bottomLeft"
      arrow={{ pointAtCenter: true }}
    >
      <div className="tab-link">{title}</div>
    </Dropdown>
  );
}

export default Type;
