import React, {useEffect, useState} from 'react';
import { Wrapper,WrapperDesktop, LeftPart, RightPart, WrapVideo, WrapSubtitle, WrapDescription, GiftButton } from "./styles-second";
import vid from './preview.mp4'
import telPhone from "../exampleTalisman/phone_preview.gif";
import {WrapRight} from "../exampleTalisman/selfProduct-styled";
import conselation from "../exampleTalisman/constellation.png";

export const SecondTalisman = (props) => {
  const { langProps } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;

  useEffect(() => {
    document.body.style.background = "#000";
    return () =>  document.body.style.background = "#DBDDDE";
  }, []);

  return (
    <>
      {isMobile ? (
        <Wrapper>
          <WrapSubtitle>hi-tech {langProps.locale === "ru" ? "ТАЛИСМАН" : "TALISMAN"}</WrapSubtitle>
          <img src={telPhone} alt="JewelCocktail" className="desktopImg"/>
          <WrapDescription>
            {langProps.locale === "ru" ? <>
              создай <span>талисман</span><br/>по своему смыслу усиль энергию камня
            </> : <>
              create <span>talisman</span>
              according to your meaning and use the energy of charm
            </> }
            <h3>
              {langProps.locale === "ru" ? "выбери вставку наполни смыслом носи с удовольствием" : "CHOOSE YOUR CHARM FILL WITH MEANING WEAR WITH PLEASURE"}
            </h3>
          </WrapDescription>
        </Wrapper>
      ) : (
        <WrapperDesktop>
          <LeftPart>
            <h1>Jewel Cocktail</h1>
            <WrapSubtitle>hi-tech {langProps.locale === "ru" ? "ТАЛИСМАН" : "TALISMAN"}</WrapSubtitle>
            <img src={conselation} alt="JewelCocktail" className="conselation" />
            <WrapDescription>
              {langProps.locale === "ru" ? <>
              создай <span>талисман</span><br/>по своему смыслу усиль энергию камня
              </> : <>
                create <span>talisman</span>
                according to your meaning and use the energy of charm
              </> }
              <h3>
                {langProps.locale === "ru" ? "выбери вставку наполни смыслом носи с удовольствием" : "CHOOSE YOUR CHARM FILL WITH MEANING WEAR WITH PLEASURE"}
              </h3>
            </WrapDescription>
            {/*<GiftButton onClick={() => window.scrollTo({top: 1800, left: 0, behavior: 'smooth'})}>{langProps.locale === "ru" ? "создать" : "create"}</GiftButton>*/}
          </LeftPart>
          <RightPart>
            <WrapRight>
              <img src={telPhone} alt="JewelCocktail" className="desktopImg conselationDesktop"/>
            </WrapRight>
          </RightPart>
        </WrapperDesktop>
      )}
    </>
  )
}
