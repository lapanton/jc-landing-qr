import React from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper } from "./blacksquare-styled";
import square from './square.png';
import MoveStuffAround from "./lineTicker";

export const BlackSquare = () => {
  return (
    <Wrapper>
      <div style={{ position: "relative" }} className="wrapMalevich">
        <p className="malevich"><FormattedMessage id="message.blackSquare" /></p>
        <img src={square} alt="JewelCocktail"/>
      </div>
      <p>
        <span><span className="hideMobile">&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.specialBrand" values={{br: <br />}} /></span> <br/><br/>
        <span className="hideMobile">&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.poskoliku" /><br/><br/>
        <span className="hideMobile">&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.nashiIzdelia" /><br/>
      </p>
    </Wrapper>
  )
}
