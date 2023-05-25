import React from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom'

import styled, { css } from 'styled-components'

const Triangle = styled.div`
    width: 5rem;
    height: 5rem;
    border-bottom: 30px solid transparent;
    border-top: 30px solid transparent;
    border-left: 50px solid skyblue;
    border-right: 50px solid transparent;
    background-color: ${props => props.color || 'white'}
    ${props => props.huge &&
    css`width: 10rem; 
            height: 10rem;`
  }
`;

const Circle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 30px solid transparent;
  border-top: 30px solid transparent;
  border-left: 50px solid skyblue;
  border-right: 50px solid transparent;
`



const Detail = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1>세모</h1>
      <p>세모 페이지</p>
      <Triangle as='button' onClick={() => navigate('/Home')}>Click!</Triangle>
    </div>
  );
};

export default Detail;
