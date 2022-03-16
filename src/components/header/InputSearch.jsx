import React from "react";
import { Input } from "antd";

const { Search } = Input;
function InputSearch() {
  return (
    <Search
      style={{ width: "380px" }}
      placeholder="Search Anime"
      enterButton
      allowClear
    />
  );
}

export default InputSearch;
