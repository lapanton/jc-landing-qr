import React from 'react';
import { createGlobalStyle } from "styled-components";
import { Main } from "./components/first";
import  {BlackSquare } from "./components/blackSquare";
import {WithUs} from "./components/withUs";
import {Uverenosti} from "./components/uverennosti";
import {Freedom} from "./components/freedom";
import {Different} from "./components/different";
import {Slider} from "./components/slidier";
import {SelfProduct} from "./components/selfProduct";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    // font-family: 'Inter', sans-serif;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    button:focus {outline:0;}
  }
`;

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Main />
      <BlackSquare />
      <WithUs/>
      <Uverenosti/>
      <Freedom/>
      <Different/>
      <Slider/>
      <SelfProduct/>
    </div>
  );
}
