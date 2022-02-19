import styled from 'styled-components';
import imgBottom from './bottomImg.png';
import bottomMobImg from './bottomMobImg.png';

export const Wrapper = styled.div`
  background: url(${imgBottom}) no-repeat center;
  background-size: cover;
  height: 33rem;
  width: 100%;
  position: relative;
  z-index: 99999999;
  @media screen and (max-width: 768px) {
    background: url(${bottomMobImg}) no-repeat center;
    background-size: cover;
  }
`;

