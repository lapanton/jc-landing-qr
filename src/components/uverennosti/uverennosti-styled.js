import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  h3 {
    font-size: 1.75rem;
    line-height: 2.563rem;
    color: #fff;
    display: flex;
    width: 100%;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    z-index: 99998;
    position: relative;
  }
  p {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: #fff;
    font-size: 1rem;
    line-height: 1.25rem;
    span {
      font-weight: bold;
      color: #fff;
    }
    z-index: 99998;
    position: relative;
  }
  img {
    //max-width: 30rem;
    //max-height: 38rem;
    z-index: 99998;
    position: relative;
  }
  @media screen and (max-width: 1200px) {
    img {
      max-width: 22rem;
    }
  }
  @media screen and (max-width: 968px) {
    img {

    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column-reverse;
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto 0 auto;
    }
    p {
      margin: 0 !important;
      padding: 20px 20px 120px 15px;
      text-align: left;
    }
    h3 {
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: left;
    }
  }
`;

export const WrapImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 84px;
  height: 84px;
  position: absolute;
  left: -174px;
  bottom: -150px;
  @media screen and (max-width: 1200px) {
    img {
      width: 52px;
      height: 52px;
    }
  }
  @media screen and (max-width: 768px) {
    bottom: inherit;
    top: -99px;
    left: 0;
    width: 100%;
  }
`;

export const WrapText = styled.div`
  padding-left: 7rem;
  margin-top: 3rem;
  p {
    margin-top: 1.875rem;
    max-width: 500px;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    h3 {
      width: auto;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 30px;
      br {
        display: none;
      }
    }
    p {
      padding-left: 30px;
      padding-right: 30px;
      span {
        display: none;
      }
    }
  }
`;

export const Wrapslider = styled.div`
  position: relative;
  width: 30rem;
  height: 38rem;
  z-index: 99998;
  img {
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    &.active {
      opacity: 1;
      z-index: 2;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: 30rem;
  }
`;



