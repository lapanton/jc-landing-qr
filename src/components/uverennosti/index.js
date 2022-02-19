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
          и самодостаточность
        </h3>
        <p>
          Вы получаете то, что регулярно повторяете. Ваш финансовое состояние результат привычек в отношении денег. Ваш веш результат пищевых привычек. Ваши знания результат привычек в отношении обучения. Хаос в доме результат привычек уборки в доме.
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
