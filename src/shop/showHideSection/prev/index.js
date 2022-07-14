import React from 'react';
import { Wrapper } from "./styles-second";
import vid from './vidtwo.mp4';

export const SecondVideo = () => {
  return (
    <Wrapper>
      <video width="100%" height="100%" autoPlay loop muted playsInline>
        <source src={vid} type="video/mp4"/>
      </video>
    </Wrapper>
  )
}
