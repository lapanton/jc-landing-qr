import React, {useEffect, useState} from 'react';
import { Wrapper,WrapperDesktop, LeftPart, RightPart, WrapVideo, WrapSubtitle, WrapDescription, GiftButton } from "./styles-second";
import vid from './preview.mp4'

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
          <video width="100%" height="100%" autoPlay loop muted playsInline >
            <source src={vid} type="video/mp4"/>
          </video>
        </Wrapper>
      ) : (
        <WrapperDesktop>
          <LeftPart>
            <h1>Jewel Cocktail</h1>
            <WrapSubtitle>hi-tech {langProps.locale === "ru" ? "ТАЛИСМАН" : "TALISMAN"}</WrapSubtitle>
            <WrapDescription>
              {langProps.locale === "ru" ? <>
              создай <span>талисман</span><br/>по своему смыслу усиль энергию камня
              </> : <>
                create <span>talisman</span>
                according to your meaning and use the energy of charm
              </> }

            </WrapDescription>
            <GiftButton onClick={() => window.scrollTo({top: 1800, left: 0, behavior: 'smooth'})}>{langProps.locale === "ru" ? "создать" : "create"}</GiftButton>
          </LeftPart>
          <RightPart>
            <WrapVideo>
              <span>
                <video width="100%" height="100%" autoPlay loop muted playsInline >
                  <source src={vid} type="video/mp4"/>
                </video>
              </span>
            </WrapVideo>
          </RightPart>
        </WrapperDesktop>
      )}
    </>
  )
}
