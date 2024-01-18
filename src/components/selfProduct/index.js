import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapText } from "./selfProduct-styled";
import bg from "./bg.png";
import magazin from "./magazin.png";
import { useLocation } from "react-router-dom";

export const SelfProduct = (props) => {
  const location = useLocation();
  const { langProps } = props;

  const scrollOptions = {
    behavior: "smooth",
    block: "center",
  };

  useEffect(() => {
    const scrollElementId =
      langProps.locale === "ru" ? "#aboutus" : "#english-scroll";
    const anchor = document.querySelector(scrollElementId);

    console.log("scrollElementId:", scrollElementId);
    console.log("anchor:", anchor);

    if (anchor && location.hash === "#aboutus") {
      setTimeout(() => {
        anchor.scrollIntoView(scrollOptions);
      }, 500);
    }
  }, [location, langProps.locale]);
  if (langProps.locale === "en") return null;
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
        <p>
          <span>&nbsp;&nbsp;</span>&nbsp;&nbsp;
          <FormattedMessage id="message.nashiuvelirnie" />
        </p>
        <p className="boldp">
          <span>&nbsp;&nbsp;</span>&nbsp;&nbsp;
          <FormattedMessage id="message.cozmojnosti" />
        </p>
      </WrapText>
      <img src={bg} alt="JewelCocktail" className="logoDesktop" />
    </Wrapper>
  );
};
