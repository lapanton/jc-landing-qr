import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8.875rem 10.5rem 8.563rem 10.5rem;
  background: transparent;
  color: #fff;
  margin-top: 43rem;
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
    span {
      font-weight: bold;
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
      padding: 20px;
    }
  }
`;
