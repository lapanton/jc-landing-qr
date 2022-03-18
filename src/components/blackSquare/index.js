import React from 'react';
import { Wrapper } from "./blacksquare-styled";
import square from './square.png';
import MoveStuffAround from "./lineTicker";

export const BlackSquare = () => {
  return (
    <Wrapper>
      <div style={{ position: "relative" }} className="wrapMalevich">
        <p className="malevich">К.C. Малевич – «Чёрный квадрат»</p>
        <img src={square} alt="JewelCocktail"/>
      </div>
      <p>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;Особенность бренда в том, что все изделия имеют квадратную форму, которая отсылает к известному квадрату Казимира Малевича.</span> <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;Поскольку сам авторский стиль предполагает высокую степень свободы и самовыражения в рамках минимализма, то все ювелирные украшения Jewel Cocktail имеют технологию сменных вставок, позволяющих менять дизайн в зависимости от настроения или события, которое вы собираетесь посетить.<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;Наши изделия - это не просто украшения, а ювелирные произведения искусства со своей историей и индивидуальностью.<br/>
      </p>
    </Wrapper>
  )
}
