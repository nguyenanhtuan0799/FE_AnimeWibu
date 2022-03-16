import React from "react";
import SliderShow from "../../components/home/sliderShow/SliderShow";
import Body from "../../components/home/body/Body";
import { Row, Col } from "antd";
import { FireOutlined } from "@ant-design/icons";
function Home() {
  return (
    <>
      <div>
        <Row>
          <Col span={24}>
            <div>
              <SliderShow />
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Row>
          <Col span={1} />
          <Col span={23}>
            <span
              style={{
                color: "white",
                marginLeft: "18px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Anime Hot
              <FireOutlined
                style={{ color: "red", fontSize: "30px", marginLeft: "10px" }}
              />
            </span>
          </Col>
          <Col span={24}>
            <Body />
          </Col>
        </Row>
        <Row>
          <Col span={1} />
          <Col span={23}>
            <span
              style={{
                color: "white",
                marginLeft: "18px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              VietSub
              <FireOutlined style={{ color: "red", fontSize: "30px" }} />
            </span>
          </Col>
          <Col span={24}>
            <Body />
          </Col>
        </Row>
        <Row>
          <Col span={1} />
          <Col span={23}>
            <span
              style={{
                color: "white",
                marginLeft: "18px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              EngSub
              <FireOutlined style={{ color: "red", fontSize: "30px" }} />
            </span>
          </Col>
          <Col span={24}>
            <Body />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
