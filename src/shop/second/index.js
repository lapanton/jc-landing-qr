import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Wrapper,
  WrapperDesktop,
  LeftPart,
  RightPart,
  WrapVideo,
  WrapSubtitle,
  WrapDescription,
  GiftButton,
} from "./styles-second";
import YouTube from "react-youtube";

export const Second = (props) => {
  const { langProps } = props;
  console.log("langProps", langProps);
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
          <RightPart>
            {langProps.locale === "ru" ? (
              <YouTube videoId="tvd7oLTpQTs" opts={opts} />
            ) : (
              <YouTube videoId="mqJdg9Z0Ius" opts={opts} />
            )}
          </RightPart>
        </Wrapper>
      ) : (
        <WrapperDesktop>
          <LeftPart>
            <h1>Jewel Cocktail</h1>
            <WrapSubtitle>
              <FormattedMessage id="shop.live" />
            </WrapSubtitle>
            <WrapDescription>
              <FormattedMessage id="shop.oso" />{" "}
              <span>
                <FormattedMessage id="shop.gi" />
              </span>
              <br />
              <FormattedMessage id="shop.me" />
            </WrapDescription>
            <GiftButton
              onClick={() =>
                window.scrollTo({ top: 1800, left: 0, behavior: "smooth" })
              }
            >
              <FormattedMessage id="shop.pr" />
            </GiftButton>
          </LeftPart>
          <RightPart>
            {langProps.locale === "ru" ? (
              <YouTube videoId="tvd7oLTpQTs" opts={opts} />
            ) : (
              <YouTube videoId="mqJdg9Z0Ius" opts={opts} />
            )}
          </RightPart>
        </WrapperDesktop>
      )}
    </>
  );
};
