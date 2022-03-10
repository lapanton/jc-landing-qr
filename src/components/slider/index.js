import React  from 'react';
import { Wrapper, Inner } from "./slider-style";
import first from './1.png';
import two from './2.png';
import three from './3.png';

import ScrollContainer from 'react-indiana-drag-scroll'

export const Slider = () =>  {
  return (
    <Wrapper>
      <h3>НАША ГАЛЕРЕЯ</h3>
      <p></p>

      <ScrollContainer className="scroll-container" vertical={false} horizontal={true} >
        <Inner>

          <div className="innerSliderItems">
            <img src={first} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={two} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={three} alt="JewelCocktail"/>
          </div>


          <div className="innerSliderItems">
            <img src={first} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={two} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={three} alt="JewelCocktail"/>
          </div>


          <div className="innerSliderItems">
            <img src={first} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={two} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={three} alt="JewelCocktail"/>
          </div>

        </Inner>
      </ScrollContainer>
    </Wrapper>
  )
}
