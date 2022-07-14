import React, { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";
import { Wrapper, WrapImage, WrapText, Wrapslider } from "./uverennosti-styled";
// import bg from './bguv.png';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';

import slone from './slider/1.png';
import sltwo from './slider/2.png';
import slthree from './slider/3.png';

export const Uverenosti = () => {

  const [imgSource, setImgSource] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgSource((imgSource) => {
        if (imgSource < 2) {
          return imgSource + 1;
        }
        return 0;
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Wrapper>
      <Wrapslider>
        <img src={slone} alt="JewelCocktail" className={imgSource === 0 ? 'active' : ' ' }/>
        <img src={sltwo} alt="JewelCocktail" className={imgSource === 1 ? 'active' : ' ' }/>
        <img src={slthree} alt="JewelCocktail" className={imgSource === 2 ? 'active' : ' ' }/>
      </Wrapslider>
      <WrapText>
        <h3>
          <FormattedMessage id="message.uveren" values={{br: <br />}} />
        </h3>
        <p>
          <span>&nbsp;&nbsp;</span>&nbsp;&nbsp;<FormattedMessage id="message.miPredlagaem" values={{br: <br />}} />
        </p>
        <div style={{position: "relative", zIndex: "9999999"}}>
          <WrapImage>
            <img src={one} alt="JewelCocktail"/>
            <img src={two} alt="JewelCocktail"/>
            <img src={three} alt="JewelCocktail"/>
            <img src={four} alt="JewelCocktail"/>
            <img src={five} alt="JewelCocktail"/>
          </WrapImage>
        </div>
      </WrapText>
    </Wrapper>
  )
}
