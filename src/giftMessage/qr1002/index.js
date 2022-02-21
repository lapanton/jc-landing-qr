import React, {useEffect, useState} from 'react';
import { Wrapper, WrapperImgClient, WrapLogo } from "./qr1002-styled";
import logos from "./img/logos.png";

import imgClient from './img/qr1002.png';
import {ConfettiAnimation} from "../../animation/Confetti";

export const Qr1002 = () => {
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
        <img src={imgClient} alt="jewelcocktail" style={{marginBottom: "30px"}}/>
      </WrapperImgClient>
    </Wrapper>
  )
}