import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  height: 31rem;
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
    padding: 80px 80px 80px 178px;
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
  .mobileImg {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: 31rem;
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
    .desktopImg {
      display: none;
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
  padding-left: 4rem;
  margin-top: 9rem;
  p {
    margin-top: 1.875rem;
    max-width: 430px;
    z-index: 99998;
    position: relative;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 968px) {
    padding-left: 0;

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
      padding-left: 0px;
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
      span {
        display: none;
      }
    }
  }
  .noboldp {
    text-align: center;
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 173.52%;
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





