import React from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 30rem;
  z-index: 999999;
  h6 {
    color: #fff;
    letter-spacing: 0.425em;
    font-size: 1.875rem;
    text-transform: uppercase;
    text-shadow:
            0.01em 0 black,
            0 0.01em black,
            -0.01em 0 black,
              0 -0.01em black;
  }
  @media screen and (max-width: 1550px) {
    font-size: 1rem;
    white-space: nowrap;
  }
  @media screen and (max-width: 768px) {
    top: 20rem;
    h6 {
      font-size: 1rem;
      white-space: nowrap;
    }
  }
`;

const MoveStuffAround = () => (
  <Wrapper>
    <Ticker>
      {({ index }) => (
        <>
          <h6>СВОБОДА - ЛИЧНОСТЬ - АРТ – НЕЗАВИСИМОСТЬ – ИСТОРИЯ - </h6>
        </>
      )}
    </Ticker>
  </Wrapper>
)

export default MoveStuffAround