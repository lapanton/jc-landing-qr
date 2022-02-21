import React, {useEffect, useState} from 'react';
import { Wrapper, WrapperImgClient, WrapLogo } from "./qr1001-styled";
import logos from "./img/logos.png";

import imgClient from './img/qr1001.png';
import {ConfettiAnimation} from "../../animation/Confetti";

export const Qr1001 = () => {
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
      <p>Ты гораздо сильнее, чем ты думаешь.<br/> Верь в себя, всё получится.</p>
    </Wrapper>
  )
}