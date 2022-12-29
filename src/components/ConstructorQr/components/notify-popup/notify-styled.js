import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
  background-color: #f0ad4e;
  border-color: #eea236;
  border-radius: 4px;
  z-index: 99999;
  top: 20px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: linear;
  animation-name: run;
  animation-duration: 0.2s;
  max-width: 364px;
  @media screen and (max-width: 900px) {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    text-align: center;
  }
  @keyframes run {
    0% {
      right: -100%;
    }
    100% {
      right: 0;
    }
  }
`;

export const InnerPopup = styled.div`
  padding: 1.25rem;
  font-family: 'Montserrat', sans-serif;

  //margin: 0 1.25rem 0 1.25rem;
  @media screen and (min-width: 900px) {
    padding: 2rem;
  }
`;