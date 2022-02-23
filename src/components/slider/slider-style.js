import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  position: relative;
  z-index: 99999999;
  width: 100%;
  //display: none;
  h3 {
    font-size: 1.75rem;
    line-height: 2.563rem;
    margin-top: 40px;
    color: #fff;
    width: 100%;
    letter-spacing: 0.425em;
    text-transform: uppercase;
    display: block;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: center;
    }
  }
  p {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: #fff;
    font-size: 1rem;
    line-height: 1.25rem;
    max-width: 750px;
    text-align: center;
    margin: 30px auto;
    opacity: 0.75;
    @media screen and (max-width: 768px) {
      padding: 0 10px;
    }
  }
  .innerSliderItems {
    width: auto;
    display: inline-block;
    user-select: none;
    cursor: pointer;
    opacity: 1;
    transition: opacity .5s;
    margin: 0 10px;
    p {
      text-align: left;
    }
  }
  .scroll-container {
    height: 565px;
    max-width: 1299px;
    overflow: hidden;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      overflow: auto;
    }
  }
`;

export const Inner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  width: 900px;
  justify-content: space-between;
`;
