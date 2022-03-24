import React from "react";
import { Card } from "antd";
import preview from "../../image/anime/preview.jpg";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
function Chapter({ data, slug, slugName, index }) {
  return (
    <Link to={`/movie/${slugName}/${slug}/watch/${index}`}>
      <div style={{ width: "100%", position: "relative" }} className="chapter">
        <img
          alt="example"
          src={data.thumbnail_medium}
          style={{ width: "100%" }}
        />
        <span
          className="chapter-title"
          style={{
            marginLeft: "6px",
            marginTop: "10px",
            display: "block",
            fontSize: "18px",
          }}
        >
          {data.full_name}
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
    </Link>
  );
}

export default Chapter;
