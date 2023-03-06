import React from 'react';
import { Wrapper, WrapText, InnerWrapSelfProduct, WrapRight } from "./selfProduct-styled";
import conselation from './constellation.png';
import telPhone from './phone_preview.gif';

export const ExampleTalisman = (props) => {
  const { langProps } = props;
  return (
    <Wrapper id="selfProduct" style={{ position: "relative", width: "100%", zIndex: 99999 }}>
      <InnerWrapSelfProduct>
        <WrapText>
          <img src={conselation} alt="JewelCocktail" />
          <h3>
            {langProps.locale === "ru" ? "выбери вставку наполни смыслом носи с удовольствием" : "CHOOSE YOUR CHARM FILL WITH MEANING WEAR WITH PLEASURE"}
          </h3>
          <img src={telPhone} alt="JewelCocktail" className="desktopImg"/>
        </WrapText>
        <WrapRight>
          <img src={telPhone} alt="JewelCocktail" className="desktopImg"/>
        </WrapRight>
      </InnerWrapSelfProduct>
    </Wrapper>
  )
}
