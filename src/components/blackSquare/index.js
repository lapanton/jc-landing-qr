import React from 'react';
import { Wrapper } from "./blacksquare-styled";
import square from './square.png';
import MoveStuffAround from "./lineTicker";

export const BlackSquare = () => {
  return (
    <Wrapper>
      <img src={square} alt="JewelCocktail"/>
      <p>
        <span>Особенность бренда в том, что все изделия имеют квадратную форму, которая отсылает к известному квадрату Казимира Малевича.</span> <br/><br/>
        Наши изделия - это не просто украшения, а ювелирные произведения искусства со своей историей и индивидуальностью.<br/><br/>
        Идеальной формой для наших украшений мы выбрали квадрат, как основной символ суперматизма.
      </p>
    </Wrapper>
  )
}
