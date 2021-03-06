import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { Wrapper, Inner, BuyButton, ButtonShow, ButtonHide } from "./showHideSection-styled";
import arrowDown from './arrowDown.png';
import arrowUp from './arrowUp.png';
import {Descr} from "../info/info-styled";
import heeart from './heeeart.png';
import qrcode from './qrcode.png';
import { SecondVideo } from "./prev";

export const ShowHideSection = () => {
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
    height: '300',
    width: isMobile ? '360px' : '640px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, mute: 1
    },
  };
  return (
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
            <p className="podarok-s-dushoi">подарок с душой</p>
            <Descr>&nbsp;&nbsp;&nbsp;&nbsp;украшения в стиле минимализм, где На обратной стороне сменного камня нанесена гравировка с QR-кодом, невидимым для окружающих.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;qr-код ведёт на твою цифровую открытку – это уникальная возможность сделать оригинальный <span>подарок с личным посланием</span> и сохранить важные сердцу моменты.
            </Descr>
            <YouTube videoId="XLzYEUDEk-k" opts={opts} />
            <BuyButton onClick={() => handleScroll()}>
              подарить
            </BuyButton>
            <div className="main-text to-center">
              <span>
                <img src={heeart} alt="JewelCocktail" className="heeeeeart"/>
                  Старые и новые решения
                <img src={qrcode} alt="JewelCocktail" className="qqqrcode"/>
              </span>
            </div>
            <div className="second-text to-center">Чувства – это то, что живет в сердце, а подарок с душой скажет о вашем отношении лучше слов</div>
            <SecondVideo />
            <div className="text-three">лучший подарок – это внимание и забота
              украшения Jewel Cocktail помогут сохранить яркие моменты и чувства</div>
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
  );

};
