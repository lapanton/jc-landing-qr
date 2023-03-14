import React from 'react';
import { FormattedMessage } from "react-intl";
import {Wrapper, WrapCart, WrapText, Copyright} from "./contacts-styled";
import {Ymaps} from "../../ymaps";

export const Contacts = () => {
  return (
    <Wrapper>
     <h3><FormattedMessage id="message.botcon" /></h3>
      <WrapCart>
        <Ymaps />
        <WrapText>
          <div className="phoneAddressEmail">+7 968 811 67 11</div>
          <div className="phoneAddressEmail">contact@jewelcocktail.com</div>
          <div className="phoneAddressEmail"><FormattedMessage id="message.adress" /></div>
          <div className="phoneAddressEmail"><FormattedMessage id="message.timework" /></div>
          <div className="phoneAddressEmail">
            <FormattedMessage id="message.dayswork" /> 09:00 - 21:00
          </div>
        </WrapText>
      </WrapCart>
      <Copyright>
        <FormattedMessage id="message.rights" />
      </Copyright>
    </Wrapper>
  )
}
