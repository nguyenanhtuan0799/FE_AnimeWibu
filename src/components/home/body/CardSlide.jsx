import React from "react";
import { Card, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

function CardSlide(props) {
  return (
    <div className="card-container">
      <div className="card">
        <Link to={props.path}>
          <Card
            hoverable
            style={{ borderRadius: "8px", overflow: "hidden" }}
            cover={
              <img alt={props.title} src={props.banner} className="img-card1" />
            }
          >
            <Meta title={props.title} />
          </Card>
        </Link>
      </div>
      <div className="overlay">
        <Link to={props.path}>
          <Card
            hoverable
            style={{
              boxShadow: "2px 4px 10px  #000",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            cover={
              <img alt={props.title} src={props.banner} className="img-card" />
            }
          >
            <div className="card-body">
              <div
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                <p>{props.title}</p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  marginTop: "12px",
                  fontSize: "14px",
                }}
              >
                <span>
                  {props.star}
                  <StarOutlined />
                </span>
                <Divider type="vertical" />
                <span>{props.year}</span>
                <Divider type="vertical" />
                <span>{props.chapter} Tập</span>
              </div>
              <div
                style={{ display: "flex", flexWrap: "wrap", marginTop: "12px" }}
              >
                {props.type.map((e, i) => (
                  <span
                    style={{
                      margin: "2px 4px 4px 0",
                      padding: "1px 8px",
                      fontSize: "12px",
                      backgroundColor: "#1976d2",
                      borderRadius: "10px",
                      color: "white",
                    }}
                    key={i}
                  >
                    {e}
                  </span>
                ))}
              </div>
              <div style={{ textAlign: "left", marginTop: "12px" }}>
                <p>{props.decs}</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default CardSlide;
