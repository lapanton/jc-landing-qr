import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 999999999;
  max-width: 480px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const WrapperDesktop = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999999999;
  width: 100%;
  color: #fff;
  margin: 0 auto 120px auto;
  h1 {
    max-width: 530px;
    margin: 0 auto 30px auto;
    font-family: 'organetto';
    font-size: 30px;
    letter-spacing: 0.425em;
    white-space: nowrap;
    text-transform: uppercase;
    @media screen and (max-width: 980px) {
      font-size: 22px;
    }
  }
`;

export const LeftPart = styled.div`
  flex-grow: 1;
  flex-basis: calc(100% / 2);
  text-align: center;
`;
export const RightPart = styled.div`
  flex-grow: 1;
  flex-basis: calc(100% / 2);
`;

export const WrapVideo = styled.div`
  max-width: 480px;
  margin: 0 auto;
  @media screen and (max-width: 1150px) {
    max-width: 430px;
    margin: 0 auto 0 30px;
  }
  @media screen and (max-width: 980px) {
    margin: 0 auto 0 auto;
  }
  @media screen and (max-width: 920px) {
    max-width: 80%;
  }
`;

export const WrapSubtitle = styled.div`
  max-width: 480px;
  margin: 0 auto;
  font-size: 17px;
  font-family: 'organetto';
  letter-spacing: 0.21em;
  text-transform: uppercase;
  white-space: nowrap;
`;
export const WrapDescription = styled.div`
  max-width: 480px;
  margin: 40px auto 0 auto;
  font-family: 'organetto';
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.21em;
  span {
    color: rgba(165, 82, 72, 1);
  }
`;
export const GiftButton = styled.div`
  padding: 25px 90px;
  background: #009933;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  display: block !important;
  width: 120px;
  margin: 50px auto 0 auto;
  font-family: 'Organetto';
  font-size: 15px;
  line-height: 40%;
  &:hover {
    cursor: pointer;
  }
`;
