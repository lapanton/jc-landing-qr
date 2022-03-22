import React from 'react';
import { Wrapper, WrapText } from "./selfProduct-styled";
import bg from './bg.png';

export const SelfProduct = () => {
  return (
    <Wrapper>
      <img src={bg} alt="JewelCocktail" className="desktopImg"/>
      <WrapText>
        <h3>
          Собственное
          производство шедевров
        </h3>
        <div className="mobileImg">
          <img src={bg} alt="JewelCocktail" />
        </div>
        <p><span>&nbsp;&nbsp;</span>&nbsp;&nbsp;Наши ювелирные изделия изготовлены из серебра 925 пробы. Серебро имеет защитное покрытие от потемнения и окисления, благодаря чему любимое украшение будет выглядеть как в день приобретения, даже спустя годы.</p>
        <p className="boldp"><span>&nbsp;&nbsp;</span>&nbsp;&nbsp;Собственное производство позволяет осуществлять контроль качества на каждом этапе, а также постоянно расширять ассортимент продукции.</p>
      </WrapText>
    </Wrapper>
  )
}
