import React from "react";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import SubBaner from "../../subBaner/SubBaner";
import { useSelector, useDispatch } from "react-redux";
import { getAnimeSlide } from "../../../redux/actions/actions";
import "./SlideShow.scss";

function SliderShow() {
  const ElRef = React.useRef();
  const state = useSelector((e) => e.infoAnimeApp);
  const { animeSlide } = state;
  const dispatch = useDispatch();
  const handleClickNext = () => {
    ElRef.current.next();
  };
  const handleClickPrev = () => {
    ElRef.current.prev();
  };
  React.useEffect(() => {
    getAnimeSlide(dispatch);
  }, []);

  return (
    <>
      <Carousel ref={ElRef} autoplay>
        {animeSlide != null &&
          animeSlide.map(({ avatar, ...rest }, i) => (
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
                <SubBaner avatar={avatar} {...rest} />
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
