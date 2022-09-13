import React, {useEffect} from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapText } from "./selfProduct-styled";
import bg from './bg.png';
import magazin from './magazin.png';
import {useLocation} from "react-router-dom";

export const SelfProduct = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#aboutus") {
      setTimeout(() => {
        const anchor = document.querySelector('#aboutus')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }, [location]);



  return (
    <Wrapper id="aboutus">
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
