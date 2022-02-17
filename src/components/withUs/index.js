import React from 'react';
import { Wrapper } from "./withus-styled";
import log from './logo.png';
import NewsTicker from "react-advanced-news-ticker";


export const WithUs = () => {
  return (
    <Wrapper>
      <div>С НАШИМИ УКРАШЕНИЯМИ<br/>
        ВЫ МОЖЕТЕ БЫТЬ <NewsTicker
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
          <p>Красивой</p>
          <p>Привлекательной</p>
          <p>Притягательной</p>
          <p>Шикарной</p>
          <p>Неповторимой</p>
        </NewsTicker></div>
      <img src={log} alt="JewelCocktail"/>
    </Wrapper>
  )
}