import React from "react";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import SubBaner from "../../subBaner/SubBaner";
import titleBaner from "../../../image/anime/titleBaner.png";
import "./SlideShow.scss";
import img2 from "../../../image/anime/img2.jpg";
import img1 from "../../../image/anime/img1.jpg";
import img3 from "../../../image/anime/img3.jpg";
import img4 from "../../../image/anime/img4.jpg";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const data = [
  {
    avatar: img1,
    img: titleBaner,
    title: "Entertainment1",
    star: "9.4",
    year: "2022",
    chapter: "24",
    type: ["Action", "Drama", "Fantasy", "Supper Power"],
    decs: "Entertainment community sharing source and architectural formula technology knowledge Entertainment community sharing source and  architectural formula technology knowledge Entertainment community sharing source and architectural formula technology knowledge",
    path: "/",
  },
  {
    avatar: img2,
    img: titleBaner,
    title: "Entertainment2",
    star: "9.4",
    year: "2022",
    chapter: "24",
    type: ["Action", "Drama", "Fantasy", "Supper Power"],
    decs: "Entertainment community sharing source and architectural formula technology knowledge Entertainment community sharing source and  architectural formula technology knowledge Entertainment community sharing source and architectural formula technology knowledge",
    path: "/",
  },
  {
    avatar: img3,
    img: titleBaner,
    title: "Entertainment3",
    star: "9.4",
    year: "2022",
    chapter: "24",
    type: ["Action", "Drama", "Fantasy", "Supper Power"],
    decs: "Entertainment community sharing source and architectural formula technology knowledge Entertainment community sharing source and  architectural formula technology knowledge Entertainment community sharing source and architectural formula technology knowledge",
    path: "/",
  },
  {
    avatar: img4,
    img: titleBaner,
    title: "Entertainment4",
    star: "9.4",
    year: "2022",
    chapter: "24",
    type: ["Action", "Drama", "Fantasy", "Supper Power"],
    decs: "Entertainment community sharing source and architectural formula technology knowledge Entertainment community sharing source and  architectural formula technology knowledge Entertainment community sharing source and architectural formula technology knowledge",
    path: "/",
  },
];

function SliderShow() {
  const ElRef = React.useRef();
  const handleClickNext = () => {
    ElRef.current.next();
  };
  const handleClickPrev = () => {
    ElRef.current.prev();
  };

  return (
    <>
      <Carousel ref={ElRef} autoplay>
        {data.map(({ avatar, ...rest }, i) => (
          <div
            style={{ position: "relative", height: "100vh", width: "100%" }}
            key={i}
          >
            <div
              className="slide-item"
              style={{
                position: "relative",
                backgroundImage: `url(${avatar})`,
                height: "100vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              <SubBaner {...rest} />
            </div>
          </div>
        ))}
      </Carousel>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 30,
          fontSize: "24px",
          opacity: 0.8,
        }}
        onClick={handleClickNext}
      >
        <RightOutlined />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 30,
          fontSize: "24px",
          opacity: 0.8,
        }}
        onClick={handleClickPrev}
      >
        <LeftOutlined />
      </div>
    </>
  );
}

export default SliderShow;
