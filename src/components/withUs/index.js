import React from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapImg } from "./withus-styled";
import log from './logo.png';
import NewsTicker from "react-advanced-news-ticker";


export const WithUs = () => {
  return (
    <Wrapper>
      <div><FormattedMessage id="message.withtitle" /><NewsTicker
          rowHeight = {window.innerWidth > 768 ? 48 : 28}
          maxRows = {1}
          speed = {600}
          duration = {2000}
          autoStart = {true}
          pauseOnHover = {false}
          id = "myId"
          className = "tickerAnim"
          style = {{marginTop: 34}}
        >
          <p><FormattedMessage id="message.svrem" /></p>
          <p><FormattedMessage id="message.creative" /></p>
          <p><FormattedMessage id="message.remarkable" /></p>
          <p><FormattedMessage id="message.bright" /></p>
          <p><FormattedMessage id="message.successful" /></p>
          <p><FormattedMessage id="message.intelegent" /></p>
          <p><FormattedMessage id="message.confident" /></p>
        </NewsTicker><FormattedMessage id="message.people" /></div>
      <WrapImg>
        <img src={log} alt="JewelCocktail"/>
      </WrapImg>
    </Wrapper>
  )
}