import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  max-width: 58rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
      max-width: inherit;
    margin-left: inherit;
    margin-right: inherit;
  }
  &.mobileHeight {
    height: 70rem;
  }
  div {
    max-width: 100%;
    display: inline-block;
  }
  position: relative;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-text {
    padding: 23px 0 5px 0;
  }
  .main-text .heeeeeart{
    position: absolute;
    top: 23px;
    left: -29px;
  }
  .main-text .qqqrcode {
    position: absolute;
    top: 23px;
    right: -94px;
  }
    .main-text span {
      position: relative;
      color: #fff;
      font-family: 'Organetto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 180.8%;
      text-align: center;
      letter-spacing: 0.21em;
      padding: 20px 0 10px 0;
    }
    .second-text {
      padding: 0 10px;
      color: #fff;
      font-family: 'Organetto';
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 184.52%;
      text-align: center;
      margin-bottom: 25px;
      @media screen and (min-width: 768px) {
        max-width: 740px;
        display: block;
        margin: 20px auto 30px !important;
      }
    }
    .text-three {
      color: #fff;
      font-family: 'Organetto';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 184.52%;
      text-align: center;
      margin: 30px 0 60px;
      @media screen and (min-width: 768px) {
        max-width: 740px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  .videoTag {
    height: 360px;
  }
`;

export const BuyButton = styled.div`
  padding: 25px 90px;
  background: #009933;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  font-family: 'Organetto';
  font-style: normal;
  font-weight: 400;
  display: block !important;
  width: 120px;
  margin: 50px auto 0 auto;
  font-family: 'Organetto';
  font-size: 15px;
  line-height: 40%;
  &:hover {
    cursor: pointer;
  }
`;

export const Inner = styled.div`
  text-align: center;
  position: relative;
  .to-center {
    display: block;
    margin: 0 auto;
  }
  .second-text {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 184.52%;
    margin-bottom: 10px;
  }
  .podarok-s-dushoi {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180.8%;
    color: #fff;
    margin-bottom: 15px;
    transform: translateY(-90px);
    @media screen and (max-width: 768px) {
      transform: translateY(0);
    }
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

export const ButtonShow = styled.div`
  margin-bottom: 20px;
  display: none !important;
  @media screen and (max-width: 768px) {
    display: inline-block !important;
  }
  img {
    animation: ${pulse} 1.5s infinite;
    border-radius: 50%;
  }

/*  &:hover {
    -webkit-animation: none;
  }*/
`;

export const ButtonHide = styled.div`
  margin-bottom: 20px;
  display: none !important;
  @media screen and (max-width: 768px) {
    display: inline-block !important;
  }
`;
