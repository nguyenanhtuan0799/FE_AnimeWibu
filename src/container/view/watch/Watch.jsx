import React from "react";
import { Row, Col } from "antd";

function Watch() {
  return (
    <div
      style={{ backgroundColor: "#111319", marginTop: "80px", height: "100vh" }}
    >
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Row>
            <div>
              <Col span={24}>
                <div></div>
                <div></div>
              </Col>
            </div>
          </Row>
          <Row>
            <Col span={12}>
              <div></div>
              <div></div>
            </Col>
            <Col span={12}></Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
}

export default Watch;
