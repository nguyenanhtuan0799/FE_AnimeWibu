import React, { useEffect } from "react";
import SliderShow from "../../components/home/sliderShow/SliderShow";
import Body from "../../components/home/body/Body";
import { Row, Col } from "antd";
import { FireOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  getTrendingAnimeDay,
  getTrendingAnimeMonth,
  getTrendingAnimeYear,
} from "../../redux/actions/actions";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.infoAnimeApp);
  const { trendingAnimeDay, trendingAnimeMonth, trendingAnimeYear } = state;

  useEffect(() => {
    getTrendingAnimeDay(dispatch);
    getTrendingAnimeMonth(dispatch);
    getTrendingAnimeYear(dispatch);
  }, []);
  return (
    <>
      <div>
        <Row>
          <Col span={24}>
            <div>
              <SliderShow />
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Row>
          <Col span={1} />
          <Col span={23}>
            <span
              style={{
                color: "white",
                marginLeft: "18px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Anime Hot Trong Ngày
              <FireOutlined
                style={{ color: "red", fontSize: "30px", marginLeft: "10px" }}
              />
            </span>
          </Col>
          <Col span={24}>
            <Body data={trendingAnimeDay} />
          </Col>
        </Row>
        <Row>
          <Col span={1} />
          <Col span={23}>
            <span
              style={{
                color: "white",
                marginLeft: "18px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Anime Hot Trong Tháng
              <FireOutlined style={{ color: "red", fontSize: "30px" }} />
            </span>
          </Col>
          <Col span={24}>
            <Body data={trendingAnimeMonth} />
          </Col>
        </Row>
        <Row>
          <Col span={1} />
          <Col span={23}>
            <span
              style={{
                color: "white",
                marginLeft: "18px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Anime Hot Trong Năm
              <FireOutlined style={{ color: "red", fontSize: "30px" }} />
            </span>
          </Col>
          <Col span={24}>
            <Body data={trendingAnimeYear} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
