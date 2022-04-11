import React, { useEffect, useState } from "react";
import SliderShow from "../../components/home/sliderShow/SliderShow";
import Body from "../../components/home/body/Body";
import { Row, Col } from "antd";
import { FireOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../../components/sekeletion/LoadingPage";
import {
  getTrendingAnimeDay,
  getTrendingAnimeMonth,
  getTrendingAnimeYear,
  getAnimeSlide,
} from "../../redux/actions/actions";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state.infoAnimeApp);
  const {
    trendingAnimeDay,
    trendingAnimeMonth,
    trendingAnimeYear,
    animeSlide,
  } = state;

  useEffect(() => {
    if (
      trendingAnimeDay !== null &&
      trendingAnimeMonth !== null &&
      trendingAnimeYear !== null &&
      animeSlide !== null
    ) {
      setLoading(true);
    }
  }, [trendingAnimeDay, trendingAnimeMonth, trendingAnimeYear, animeSlide]);
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
      {loading ? (
        <>
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
                    style={{
                      color: "red",
                      fontSize: "30px",
                      marginLeft: "10px",
                    }}
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
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default Home;
