import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8.875rem 10.5rem 8.563rem 10.5rem;
  background: transparent;
  color: #fff;
  display: flex;
  p {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: #fff;
    font-size: 1rem;
    line-height: 1.25rem;
    margin-top: auto;
    margin-left: 2rem;
    z-index: 99998;
    position: relative;
    text-align: justify;
  }
    span {
      color: #fff;
    }
  }
  img {
    max-width: 30rem;
    max-height: 38rem;
    z-index: 99998;
    position: relative;
  }
  @media screen and (max-width: 1200px) {
    img {
      max-width: 24rem;
    }
  }
  @media screen and (max-width: 968px) {
    img {
      max-width: 16rem;
      height: 13rem;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 0 2rem 0;
    display: flex;
    flex-direction: column;
    img {
      max-width: 16rem;
      height: 13rem;
      margin: 2rem auto;
    }
    p {
      margin: 0;
      padding: 20px 30px;
    }
    .hideMobile {
      display: none;
    }
  }
  .malevich {
    position: absolute;
    background: #2e2c2c;
    color: #fff;
    padding: 3px 9px;
    z-index: 99999;
    margin: 0;
    left: 50%;
    transform: translate(-50%);
    white-space: nowrap;
    bottom: 10px;
    border-radius: 2px;
    display: none;
  }
  .wrapMalevich {
    @media screen and (max-width: 768px) {
      text-align: center;
      .malevich {
        bottom: 0;
      }
    }
  }
`;
