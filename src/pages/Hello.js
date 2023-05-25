import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Hello = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>Hello</h1>
      <Circle onClick={()=>{nav("/")}}>Home</Circle>
    </div>
  );
};

export default Hello;

const Circle = styled.div`
  border-radius : 50%;
  display : flex;
  align-items : center;
  justify-content : center;
  width : 100px;
  height : 100px;
  background-color : pink;
  cursor : pointer;
  text-align : center;
  margin : 20px 0;
  `;
