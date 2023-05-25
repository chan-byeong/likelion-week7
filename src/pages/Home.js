import React from "react";
import { Link } from "react-router-dom";

//about 네모
//detail 세모
//hello 동그라미

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
      <div>HI</div>
    </div>
  );
};

export default Home;
