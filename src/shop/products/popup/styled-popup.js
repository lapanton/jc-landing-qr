import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition:
    top 0.3s linear,
    oppacity 0.3s linear;
  max-width: 100vw;
  max-height: 100vh;
  z-index: 999999999999999;
  opacity: 1;
  &.show {
    top: 0;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.hide {
    top: -110%;
    opacity: 0;
    background-color: transparent;
  }
`;

export const Inner = styled.div`
  max-width: 30rem;
  padding: 4.58rem 1.5rem 3.75rem;
  top: 0;
  background: #fff;
  margin: 10vh 15px;
  height: 70vh;
  max-height: 70vh;
  position: relative;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    margin: 10vh auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #909090;
      border-radius: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #ffffff;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
  }
`;

export const RemoveItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export const WrapProductDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: "Organetto";
  font-size: 16px;
  img {
    max-width: 15px;
  }
`;

export const CardName = styled.div`
  font-family: "Organetto";
  text-align: center;
  text-transform: uppercase;
  transform: translateY(-15px);
  color: #ef6770;
`;

export const WrapCardPrice = styled.div`
  position: relative;
  margin: 10px 0 20px 0;
  .card-icon-sale {
    position: absolute;
    left: 200px;
    bottom: -10px;
    width: 60px;
    max-width: 100%;
  }
  .price-card {
    position: relative;
  }
  .price-card-new {
    position: absolute;
    left: 65px;
    bottom: -48px;
    font-size: 18px;
  }
  .card-line-old {
    position: relative;
    transform: translateX(10px);
    display: inline-block;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      left: 1px;
      bottom: 9px;
      border-bottom: 1px solid #a55248;
      transform: rotate(-5deg);
    }
  }
`;

export const WrapDiscountButton = styled.button`
  background: rgb(0, 153, 51);
  border-radius: 5px;
  font-family: Organetto;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  display: inline-block;
  padding: 12px 40px;
  margin: 17px 0px;
  border: none;
  max-width: 320px;
  &:hover {
    cursor: pointer;
  }
  &.disable-this {
    pointer-events: none;
    filter: grayscale(1);
  }
`;

export const WrapDiscount = styled.div`
  text-align: center;
  margin-top: 10px;
  input {
    max-width: 320px;
    height: 30px;
  }
`;

export const ErrorMessage = styled.span`
  color: rgb(239, 103, 112);
  font-size: 14px;
  display: flex;
  justify-content: center;
`;
