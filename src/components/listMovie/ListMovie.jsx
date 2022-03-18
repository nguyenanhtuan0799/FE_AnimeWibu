import React from "react";
import { Row, Col } from "antd";
import CardMovie from "./CardMovie";
import { data } from "./data";
import "./ListMovie.scss";
import { useParams } from "react-router-dom";

function ListMovie() {
  const { type } = useParams();
  const [storage, setStorage] = React.useState(data);
  const [loadMore, setLoadMore] = React.useState(false);
  const getData = (loadMore) => {
    if (loadMore) setStorage((prev) => [...prev, ...data]);
  };
  React.useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setLoadMore(true);
    }
  };
  //   const handleClick = () => {
  //     setLoadMore(true);
  //   };

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
        {/* <div onClick={handleClick}>click</div> */}
      </Col>
      <Col span={1}></Col>
    </Row>
  );
}

export default ListMovie;
