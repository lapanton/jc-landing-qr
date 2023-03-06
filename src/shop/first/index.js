import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
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
  WrapCardIconMobile,
  WrapDesktopLinks
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
import whatsapp from "../../whatsapp.png";
import telegram from "../../telegram.png";



export const MainShop = ({ langProps, setShowPopup, showPopup }) => {
  const { locale, onLocaleChange} = langProps;

  const [width, setWidth] = useState(window.innerWidth);
  const [sticky, setSticky] = useState(false);

  const isMobile = width <= 768;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/talisman" || location.pathname !== "/talisman/stone") {
      // const canv = document.createElement("canvas");
      // canv.setAttribute("id", "main-canvas");
      // document.body.appendChild(canv);
      document.getElementById('main-canvas').style.display = "block";
    }
    if (location.pathname === "/talisman" || location.pathname === "/talisman/stone") {
      // document.getElementsByTagName('canvas')[0].remove();
      // document.body.style.background = '#000';
      document.getElementById('main-canvas').style.display = "none";

    }

  }, [location.pathname]);


  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });


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

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);


  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);
  const talismanUrlStone  = location.pathname === "/talisman/stone";
  const talismanUrl  = location.pathname === "/talisman";
  const valueHeader = talismanUrl ? {height: "19rem"} : {height: "15rem"};
  return (
    <ConttainerWrap className={sticky ? 'sticky' : ' '} style={!isMobile ? valueHeader : talismanUrlStone ? {height: "15rem"} : {}}>
      <Wrapper>
        <Inner className={sticky ? 'sticky' : ' '}>
          <a href="/" className="wrapLogo">
            <img src={logo} alt="JewelCocktail" />
          </a>
          <WrapList>
            <WrapDesktopLinks>
              <Link to="/shop" className={ location.pathname === "/shop" ? "link-to-shop-desktop activeMenuDesctop" : "link-to-shop-desktop"}><FormattedMessage id="message.shop" /></Link>
              <Link to="/talisman" className={ location.pathname === "/talisman" ? "link-to-shop-desktop activeMenuDesctop" : "link-to-shop-desktop"}><FormattedMessage id="message.talisman" /></Link>
              {/*<Link to="/glass" className={ location.pathname === "/glass" ? "link-to-shop-desktop activeMenuDesctop" : "link-to-shop-desktop"}><FormattedMessage id="message.glass" /></Link>*/}
            </WrapDesktopLinks>
            <div><a href="https://jewelcocktail.com/about" target="_blank" rel="noreferrer"><FormattedMessage id="message.aboutUs" /></a></div>
            <div onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}><FormattedMessage id="message.contacts" /></div>
          </WrapList>
          <WrapSocial>
            <a href="https://www.instagram.com/jewelcocktail_official/" target="_blank" rel="noopener noreferrer" className="insta-social">
              <div/>
            </a>
            <a href="https://www.youtube.com/channel/UC44U3iU75Nx-Fv8LFb28I6w" target="_blank" rel="noopener noreferrer" className="youtube-social">
              <div/>
            </a>
            <a href="mailto:contact@jewelcocktail.com" className="email-social">
              <div/>
            </a>
          </WrapSocial>
          <WrapLang>
            <div className="ru_lang" onClick={() => onLocaleChange('ru')}><img style={locale !== "ru" ? {opacity: 0.5} : {opacity: 1, transform: "scale(1.2)"}} src={ruimg} alt="JewelCocktail"/></div>
            <div className="en_lang" onClick={() => onLocaleChange('en')}><img style={locale !== "en" ? {opacity: 0.5} : {opacity: 1, transform: "scale(1.2)"}} src={enimg} alt="JewelCocktail"/></div>
            <div className="cn_lang" onClick={() => onLocaleChange('zh')} style={{display: "none"}}><img style={locale !== "zh" ? {opacity: 0.5} : {opacity: 1, transform: "scale(1.2)"}} src={cnimg} alt="JewelCocktail"/></div>
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
            <div>
              <a href="https://wa.me/79688116711" target="_blank" style={{ maxWidth: "27px", display: "inline-block", marginRight: "10px" }}><img src={whatsapp} alt="JewelCocktail" style={{ maxWidth: "100%" }} /></a>
              <a href="https://t.me/AleksandraLuch" target="_blank" style={{ maxWidth: "27px", display: "inline-block", marginLeft: "10px" }}><img src={telegram} alt="JewelCockail" style={{ maxWidth: "100%" }} /></a>
            </div>
            <a href="mailto:contact@jewelcocktail.com">
              contact@jewelcocktail.com
            </a>
          </WrapPhone>
          <WrapMobile>
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
                  <Link to="/shop" className={ location.pathname === "/shop" ? "link-to-shop activeMenuDesctop" : "link-to-shop"}><FormattedMessage id="message.shop" /></Link>
                  <Link to="/talisman" className={ location.pathname === "/talisman" ? "link-to-shop activeMenuDesctop" : "link-to-shop"}><FormattedMessage id="message.talisman" /></Link>
                  {/*<Link to="/glass" className={ location.pathname === "/glass" ? "link-to-shop activeMenuDesctop" : "link-to-shop"}><FormattedMessage id="message.glass" /></Link>*/}
                  <Link to="/#aboutus"><div><FormattedMessage id="message.aboutUs" /></div></Link>
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
                  <div style={{ textAlign: "center" }}>
                    <a href="https://wa.me/79688116711" target="_blank" style={{ maxWidth: "27px", display: "inline-block", marginRight: "10px" }}><img src={whatsapp} alt="JewelCocktail" style={{ maxWidth: "100%" }} /></a>
                    <a href="https://t.me/AleksandraLuch" target="_blank" style={{ maxWidth: "27px", display: "inline-block", marginLeft: "10px" }}><img src={telegram} alt="JewelCockail" style={{ maxWidth: "100%" }} /></a>
                  </div>
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
        {location.pathname === "/glass" && (
          <WrapTitle className={show ? 'removeZindex' : 'addit'}>
            <h1 className="glass-title">Jewel Cocktail</h1>
          </WrapTitle>
        )}

        {location.pathname === "/talisman" && (
          <WrapTitle className={show ? 'removeZindex' : 'addit'}>
            <h1 className="glass-title">Jewel Cocktail</h1>
          </WrapTitle>
        )}

        {location.pathname === "/talisman/stone" && (
          <WrapTitle className={show ? 'removeZindex' : 'addit'}>

            <h1 className="stone-title">Jewel Cocktail<br/>{ locale !== "ru" ? "Коллекция талисманов" : "TALISMAN COLLECTION"  }</h1>
          </WrapTitle>
        )}


        {isMobile && location.pathname !== "/glass" && location.pathname !== "/talisman" && location.pathname !== "/talisman/stone" &&  (
          <WrapTitle className={show ? 'removeZindex' : 'addit'}>
            {sticky && window.innerWidth >= '768' ? <div style={{ marginTop: "180px"}}/> : <span/>}
            <h1>Jewel Cocktail</h1>
            <h2><FormattedMessage id="message.diza" /></h2>
            {/*<p>Мы отказались от классических форм ювелирных украшений, предлагая вместо этого современный<br/> минимализм, естественность и возможность эксперементировать с образами. </p>*/}
          </WrapTitle>
        )}
      </Wrapper>
    </ConttainerWrap>
  );
};
