import React from "react";
import img from "../../image/anime/img1.jpg";
import "./Slide.scss";
import SubSlide from "./SubSlide";
function Slide() {
  return (
    <>
      <div
        className="slide-movie"
        style={{
          position: "relative",
          backgroundImage: `url(${img})`,
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <SubSlide />
    </>
  );
}

export default Slide;
