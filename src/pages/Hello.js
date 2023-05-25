import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Hello = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>동그라미</h1>

      <circle onClick={()=>{nav("/home")}} color="#2E8B57" id="btn">동그라미</circle>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Hello;

const Circle = styled(Rec)`
  border-radius : 50%;
