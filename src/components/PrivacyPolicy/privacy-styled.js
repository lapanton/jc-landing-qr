import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 99998;
  position: relative;
  font-family: 'Montserrat', sans-serif;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const WrapLogo = styled.div`
  max-width: 150px;
  .wrapLogo {
    img {
      width: 100%;
    }
  }
`;


export const WrapContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  a {
    color: #fff;
  }
`;

export const WrapContent = styled.div`
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 60px;
  padding: 0 40px;
  span a {
    color: #fff;
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: 27px;
    }
  }
`;



