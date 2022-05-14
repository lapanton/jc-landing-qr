import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 5rem;
    height: 5rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
`;

export const Menu = styled.div`
  opacity: 0;
  pointer-events: none;
  div {
    display: inline-block;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    margin-right: 1rem; 
    margin-top: 5px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  a {
    height: inherit;
  }
  .vk {
    width: 2rem;
  }
  .you {
    width: 2.8rem;
    margin: 0 10px;
  }
  .goo {
    width: 2rem;
  }
`;

export const WrapPhone = styled.div`
  white-space: nowrap;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    white-space: nowrap;
    color: #000;
    align-items: center;
    justify-content: center;
    display: flex;
    height: auto;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    transform: translateX(-25px);
  }
`;