import React, { useLayoutEffect } from 'react';
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  background: rgba(255,255,255,1);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 222223;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;

export const Spin = styled.div`
  margin: 0 auto;
  width: 100px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  transform: translateY(-40px);
  div {
    width: 18px;
    height: 18px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    animation: ${bounce} 1.4s infinite ease-in-out both;
  }
`;

export const BounceAnimation = (props) => {
  return (
    <>
      <Wrapper>
        <Spin>
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </Spin>
      </Wrapper>
    </>
  )
}