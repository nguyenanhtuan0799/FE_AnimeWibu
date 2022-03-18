import React from "react";
import playing from "../../image/play.gif";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import video from "../../video/video.mp4";
const data = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];

function VideoPlay({ id }) {
  return (
    <div style={{ height: "71vh", display: "flex" }}>
      <div style={{ width: "66vw", height: "100%" }}>
        <ReactPlayer
          controls={true}
          playing={true}
          width="100%"
          height="100%"
          url={video}
        />
      </div>
      <div
        style={{
          backgroundColor: "rgb(26 28 34)",
          width: "18vw",
          height: "100%",
        }}
      >
        <div>
          <Row>
            <Col span={24}>
              <Link to="/">
                <h1 style={{ color: "white", margin: "24px" }}>Date A Live</h1>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div
                style={{
                  color: "white",
                  padding: "16px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  width: "100%",
                  backgroundColor: "rgb(45 47 52)",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <div
                  style={{
                    width: "13px",
                    height: "11px",
                    backgroundImage: `url(${playing})`,
                    marginRight: "10px",
                  }}
                />
                <div>Chọn Tập</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div
                id="style-1"
                style={{
                  margin: "40px 0 16px 16px",
                  height: "500px",
                  overflowY: "auto",
                  overflowX: "hidden",
                  paddingRight: " 16px",
                }}
              >
                <Row gutter={[8, 8]}>
                  {data.map((e, i) => (
                    <Col key={i} span={4}>
                      <div
                        style={{
                          textAlign: "center",
                          backgroundColor: "rgb(35 37 43)",
                          padding: "10px",
                          color:
                            Number.parseInt(id) === i + 1 ? "#1890ff" : "white",
                        }}
                      >
                        {i + 1}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default VideoPlay;
