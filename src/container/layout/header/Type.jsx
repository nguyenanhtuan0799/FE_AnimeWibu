import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";

const { Item } = Menu;
function Type() {
  const type = [
    "Adventure",
    "Bishojo/Moe",
    "Fantasy",
    "Harem",
    "Yaoi",
    "Yuri",
    "Scifi",
    "Kodomo",
    "Horror",
    "Romance",
    "Sports",
    "Comedy",
    "Detective",
    "Vampire",
    "Shojo anime",
    "Shonen anime",
    "Ecchi",
    "Hentai",
    "School",
  ];
  const menuType = (
    <Menu>
      {type.map((e, i) => (
        <Item key={i}>{e}</Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown
      overlay={menuType}
      placement="bottomLeft"
      arrow={{ pointAtCenter: true }}
    >
      <div className="tab-link">Thể loại</div>
    </Dropdown>
  );
}

export default Type;
