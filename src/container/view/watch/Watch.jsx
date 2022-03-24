import React from "react";
import { Row, Col, Divider, Tabs, Typography, Button } from "antd";

import { Link, useParams } from "react-router-dom";
import CardTop from "../../../components/top/CardTop";
import VideoPlay from "../../../components/watch/VideoPlay";
import BodyWatch from "../../../components/watch/BodyWatch";
import { useSelector, useDispatch } from "react-redux";
import {
  getEpisodesAnime,
  getInfomationAnime,
} from "../../../redux/actions/actions";
import "./Watch.scss";

function Watch() {
  const { slugname, slug, id } = useParams();
  const state = useSelector((s) => s.infoAnimeApp);
  const { episodesAnime, infoAnime } = state;
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getEpisodesAnime1 = async () => {
      await getEpisodesAnime(dispatch, slug, id);
      await getInfomationAnime(dispatch, slugname);
    };
    getEpisodesAnime1();
  }, [id, slug, slugname]);

  return (
    <div
      style={{
        backgroundColor: "#111319",
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Row>
            <Col span={24}>
              <VideoPlay
                id={id}
                data={episodesAnime !== null && episodesAnime}
                dataName={infoAnime !== null && infoAnime}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ display: "flex" }}>
                <BodyWatch
                  data={episodesAnime !== null && episodesAnime}
                  dataName={infoAnime !== null && infoAnime}
                />
                <div
                  style={{
                    width: "18vw",
                    height: "100%",
                    marginTop: "16px",
                  }}
                >
                  <p
                    style={{
                      marginLeft: "20px",
                      marginTop: "16px",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    Bảng Xếp Hạng
                  </p>
                  <Divider />
                  {/* {data.map((e, i) => (
                    <CardTop key={i} />
                  ))} */}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
}

export default Watch;
