import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #181515;
  z-index: 99998;
  position: relative;
  color: #fff;
  display: flex;
  h3 {
    font-size: 1.75rem;
    line-height: 2.563rem;
    color: #fff;
    display: flex;
    width: 100%;
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
  }
  img {
    max-width: 30rem;
    max-height: 38rem;
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
    padding: 0 0 6rem 0;
    display: flex;
    flex-direction: column;
    img {
      max-width: 16rem;
      height: 13rem;
      margin: 0 auto 2rem auto;
    }
    p {
      margin: 0;
      padding: 20px;
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
  left: 20%;
  bottom: 11%;
  @media screen and (max-width: 1200px) {
    img {
      width: 52px;
      height: 52px;
    }
  }
  @media screen and (max-width: 768px) {
    bottom: 0;
    left: 0%;
    width: 100%;
  }
`;

export const WrapText = styled.div`
  padding-left: 4rem;
  margin-top: 7rem;
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
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;





