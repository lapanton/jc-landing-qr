import styled from 'styled-components';
import bg from './bg.png';
import bgmob from './bgmob.png';

export const Wrapper = styled.div`
  position: relative;
  z-index: 99998;
  padding: 8.875rem 10.5rem 8.563rem 10.5rem;
  background: url(${bg}) no-repeat;
  background-size: cover;
  height: 20rem;
  img {
    position: absolute;
    bottom: 0;
    right: 10rem;
    width: 154px;
    height: 154px;
  }
  div {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translateX(-50%, -40%);
    color: #fff;
    letter-spacing: 0.425em;
    font-size: 1.875rem;
    line-height: 2.875rem;
  }
  .tickerAnim {
    display: inline-block;
    color: #fff;
    line-height: 2.875rem;
    margin-top: 0;
    transform: translateY(13px);
    p {
      color: #fff;
    }
  }
}
  @media screen and (max-width: 1200px) {
    img {
      right: 0;
      width: 100px;
      height: 100px;
    }
    div {
      left: 30%;
    }
  }
  @media screen and (max-width: 968px) {
   
  }
  @media screen and (max-width: 768px) {
    background: url(${bgmob}) no-repeat;
    padding: 0;
    font-size: 14px;
    background-size: cover;
    height: 23rem;
    img {
      width: 40px;
      height: 40px;
    }
    div {
      font-size: 14px;
      line-height: 15px;
      left: 5%;
      text-align: center;
    }
    .tickerAnim {
      transform: none;
    }
`;
