import React, { useState, useEffect } from "react";
import {
  LeftPartSecond,
  RighhtPartSecond,
  SecondWrapDesktop,
  Wrapper,
  Inner,
} from "../showHideSection/showHideSection-styled";
import vid from "./vidtwo.mp4";
import heeart from "../showHideSection/heeeart.png";
import qrcode from "../showHideSection/qrcode.png";
import { SecondVideo } from "../showHideSection/prev";
import { MobView } from "./styled";

export const Oldnew = (props) => {
  const { langProps } = props;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  const isMobile = width <= 768;
  return (
    <Wrapper>
      <Inner>
        <>
          {isMobile ? (
            <>
              <video width="100%" height="100%" autoPlay loop muted playsInline>
                <source src={vid} type="video/mp4" />
              </video>
              <MobView className="main-text to-center">
                <span>
                  <img src={heeart} alt="JewelCocktail" className="heeeeeart" />
                  {langProps.locale === "ru"
                    ? "Старые и новые решения"
                    : "Old and new solutions"}
                  <img src={qrcode} alt="JewelCocktail" className="qqqrcode" />
                </span>
              </MobView>
            </>
          ) : (
            <>
              <hr />
              <br />
              <SecondWrapDesktop>
                <LeftPartSecond>
                  {langProps.locale === "ru" ? (
                    <>
                      <h3>Старые и новые решения</h3>
                      <p>
                        лучший подарок – внимание и забота украшения Jewel
                        Cocktail помогут сохранить яркие моменты и чувства
                      </p>
                    </>
                  ) : (
                    <>
                      <h3></h3>
                      <p>
                        The best gift is attention and care. Jewel Cocktail
                        helps to fix bright moments and feelings{" "}
                      </p>
                    </>
                  )}
                </LeftPartSecond>
                <RighhtPartSecond>
                  <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={vid} type="video/mp4" />
                  </video>
                </RighhtPartSecond>
              </SecondWrapDesktop>
              <br />
              <hr />
            </>
          )}
        </>
      </Inner>
    </Wrapper>
  );
};
