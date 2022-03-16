import React from "react";
import { Row, Col } from "antd";
import Slide from "../../../components/movie/Slide";
import ListChapter from "../../../components/movie/ListChapter";
import { useParams } from "react-router-dom";
function MovieDetail() {
  const { id } = useParams();
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
