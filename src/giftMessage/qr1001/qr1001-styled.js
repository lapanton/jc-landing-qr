import styled from 'styled-components';

export const WrapLogo = styled.div`
  text-align: center;
  margin: 30px 0;
  img {
    max-width: 110px;
  }
`
export const WrapperImgClient = styled.div`
  img {
    border-radius: 8px;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: 99998;
  p {
    margin-top: 30px;
    font-style: italic;
    font-size: 22px;
    background: rgba(51,51,51,0.8);
    padding: 12px 18px 12px;
    color: #fff;
  }
`;
