import React from "react";
import { FormattedMessage } from "react-intl";
import {
  Wrapper,
  WrapCart,
  WrapText,
  Copyright,
  BottomMobile,
  BottomSocial,
} from "./contacts-styled";
import { Ymaps } from "../ymaps";
import phone from "./img/phone.png";
import email from "./img/email.png";
import marker from "./img/marker.png";
import timer from "./img/timer.png";
import emailbig from "./img/email-bottom.png";
import dzen from "./img/dzen.png";
import inst from "./img/instatgram-n.png";
import whatsapp from "../../whatsapp.png";
import telegram from "../../telegram.png";
import inn from "./img/innn.png";

export const ContactsShop = (props) => {
  const { langProps } = props;

  return (
    <Wrapper>
      <h3>
        <FormattedMessage id="message.botcon" />
      </h3>
      {/* <WrapCart>*/}
      {/*   <Ymaps />*/}
      {/*   <WrapText>*/}
      {/*     <div className="phoneAddressEmail">*/}
      {/*       <img src={phone} alt="JewelCocktail"/>*/}
      {/*       <span>+7 499 377 79 19</span></div>*/}
      {/*     <div className="phoneAddressEmail">*/}
      {/*       <img src={email} alt="JewelCocktail"/>*/}
      {/*       <span>contact@jewelcocktail.com</span>*/}
      {/*     </div>*/}
      {/*     <div className="phoneAddressEmail">*/}
      {/*       <img src={marker} alt="JewelCockttail" style={{ transform: "translate(3px, -30px)" }}/>*/}
      {/*       <span>г. Москва пр. Вернадского,<br/> 29 (БЦ "ЛЕТО")</span>*/}
      {/*     </div>*/}
      {/*     <div className="phoneAddressEmail">*/}
      {/*       <img src={timer} alt="JewelCocktail"/>*/}
      {/*       <span><FormattedMessage id="message.timework" /></span>*/}
      {/*     </div>*/}
      {/*     <div className="phoneAddressEmail laast">*/}
      {/*       Пн-Сб: 9.00-18.00<br/> Вс: выходной*/}
      {/*     </div>*/}
      {/*   </WrapText>*/}
      {/* </WrapCart>*/}

      {langProps.locale === "ru" && (
        <BottomSocial>
          <div className="bottom-social">
            <a
              href="https://www.instagram.com/jewelcocktail_official"
              style={{ width: "26px", display: "inline-block" }}
            >
              <img src={inst} alt="JewelCocktail" style={{ width: "100%" }} />
            </a>
            <a
              href="https://dzen.ru/jewelcocktail.com"
              style={{ margin: "0 25px" }}
            >
              <img
                src={dzen}
                alt="JewelCocktail"
                style={{ background: "#fff", width: "28px" }}
              />
            </a>
            <a href="mailto:contact@jewelcocktail.com">
              <img src={emailbig} alt="JewelCocktail" />
            </a>
          </div>
        </BottomSocial>
      )}

      {langProps.locale === "ru" ? (
        <div></div>
      ) : (
        <BottomSocial style={{ width: "auto" }}>
          <a href="https://www.instagram.com/jewel_hitech" target="_blank">
            <img src={inn} alt="JewelCocktail" style={{ width: "100px" }} />
          </a>
        </BottomSocial>
      )}

      <BottomMobile>
        <div>
          <a href="mailto:contact@jewelcocktail.com" className="emailConatact">
            <span style={{ margin: "0 0 25px 0" }}>
              contact@jewelcocktail.com
            </span>
          </a>
        </div>
        <a href="https://wa.me/79688116711" target="_blank">
          <img src={whatsapp} alt="JewelCocktail" />
        </a>
        <a href="https://t.me/AleksandraLuch" target="_blank">
          <img src={telegram} alt="JewelCockail" />
        </a>
      </BottomMobile>
      <Copyright>{langProps.locale === "ru" && "© JEWEL COCKTAIL"}</Copyright>
    </Wrapper>
  );
};
