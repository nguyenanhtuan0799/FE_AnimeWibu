import React from "react";
import img from "../../image/loading/loading.gif";
import "./loadingFullPage.scss";
function LoadingFullPage() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <img className="img" src={img} alt="loading" />
      </div>
    </div>
  );
}

export default LoadingFullPage;
