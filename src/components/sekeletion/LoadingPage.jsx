import React from "react";
import { TwinSpin } from "react-cssfx-loading";
function LoadingPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TwinSpin
        style={{ margin: "auto" }}
        width="60px"
        height="60px"
        duration="3s"
      />
    </div>
  );
}

export default LoadingPage;
