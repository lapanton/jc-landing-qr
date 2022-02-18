import React from 'react';
import { Wrapper, WrapText } from "./selfProduct-styled";
import bg from './bg.png';

export const SelfProduct = () => {
  return (
    <Wrapper>
      <img src={bg} alt="JewelCocktail"/>
      <WrapText>
        <h3>
          Собственное
          производство шедевров
        </h3>
        <p>Наши ювелирные изделия изготовлены из серебра 925 пробы. Серебро имеет защитное покрытие от потемнения и окисления, благодаря чему любимое украшение будет выглядеть как в день приобретения, даже спустя годы.</p>
        <p className="boldp">Собственное производство позволяет осуществлять контроль качества на каждом этапе, а также постоянно расширять ассортимент продукции.</p>
      </WrapText>
    </Wrapper>
  )
}
