import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

//about 네모
//detail 세모
//hello 동그라미

const Home = () => {
  
  const nav = useNavigate();

  return (
    <Main>
      <h1>Home</h1>    

      <Rec onClick={()=>{nav("/about")}}><div>네모</div></Rec>
      {/* <Link to="/about">About</Link> */}
      <div></div>
      <Tri onClick={()=>{nav("/detail")}}>세모</Tri>

      <Circle onClick={()=>{nav("/hello")}} >동그라미</Circle>
      {/* <Link to="/detail">Detail</Link> */}
      <div></div>
      {/* <Link to="/hello">Hello</Link> */}
    </Main>
  );
};

export default Home;

const Main = styled.div`
  width : 500px;
  height : 500px;
  display : flex;
  flex-direction : column;
  align-items : center;
  justifiy-content : center;
`;

const Rec = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  width : 100px;
  height : 100px;
  background-color : royalblue;
  cursor : pointer;
  text-align : center;
  margin : 20px 0;
`;

const Circle = styled(Rec)`
  border-radius : 50%;
`;

const Tri = styled.div`
cursor : pointer;
width: 0;
height: 0;
border-bottom: 50px solid transparent;
border-top: 50px solid transparent;
border-left: 50px solid skyblue;
border-right: 50px solid transparent;
`;
