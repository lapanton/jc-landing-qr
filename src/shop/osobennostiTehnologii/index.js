import React from 'react';
import {useLocation} from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { WrapContainer, Wrapper, WrapTitle, WrapItems, InnerOne, InnerTwo, InnerThree, BottomArea } from './osobennostiTehnologii-styled';
import oneImg from './one.png';
import twoImg from './two.png';
import threeImg from './three.png';



export const OsobennostiTehnologiiShop = () => {
  const location = useLocation();
  return (
    <WrapContainer
      id="containerTwo"
      style={{ position: "relative", width: "100%", zIndex: 99999 }}
      className={location.pathname !== "/glass" ? "wrapContainerTwo" : "wrapContainerTwo onGlassPage"}
    >
      <Wrapper>
        <WrapTitle>
          <h3><FormattedMessage id="message.veryspecial" /></h3>
          <h6><FormattedMessage id="message.uniqjew" values={{br:<br/>}} /></h6>
        </WrapTitle>
        <WrapItems>
          <InnerOne>
            <img src={oneImg} alt="JewelCocktail"/>

            {location.pathname !== "/glass" ?
              <p><FormattedMessage id="message.raznoobr"/></p>
              :
              <p>
                Разнообразие моделей и только натуральные материалы
              </p>
            }
          </InnerOne>
          <InnerTwo>
            <img src={twoImg} alt="JewelCocktail"/>
            {location.pathname !== "/glass" ?
              <p><FormattedMessage id="message.smena"/></p>
              :
              <p>
                контроль качества на каждом этапе
              </p>
            }
          </InnerTwo>
          <InnerThree>
            <img src={threeImg} alt="JewelCocktail"/>
            {location.pathname !== "/glass" ?
              <p><FormattedMessage id="message.poslanie"/></p>
              :
              <p>особенный стиль, который делает изделие уникальным</p>
            }
          </InnerThree>
        </WrapItems>
        <BottomArea style={{ display: "none" }}>
          <p><FormattedMessage id="message.inserts" /></p>
        </BottomArea>
      </Wrapper>
    </WrapContainer>
  );
};
