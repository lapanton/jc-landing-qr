import React, { useEffect, useState } from "react";
import { Wrapper, Qr } from "./info-styled";
import qr from "./qr.png";

export const Info = (props) => {
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
  console.log('langProps.locale === "ru"', langProps.locale === "ru");
  return (
    <>
      {isMobile && (
        <Wrapper>
          <Qr>
            <img src={qr} alt="JewelCocktail" />
          </Qr>
          <div className="add-special-width">
            {langProps.locale === "ru" ? (
              <>
                <h3>
                  особый <span>подарок</span> с цифровым посланием
                </h3>
                <p className="how-it-works">как это работает</p>
              </>
            ) : (
              <>
                <h3>
                  special <span>gift</span> with your digital message
                </h3>
                <p className="how-it-works">How does it work</p>
              </>
            )}
          </div>
        </Wrapper>
      )}
    </>
  );
};
