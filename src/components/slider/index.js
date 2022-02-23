import React  from 'react';
import { Wrapper, Inner } from "./slider-style";
import first from './1.png';
import two from './2.png';
import three from './3.png';

import ScrollContainer from 'react-indiana-drag-scroll'

export const Slider = () =>  {
  return (
    <Wrapper>
      <h3>Выставка произведений искусства</h3>
      <p>Все наши изделия представлены в буклетах и каталогах, так как это принято для картинных галерей, поскольку каждая вставка и каждое издели - это уникальный шедевр минимализма. </p>

      <ScrollContainer className="scroll-container" vertical={false} horizontal={true} >
        <Inner>

          <div className="innerSliderItems">
            <img src={first} alt="JewelCocktail"/>
            <p>Название 1</p>
          </div>
          <div className="innerSliderItems">
            <img src={two} alt="JewelCocktail"/>
            <p>Название 2</p>
          </div>
          <div className="innerSliderItems">
            <img src={three} alt="JewelCocktail"/>
            <p>Название 3</p>
          </div>


          <div className="innerSliderItems">
            <img src={first} alt="JewelCocktail"/>
            <p>Название 4</p>
          </div>
          <div className="innerSliderItems">
            <img src={two} alt="JewelCocktail"/>
            <p>Название 5</p>
          </div>
          <div className="innerSliderItems">
            <img src={three} alt="JewelCocktail"/>
            <p>Название 6</p>
          </div>


          <div className="innerSliderItems">
            <img src={first} alt="JewelCocktail"/>
            <p>Название 7</p>
          </div>
          <div className="innerSliderItems">
            <img src={two} alt="JewelCocktail"/>
            <p>Название 8</p>
          </div>
          <div className="innerSliderItems">
            <img src={three} alt="JewelCocktail"/>
            <p>Название 9</p>
          </div>

        </Inner>
      </ScrollContainer>
    </Wrapper>
  )
}
