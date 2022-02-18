import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #1E1F1F;
  position: relative;
  z-index: 99999999;
  padding: 96px 157px;
  display: none;
  h3 {
    font-size: 1.75rem;
    line-height: 2.563rem;
    color: #fff;
    display: flex;
    width: 100%;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: left;
    }
  }
  p {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: #fff;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const Scrollable = styled.div`
      width: 300px;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
`;
