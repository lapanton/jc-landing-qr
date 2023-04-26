import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  height: 31rem;
  margin-bottom: 70px;

  .boldp {
    font-weight: bolder;
  }
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
    max-width: 30rem;
    max-height: 38rem;
    z-index: 99998;
    position: relative;
  }
  @media screen and (max-width: 1200px) {
    img {
      max-width: 22rem;
      max-height: 22rem;
      padding: 30px;
    }
  }
  @media screen and (max-width: 968px) {
    img {
      max-width: 15rem;
      max-height: 15rem;
      padding-top: 60px;
    }
    height: 25rem;
  }
  @media screen and (max-width: 768px) {
    height: 42rem;
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column-reverse;
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto 0 auto;
      z-index: 99998;
      position: relative;
    }
    p {
      margin: 0 !important;
      padding: 20px 20px 20px 15px;
      text-align: left;
      .boldp {
        padding-bottom: 5px;
      }
      z-index: 99998;
      position: relative;
    }
    h3 {
      font-size: 1rem;
      line-height: 2.4rem;
      text-align: center;
      z-index: 99998;
      position: relative;
    }
    .mobileImg {
      max-width: 100%;
      display: block;
      text-align: center;
      z-index: 99998;
      position: relative;
      img {
        padding: 0;
        margin: 20px auto 10px auto;
      }
    }
  }
`;

export const WrapText = styled.div`
  width: 49.9%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  p {
    margin-top: 1.875rem;
    max-width: 430px;
    z-index: 99998;
    position: relative;
  }
  h3 {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    max-width: 510px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.21em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 968px) {
    padding-left: 0;
    min-width: 100%;

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
      padding-left: 0;
      br {
        display: none;
      }
      z-index: 99998;
      position: relative;
    }
    p {
      text-align: left;
      padding-left: 30px;
      padding-right: 30px;
    }
    img {
      padding: 0;
    }
  }
  .desktopImg {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      margin-top: 25px;
    }
  }
`;

export const InnerWrapSelfProduct = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const WrapRight = styled.div`
  padding-left: 4rem;
  width: 49.9%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: none;
  }
  .conselationDesktop {
    width: 70%;
  }
`;
