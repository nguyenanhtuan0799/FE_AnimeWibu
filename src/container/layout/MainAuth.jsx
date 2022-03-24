import React from "react";

import HeaderAuth from "./header/Header";
import FooterAuth from "./footer/Footer";
import { Layout } from "antd";

import "./MainAuth.scss";

const { Header, Footer, Content } = Layout;
function MainAuth({ children }) {
  const [scroll, setScroll] = React.useState(0);
  window.onscroll = () => setScroll(window.scrollY);
  return (
    <Layout>
      <Header
        style={{
          background: `${
            scroll <= 200
              ? " linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.6) 96%)"
              : "#111319"
          }`,
          width: "100%",
          position: "fixed",
          zIndex: "99",
          opacity: `${scroll <= 200 ? 1 : 0.8}`,
          transition: "opacity 0.5s",
        }}
      >
        <HeaderAuth />
      </Header>
      <Content
        style={{ position: "relative", backgroundColor: "rgb(17 19 25)" }}
      >
        {children}
      </Content>
      <Footer style={{ backgroundColor: "black" }}>
        <FooterAuth />
      </Footer>
    </Layout>
  );
}

export default MainAuth;
