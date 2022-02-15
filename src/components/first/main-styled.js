import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Inner = styled.div`
  position: relative;
  z-index: 99999999;
  max-width: 106rem;
  padding: 2.625rem 10.125rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 5.938rem;
    height: 5.125rem;
    @media screen and (max-width: 968px) {
      width: 3.938rem;
      height: auto;
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 2.625rem 4rem;
  }
  @media screen and (max-width: 968px) {
    padding: 2.625rem 2rem;
  }
`;

export const WrapList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    margin-right: 4.3rem;
    font-family: 'Inter', sans-serif;
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
  }
  @media screen and (max-width: 1200px) {
    div{
      margin-right: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WrapSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .vk-social {
    margin-right: 15px;
    width: 1.25rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  }
  .insta-social {
    margin-right: 15px;
    width: 1.25rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  }
  .youtube-social {
    margin-right: 15px;
    width: 1.25rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  }
  .email-social {
    margin-right: 15px;
    width: 1.25rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0);
    }
  }
  @media screen and (max-width: 868px) {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const WrapPhone = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WrapTitle = styled.div`
  margin-top: 0.6rem;
  position: relative;
  z-index: 99999999;
  text-align: center;
  h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    font-size: 4rem;
    color: #fff;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.063rem;
    margin-top: 2rem;
    color: #fff;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  p {
    color: #FFFFFF8F;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    margin-top: 1.063rem;
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }
`;

export const WrapLoadMore = styled.div`
  margin-top: 4.25rem;
  position: relative;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerLoadMore = styled.div`
  width: 177px;
  height: 177px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .rotated {
    animation: ${rotate} 8s infinite linear;
    position: relative;
    left: inherit;
    top: inherit;
    opacity: 0;
    transition: opacity 1s;
    @media screen and (max-width: 768px) {
      opacity: 1;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 1px solid #fff;
    transition: border 1s;
  }
  &:hover {
    background: #000;
    border-radius: 50%;
    
    cursor: pointer;
    .rotated {
      opacity: 1;
      width: 135%;
    }
  }
  &:hover:after { 
    border: none 
  }
  @media screen and (max-width: 768px) {
    &:after {
      width: 135px;
      height: 135px;
      border-radius: 50%;
    }
  }
`;

export const WrapMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  a {
    width: 27px;
    margin-right: 33px;
    img {
      max-width: 100%;
    }
  }
  .menuMobWrapper {
    width: 31px;
    img {
      max-width: 100%;
    }
  }
`;