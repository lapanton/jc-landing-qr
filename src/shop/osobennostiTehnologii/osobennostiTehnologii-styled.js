import styled from 'styled-components';

export const WrapContainer = styled.div`
  height: 35rem;
  &.onGlassPage {
    height: 22rem;
    @media screen and (max-width: 768px) {
      height: 52rem;
    }
  }
  @media screen and (max-width: 768px) {
    height: 61rem;
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
    letter-spacing: 0.425em;
    text-transform: uppercase;      
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 33px;
    line-height: 45px;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
      margin-top: 2rem;
      font-family: 'Organetto';
      font-style: normal;
      font-weight: 400;
      font-size: 21.5172px;
      line-height: 180.8%;
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
    bottom: 0%;
    width: 1px;
    height: 110px;
    background: #fff;
    @media screen and (max-width: 968px) {
      bottom: 15%;
    }
  }
  p {
    color: #fff;
    padding: 0 30px 0 0;
    max-width: 350px;
    margin-top: 40px;
    font-family: 'Organetto';
    font-size: 12px;
    line-height: 192.52%;
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    img {
      margin: 0 auto;
      display: block;
    }
    p {
      line-height: 1.2rem;
      padding: 0;
      text-align: center;
      font-family: 'Organetto';
      font-size: 12px;
      font-weight: 300;
    }
    &:after {
      display: none;
    }
  }
`;


export const InnerTwo = styled.div`
  flex: 0 0 33.333333%;
  position: relative;
  margin-top: 30px;
  &:after {
    content: "";
    position: absolute;
    right: 10%;
    bottom: 0;
    width: 1px;
    height: 110px;
    background: #fff;
    @media screen and (max-width: 968px) {
      bottom: 15%;
    }
  }
  p {
    color: #fff;
    padding: 0 30px 0 0;
    max-width: 350px;
    margin-top: 40px;
    font-family: 'Organetto';
    font-size: 12px;
    line-height: 192.52%;
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    padding-top: 35px;
    border-top: 1px solid #fff;
    img {
      margin: 0 auto;
      display: block;
    }
    p {
      line-height: 1.2rem;
      padding: 0;
      text-align: center;
      font-family: 'Organetto';
      font-size: 12px;
      font-weight: 300;
    }
    &:after {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;


export const InnerThree = styled.div`
  flex: 0 0 33.333333%;
  margin-top: 30px;
  position: relative;
  p {
    font-size: 0.938rem;
    line-height: 1.7rem;
    color: #fff;
    padding: 0 30px 0 0;
    max-width: 350px;
    margin-top: 40px;
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 192.52%;
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 768px) {
    border-top: 1px solid #fff;
    flex: 0 0 100%;
    padding-top: 35px;
    img {
      margin: 0 auto;
      display: block;
    }
    p {
      line-height: 1.2rem;
      padding: 0;
      text-align: center;
      font-size: 12px;
      font-weight: 300;
    }
    &:after {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
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
      text-align: center;
      font-family: 'Organetto';
      font-weight: 300;
      font-size: 12px;
    }
  }
`;

