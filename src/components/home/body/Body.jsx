import React from "react";
import { Row, Col } from "antd";
import CardSlide from "./CardSlide";
import { Slide } from "react-slideshow-image";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { ShimmerThumbnail } from "react-shimmer-effects";
import "./Body.scss";

function Body({ data }) {
  ///
  const ElRef = React.useRef();
  const handleClickNext = () => {
    ElRef.current.goNext();
  };
  const handleClickPrev = () => {
    ElRef.current.goBack();
  };
  const style = {
    textAlign: "center",
    fontSize: "30px",
    margin: "0 4px",
    padding: "0 4px",
    height: "46vh",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    indicators: false,
    prevArrow: <div style={{ display: "none" }}></div>,
    nextArrow: <div style={{ display: "none" }}></div>,
    canSwipe: false,
  };

  return (
    <Row>
      <Col span={1}>
        <div
          style={{
            color: "white",
            fontSize: "24px",
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
          onClick={handleClickPrev}
        >
          <LeftOutlined />
        </div>
      </Col>
      <Col span={22}>
        {
          <Slide ref={ElRef} {...properties}>
            {data !== null &&
              data.map((e, i) => (
                <div key={i} style={style}>
                  <CardSlide data={e} />
                </div>
              ))}
          </Slide>
        }
      </Col>
      <Col span={1}>
        <div
          style={{
            color: "white",
            fontSize: "24px",
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
          onClick={handleClickNext}
        >
          <RightOutlined />
        </div>
      </Col>
    </Row>
  );
}

export default Body;
