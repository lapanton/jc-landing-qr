import styled from 'styled-components';

export const WrapperProducts = styled.div`
  padding-top: 1.25rem;
  margin: 1.25rem 1.25rem 0 1.25rem;
  border-top: 1px solid #444545;
  position: relative;
  z-index: 999999999;
  &.showPopup {
    z-index: 99999999999;
  }
`;