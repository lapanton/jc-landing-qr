import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #181515;
  z-index: 99998;
  position: relative;
  color: #fff;
  display: flex;
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
      padding: 20px 20px 20px 15px;
      text-align: left;
      .boldp {
        padding-bottom: 5px;
      }
    }
    h3 {
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: left;
    }
  }
`;

export const WrapText = styled.div`
  padding-left: 4rem;
  margin-top: 11rem;
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
      padding-left: 15px;
      br {
        display: none;
      }
    }
  }
`;





