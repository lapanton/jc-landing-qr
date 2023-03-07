import styled from 'styled-components';

export const WrapContainer = styled.div`
  height: 35rem;
  @media screen and (max-width: 768px) {
    height: 58rem;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const WrapTitle = styled.div`
  margin-top: 0.6rem;
  position: relative;
  z-index: 99999999;
  text-align: center;
  h3 {
    margin-top: 4rem;
    color: #fff;
    font-size: 1.8rem;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
      margin-top: 2rem;
    }
  }
  h6 {
   color: #fff; 
    margin-top: 1.5rem;
    font-size: 1rem;
    line-height: 1.6rem;
    @media screen and (max-width: 768px) {
      padding: 0 1.875rem;
      br {
        display: none;
      }
    }
  }
`;

export const WrapItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 99999;
  position: relative;
  margin-top: 40px;
  padding: 0 100px;
  img {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 968px) {
    padding: 0 30px;
  }
`;

export const InnerOne = styled.div`
  flex: 0 0 33.333333%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    right: 10%;
    bottom: -9%;
    width: 1px;
    height: 110px;
    background: #fff;
    @media screen and (max-width: 968px) {
      bottom: 15%;
    }
  }
  p {
    font-size: 0.938rem;
    line-height: 1.7rem;
    color: #fff;
    padding: 0 30px 0 0;
    max-width: 350px;
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    img {
      margin: 0 auto;
      display: block;
    }
    p {
      line-height: 1.2rem;
      margin: 25px 0;
    }
    &:after {
      display: none;
    }
  }
`;


export const InnerTwo = styled.div`
  flex: 0 0 33.333333%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    right: 10%;
    bottom: -9%;
    width: 1px;
    height: 110px;
    background: #fff;
    @media screen and (max-width: 968px) {
      bottom: 15%;
    }
  }
  p {
    font-size: 0.938rem;
    line-height: 1.7rem;
    color: #fff;
    padding: 0 30px 0 0;
    max-width: 350px;
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    img {
      margin: 0 auto;
      display: block;
    }
    p {
      line-height: 1.2rem;
      margin: 25px 0;
    }
    &:after {
      display: none;
    }
  }
`;


export const InnerThree = styled.div`
  flex: 0 0 33.333333%;
  position: relative;
  p {
    font-size: 0.938rem;
    line-height: 1.7rem;
    color: #fff;
    padding: 0 30px 0 0;
    max-width: 350px;
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    img {
      margin: 0 auto;
      display: block;
    }
    p {
      line-height: 1.2rem;
      margin: 25px 0;
    }
    &:after {
      display: none;
    }
  }
`;

export const BottomArea = styled.div`
  z-index: 99999;
  position: relative;
  margin-top: 3.3rem;
  text-align: center;
  p {
    color: #fff;
    font-size: 1.875rem;
    line-height: 2.8rem;
    text-transform: uppercase;
  }
  @media screen and (max-width: 968px) {
    p{
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    p{
      font-size: 1rem;
      line-height: 1.2rem;
      padding: 0 30px;
      text-align: left;
    }
  }
`;

