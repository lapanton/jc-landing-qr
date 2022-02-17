import React from 'react';
import NewsTicker from 'react-advanced-news-ticker';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 99999;
  position: relative;
  .tickerAnim {
    p {
      font-size: 2.125rem;
      letter-spacing: 0.425em;
      text-transform: uppercase;
      text-align: center;
      
    }
  }
`;

export const TickerWrap = () => {
  return (
    <Wrapper>
      <NewsTicker
        rowHeight = {48}
        maxRows = {2}
        speed = {600}
        duration = {4000}
        autoStart = {true}
        pauseOnHover = {false}
        id = "myId"
        className = "tickerAnim"
        style = {{marginTop: 34}}
      >
        <p>ИСТОРИЯ - индивидуальность - индивидуальность</p>
      </NewsTicker>
    </Wrapper>
  )
}
