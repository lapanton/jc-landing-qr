import React, { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";
import YouTube from 'react-youtube';
import { Wrapper, Inner, BuyButton, ButtonShow, ButtonHide, WrapDesktop, LeftPart, RightPart, SecondWrapDesktop, LeftPartSecond, RighhtPartSecond } from "./showHideSection-styled";
import arrowDown from './arrowDown.png';
import arrowUp from './arrowUp.png';
import {Descr} from "../info/info-styled";
import heeart from './heeeart.png';
import qrcode from './qrcode.png';
import { SecondVideo } from "./prev";
import vid from "./prev/vidtwo.mp4";

export const ShowHideSection = (props) => {
  const { langProps } = props;
  // console.log('langProps', langProps.locale);
  const [show, setShow] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;
  const handleScroll = () => {
    window.scrollTo({top: (isMobile ? 2580 : 3400), left: 0, behavior: 'smooth'});
  };
  const opts = {
    height: isMobile ? '300' : '460',
    width: isMobile ? '360px' : '600px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, mute: 1
    },
  };
  return (
    <>
    {isMobile ?
        <>
          <Wrapper>
            <Inner>
              {
                !show && (
                  <ButtonShow onClick={() => {
                    window.scrollTo({top: 750, left: 0, behavior: 'smooth'});
                    setShow(!show);
                  }}>
                    <img src={arrowDown} alt="JewelCocktail"/>
                  </ButtonShow>
                )
              }
              { (show || !isMobile) &&  (
                <>
                  <p className="podarok-s-dushoi"> <FormattedMessage id="shop.du" /></p>
                  { langProps.locale === "ru"
                    ?
                    <Descr>&nbsp;&nbsp;&nbsp;&nbsp;украшения в стиле минимализм, где На обратной стороне сменного камня нанесена гравировка с QR-кодом, <span>невидимым для окружающих</span>.<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;qr-код ведёт на твою цифровую открытку – это уникальная возможность сделать оригинальный <span>подарок с личным посланием</span> и сохранить важные сердцу моменты.
                    </Descr>
                    :
                    <Descr>&nbsp;&nbsp;&nbsp;&nbsp;Individuial QR code is engraved on the back of the stone, <span>invisible to others.</span>.<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;The QR code leads to your digital card-that gives unique opportunity to make an original <span>gift with a personal message</span> and save the moments important to the heart.
                    </Descr>
                  }

                  <YouTube videoId="XLzYEUDEk-k" opts={opts} />
                  <BuyButton onClick={() => handleScroll()}>
                    {langProps.locale === "ru" ? "подарить" : "present" }
                  </BuyButton>
                  <div className="main-text to-center">
              <span>
                <img src={heeart} alt="JewelCocktail" className="heeeeeart"/>
                {langProps.locale === "ru" ? "Старые и новые решения" : "Old and new solutions" }
                <img src={qrcode} alt="JewelCocktail" className="qqqrcode"/>
              </span>
                  </div>
                  <div className="second-text to-center">
                    {langProps.locale === "ru" ?
                    "Чувства – это то, что живет в сердце, а подарок с душой скажет о вашем отношении лучше слов" : "Feelings are what live in the heart, and a gift with soul will speak better about your attitude than words."}</div>
                  <SecondVideo />
                  <div className="text-three"> {langProps.locale === "ru" ? "лучший подарок – это внимание и забота украшения Jewel Cocktail помогут сохранить яркие моменты и чувства " : "The best gift  is attention and care. Jewel Cocktail helps to fix bright moments and feelings "}</div>
                  <ButtonHide onClick={() => {
                    window.scrollTo({top: 300, left: 0, behavior: 'smooth'});
                    setShow(!show);
                  }}>
                    <img src={arrowUp} alt="JewelCocktail"/>
                  </ButtonHide>
                </>
              )}
            </Inner>

          </Wrapper>
        </> :
      <>
        <WrapDesktop>
          <LeftPart>
            <YouTube videoId="XLzYEUDEk-k" opts={opts} />
          </LeftPart>
          <RightPart>
            <h2> <FormattedMessage id="shop.ra" /><br/>
              <FormattedMessage id="shop.du" /></h2>
            {langProps.locale === "ru" ?

              <p>украшения в стиле минимализм, где На обратной стороне сменного камня нанесена гравировка с
                QR-кодом, <span>невидимым для окружающих</span>.
                qr-код ведёт на твою цифровую открытку – это уникальная возможность сделать оригинальный <span>подарок с личным посланием</span> и
                сохранить важные сердцу моменты.
              </p> :
              <p>ndividuial QR code is engraved on the back of the stone, <span>invisible to others</span>.
                The QR code leads to your digital card-that gives unique opportunity to make an original <span>gift with a personal message </span> and save the moments important to the heart.
              </p>
            }
          </RightPart>
        </WrapDesktop>
        <SecondWrapDesktop>
          <LeftPartSecond>
            {langProps.locale === "ru" ?
              <>
                <h3>Старые и новые решения</h3>
                <p>лучший подарок – внимание и забота
                  украшения Jewel Cocktail помогут сохранить яркие моменты и чувства</p>
              </> :
              <>
                <h3>Old and new solutions</h3>
                <p>The best gift  is attention and care. Jewel Cocktail helps to fix bright moments and feelings </p>
              </>
            }

          </LeftPartSecond>
          <RighhtPartSecond>
            <video width="100%" height="100%" autoPlay loop muted playsInline>
              <source src={vid} type="video/mp4"/>
            </video>
          </RighhtPartSecond>
        </SecondWrapDesktop>
      </>
    }
    </>
  );

};
