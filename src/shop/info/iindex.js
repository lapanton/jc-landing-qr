import React, {useEffect, useState} from 'react';
import { Wrapper, Qr } from "./info-styled";
import qr from './qr.png'

export const Info = () => {
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
  return (
    <>
      {isMobile && (
        <Wrapper>
          <Qr>
            <img src={qr} alt="JewelCocktail"/>
          </Qr>
          <div className="add-special-width">
            <h3>особый <span>подарок</span> с цифровым посланием</h3>
            <p className="how-it-works">как это работает</p>

          </div>
        </Wrapper>
      )}
    </>
  );
};
