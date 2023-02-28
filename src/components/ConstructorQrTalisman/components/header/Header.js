import React from 'react';
import { Wrapper, Menu, Social, WrapPhone } from "./header-style";
import logo from './logo.png';
import vk from './vk.png';
import ins from './ins.png';
import youtube from './youtube.png';
import google from './google.png';
import whatsapp from "../../../../whatsapp.png";
import telegram from "../../../../telegram.png";

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
        <a href="https://www.instagram.com/jewelcocktail_official/" className="vk" target="_blank">
          <img src={ins} alt="JewelCocktail"/>
        </a>
        <a href="https://www.youtube.com/channel/UC44U3iU75Nx-Fv8LFb28I6w" className="you" target="_blank">
          <img src={youtube} alt="JewelCocktail"/>
        </a>
        <a href="mailto:contact@jewelcocktail.com" className="goo">
          <img src={google} alt="JewelCocktail"/>
        </a>
      </Social>

      <WrapPhone>
        <div>
          <a href="https://wa.me/79688116711" target="_blank" style={{ maxWidth: "27px", display: "inline-block", marginRight: "10px" }}><img src={whatsapp} alt="JewelCocktail" style={{ maxWidth: "100%" }} /></a>
          <a href="https://t.me/AleksandraLuch" target="_blank" style={{ maxWidth: "27px", display: "inline-block", marginLeft: "10px" }}><img src={telegram} alt="JewelCockail" style={{ maxWidth: "100%" }} /></a>
        </div>
        <a href="mailto:contact@jewelcocktail.com">
          contact@jewelcocktail.com
        </a>
      </WrapPhone>

    </Wrapper>
  );
};
