import React, { useEffect } from 'react';
import './index.css';
import { Header } from "./components/header/Header";
import { Description } from "./components/description/Description";
import {Constructor} from "./components/constructor/Constructor";
import {BottomSlider} from "./components/bottomSlider/BottomSlider";

export const ConstructorQr = () =>   {
  return (
    <div style={{ zIndex: 99999, position: 'relative' }}>
      <Header />
      <Description />
      <Constructor />
      <BottomSlider />
    </div>
  )
};

