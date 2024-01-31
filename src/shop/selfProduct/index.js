import React from "react";
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapText, InnerWrapSelfProduct } from "./selfProduct-styled";
import bg from "./bg.png";

export const SelfProductShop = (props) => {
  const { langProps } = props;
  return (
    <Wrapper
      id="selfProduct"
      style={{ position: "relative", width: "100%", zIndex: 99999 }}
    >
      <InnerWrapSelfProduct>
        <img src={bg} alt="JewelCocktail" className="desktopImg" />
        <WrapText>
          {langProps.locale === "ru" && (
            <h3 style={{ display: "none" }}>
              <FormattedMessage id="message.sobstvennoe" />
            </h3>
          )}
          <div className="mobileImg">
            <img src={bg} alt="JewelCocktail" />
          </div>
          {/*<p><span>&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.nashiuvelirnie" /></p>*/}
          {langProps.locale === "ru" && (
            <p className="noboldp">
              <span>&nbsp;&nbsp;</span>&nbsp;&nbsp;
              <FormattedMessage id="message.cozmojnosti" />
            </p>
          )}
        </WrapText>
      </InnerWrapSelfProduct>
    </Wrapper>
  );
};
