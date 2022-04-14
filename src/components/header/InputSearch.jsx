import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import { BASE_URL } from "../../constants/constain";
import { Link } from "react-router-dom";
import { Oval } from "@agney/react-loading";
function InputSearch() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getSearch = async () => {
    try {
      setLoading(false);
      const data = await axios.get(`${BASE_URL}/search?q=${value}`);
      setData(data.data.data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearch();
  }, [value]);
  const Loading = () => (
    <div
      style={{
        height: "16vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Oval style={{ height: "10vh" }} />
    </div>
  );
  const CardSearch = ({ data }) => {
    return (
      <div style={{ display: "flex", marginTop: "6px" }}>
        <div
          style={{
            backgroundImage: `url(${data.thumbnail})`,
            width: "100px",
            height: "8vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              margin: "2px 0 2px 24px",
              color: "white",
              lineHeight: "normal",
            }}
          >
            {data.name}
          </span>
          <span
            style={{
              margin: "2px 0 2px 24px",
              color: "white",
              lineHeight: "normal",
            }}
          >
            {data.time}
          </span>
          <span
            style={{
              margin: "2px 0 2px 24px",
              color: "white",
              lineHeight: "normal",
            }}
          >
            {data.views}
          </span>
        </div>
      </div>
    );
  };
  const Menu = ({ isValue }) => (
    <div
      style={{
        display: isValue ? "block" : "none",
        position: "absolute",
        width: "380px",
        height: "24vh",
        backgroundColor: "rgba(25, 25, 25, 0.9)",
        borderRadius: "10px",
      }}
    >
      <div
        id="style-1"
        style={{
          width: "100%",
          height: "19vh",
          padding: "12px",
          overflowY: "auto",
        }}
      >
        {loading ? (
          data !== null &&
          data.length > 0 &&
          data.map((e, i) => {
            return (
              <Link key={i} to={`/movie/${e.slug}`}>
                <CardSearch data={e} />
              </Link>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "6px",
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(25, 118, 210)",
            width: "100px",
            borderRadius: "10px",
            height: "4vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Search
          <SearchOutlined style={{ marginLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
  return (
    // <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
    //   <Input
    //     style={{ width: "380px" }}
    //     value={value}
    //     onChange={(e) => setValue(e.target.value)}
    //     placeholder="Search Anime"
    //     allowClear
    //   />
    // </Dropdown>
    <div>
      <input
        style={{
          width: "380px",
          height: "3.5vh",
          padding: "0 12px",
          borderRadius: "6px",
          outline: "none",
          border: "1px solid #1890ff",
          position: "relative",
        }}
        placeholder="Tìm Kiếm Anime"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          display: value ? "block" : "none",
          cursor: "pointer",
        }}
        onClick={(e) => setValue("")}
      >
        <CloseOutlined />
      </div>
      <Menu isValue={Boolean(value)} />
    </div>
  );
}

export default InputSearch;
