import React from "react";
import img from "../../image/anime/img1.jpg";
import "./Slide.scss";
import SubSlide from "./SubSlide";
function Slide({ data }) {
  return (
    <>
      <div
        className="slide-movie"
        style={{
          position: "relative",
          backgroundImage: `url(${data.thumbnail})`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <SubSlide data={data} />
    </>
  );
}

export default Slide;
