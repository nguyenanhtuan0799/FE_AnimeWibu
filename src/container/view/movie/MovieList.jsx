import React from "react";
import SliderShow from "../../../components/home/sliderShow/SliderShow";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { TagsOutlined } from "@ant-design/icons";
import ListMovie from "../../../components/listMovie/ListMovie";
import { typeC } from "../../../constain/constain";

function MovieList() {
  const { type } = useParams();

  return (
    <div>
      <Row>
        <Col span={24}>
          <SliderShow />
        </Col>
      </Row>
      <Row>
        <Col span={1}></Col>
        <Col span={22}>
          <div style={{ color: "white", fontSize: "22px", marginLeft: "20px" }}>
            <TagsOutlined style={{ marginRight: "10px", color: "#1890ff" }} />
            {typeC.map((e, i) => e.slug === type && e.name)}
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={24}>
          <ListMovie />
        </Col>
      </Row>
    </div>
  );
}

export default MovieList;
