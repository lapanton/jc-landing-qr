import React, {useEffect, useState} from 'react';
import { Wrapper, WrapperImgClient, WrapLogo } from "./qr00001-styled";
import logos from "./img/logos.png";

import imgClient from './img/qr00001.png';
import {ConfettiAnimation} from "../../animation/Confetti";

export const Qr00001 = () => {
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
      <p>Антон, спасибо за твой неоценимый вклад и участие. Ты крутой 😎</p>
    </Wrapper>
  )
}