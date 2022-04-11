import React, { useLayoutEffect } from "react";
import { BackTop } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";
function ButtonScrollToTop({ children }) {
  const style = {
    height: 50,
    width: 50,
    lineHeight: "50px",
    borderRadius: 8,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  };
  return (
    <div>
      {children}
      <BackTop>
        <div style={style}>
          <CaretUpOutlined />
        </div>
      </BackTop>
    </div>
  );
}

export default ButtonScrollToTop;
