import React from 'react';
import { Wrapper, WrapText } from "./different-styled";
import bg from './bg.png';

export const Different = () => {
  return (
    <Wrapper>
      <img src={bg} alt="JewelCocktail"/>
      <WrapText>
        <h3>
          Будь разным когда хочешь
        </h3>
        <p className="boldp">Меняй свой образ несколько раз в день, используя съемные элементы, преображайся за несколько секунд.</p>
        <p>Наши украшения не заставят соответстветвовать одному выбранному образу и стилю за всю жизнь, а поддержат любые вдохновляющие изменения.</p>
      </WrapText>
    </Wrapper>
  )
}
