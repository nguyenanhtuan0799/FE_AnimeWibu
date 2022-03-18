import React from "react";
import { Row, Col, Typography, Tabs, Divider } from "antd";
import { RightOutlined, StarOutlined } from "@ant-design/icons";
import Comment from "./Comment";
const { Text, Title } = Typography;

const { TabPane } = Tabs;
const data = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];

function BodyWatch({ id }) {
  return (
    <div style={{ width: "65vw" }}>
      <Col span={24}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "16px",
            color: "white",
            fontSize: "26px",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Date A Live</div>
          <div
            style={{
              fontSize: "22px",
              margin: "0 12px",
              transform: "translateY(2px)",
            }}
          >
            <RightOutlined />
          </div>
          <div style={{ fontSize: "24px", color: "#ccc" }}>Tập {id}</div>
        </div>
      </Col>
      {/** */}
      <Col span={24}>
        <div style={{ width: "65vw", height: "100%" }}>
          <Tabs
            size="large"
            defaultActiveKey="1"
            style={{ color: "white", fontSize: "22px" }}
          >
            <TabPane tab="Thông Tin Phim" key="1">
              <Row>
                <Col span={24}>
                  <Title
                    style={{
                      color: "white",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                    level={2}
                  >
                    Date A Live
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text style={{ color: "white", fontSize: "22px" }}>
                    9.4 <StarOutlined />
                  </Text>
                  <Divider
                    type="vertical"
                    style={{
                      backgroundColor: "white",
                      fontSize: "24px",
                    }}
                  />

                  <Text style={{ color: "white", fontSize: "22px" }}>2020</Text>
                  <Divider
                    type="vertical"
                    style={{
                      backgroundColor: "white",
                      fontSize: "24px",
                    }}
                  />
                  <Text style={{ color: "white", fontSize: "20px" }}>
                    12 Tập
                  </Text>
                </Col>
                <Col span={24}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      margin: "12px 0",
                    }}
                  >
                    {/* {props.type.map((element, i) => (
                          <div
                            key={i}
                            style={{
                              margin: "5px 4px 10px 0",
                              padding: "1px 8px",
                              fontSize: "16px",
                              backgroundColor: "#1976d2",
                              borderRadius: "10px",
                              color: "white",
                            }}
                          >
                            {element}
                          </div>
                        ))} */}
                    <div
                      style={{
                        margin: "5px 4px 10px 0",
                        padding: "1px 8px",
                        fontSize: "16px",
                        backgroundColor: "#1976d2",
                        borderRadius: "10px",
                        color: "white",
                      }}
                    >
                      Action
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text style={{ fontSize: "18px", color: "white" }}>
                    Entertainment community sharing source and architectural
                    formula technology knowledgeEntertainment community sharing
                    source and architectural formula technology
                    knowledgeEntertainment community sharing source and
                    architectural formula technology knowledgeEntertainment
                    community sharing source and architectural formula
                    technology knowledge
                  </Text>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Comment" key="2">
              <Comment />
              <Comment />
              <Comment />
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </div>
  );
}

export default BodyWatch;
