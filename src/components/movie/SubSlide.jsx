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
import { useDispatch, useSelector } from "react-redux";
import { updateFavorite } from "../../redux/actions/actions";
const { Text, Title } = Typography;

function SubSlide({ data, imageAnime }) {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    const format = {
      ...data,
      thumbnail: imageAnime,
    };
    updateFavorite(dispatch, format);
  };
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        top: "24%",
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
            {data.name}
          </Title>
        </Col>
        <Col span={24}>
          <Text style={{ color: "white", fontSize: "24px" }}>
            {data.views} <StarOutlined />
          </Text>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "white",
              fontSize: "20px",
              transform: "translateY(-2px)",
            }}
          />

          <Text style={{ color: "white", fontSize: "24px" }}>2020</Text>
          <Divider
            type="vertical"
            style={{
              backgroundColor: "white",
              fontSize: "20px",
              transform: "translateY(-2px)",
            }}
          />
          <Text style={{ color: "white", fontSize: "20px" }}>
            {data.episodes ? data.episodes.length : 0} Tập
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
            Tình Trạng :
            {data.episodes && data.episodes.length > 0
              ? "  Đang Tiến Hành"
              : "Chưa Phát Hành"}
            {data.episodes && data.episodes.length > 0 ? (
              <ClockCircleOutlined />
            ) : (
              <CheckOutlined />
            )}
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
            {data.genres &&
              data.genres.map((element, i) => (
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
                  {element.name}
                </div>
              ))}
          </div>
        </Col>
        <Col span={24}>
          <Text
            className="des-subslide"
            style={{ fontSize: "18px", color: "white" }}
          >
            {data.description}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ marginTop: "20px" }}>
            <Link
              to={
                data.episodes && data.episodes.length > 0
                  ? `/movie/${data.slug}/${data.id}/watch/0`
                  : `/movie/${data.slug}`
              }
            >
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
                onClick={handleFavorite}
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
