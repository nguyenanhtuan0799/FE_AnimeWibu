import React from "react";

import img from "../../image/anime/slideimg.jpg";
import "./CardTop.scss";

function CardTop(props) {
  return (
    <div className="top-card">
      <div
        style={{
          display: "flex",
          margin: "0 16px",
          fontSize: "18px",
        }}
      >
        <div style={{ color: "#1890ff", marginRight: "16px" }}>1</div>
        <div style={{ color: "white" }}>Date A Live</div>
      </div>
      <div
        className="img-top"
        style={{
          backgroundImage: `url(${img})`,
          marginLeft: "20px",
          marginTop: "10px",
          width: "130px",
          height: "130px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}

export default CardTop;
