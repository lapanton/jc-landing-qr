import React, { useEffect } from 'react';
import { WrapContainer, Wrapper, WrapTitle, WrapItems, InnerOne, InnerTwo, InnerThree, BottomArea } from './osobennostiTehnologii-styled';
import oneImg from './one.png';
import twoImg from './two.png';
import threeImg from './three.png';


export const OsobennostiTehnologii = () => {
  useEffect(() => {
    const Pave = window.Pave;
    const paves = new Pave("containerTwo", {

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
    <WrapContainer id="containerTwo" style={{ position: "relative", width: "100%", zIndex: 99999 }} className="wrapContainerTwo">
      <Wrapper>
        <WrapTitle>
          <h3>Особенность технологии</h3>
          <h6>Уникальность наших ювелирных украшений не только в творческой идее и истории создания,<br/> но также в особенностях технологии:</h6>
        </WrapTitle>
        <WrapItems>
          <InnerOne>
            <img src={oneImg} alt="JewelCocktail"/>
            <p>Разнообразие сменных вставок - используются различные натуральные камни, жемчуг, серебро, дерево, эмаль и керамика.</p>
          </InnerOne>
          <InnerTwo>
            <img src={twoImg} alt="JewelCocktail"/>
            <p>Смена образа возможна одним легким движением благодаря запатентованной системе креплений вставок.</p>
          </InnerTwo>
          <InnerThree>
            <img src={threeImg} alt="JewelCocktail"/>
            <p>Украшения с цифровым посланием - это новая технология мета-посланий, которая делает каждое изделие совершенно уникальным.</p>
          </InnerThree>
        </WrapItems>
        <BottomArea>
          <p>Jewel Cocktail украшения со съемными вставками, которые можно поменять, когда захочется — это личная ювелирная история для каждого.</p>
        </BottomArea>
      </Wrapper>
    </WrapContainer>
  );
};
