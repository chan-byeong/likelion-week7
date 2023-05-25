import React from "react";
import { Link } from "react-router-dom";
import styled,{css} from 'styled-components'

const Rectangle = styled.div`
width : 30px;
height : 30px;
background-color: tomato;
` 

const About = () => {
  return (
    <div>
      <h1>네모</h1>
      <h2>네모</h2>
      <p>네모</p>
      <Link to="/">Home</Link>
      <Rectangle></Rectangle>
    </div>
  );
};

export default About;
