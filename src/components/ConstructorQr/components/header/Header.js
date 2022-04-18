import React from 'react';
import { Wrapper, Menu, Social, WrapPhone } from "./header-style";
import logo from './logo.png';
import vk from './vk.png';
import youtube from './youtube.png';
import google from './google.png';
import {WrapperPending} from "../constructor/constructor-style";

export const Header = () => {
  return (
    <Wrapper>
      <div>
        <a href="/">
          <img src={logo} alt="JewelCocktail"/>
        </a>
      </div>
      
      <Menu>
        <div>О нас</div>
        <div>Галерея</div>
        <div>Наше производство</div>
        <div>Контакты</div>
        <div>Подарок</div>
      </Menu>

      <Social>
        <a href="/" className="vk">
          <img src={vk} alt="JewelCocktail"/>
        </a>
        <a href="/" className="you">
          <img src={youtube} alt="JewelCocktail"/>
        </a>
        <a href="mailto:contact@jewelcocktail.com" className="goo">
          <img src={google} alt="JewelCocktail"/>
        </a>
      </Social>

      <WrapPhone>
        <a href="tel:+74993777919">
          +7 499 377 79 19
        </a>
        <a href="mailto:contact@jewelcocktail.com">
          contact@jewelcocktail.com
        </a>
      </WrapPhone>

    </Wrapper>
  );
};
