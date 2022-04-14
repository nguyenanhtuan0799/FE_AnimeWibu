import React from "react";
import img from "../../image/loading/loading.gif";
import "./loadingFullPage.scss";
function LoadingFullPage() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <div class="lds-circle">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingFullPage;
