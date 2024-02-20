import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Wrapper, Inner, WrapperMob } from "./withus-styled";
import star from "./star.png";
import bgmob from "./bgmob.png";

export const Freedom = (props) => {
  const { langProps } = props;
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return null;
  // return (
  //   <>
  //     {isMobile ? (
  //       <WrapperMob>
  //         <h3>
  //           <FormattedMessage id="message.freedom" />
  //         </h3>
  //         <p>
  //           &nbsp;&nbsp;&nbsp;&nbsp;
  //           <FormattedMessage id="message.purchase" />
  //         </p>
  //         <img src={bgmob} alt="JewelCocktail" />
  //       </WrapperMob>
  //     ) : (
  //       <Wrapper>
  //         <Inner>
  //           <img src={star} alt="JewelCocktail" className="freedomStar" />
  //           <h3>
  //             <FormattedMessage id="message.freedom" />
  //           </h3>
  //           <p>
  //             &nbsp;&nbsp;&nbsp;&nbsp;
  //             <FormattedMessage id="message.purchase" />
  //           </p>
  //         </Inner>
  //       </Wrapper>
  //     )}
  //   </>
  // );
};
