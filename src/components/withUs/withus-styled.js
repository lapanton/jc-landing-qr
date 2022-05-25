import styled from 'styled-components';
import bg from './bg.png';
import bgmob from './bgmob.png';

export const Wrapper = styled.div`
  position: relative;
  z-index: 99998;
  padding: 8.875rem 10.5rem 8.563rem 10.5rem;
  background: url(${bg}) no-repeat;
  background-size: cover;
  height: 20rem;
  img {
  }
  div {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translateX(-50%, -40%);
    color: #fff;
    letter-spacing: 0.425em;
    font-size: 1.875rem;
    line-height: 2.875rem;
  }
  .tickerAnim {
    display: inline-block;
    color: #fff;
    line-height: 2.875rem;
    margin-top: 0;
    transform: translateY(13px);
    p {
      color: #fff;
    }
  }
}
  @media screen and (max-width: 1200px) {
    div {
      left: 30%;
    }
  }
  @media screen and (max-width: 968px) {
   
  }
  @media screen and (max-width: 768px) {
    background: url(${bgmob}) no-repeat;
    padding: 0;
    font-size: 14px;
    background-size: cover;
    height: 23rem;
    img {
      width: 40px;
      height: 40px;
    }
    div {
      font-size: 14px;
      line-height: 15px;
      left: 7px;
      text-align: center;
    }
    .tickerAnim {
      transform: none;
    }
`;

export const WrapImg = styled.div`
  position: absolute;
  bottom: 0 !important;
  top: inherit !important;
  left: inherit !important;
  right: 10rem !important;
  width: 154px !important;
  height: 154px !important;
  background: #2e2c2c;
  img {
    max-width: 100px;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 64px !important;
    height: 64px !important;
    right: 2rem !important;
  }
`;
