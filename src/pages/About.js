import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>소개 페이지</p>
      <Link to="/Detail">Detail</Link>
    </div>
  );
};

export default About;
