import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import CardMovie from "./CardMovie";
import axios from "axios";
import { BASE_URL } from "../../constants/constain";

import "./ListMovie.scss";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Hearts, ThreeDots, BallTriangle } from "@agney/react-loading";

function ListMovie() {
  const NUMBER_PAGE = 1;
  const { type } = useParams();
  const [items, setItems] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(NUMBER_PAGE);

  useEffect(() => {
    const getGenresAnime = async () => {
      const res = await axios.get(`${BASE_URL}/genres/${type}?page=1`);
      setTotalPage(res.data.pagination);
      setHasMore(true);
      const arr = res.data.data.map((data) => {
        const res1 = axios.get(`${BASE_URL}/anime/${data.slug}`);
        return res1;
      });
      let info = await Promise.all(arr).then((value) => value);
      if (info !== null && info !== undefined) {
        const data1 = info.reduce((init, element) => {
          const e = element.data.data;
          return [...init, e];
        }, []);

        const data = data1.map((data, i) => {
          return { ...data, ...res.data.data[i] };
        });
        setItems(data);
        setPage(page + 1);
      }
    };
    getGenresAnime();
  }, [type]);
  const getGenresAnime = async () => {
    const res = await axios.get(`${BASE_URL}/genres/${type}?page=${page}`);
    const arr = res.data.data.map((data) => {
      const res1 = axios.get(`${BASE_URL}/anime/${data.slug}`);
      return res1;
    });
    let info = await Promise.all(arr).then((value) => value);
    if (info !== null && info !== undefined) {
      const data1 = info.reduce((init, element) => {
        const e = element.data.data;
        return [...init, e];
      }, []);

      const data = data1.map((data, i) => {
        return { ...data, ...res.data.data[i] };
      });
      return data;
    }
  };
  const fetchData = async () => {
    const data = await getGenresAnime();
    setItems([...items, ...data]);
    if (page <= totalPage.totalPage) {
      setPage(page + 1);
    } else {
      setHasMore(false);
    }
    // setHasMore(false);
  };
  ///////

  /// Code Thuần React;
  // const [loadMore, setLoadMore] = React.useState(false);
  // const getData = (loadMore) => {
  //   if (loadMore) setStorage((prev) => [...prev, ...data]);
  // };
  // React.useEffect(() => {
  //   // getData(loadMore);
  //   setLoadMore(false);
  // }, [loadMore]);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = (e) => {
  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >=
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     setLoadMore(true);
  //   }
  // };
  //   const handleClick = () => {
  //     setLoadMore(true);
  //   };
  const loader = (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BallTriangle width="50" style={{ color: "rgb(25, 118, 210)" }} />
      <h4
        style={{
          color: "rgb(25, 118, 210)",
          fontSize: "24px",
          transform: "translateY(12px)",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        Loading
      </h4>
      <ThreeDots
        width="50"
        style={{
          color: "rgb(25, 118, 210)",
          transform: "translateY(9px)",
        }}
      />
    </div>
  );

  return (
    <Row>
      <Col span={1}></Col>
      <Col span={22}>
        <InfiniteScroll
          style={{ overflow: "none", margin: "16px 0" }}
          dataLength={items !== null && items.length > 0 && items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={loader}
          endMessage={
            <p style={{ textAlign: "center", color: "white" }}>
              <b>
                <Hearts
                  width="50"
                  style={{
                    color: "red",
                    marginRight: "10px",
                    transform: "translateY(3px)",
                  }}
                />
                Yay! You have seen it all
              </b>
            </p>
          }
        >
          <Row gutter={[16, 16]}>
            {items !== null &&
              items.length > 0 &&
              items.map((e, i) => (
                <Col key={i} span={4}>
                  <CardMovie data={e} />
                </Col>
              ))}
          </Row>
        </InfiniteScroll>
        {/* <div onClick={handleClick}>click</div> */}
      </Col>
      <Col span={1}></Col>
    </Row>
  );
}

export default ListMovie;
