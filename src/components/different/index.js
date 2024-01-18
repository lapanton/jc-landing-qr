import React from "react";
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapText } from "./different-styled";
import bg from "./bg.png";

export const Different = (props) => {
  const { langProps } = props;
  return (
    <Wrapper
      className={langProps.locale === "en" ? "align-to-center" : "no-classes"}
    >
      <img
        src={bg}
        alt="JewelCocktail"
        style={
          langProps.locale === "en"
            ? { opacity: "0", display: "none" }
            : { opacity: "1" }
        }
      />
      <WrapText id="english-scroll">
        <h3>
          <FormattedMessage id="message.ukrashenia" />
        </h3>
        <p>
          <span>&nbsp;&nbsp;</span>&nbsp;&nbsp;
          <FormattedMessage id="message.youcan" />
        </p>
        <p>
          <span>&nbsp;&nbsp;</span>&nbsp;&nbsp;
          {langProps.locale === "ru" && (
            <FormattedMessage id="message.codego" />
          )}
          {langProps.locale === "en" && (
            <>
              <span>{"   "}</span> Technically, on the reverse side of the
              insert, an engraving with unique QR code{" "}
              <span style={{ color: "rgb(0, 153, 51)", display: "inline" }}>
                (INVISIBLE TO OTHERS).
              </span>{" "}
              QR-link to your personal creation PRESENT OR TALISMAN card.
              Jewellery with a digital message is an unique opportunity to make
              a gift with meaning and to keep the moments that are important to
              your heart.
            </>
          )}
        </p>
      </WrapText>
    </Wrapper>
  );
};
