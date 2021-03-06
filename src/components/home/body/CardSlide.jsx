import React, { useEffect } from "react";
import { Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInfomationAnime } from "../../../redux/actions/actions";
import { getImageAnime } from "../../../redux/actions/actions";

function CardSlide({ data }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    getImageAnime(dispatch, data.thumbnail);
  };
  return (
    <div className="card-container">
      <div className="overlay">
        <Link to={`/movie/${data.slug}`}>
          <div
            onClick={handleClick}
            style={{
              boxShadow: "2px 4px 10px  #000",
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative",
              padding: "0",
              height: "100%",
            }}
          >
            <img alt={data.name} src={data.thumbnail} className="img-card1" />
            <img alt={data.name} src={data.thumbnail} className="img-card" />
            <div
              className="title"
              style={{
                position: "absolute",
                bottom: "0",
                background: "rgba(17, 19, 25,0.7)",
                width: "100%",
                color: "white",
                fontSize: "22px",
              }}
            >
              {data.name}
            </div>

            <div className="card-body" style={{ margin: "0 14px" }}>
              <div
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "8px",
                }}
              >
                <p style={{ margin: "0" }}>{data.name}</p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  marginTop: "2px",
                  fontSize: "14px",
                }}
              >
                <span>
                  9.5
                  <StarOutlined />
                </span>
                <Divider type="vertical" />
                <span>2022</span>
                <Divider type="vertical" />
                <span>{data.time}</span>
              </div>
              {data.genres && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    marginTop: "6px",
                    overflow: "hidden",
                    height: "26px",
                  }}
                >
                  {data.genres.map((e, i) => (
                    <span
                      style={{
                        margin: "2px 4px 4px 0",
                        padding: "1px 8px",
                        fontSize: "12px",
                        display: "inline-block",
                        backgroundColor: "#1976d2",
                        borderRadius: "10px",
                        color: "white",
                      }}
                      key={i}
                    >
                      {e.name}
                    </span>
                  ))}
                </div>
              )}

              <div style={{ textAlign: "left", marginTop: "6px" }}>
                <p className="desc">{data.description}</p>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: "6px" }}>
                <p style={{ margin: "0", fontSize: "16px" }}>
                  {data.views} views
                </p>
              </div>
              <div style={{ position: "absolute", bottom: 0, right: "2px" }}>
                <p style={{ margin: "0", fontSize: "16px" }}>Xem th??m {">"}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardSlide;
