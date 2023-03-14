import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  color: #fff;
  margin: 0 4rem 4rem 4rem;
  h3 {
    font-family: 'Organetto';
    font-size: 1.75rem;
    line-height: 2.563rem;
    color: #fff;
    width: 100%;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    z-index: 99998;
    position: relative;
    text-align: center;
    display: block;
    padding-bottom: 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  span {
    color: #fff;
    transform: translate(18px, -3px);
    display: inline-block;
    font-family: 'Organetto';
    font-size: 12px;
  }
`;

export const WrapCart = styled.div`
  position: relative;
  z-index: 99998;
  width: 43rem;
  @media screen and (max-width: 1200px) {
    width: 30rem;
  }
  @media screen and (max-width: 968px) {
    width: 20rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const WrapText = styled.div`
  position: absolute;
  top: 0;
  left: 700px;
  z-index: 99998;
  color: #fff;
  margin-left: 4.8rem;
  @media screen and (max-width: 1200px) {
    left: 30rem
  }
  @media screen and (max-width: 968px) {
    left: 20rem;
  }
  @media screen and (max-width: 768px) {
    left: 0;
    position: relative;
    margin-left: 0;
    padding: 30px;
  }
  div, p {
    position: relative;
    z-index: 99998;
    color: #fff;
  }
  p {
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      margin-top: 40px;
    }
  }
  .phoneAddressEmail {
    font-size: 15px;
    line-height: 30px;
    font-weight: lighter;
    white-space: nowrap;
    &.laast {
      font-family: 'Organetto';
      font-size: 12px;
      padding-left: 34px;
    }

  }
  .timeWork {
    font-weight: bolder;
    margin-bottom: 10px;
  }
`;

export const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.36);
  position: relative;
  z-index: 99998;
  font-size: 16px;
  text-align: center;
  display: block;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    padding-bottom: 40px;
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 184.5%;
  }
`;
export const BottomMobile = styled.div`
  text-align: center;
  display: block;
  margin: 24px 0;
  position: relative;
  z-index: 99998;
  a {
    margin: 0 10px;
    max-width: 40px;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
  .emailConatact {
    width: 100%;
    display: inline;
    span {
      max-width: 100%;
      text-decoration: none;
      letter-spacing: 5px;
    }

    @media screen and (max-width: 768px) {

        position: relative;
        height: 30px;
        display: inherit;
      span {
        position: absolute;
        left: -74%;
        transform: translateX(50%);
        font-size: 10px;
        letter-spacing: 1px;
      }

    }
  }
`;

export const BottomSocial = styled.div`
  text-align: center;
  display: block;
  position: relative;
  z-index: 99998;
  width: 160px;
  margin: 0 auto;
`;


