import React from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapText } from "./selfProduct-styled";
import bg from './bg.png';
import magazin from './magazin.png';

export const SelfProduct = () => {
  return (
    <Wrapper>
      <img src={magazin} alt="JewelCocktail" className="magazin" />
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
      <img src={bg} alt="JewelCocktail" className="logoDesktop"/>
    </Wrapper>
  )
}
