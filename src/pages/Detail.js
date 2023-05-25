import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <h1>Detail</h1>
      <p>세부 페이지</p>
      <Link to="/hello">Hello</Link>
    </div>
  );
};

export default Detail;
