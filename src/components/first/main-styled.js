import styled, { keyframes } from 'styled-components';
import ins from "./instagram.png";
import you from "./youtube.png";
import goo from "./google.png";
import insn from "./instatgram-n.png";
import youn from "./youtube-n.png";
import googn from "./google-n.png";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const ConttainerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 16rem;
  &.sticky {
    z-index: 99999999999999;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Inner = styled.div`
  position: relative;
  z-index: 999999999;
  max-width: 106rem;
  padding: 2.625rem 10.125rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 5rem;
    @media screen and (max-width: 968px) {
      width: 3.938rem;
      height: auto;
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 2.625rem 4rem;
  }
  @media screen and (max-width: 968px) {
    padding: 2.625rem 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0.625rem 2rem;
  }
  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background: #2e2c2c;
    padding: 0;
    display: flex;
    justify-content: space-around;
    img {
      width: 3.5rem;
      height: auto;
    }
    .wrapLogo {
      padding: 10px 0;
    }
  }
`;

export const WrapList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    margin-right: 4.3rem;
    font-family: 'Inter', sans-serif;
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
  }
  @media screen and (max-width: 1200px) {
    div{
      margin-right: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  div {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const WrapSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .vk-social {
    margin-right: 15px;
    width: 1.25rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  }
  .insta-social {
    width: 28px;
    display: inline-block;
    div {
      background: url(${insn}) no-repeat;
      width: 28px;
      height: 21px;
      background-size: contain;
    }
    &:hover {
      div {
        background: url(${ins}) no-repeat;
        width: 28px;
        height: 21px;
        background-size: contain;
      }
    }
  }
  .youtube-social {
    width: 28px;
    display: inline-block;
    margin: 0 20px;
    div {
      background: url(${youn});
      width: 28px;
      height: 28px;
      background-size: contain;  
    }
    &:hover {
      div {
        background: url(${you});
        width: 28px;
        height: 28px;
        background-size: contain;
      }
    }
  }
  .email-social {
    width: 28px;
    display: inline-block;
    div {
      background: url(${googn}) no-repeat;
      width: 28px;
      height: 21px;
      background-size: contain;
    }
    &:hover {
      div {
        background: url(${goo}) no-repeat;
        width: 28px;
        height: 21px;
        background-size: contain;
      }
    }
  }
  @media screen and (max-width: 868px) {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const WrapPhone = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WrapTitle = styled.div`
  margin-top: 0.6rem;
  position: relative;
  z-index: 99999999;
  text-align: center;
  &.removeZindex {
    z-index: -1;
  }
  h1 {
    font-family: 'organetto';
    font-weight: 200;
    font-size: 4rem;
    color: #fff;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.063rem;
    margin-top: 2rem;
    color: #fff;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      padding: 0 36px;
    }
  }
  p {
    color: #FFFFFF8F;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    margin-top: 1.063rem;
    @media screen and (max-width: 768px) {
      padding: 20px;
      br {
        display: none;
      }
    }
  }
`;

export const WrapLoadMore = styled.div`
  margin-top: 4.25rem;
  position: relative;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerLoadMore = styled.div`
  width: 177px;
  height: 177px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .rotated {
    animation: ${rotate} 8s infinite linear;
    position: relative;
    left: inherit;
    top: inherit;
    opacity: 0;
    transition: opacity 1s;
    @media screen and (max-width: 768px) {
      opacity: 1;
      width: 157px;
      height: 157px;
      animation: ${rotate} 12s infinite linear;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 1px solid #fff;
    transition: border 1s;
  }
  &:hover {
    background: #000;
    border-radius: 50%;
    
    cursor: pointer;
    .rotated {
      opacity: 1;
      width: 135%;
    }
  }
  &:hover:after { 
    border: none 
  }
  @media screen and (max-width: 768px) {
    width: 135px;
    height: 135px;
    &:after {
      width: 131px;
      height: 131px;
      border-radius: 50%;
    }
    .arrowDown {
      width: 20px;
    }
  }
`;

export const WrapMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
  a {
    width: 27px;
    margin-right: 33px;
    img {
      max-width: 100%;
    }
  }
  .menuMobWrapper {
    width: 31px;
    img {
      max-width: 100%;
    }
    .show-menu {
      display: block;
      z-index: 99999999999;
      //position: relative;
    }
    .hide-menu {
      display: none;
    }
  }
`;

export const WrapMenu = styled.div`
  padding: 50px 0;
  text-align: left;
  position: absolute;
  z-index: 999999;
  background: #181515;
  color: #fff;
  left: 0;
  width: 100%;
  top: 0;
  height: 400px;
  div {
    color: #fff;
    padding: 20px 0;
    margin: 0 20px;
    font-size: 16px;
    font-weight: lighter;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
  .closeIcon {
    position: absolute;
    top: 0;
    right: 0;
    border-bottom: none;
    padding: 0;
    margin: 0;
  }
`;

export const WrpaMobSocial = styled.div`
  border-bottom: none !important;
  display: flex !important;
  margin: 160px 0 0 0 !important;
  justify-content: space-around !important;
  border-bottom: none !important;
  div {
    border-bottom: none !important;
    padding: 0 !important;
  }
`;
