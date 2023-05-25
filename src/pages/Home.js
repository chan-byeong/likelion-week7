import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>홈페이지</p>
      <Link to="/about">About</Link>
      <div></div>
      <Link to="/detail">Detail</Link>
      <div></div>
      <Link to="/hello">Hello</Link>
    </div>
  );
};

export default Home;
