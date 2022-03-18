import React from 'react';
import { Wrapper, WrapImage, WrapText } from "./uverennosti-styled";
import bg from './bguv.png';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';

export const Uverenosti = () => {
  return (
    <Wrapper>
      <img src={bg} alt="JewelCocktail"/>
      <WrapText>
        <h3>
          уверенность<br/>
          и
          самодостаточность
        </h3>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Мы предлагаем Вам стать стилистом и творцом своего образа благодаря большому разнообразию основ и ассортименту съемных элементов. Шарм-элементы можно подобрать под любые образы и запросы, их можно быстро сменить, если поменялись планы. Все украшения и варианты декоративных элементов прекрасно сочетаются между собой. С нашей коллекцией Вы можете бесконечно экспериментировать с образами, став сама себе стилистом.<br/>Самодостаточность – эталон стиля.
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
