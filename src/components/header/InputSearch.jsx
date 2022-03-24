import React from "react";
import { Input, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import img from "../../image/anime/img1.jpg";
function InputSearch() {
  const CardSearch = () => {
    return (
      <div style={{ display: "flex", marginTop: "6px" }}>
        <div
          style={{
            backgroundImage: `url(${img})`,
            width: "100px",
            height: "8vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ margin: "2px 0 2px 24px", color: "white" }}>
            Date A Live
          </span>
          <span style={{ margin: "2px 0 2px 24px", color: "white" }}>
            12 Tập
          </span>
          <span style={{ margin: "2px 0 2px 24px", color: "white" }}>
            1231231 views
          </span>
        </div>
      </div>
    );
  };
  const menu = (
    <div
      style={{
        position: "relative",
        width: "380px",
        height: "24vh",
        backgroundColor: "rgba(25, 25, 25, 0.9)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20vh",
          padding: "12px",
          overflowY: "auto",
        }}
      >
        <CardSearch />
        <CardSearch />
        <CardSearch />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "6px",
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(25, 118, 210)",
            width: "100px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          Search
          <SearchOutlined style={{ marginLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
  return (
    <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Input style={{ width: "380px" }} placeholder="Search Anime" allowClear />
    </Dropdown>
  );
}

export default InputSearch;
