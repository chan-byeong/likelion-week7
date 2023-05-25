import React from "react";
import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <h1>동그라미</h1>
      <h1>동그라미</h1>
      <h1>동그라미</h1>
      <button title="동그라미" color="#2E8B57" id="btn"></button>
      <Link to="/">Home</Link>
    </div>
  );
};



export default Hello;
