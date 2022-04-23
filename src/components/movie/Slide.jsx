import React from "react";
import img from "../../image/anime/img1.jpg";
import "./Slide.scss";
import SubSlide from "./SubSlide";
import { useSelector, useDispatch } from "react-redux";
function Slide({ data }) {
  const state = useSelector((s) => s.infoAnimeApp);
  const { imageAnime } = state;
  return (
    <>
      <div
        className="slide-movie"
        style={{
          position: "relative",
          backgroundImage: `url(${imageAnime})`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <SubSlide data={data} imageAnime={imageAnime} />
    </>
  );
}

export default Slide;
