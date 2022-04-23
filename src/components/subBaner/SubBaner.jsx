import React from "react";
import { Row, Col, Typography, Button, Divider, Dropdown } from "antd";
import {
  PlayCircleOutlined,
  StarOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getImageAnime } from "../../redux/actions/actions";
const { Text, Title } = Typography;

function SubBaner(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    getImageAnime(dispatch, props.avatar);
  };
  const menu = <p style={{ color: "white" }}>Thêm vào lưu trữ</p>;
  return (
    <div
      style={{
        width: "600px",
        position: "absolute",
        top: "25%",
        marginLeft: "100px",
        zIndex: 99,
      }}
    >
      <Row>
        <Col span={24}>
          <img style={{ width: "70%" }} src={props.banner} alt="title" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title
            style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
            level={2}
          >
            {props.name}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text style={{ color: "white", fontSize: "22px" }}>
            {props.views} <StarOutlined />
          </Text>
          <Divider type="vertical" />

          <Text style={{ color: "white", fontSize: "22px" }}>2022</Text>
          <Divider type="vertical" />
          <Text style={{ color: "white", fontSize: "20px" }}>
            {props.episodes.length} Tập
          </Text>
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
            {props.genres.map((element, i) => (
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
                {element.name}
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Text style={{ fontSize: "18px", color: "white" }}>
            {props.description}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ marginTop: "20px" }}>
            <Link to={`/movie/${props.slug}`}>
              <Button
                onClick={handleClick}
                type="primary"
                shape="round"
                icon={<PlayCircleOutlined />}
                size="large"
                style={{ marginRight: "30px" }}
              />
            </Link>
            <Link to="">
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
