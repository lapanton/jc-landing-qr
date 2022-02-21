import React, {useEffect, useState} from 'react';
import { Wrapper, WrapperImgClient, WrapLogo } from "./qr1-styled";
import logos from "./img/logos.png";

import imgClient from './img/qr1.png';
import {ConfettiAnimation} from "../../animation/Confetti";

export const Qr1 = () => {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    setTimeout(() => {setHide(false)}, 2500);
  },[]);
  return (
    <Wrapper>
      {hide && <ConfettiAnimation/>}
      <WrapLogo>
        <a href="/">
          <img src={logos} alt="jewelcocktail"/>
        </a>
      </WrapLogo>
      <WrapperImgClient>
        <img src={imgClient} alt="jewelcocktail"/>
      </WrapperImgClient>
      <p>Сашулька, ты самая прекрасный и желанный мой цветок. Цвети всегда и помни, что лучше тебя нет на всем белом свете. В 2022 году желаю, чтобы твои желания и мечты сбылись, приложу максимум усилий к их исполнению😘 Люблю тебя твой знакомый-незнакомец😎</p>
    </Wrapper>
  )
}