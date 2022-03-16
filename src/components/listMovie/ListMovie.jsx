import React from "react";
import { Row, Col } from "antd";
import CardMovie from "./CardMovie";
import { data } from "./data";
import "./ListMovie.scss";

function ListMovie() {
  const [storage, setStorage] = React.useState(data);
  const [state, setState] = React.useState("");

  return (
    <Row>
      <Col span={1}></Col>
      <Col span={22}>
        <Row>
          {storage.map((e, i) => (
            <Col key={i} span="4">
              <CardMovie {...e} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={1}></Col>
    </Row>
  );
}

export default ListMovie;
