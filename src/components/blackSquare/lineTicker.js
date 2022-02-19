import React from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 57rem;
  z-index: 999999;
  h6 {
    color: #fff;
    letter-spacing: 0.425em;
    font-size: 1.875rem;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    top: 47rem;
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
          <h6>ИСТОРИЯ - индивидуальность - космос - </h6>
        </>
      )}
    </Ticker>
  </Wrapper>
)

export default MoveStuffAround