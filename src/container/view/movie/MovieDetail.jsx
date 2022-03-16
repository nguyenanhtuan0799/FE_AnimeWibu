import React from "react";
import { Row, Col } from "antd";
import Slide from "../../../components/movie/Slide";
import ListChapter from "../../../components/movie/ListChapter";
function MovieDetail() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Slide />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ListChapter />
        </Col>
      </Row>
    </>
  );
}

export default MovieDetail;
