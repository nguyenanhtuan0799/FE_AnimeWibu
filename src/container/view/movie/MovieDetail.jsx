import React, { useState } from "react";
import { Row, Col } from "antd";
import Slide from "../../../components/movie/Slide";
import ListChapter from "../../../components/movie/ListChapter";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../../../components/sekeletion/LoadingPage";
import { getInfomationAnime } from "../../../redux/actions/actions";
function MovieDetail() {
  const state = useSelector((s) => s.infoAnimeApp);
  const { infoAnime } = state;
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const getInfoAnime = async () => {
      await getInfomationAnime(dispatch, slug);
      setLoading(true);
    };
    getInfoAnime();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Row>
            <Col span={24}>
              <Slide data={infoAnime !== null && infoAnime} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ListChapter data={infoAnime !== null && infoAnime} />
            </Col>
          </Row>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default MovieDetail;
