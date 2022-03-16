import React from "react";
import { Row, Col, Typography, Button, Divider, Dropdown } from "antd";
import {
  PlayCircleOutlined,
  StarOutlined,
  HeartFilled,
  ClockCircleOutlined,
  CheckOutlined,
  ShareAltOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const { Text, Title } = Typography;

function SubSlide() {
  const data = {
    title: "Date A Live (Session 1)",
    banner: "img3",
    cover: "cover",
    decs: "Entertainment community sharing source and architectural formuntertainment community sharing source and architectural formasd asd qweasafw tertainment community sharing source and architectural formu tertainment community sharing source and architectural formula",
    star: "9.4",
    year: "2022",
    chapter: "24",
    type: ["Action", "Drama", "Fantasy", "Supper Power"],
    check: false,
    path: "/",
  };
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "36%",
        zIndex: "2",
        left: "3%",
        width: "640px",
        padding: "10px",
      }}
    >
      <Row>
        <Col span={24}>
          <Title
            style={{ color: "white", fontSize: "50px", fontWeight: "bold" }}
            level={2}
          >
            {data.title}
          </Title>
        </Col>
        <Col span={24}>
          <Text style={{ color: "white", fontSize: "24px" }}>
            {data.star} <StarOutlined />
          </Text>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "white",
              fontSize: "20px",
              transform: "translateY(-2px)",
            }}
          />

          <Text style={{ color: "white", fontSize: "24px" }}>{data.year}</Text>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "white",
              fontSize: "20px",
              transform: "translateY(-2px)",
            }}
          />
          <Text style={{ color: "white", fontSize: "20px" }}>
            {data.chapter} / {data.chapter} Tập
          </Text>
        </Col>
        <Col span={24}>
          <Text
            style={{
              color: "white",
              fontSize: "20px",
              margin: "12px 0",
              display: "block",
            }}
          >
            Tình Trạng :{data.check ? " Hoàn Thành " : " Chưa Hoàn Thành "}
            {data.check ? <CheckOutlined /> : <ClockCircleOutlined />}
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
            {data.type.map((element, i) => (
              <div
                key={i}
                style={{
                  margin: "5px 8px 10px 0",
                  padding: "2px 10px",
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
        <Col span={24}>
          <Text style={{ fontSize: "18px", color: "white" }}>{data.decs}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ marginTop: "20px" }}>
            <Link to={data.path}>
              <Button
                type="primary"
                shape="round"
                icon={<PlayCircleOutlined />}
                size="large"
                style={{ marginRight: "10px" }}
              >
                Xem Anime
              </Button>
            </Link>
            <Link to="/asd">
              <Button
                type="primary"
                shape="round"
                icon={<HeartFilled />}
                size="large"
                style={{ margin: "0 10px" }}
              >
                Theo Dõi
              </Button>
            </Link>
            <Link to="/asd">
              <Button
                type="primary"
                shape="round"
                icon={<ShareAltOutlined />}
                size="large"
                style={{ margin: "0 10px" }}
              >
                Theo Dõi
              </Button>
            </Link>
            <AnchorLink href="#scroll">
              <Button
                type="primary"
                shape="round"
                icon={<UnorderedListOutlined />}
                size="large"
                style={{ margin: "0 10px" }}
              >
                Chọn Tập
              </Button>
            </AnchorLink>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SubSlide;
