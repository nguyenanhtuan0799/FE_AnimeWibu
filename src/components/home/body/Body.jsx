import React from "react";
import { Row, Col, Carousel } from "antd";
import CardSlide from "./CardSlide";
import { Slide } from "react-slideshow-image";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./Body.scss";
import img3 from "../../../image/anime/slideimg.jpg";
import cover from "../../../image/anime/cover.jpg";

function Body() {
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
    margin: "0 8px",
    padding: "0 10px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 6,
    slidesToScroll: 5,
    autoplay: false,
    indicators: false,
    prevArrow: <div style={{ display: "none" }}></div>,
    nextArrow: <div style={{ display: "none" }}></div>,
    canSwipe: false,
  };
  const data = [
    {
      title: "Anime1",
      banner: img3,
      cover: cover,
      decs: "Entertainment community sharing source and architectural formula",
      star: "9.4",
      year: "2022",
      chapter: "24",
      type: ["Action", "Drama", "Fantasy", "Supper Power"],
      path: "/",
    },
    {
      title: "Anime2",
      banner: img3,
      cover: cover,
      decs: "Entertainment community sharing source and architectural formula",
      star: "9.4",
      year: "2022",
      chapter: "24",
      type: ["Action", "Drama", "Fantasy", "Supper Power"],
      path: "/",
    },
    {
      title: "Anime3",
      banner: img3,
      cover: cover,
      decs: "Entertainment community sharing source and architectural formula",
      star: "9.4",
      year: "2022",
      chapter: "24",
      type: ["Action", "Drama", "Fantasy", "Supper Power"],
      path: "/",
    },
    {
      title: "Anime4",
      banner: img3,
      cover: cover,
      decs: "Entertainment community sharing source and architectural formula",
      star: "9.4",
      year: "2022",
      chapter: "24",
      type: ["Action", "Drama", "Fantasy", "Supper Power"],
      path: "/",
    },
    {
      title: "Anime5",
      banner: img3,
      cover: cover,
      decs: "Entertainment community sharing source and architectural formula",
      star: "9.4",
      year: "2022",
      chapter: "24",
      type: ["Action", "Drama", "Fantasy", "Supper Power"],
      path: "/",
    },
    {
      title: "Anime6",
      banner: img3,
      cover: cover,
      decs: "Entertainment community sharing source and architectural formula",
      star: "9.4",
      year: "2022",
      chapter: "24",
      type: ["Action", "Drama", "Fantasy", "Supper Power"],
      path: "/",
    },
  ];
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
        <Slide ref={ElRef} {...properties}>
          {data.map((e, i) => (
            <div key={i} style={style}>
              <CardSlide {...e} />
            </div>
          ))}
        </Slide>
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
