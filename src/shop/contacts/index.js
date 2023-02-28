import React from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapCart, WrapText, Copyright, BottomMobile, BottomSocial } from "./contacts-styled";
import { Ymaps } from "../ymaps";
import phone from './img/phone.png';
import email from './img/email.png';
import marker from './img/marker.png';
import timer from './img/timer.png';
import emailbig from './img/email-bottom.png';
import yout from './img/youtube.png';
import inst from "./img/instatgram-n.png"
import whatsapp from "../../whatsapp.png";
import telegram from "../../telegram.png";

export const ContactsShop = () => {
  return (
    <Wrapper>
     <h3><FormattedMessage id="message.botcon" /></h3>
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
      <BottomSocial>
        <div className="bottom-social">
          <a href="https://www.instagram.com/jewelcocktail_official" style={{ width: "26px", display: "inline-block" }} >
            <img src={inst} alt="JewelCocktail" style={{ width: "100%" }} />
          </a>
          <a href="https://www.youtube.com/channel/UC44U3iU75Nx-Fv8LFb28I6w" style={{ margin: "0 25px" }}>
            <img src={yout} alt="JewelCocktail"/>
          </a>
          <a href="mailto:contact@jewelcocktail.com">
            <img src={emailbig} alt="JewelCocktail"/>
          </a>
        </div>
      </BottomSocial>
      <BottomMobile>
        <div>
          <a href="mailto:contact@jewelcocktail.com" className="emailConatact">
            <span style={{ margin: "0 0 25px 0" }}>contact@jewelcocktail.com</span>
          </a>
        </div>
        <a href="https://wa.me/79688116711" target="_blank"><img src={whatsapp} alt="JewelCocktail"/></a>
        <a href="https://t.me/AleksandraLuch" target="_blank"><img src={telegram} alt="JewelCockail"/></a>
      </BottomMobile>
      <Copyright>
        Все права защищены
        <br/>
        © JEWEL COCKTAIL 2022
      </Copyright>
    </Wrapper>
  )
}
