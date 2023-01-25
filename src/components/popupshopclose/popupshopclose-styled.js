import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999999999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.9);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p, div {
    color: #fff;
  }
  p {
    font-family: 'Inter',sans-serif;
    font-weight: 500;
    font-size: 2rem;
    margin: 2rem 0;
  }
  div {
    padding: 10px 25px;
    border: 2px solid #fff;
    &:hover {
      cursor: pointer;
    }
  }
`;