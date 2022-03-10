import React from 'react';
import { Wrapper } from "./withus-styled";
import log from './logo.png';
import NewsTicker from "react-advanced-news-ticker";


export const WithUs = () => {
  return (
    <Wrapper>
      <div>С НАШИМИ УКРАШЕНИЯМИ ТЫ МОЖЕШЬ БЫТЬ <NewsTicker
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
          <p>ОСОБОЙ</p>
          <p>ЕСТЕСТВЕННОЙ</p>
          <p>СМЕЛОЙ</p>
          <p>НЕПОВТОРИМОЙ</p>
          <p>СИЛЬНОЙ</p>
          <p>ТВОРЧЕССКОЙ</p>
          <p>ДЕЛОВОЙ</p>
        </NewsTicker></div>
      <img src={log} alt="JewelCocktail"/>
    </Wrapper>
  )
}