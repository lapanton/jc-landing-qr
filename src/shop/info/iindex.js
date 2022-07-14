import React from 'react';
import { Wrapper, Qr } from "./info-styled";
import qr from './qr.png'

export const Info = () => {
  return (
    <Wrapper>
      <Qr>
        <img src={qr} alt="JewelCocktail"/>
      </Qr>
      <div className="add-special-width">
        <h3>особый <span>подарок</span> с цифровым посланием</h3>
        <p className="how-it-works">как это работает</p>

      </div>
    </Wrapper>
  );
};
