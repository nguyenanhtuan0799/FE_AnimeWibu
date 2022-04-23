import React from "react";
import { Row, Col } from "antd";
import CardMovie from "../listMovieType/CardMovie";
import { BASE_URL } from "../../constants/constain";
import { HeartOutlined } from "@ant-design/icons";
import axios from "axios";
import "./ListMovie.scss";
import { getStorage } from "../../utils/saveStorage";
function ListMovie() {
  const [items, setItems] = React.useState(null);
  React.useEffect(() => {
    const favorite = getStorage("dataUser").favorite;
    setItems(favorite);
  }, []);
  return (
    <Row>
      <Col span={1} />
      <Col span={22}>
        <div className="list-movie-container">
          <h1>
            <HeartOutlined style={{ marginRight: "20px" }} />
            Favorite
          </h1>
          <div className="list-movie">
            <Row gutter={[32, 32]}>
              {items &&
                items.map((e, i) => (
                  <Col key={i} span={4}>
                    <CardMovie key={i} data={e} />
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </Col>
      <Col span={1} />
    </Row>
  );
}

export default ListMovie;
