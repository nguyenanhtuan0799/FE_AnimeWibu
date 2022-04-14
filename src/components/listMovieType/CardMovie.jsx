import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card, Divider } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

function CardMovie({ data }) {
  // console.log(data);
  return (
    <div className="card-movie">
      <div className="card">
        <Link to={`/movie/${data.slug}`}>
          <div
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
                textAlign: "center",
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
                  {data.views}
                  <StarOutlined />
                </span>
                <Divider type="vertical" />
                <span>2022</span>
                <Divider type="vertical" />
                <span>{data.time}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  marginTop: "6px",
                  overflow: "hidden",
                  height: "24px",
                }}
              >
                {data.genres &&
                  data.genres.map((e, i) => (
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
              <div style={{ textAlign: "left", marginTop: "6px" }}>
                <p className="desc">{data.description}</p>
              </div>
              <div
                style={{
                  textAlign: "right",
                  position: "absolute",
                  bottom: 0,
                  right: "2px",
                }}
              >
                <p style={{ margin: "0", fontSize: "16px" }}>Xem thêm {">"}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardMovie;
