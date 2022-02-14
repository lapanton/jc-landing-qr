import React, { useEffect } from 'react';
import { Wrapper, Inner, WrapSocial, WrapPhone, WrapList, WrapTitle, WrapLoadMore, InnerLoadMore } from './main-styled';
import logo from "./logo.png";
import vk from "./vk.svg";
import insta from "./insta.svg";
import youtube from "./youtube.svg";
import email from "./email.svg";
import arrowDown from "./arrow-down.svg";
import rotateText from "./rotate-text.svg";

export const Main = () => {
  useEffect(() => {
    const Pave = window.Pave;
    const paves = new Pave("container", {

      //dimensions
      BRICK_SIZE: 80, //positive number; measured in pixels
      BRICK_SPACING: 0.1, //positive number; measured in pixels
      CAMERA_ANGLE: 30, //number between 20 and 90; measured in degrees

      //mouse settings
      MOUSE_IMPACT_FACTOR: -100, //any number; measured in pixels
      MOUSE_IMPACT_RADIUS: 0, //positive number; measured in pixels

      //brick color settings
      BRICK_COLOR: "#3e4040", //any color code like "green", "#e4f2c4", "rgb(249, 250, 251)" or "hsl(120, 75%, 50%)"
      BRICK_COLOR_RANDOMIZATION: 0, //number between 0 and 1
      BRICK_COLOR_HUE_RANDOMIZATION: 1, //number between 0 and 1
      BRICK_COLOR_SATURATION_RANDOMIZATION: 1, //number between 0 and 1
      BRICK_COLOR_LIGHTNESS_RANDOMIZATION: 1, //number between 0 and 1
      BRICK_COLOR_HUE_OFFSET: -30, //any number; measured in degrees
      BRICK_COLOR_SATURATION_OFFSET: -60, //any number; measured as a percentage
      BRICK_COLOR_LIGHTNESS_OFFSET: -3, //any number; measured as a percentage

      //shadow settings
      SHADOW_COLOR_HUE_OFFSET: 0, //any number; measured in degrees
      SHADOW_COLOR_SATURATION_OFFSET: 5, //any number; measured as a percentage
      SHADOW_COLOR_LIGHTNESS_OFFSET: 0, //any number; measured as a percentage
      SHADOW_CONTRAST: 0.5, //number between 0 and 1
      USE_MOVING_SHADOW: true, //allowable values: true and false
      MOVING_SHADOW_SIZE_RATIO: 3, //positive number

      //brick swinging settings
      SWING_TYPE: "sine", //allowable values: "sine", "pulse" and "linear"
      SWING_DISTRIBUTION: "random", //allowable values: "random" and "wave"
      SWING_AMPLITUDE: 0, //any number; measured in pixels
      SWING_FREQUENCY: 0.3, //positive number; considered as a number of oscillations per second
      SWING_FREQUENCY_RANDOMIZATION: 0.2, //positive number
      SWING_WAVE_DIRECTION: "bottom-right", //allowable values: "left", "right", "bottom", "top", "bottom-right", "bottom-left", "top-right" and "top-left"
      SWING_WAVE_LENGTH: 15, //positive number; measured in bricks

      //brick releasing settings
      BRICK_RELEASE_TYPE: "normal", //allowable values: "normal", "elastic" and "bounce"
      BRICK_RELEASE_TIME: 3, //positive number; measured in seconds
      BRICK_RELEASE_NORMAL_CURVE: 1, //positive number
      BRICK_RELEASE_ELASTIC_CURVE: 4, //positive number
      BRICK_RELEASE_ELASTIC_FREQUENCY: 11, //positive number
      BRICK_RELEASE_BOUNCE_CURVE: 0.25, //number between 0 and 1
      BRICK_RELEASE_BOUNCE_FREQUENCY: 1 //positive number
    });
    paves.resize();
  }, []);

  return (
    <div id="container" style={{position: "absolute", width: "100%", height: "43rem"}}>
      <Wrapper>
        <Inner>
          <a href="/">
            <img src={logo} alt="JewelCocktail" />
          </a>
          <WrapList>
            <div>О нас</div>
            <div>Галерея</div>
            <div>Наше производство</div>
            <div>Контакты</div>
          </WrapList>
          <WrapSocial>
            <a href="https://vk.com/jewelrycocktail" target="_blank" rel="noopener noreferrer" className="vk-social">
              <img src={vk} alt="JewelCocktail"  />
            </a>
            <a href="https://www.instagram.com/jewelcocktail_official/" target="_blank" rel="noopener noreferrer" className="insta-social">
              <img src={insta} alt="JewelCocktail" />
            </a>
            <a href="https://www.youtube.com/channel/UC44U3iU75Nx-Fv8LFb28I6w" target="_blank" rel="noopener noreferrer" className="youtube-social">
              <img src={youtube} alt="JewelCocktail" />
            </a>
            <a href="mailto:info@jewelcocktail.com" className="email-social">
              <img src={email} alt="JewelCocktail" />
            </a>
          </WrapSocial>
          <WrapPhone>
            <a href="tel:+79991234567">
              +7 999 123 45 67
            </a>
          </WrapPhone>
        </Inner>
        <WrapTitle>
          <h1>Jewel Cocktail</h1>
          <h2>Дизайнерские ювелирные украшения в стиле Русский авангард</h2>
          <p>Мы отказались от классических форм ювелирных украшений, предлагая вместо этого современный<br/> минимализм, естественность и возможность эксперементировать с образами. </p>
        </WrapTitle>
        <WrapLoadMore>
            <InnerLoadMore>
              <img src={arrowDown} alt="JewelCocktail" className="arrowDown"/>
              <img src={rotateText} alt="JewelCocktail" className="rotated"/>
            </InnerLoadMore>
        </WrapLoadMore>
      </Wrapper>
    </div>
  );
};
