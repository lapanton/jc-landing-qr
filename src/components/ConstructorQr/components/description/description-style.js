import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 7rem;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: 3.5rem;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.188rem;
    font-weight: 300;
    text-transform: uppercase;
    span {
      font-weight: 500;
      letter-spacing: 0.425em;
    }
    @media screen and (max-width: 768px) {
      font-size: 15px;
      text-align: center;
      span {
        font-size: 1.5rem;
      }
    }
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 470px;
    @media screen and (max-width: 1265px) {
      right: -40px;
      width: auto;
      top: 80px
    }
    @media screen and (max-width: 768px) {
      right: inherit;
      position: relative;
      top: inherit;
      max-width: 100%;
      margin-top: 1.5rem;
    }
  }
  p {
    max-width: 860px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    @media screen and (max-width: 1265px) {
      margin-right: 320px;
    }
    @media screen and (max-width: 768px) {
      margin-right: inherit;
    }
  }
  .textOne {
    margin-top: 2.25rem;
  }
  .textTwo {
    margin-top: 2rem;
    font-weight: 600;
  }
  .textThree {
    font-weight: 300;
  }
  .mobButtonCreate {
    display: none;
    @media screen and (max-width: 768px) {
      background: #A55248;
      border-radius: 5px;
      color: #fff;
      padding: 20px 40px;
      margin: 20px auto 0 auto;
      font-family: 'Inter',sans-serif;
      text-transform: uppercase;
      display: flex;
      width: 76px;
    }
  }
`;
