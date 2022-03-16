import React from "react";
import { FacebookFilled, GithubFilled, MailOutlined } from "@ant-design/icons";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="coppyRight">© 2022 Nguyen Anh Tuan</div>
      <div className="aboutMe">
        <FacebookFilled className="iconfb" />
        <GithubFilled className="icongh" />
        <MailOutlined className="iconyt" />
      </div>
    </div>
  );
}

export default Footer;
