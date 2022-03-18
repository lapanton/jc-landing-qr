import React from 'react';
import { Wrapper } from "./withus-styled";
import log from './logo.png';
import NewsTicker from "react-advanced-news-ticker";


export const WithUs = () => {
  return (
    <Wrapper>
      <div>НАШИ УКРАШЕНИЯ СОЗДАНЫ ДЛЯ <NewsTicker
          rowHeight = {48}
          maxRows = {1}
          speed = {600}
          duration = {2000}
          autoStart = {true}
          pauseOnHover = {false}
          id = "myId"
          className = "tickerAnim"
          style = {{marginTop: 34}}
        >
          <p>УВЕРЕННЫХ</p>
          <p>СОВРЕМЕННЫХ</p>
          <p>ТВОРЧЕСКИХ</p>
          <p>ОСОБЕННЫХ</p>
          <p>ЯРКИХ</p>
          <p>УСПЕШНЫХ</p>
          <p>ОСОЗНАННЫХ</p>
        </NewsTicker> ЛИЧНОСТЕЙ</div>
      <img src={log} alt="JewelCocktail"/>
    </Wrapper>
  )
}