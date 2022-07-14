import React, {useEffect, useState} from 'react';
import { FormattedMessage } from "react-intl";
import {
  ConttainerWrap,
  Wrapper,
  Inner,
  WrapSocial,
  WrapPhone,
  WrapList,
  WrapTitle,
  WrapMobile,
  WrapMenu,
  WrpaMobSocial,
  WrapLang,
  WrapCardIcon,
  CounterCart,
  WrapCardIconMobile
} from './main-styled'; // WrapLoadMore, InnerLoadMore,
import logo from "./logo.png";
import mobMenu from "./mob-menu.svg";
import phoneMobile from "./phone-icon.svg";

import insn from "./instatgram-n.png";
import youn from "./youtube-n.png";
import googn from "./google-n.png";

import enimg from './en.svg';
import ruimg from './ru.svg';
import cnimg from './cn.svg';
import cardicon from './cart-icon.png';


export const MainShop = ({ langProps, setShowPopup, showPopup }) => {
  const { locale, onLocaleChange} = langProps;

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const [sticky, setSticky] = useState(false);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 50 ? setSticky(true) : setSticky(false);
  };
  const [show, setShow] = useState(false)
  const handleMenu = () => {
    setShow(!show);
  };

  const dataFromStorage = localStorage.getItem('card-data');
  const [countCard, setCountCard] = useState(null);

  useEffect(() => {
    setCountCard(JSON.parse(dataFromStorage));
  }, [dataFromStorage, showPopup]);

  useEffect(() => {}, [countCard]);

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <ConttainerWrap  className={sticky ? 'sticky' : ' '}>
      <Wrapper>
        <Inner className={sticky ? 'sticky' : ' '}>
          <a href="/" className="wrapLogo">
            <img src={logo} alt="JewelCocktail" />
          </a>
          <WrapList>
            <div onClick={() => window.scrollTo({top: 4000, left: 0, behavior: 'smooth'})}><FormattedMessage id="message.aboutUs" /></div>
            <div onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}><FormattedMessage id="message.contacts" /></div>
          </WrapList>
          <WrapSocial>
            <a href="https://vk.com/jewelrycocktail" target="_blank" rel="noopener noreferrer" className="insta-social">
              <div/>
            </a>
            <a href="https://www.youtube.com/channel/UC44U3iU75Nx-Fv8LFb28I6w" target="_blank" rel="noopener noreferrer" className="youtube-social">
              <div/>
            </a>
            <a href="mailto:contact@jewelcocktail.com" className="email-social">
              <div/>
            </a>
          </WrapSocial>
          <WrapLang style={{display: "none"}}>
            <div className="ru_lang" onClick={() => onLocaleChange('ru')}><img style={locale !== "ru" ? {opacity: 0.5} : {opacity: 1, transform: "scale(1.2)"}} src={ruimg} alt="JewelCocktail"/></div>
            <div className="en_lang" onClick={() => onLocaleChange('en')}><img style={locale !== "en" ? {opacity: 0.5} : {opacity: 1, transform: "scale(1.2)"}} src={enimg} alt="JewelCocktail"/></div>
            <div className="cn_lang" onClick={() => onLocaleChange('zh')}><img style={locale !== "zh" ? {opacity: 0.5} : {opacity: 1, transform: "scale(1.2)"}} src={cnimg} alt="JewelCocktail"/></div>
          </WrapLang>
          <WrapCardIcon onClick={() => openPopup()}>
            <img src={cardicon} alt="JewelCocktail"/>
            {countCard !== null && (
              <CounterCart>
                {countCard.length}
              </CounterCart>
            )}
          </WrapCardIcon>
          <WrapPhone>
            <a href="tel:+74993777919">
              +7 499 377 79 19
            </a>
            <a href="mailto:contact@jewelcocktail.com">
              contact@jewelcocktail.com
            </a>
          </WrapPhone>
          <WrapMobile>
            <a href="tel:+74993777919">
              <img src={phoneMobile} alt="JewelCocktail"/>
            </a>
            <div className="menuMobWrapper" onClick={handleMenu}>
              <img src={mobMenu} alt="JewelCocktail"/>
              <div className={show ? 'show-menu' : 'hide-menu'}>
                <WrapMenu>
                  <div className="closeIcon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="13.9999" y="31.0001" width="24" height="3" rx="1" transform="rotate(-45 13.9999 31.0001)" fill="#ffffff"/>
                      <rect x="15.9999" y="14" width="24" height="3" rx="1" transform="rotate(45 15.9999 14)" fill="#ffffff"/>
                    </svg>
                  </div>
                  <div onClick={() => window.scrollTo({top: 6145, left: 0, behavior: 'smooth'})}><FormattedMessage id="message.aboutUs" /></div>
                  <div onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}><FormattedMessage id="message.contacts" /></div>
                  <WrpaMobSocial>
                    <a href="https://www.instagram.com/jewelcocktail_official/" target="_blank" rel="noopener noreferrer" className="insta-social">
                      <img src={insn} alt="JewelCocktail"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC44U3iU75Nx-Fv8LFb28I6w" target="_blank" rel="noopener noreferrer" className="youtube-social">
                      <img src={youn} alt="JewelCocktail"/>
                    </a>
                    <a href="mailto:info@jewelcocktail.com" className="email-social">
                      <img src={googn} alt="JewelCocktail"/>
                    </a>
                  </WrpaMobSocial>
                </WrapMenu>
              </div>
            </div>
            <WrapCardIconMobile onClick={() => openPopup()}>
              <img src={cardicon} alt="JewelCocktail"/>
              {countCard !== null && (
                <CounterCart>
                  {countCard.length}
                </CounterCart>
              )}
            </WrapCardIconMobile>
          </WrapMobile>
        </Inner>
        <WrapTitle className={show ? 'removeZindex' : 'addit'}>
          {sticky && window.innerWidth >= '768' ? <div style={{ marginTop: "180px"}}/> : <span/>}
          <h1>Jewel Cocktail</h1>
          <h2>дизайнерские hi-tech УКРАШЕНИЯ</h2>
          {/*<p>Мы отказались от классических форм ювелирных украшений, предлагая вместо этого современный<br/> минимализм, естественность и возможность эксперементировать с образами. </p>*/}
        </WrapTitle>
        {/*<WrapLoadMore>*/}
        {/*    <InnerLoadMore onClick={() =>  window.scrollTo({top: 650, left: 0, behavior: 'smooth'})}>*/}
        {/*      <img src={arrowDown} alt="JewelCocktail" className="arrowDown"/>*/}
        {/*      <img src={rotateText} alt="JewelCocktail" className="rotated"/>*/}
        {/*    </InnerLoadMore>*/}
        {/*</WrapLoadMore>*/}
      </Wrapper>
    </ConttainerWrap>
  );
};
