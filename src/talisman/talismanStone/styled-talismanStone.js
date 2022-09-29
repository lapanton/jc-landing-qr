import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    transform: translateY(-70px);
  }
  h1 {
    text-align: center;
    font-family: 'organetto';
    font-weight: 200;
    font-size: 45px;
    color: #fff;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const WrapGenderButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  @media screen and (max-width: 1100px) {
    margin-top: 120px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;
export const GenderSelected = styled.div`
  z-index: 999999999;
  position: relative;
  padding: 6px 16px 6px 70px;
  background: transparent;
  border-radius: 5px;
  display: inline-block;
  font-family: 'Organetto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 171.3%;
  letter-spacing: 0.425em;
  text-transform: uppercase;
  border: 1px solid transparent;
  color: #FFFFFF;
  margin: 0 10px;
  @media screen and (max-width: 768px) {
    margin: 0 0 10px 0;
    max-width: 190px;
  }
  &.woman {
    background: rgba(255, 255, 255, 0.17);

  }
  &.man {
    background: rgba(255, 255, 255, 0.17);
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
  } 
  img {
    position: absolute;
    top: -4px;
    left: 10px;
  }
`;

export const WrapStonesView = styled.div``;
export const InnerViewStones = styled.div``;
export const ItemStones = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #444545;
  padding: 24px 0 64px 0;
  @media screen and (max-width: 768px) {
    padding: 24px 18px 64px 18px;
  }
`;
export const InnerItemStones = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1295px;
  align-items: center;
  .stone-inner {
    max-height: 103px;
    z-index: 999999999;
    border: 1px solid #fff;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const WrapGendersIcons = styled.div`
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  img {
    height: 60px;
  }
`;
export const Wraptext = styled.div`
  font-family: 'Organetto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 230.3%;
  letter-spacing: 0.21em;
  color: #FFFFFF;
  span {
    font-size: 13px;
    text-decoration: underline;
  }
`;
export const InShop = styled.div`
  text-align: right;
  max-width: 1295px;
  z-index: 999999999;
  padding-top: 30px;
  a {
    font-family: 'Organetto';
    background: rgba(0, 153, 51, 0.6);
    border-radius: 26px;
    color: #fff;
    padding: 9px 19px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 20px;
    line-height: 40%;
    letter-spacing: 0.15em;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    a {
      font-size: 16px;
    }
  }
`;

