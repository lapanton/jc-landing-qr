import React, {useEffect, useState} from 'react';
import { Wrapper,WrapperDesktop, LeftPart, RightPart, WrapVideo, WrapSubtitle, WrapDescription, GiftButton } from "./styles-second";
import vid from './preview.mp4'

export const Second = () => {
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
            <WrapSubtitle>Живые hi-tech УКРАШЕНИЯ</WrapSubtitle>
            <WrapDescription>особый <span>подарок</span><br/>с твоим цифровым посланием</WrapDescription>
            <GiftButton>подарить</GiftButton>
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
