import React, {useEffect, useState} from 'react';
import { FormattedMessage } from "react-intl";
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
            <WrapSubtitle><FormattedMessage id="shop.live" /></WrapSubtitle>
            <WrapDescription><FormattedMessage id="shop.oso" /> <span><FormattedMessage id="shop.gi" /></span><br/><FormattedMessage id="shop.me" /></WrapDescription>
            <GiftButton onClick={() => window.scrollTo({top: 1800, left: 0, behavior: 'smooth'})}><FormattedMessage id="shop.pr" /></GiftButton>
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
