import React from "react";
import { Tabs, Row, Col } from "antd";
import Chapter from "./Chapter";

const { TabPane } = Tabs;
function ListChapter() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div id="scroll" style={{ padding: "0 60px" }}>
      <Tabs style={{ color: "white" }} defaultActiveKey="1" size="large">
        <TabPane tab="Chọn Tập" key="1">
          <div style={{ margin: "16px 10px 20px" }}>
            <Row gutter={[16, 32]}>
              {arr.map((e, i) => (
                <Col key={i} span={4}>
                  <Chapter props={e} />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Trailer" key="2">
          TRailer
        </TabPane>
        <TabPane tab="Giới Thiệu Anime" key="3">
          Giới Thiệu
        </TabPane>
        <TabPane tab="Các Session Anime" key="4">
          Phim
        </TabPane>
        <TabPane tab="Comment" key="5">
          Comment
        </TabPane>
        <TabPane tab="Đánh Giá" key="6">
          Đánh Giá
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ListChapter;
