import React from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapText } from "./selfProduct-styled";
import bg from './bg.png';

export const SelfProduct = () => {
  return (
    <Wrapper>
      <img src={bg} alt="JewelCocktail" className="desktopImg"/>
      <WrapText>
        <h3>
          <FormattedMessage id="message.sobstvennoe" />
        </h3>
        <div className="mobileImg">
          <img src={bg} alt="JewelCocktail" />
        </div>
        <p><span>&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.nashiuvelirnie" /></p>
        <p className="boldp"><span>&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.cozmojnosti" /></p>
      </WrapText>
    </Wrapper>
  )
}
