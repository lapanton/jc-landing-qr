import React from "react";
import {
  Wrapper,
  WrapText,
  InnerWrapSelfProduct,
  WrapRight,
} from "./selfProduct-styled";

export const ExampleTalisman = (props) => {
  const { langProps } = props;
  return (
    <Wrapper
      id="selfProduct"
      style={{ position: "relative", width: "100%", zIndex: 99999 }}
    >
      <InnerWrapSelfProduct>
        <WrapText>
          {/*<img src={telPhone} alt="JewelCocktail" className="desktopImg"/>*/}
        </WrapText>
        <WrapRight>
          {/*<img src={telPhone} alt="JewelCocktail" className="desktopImg"/>*/}
        </WrapRight>
      </InnerWrapSelfProduct>
    </Wrapper>
  );
};
