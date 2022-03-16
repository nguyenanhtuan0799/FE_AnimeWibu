import React from "react";
import { Card } from "antd";
import preview from "../../image/anime/preview.jpg";
import { PlayCircleOutlined } from "@ant-design/icons";
const { Meta } = Card;
function Chapter({ props }) {
  return (
    <div style={{ width: "100%", position: "relative" }} className="chapter">
      <img alt="example" src={preview} style={{ width: "100%" }} />
      <span
        className="chapter-title"
        style={{
          marginLeft: "6px",
          marginTop: "10px",
          display: "block",
          fontSize: "18px",
        }}
      >
        Anime Tập {props}
      </span>
      <div
        className="chapter-icon"
        style={{
          fontSize: "40px",
          color: "#1890ff",
          position: "absolute",
          bottom: "30px",
          right: "10px",
        }}
      >
        <PlayCircleOutlined />
      </div>
    </div>
  );
}

export default Chapter;
