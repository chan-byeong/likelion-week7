import React from "react";
import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>인사 페이지</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Hello;
