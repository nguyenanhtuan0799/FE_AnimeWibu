import React from "react";
import { Row, Col, Typography, Button, Divider, Dropdown } from "antd";
import {
  PlayCircleOutlined,
  StarOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Text, Title } = Typography;

function SubBaner(props) {
  const menu = <p style={{ color: "white" }}>Thêm vào lưu trữ</p>;
  return (
    <div
      style={{
        width: "600px",
        position: "absolute",
        top: "40%",
        marginLeft: "140px",
        zIndex: 99,
      }}
    >
      <Row>
        <Col span={24}>
          <img style={{ width: "70%" }} src={props.img} alt="title" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title style={{ color: "white" }} level={2}>
            {props.title}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text style={{ color: "white" }}>
            {props.star} <StarOutlined />
          </Text>
          <Divider type="vertical" />

          <Text style={{ color: "white" }}>{props.year}</Text>
          <Divider type="vertical" />
          <Text style={{ color: "white" }}>{props.chapter} Tập</Text>
        </Col>
        <Col span={24}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              margin: "12px 0",
            }}
          >
            {props.type.map((element, i) => (
              <div
                key={i}
                style={{
                  margin: "5px 4px 10px 0",
                  padding: "1px 8px",
                  fontSize: "16px",
                  backgroundColor: "#1976d2",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                {element}
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text style={{ fontSize: "18px", color: "white" }}>{props.decs}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ marginTop: "20px" }}>
            <Link to={props.path}>
              <Button
                type="primary"
                shape="round"
                icon={<PlayCircleOutlined />}
                size="large"
                style={{ marginRight: "30px" }}
              />
            </Link>
            <Link to="/asd">
              <Dropdown overlay={menu}>
                <Button
                  type="primary"
                  shape="round"
                  icon={<HeartFilled />}
                  size="large"
                />
              </Dropdown>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SubBaner;
