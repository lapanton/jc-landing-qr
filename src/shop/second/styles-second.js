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
