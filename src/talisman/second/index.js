import React, { useEffect, useState } from "react";
import {
  Wrapper,
  WrapperDesktop,
  LeftPart,
  RightPart,
  WrapSubtitle,
  WrapDescription,
} from "./styles-second";
import { WrapRight } from "../exampleTalisman/selfProduct-styled";
import conselation from "../exampleTalisman/constellation.png";
import YouTube from "react-youtube";

export const SecondTalisman = (props) => {
  const { langProps } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  useEffect(() => {
    document.body.style.background = "#000";
    return () => (document.body.style.background = "#DBDDDE");
  }, []);

  const opts = {
    height: isMobile ? "300" : "460",
    width: isMobile ? "360px" : "600px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      mute: 1,
    },
  };

  return (
    <>
      {isMobile ? (
        <Wrapper>
          <WrapSubtitle>
            hi-tech {langProps.locale === "ru" ? "ТАЛИСМАН" : "TALISMAN"}
          </WrapSubtitle>
          <YouTube videoId="KCECIDz_gdA" opts={opts} />
          <WrapDescription>
            {langProps.locale === "ru" ? (
              <>
                создай <span>талисман</span>
                <br />
                по своему смыслу
                <br />
                усиль энергию камня
              </>
            ) : (
              <>
                create <span>talisman</span> according to your meaning and use
                the energy of charm
              </>
            )}

            <img
              src={conselation}
              alt="JewelCocktail"
              className="conselation"
            />
          </WrapDescription>
        </Wrapper>
      ) : (
        <WrapperDesktop>
          <LeftPart>
            <h1>Jewel Cocktail</h1>
            <WrapSubtitle>
              hi-tech {langProps.locale === "ru" ? "ТАЛИСМАН" : "TALISMAN"}
            </WrapSubtitle>
            <img
              src={conselation}
              alt="JewelCocktail"
              className="conselation"
            />
            <WrapDescription>
              {langProps.locale === "ru" ? (
                <>
                  создай <span>талисман</span>
                  <br />
                  по своему смыслу усиль энергию камня
                </>
              ) : (
                <>
                  create <span>talisman</span>
                  according to your meaning and use the energy of charm
                </>
              )}
            </WrapDescription>
          </LeftPart>
          <RightPart>
            <WrapRight>
              <YouTube videoId="KCECIDz_gdA" opts={opts} />
            </WrapRight>
          </RightPart>
        </WrapperDesktop>
      )}
    </>
  );
};
