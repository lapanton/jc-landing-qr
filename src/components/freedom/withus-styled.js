import styled from 'styled-components';
import bgfr from './bgfr.png';

export const Wrapper = styled.div`
  background: url(${bgfr}) no-repeat;
  background-size: cover;
  height: 52rem;
  position: relative;
  z-index: 99998;
  background-position: bottom center;
`;

export const Inner = styled.div`
  height: 20rem;
  top: 7.938rem;
  left: 0;
  position: absolute;
  background: rgba(30, 31, 31, 0.48);
  backdrop-filter: blur(152px);
  padding-left: 27rem;
  padding-top: 4.25rem;
  .freedomStar {
    position: absolute;
    left: 130px;
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
    font-size: 1rem;
    opacity: 0.75;
    font-weight: lighter;
    margin-top: 30px;
    color: #fff;
    padding-right: 20rem;
  }
  @media screen and (max-width: 1200px) {
    padding-top: 2rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      padding-right: 5rem;
    }
  }
  @media screen and (max-width: 968px) {
    p {
      padding-right: 1rem;
      margin-top: 0;
    }
  }
`;

export const InnerContent = styled.div`

`;

export const WrapperMob = styled.div`
  background: transparent;
  color: #fff;
  h3 {
    color: #fff;
    padding-left: 15px;
    padding-top: 3rem;
    position: relative;
    z-index: 99998;
  }
  p {
    color: #fff;
    padding: 20px 20px 3rem 15px;
    position: relative;
    z-index: 99998;
  }
  img {
    position: relative;
    z-index: 99998;
  }
`;
