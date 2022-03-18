import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
const { Item } = Menu;
function Type({ title }) {
  const type = [
    "Adventure",
    "Bishojo",
    "Fantasy",
    "Harem",
    "Yaoi",
    "Yuri",
    "Scifi",
    "Kodomo",
    "Horror",
    "Romance",
    "Sports",
    "Comedy",
    "Detective",
    "Vampire",
    "Shojo",
    "Shonen",
    "Ecchi",
    "Hentai",
    "School",
    "Supper Power",
  ];
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
            <Link className="type-item" to={`/type/` + e.toLowerCase()}>
              {e}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <Dropdown
      overlay={title === "Thể Loại" ? menuType(type) : menuType(year)}
      placement="bottomLeft"
      arrow={{ pointAtCenter: true }}
    >
      <div className="tab-link">{title}</div>
    </Dropdown>
  );
}

export default Type;
