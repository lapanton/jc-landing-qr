import React from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapText } from "./different-styled";
import bg from './bg.png';

export const Different = () => {
  return (
    <Wrapper>
      <img src={bg} alt="JewelCocktail"/>
      <WrapText>
        <h3>
          <FormattedMessage id="message.ukrashenia"/>
        </h3>
        <p><span>&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.codego"/></p>
      </WrapText>
    </Wrapper>
  )
}
