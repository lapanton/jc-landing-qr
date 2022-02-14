import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Inner = styled.div`
  position: relative;
  z-index: 99999999;
  max-width: 106rem;
  padding: 2.625rem 10.125rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 5.938rem;
    height: 5.125rem;
  }
`;

export const WrapList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    margin-right: 4.3rem;
    font-family: 'Inter', sans-serif;
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const WrapSocial = styled.div`
  .vk-social {
    width: 1.8rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
  .insta-social {
    width: 1.25rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
  .youtube-social {
    width: 1.375rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
  .email-social {
    width: 1.25rem;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }
`;
export const WrapPhone = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #fff;
  }
`;

export const WrapTitle = styled.div`
  margin-top: 8.6rem;
  position: relative;
  z-index: 99999999;
  text-align: center;
  h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    font-size: 4rem;
    color: #fff;
    letter-spacing: 0.425em;
    text-transform: uppercase;
  }
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.063rem;
    margin-top: 2rem;
    color: #fff;
  }
  p {
    color: #FFFFFF8F;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    margin-top: 1.063rem;
  }
`;