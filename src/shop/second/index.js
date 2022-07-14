import React from 'react';
import { Wrapper } from "./styles-second";
import vid from './preview.mp4'

export const Second = () => {
  return (
    <Wrapper>
      <video width="100%" height="100%" autoPlay loop muted playsInline >
        <source src={vid} type="video/mp4"/>
      </video>
    </Wrapper>
    )
}
