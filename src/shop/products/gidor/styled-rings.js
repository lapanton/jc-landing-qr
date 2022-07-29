import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 70px;
    .slick-slider {
      max-width: 550px;
      overflow: hidden;
      margin: auto;
    }
  }

  border-top: 1px solid #444545;
  padding-top: 20px;
  /* the slides */
  .slick-slide {
    margin: 0 10px;
  }
  /* the parent */
  .slick-list {
    margin: 0 -10px;
  }

  .slick-current {

  }
  
  .gidor-slider-two {
    @media screen and (max-width: 768px) {
      margin-top: 10px;
      .slick-slide {
        border-radius: 10px;
        transform: scale(0.8);
        opacity: 0.8;
        &.slick-center {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
  position: relative;
  z-index: 999999999;
  overflow: hidden;
  max-width: 100%;
  display: block;
  width: 100%;
  .slick-track {
    display: flex !important;
  }
  .slick-slide img {
    display: block;
    width: 100%;
    height: auto;
    &.recom-page-zoom {
      width: 40%;
      margin: 80px auto 40px auto;
      max-height: inherit;
      cursor: default;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 80px auto;
      }
    }
  }
  .slick-slide {
    height: auto;
  }
  .customPrev,
  .customNext {
    font-size: 0;
    line-height: 0;
    position: absolute;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    transform-origin: center center;
    cursor: pointer;
    color: transparent;
    border: none;
    background: transparent;
    &.whiteBg {
      img {
        @media screen and (min-width: 768px) {
          background: rgba(0, 0, 0, 0.2);
          opacity: 0.8;
        }
      }
    }
  }
  .customPrev {
    right: 34px;
    width: 1.25rem;
    top: 51%;
    z-index: 1;
    left: 0;
    &::before {
      display: none;
    }
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 0.5;
    }
    &.whiteBg {
      transform: rotate(-180deg);
    }
  }
  .customNext {
    transform: rotate(-180deg);
    top: 50%;
    z-index: 1;
    right: 0;
    &::before {
      display: none;
    }
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 0.5;
    }
    &.whiteBg {
      transform: rotate(0deg);
    }
  }
  .customNext,
  .customPrev {
    &.whiteBg {
      width: 60px;
      height: 80px;
      background: rgba(0, 0, 0, 0.2);
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
      }
    }
  }
  h4 {
    margin-bottom: 10px;
    color: #fff;
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.27em;
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 70px;
      right: 16%;
    }
  }
`;

export const Inner = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    margin-top: 70px;
    .slider-wrap {
      display: inline-block;
      width: 49.9%;
      overflow: hidden;
      img:hover {
        cursor: pointer;
      }
    }
  }
`;
export const ChooseStone = styled.div`
  p {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 184.52%;
    color: #FFFFFF;
    white-space: nowrap;
    text-align: center;
    margin: 10px 0;
  }
  .description {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    line-height: 184.52%;
    text-align: center;
    color: rgba(255, 255, 255, 0.76);
    white-space: break-spaces;
  }
  @media screen and (min-width: 768px) {
    width: 49.9%;
    display: inline-block;
    position: absolute;
    top: 140px;
  }
  @media screen and (min-width: 768px) {
    .not {
      width: 64px;
      height: 64px;

      img {
        max-width: 100%;
      }
    }

    .active {
      width: 64px;
      height: 64px;

      img {
        max-width: 100%;
      }
    }
  }
`;

export const WrapStone = styled.div`
  margin: 20px 15px;
  display: flex;
  justify-content: space-between;
  .active {
    transform: scale(1.3);
  }
  img {
    @media screen and (max-width: 768px) {
      width: 44px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 426px;
    margin: 20px auto;
  }
`;

export const ChooseSize = styled.div`
  padding-bottom: 15px;
  span {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 184.52%;
    color: #FFFFFF;
    margin-right: 20px;
  }
`;

export const SizeButton = styled.span`
  background: rgba(255, 255, 255, 0.17);
  border-radius: 5px;
  text-transform: uppercase;
  color: #FFFFFF;
  font-size: 15px;
  padding: 5px 10px;
  &.active {
    background: #fff;
    color: #363636;
  }
`;

export const PriceBuySection = styled.div`
  text-align: center;
  position: relative;
  .bonus {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    color: rgba(255, 255, 255, 0.76);
    margin: 17px 0 10px 0;
  }
  .actsia {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transform: translate(-5px, -4px);
    }
  }
  .actsia-text {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 169.02%;
    text-transform: uppercase;
    color: #fff;
    span {
      color: #A55248;
      font-family: 'Organetto';
      font-style: normal;
      font-weight: 300;
      font-size: 11px;
      line-height: 169.02%;
      text-transform: uppercase;
    }
  }
  .buy-button {
    background: #009933;
    border-radius: 5px;
    font-family: 'Organetto';
    text-transform: uppercase;
    color: #fff;
    display: inline-block;
    padding: 12px 40px;
    margin: 17px 0 17px 0;
    &:hover {
      cursor: pointer
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 390px;
    position: absolute;
    top: 327px;
    right: 14%;
  }
`;

export const DescriptionProduct = styled.div`
  @media screen and (min-width: 768px) {
    padding: 20px 100px 20px 100px;
  }
`;
const pulse= keyframes`
  0% {
    transform: scale(.9);
    box-shadow: 0 0 0 #fff;
}
  70% {
  transform: scale(1);
    box-shadow: 0 0 17px #fff;
}
  100% {
  transform: scale(.9);
    box-shadow: 0 0 0 #fff;
  }`;
export const DescriptionButton = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  margin: 20px 0;
  span {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 184.52%;
    color: #FFFFFF;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (min-width: 768px) {
      display: none;
    }
    img {
      animation: ${pulse} 1.5s infinite;
      border-radius: 50%;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 50%;
    margin: 0;
  }
`;

export const DescriptionView = styled.div`
  .main-text {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 184.52%;
    color: #FFFFFF;
  }
  .slave-text {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 15px;
    color: rgba(255, 255, 255, 0.76);
  }
  .bottomButton {
    text-align: center;
    margin: 20px 0 40px 0;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  a {
    color: #009933;
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 15px;
  }

  @media screen and (min-width: 768px) {
    max-width: 50%;
    margin: 0;
    position: relative;
    .slave-text {
      max-width: 550px;
    }
`;



export const ToRightMoveDesktop = styled.span`
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 108%;
    z-index: 999999999999;
    top: -48px;
    width: 100%;
  }
`;

export const WrapPrices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 15px 0;
  .price {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
    span {
      font-size: 22px;
      color: rgba(255,255,255,0.76);
    }
    margin-right: 10px;
  }
  .old-price {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: rgba(255,255,255,0.76);
    //color: #A55248;
    position: relative;
  }
  .old-price:after {
    content: "";
    position: absolute;
    width: 100%;
    left: 1px;
    bottom: 9px;
    border-bottom: 1px solid #A55248;
    transform: rotate(-5deg);
  }
  .sale-icon {
    position: absolute;
    left: 7px;
    top: 44px;
    max-width: 62px;
    @media screen and (min-width: 768px) {
      left: -14px;
    }
  }
`;

export const WrapperZoom = styled.div`
  min-height: 0;
  min-width: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999999999;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .slick-slide img {
    max-height: initial;
    margin: 0 auto;
  }
`;

export const WrapZoomSlider = styled.div`
  position: relative;
  max-width: 100%;
  display: block;
  width: 100%;
  .slick-track {
    display: flex !important;
  }
  .slick-slide img {
    display: block;
    width: 100%;
    height: auto;
    @media screen and (min-width: 768px) {
      max-width: 70%;
    }
    &.recom-page-zoom {
      width: 40%;
      margin: 80px auto 40px auto;
      max-height: inherit;
      cursor: default;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 80px auto;
      }
    }
  }
  .slick-slide {
    height: auto;
  }
  .customPrev,
  .customNext {
    font-size: 0;
    line-height: 0;
    position: absolute;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    transform-origin: center center;
    cursor: pointer;
    color: transparent;
    border: none;
    background: transparent;
    &.whiteBg {
      img {
        @media screen and (min-width: 768px) {
          background: rgba(0, 0, 0, 0.2);
          opacity: 0.8;
        }
      }
    }
  }
  .customPrev {
    right: 34px;
    width: 1.25rem;
    top: 51%;
    z-index: 1;
    left: 0;
    &::before {
      display: none;
    }
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 0.5;
    }
    &.whiteBg {
      transform: rotate(-180deg);
    }
  }
  .customNext {
    transform: rotate(-180deg);
    top: 50%;
    z-index: 1;
    right: 0;
    &::before {
      display: none;
    }
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 0.5;
    }
    &.whiteBg {
      transform: rotate(0deg);
    }
  }
  .customNext,
  .customPrev {
    &.whiteBg {
      width: 60px;
      height: 80px;
      background: rgba(0, 0, 0, 0.2);
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
      }
    }
  }
`;

