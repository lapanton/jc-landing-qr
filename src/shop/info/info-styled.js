import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 999999999;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    letter-spacing: 0.21em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 1.75rem;
    span {
      color: #A55248;
      text-transform: uppercase;
      font-family: 'Organetto';
      letter-spacing: 0.21em;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 1.25rem 1.25rem 0 1.25rem;
  height: 9rem;
    h3 {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }
  }
  .add-special-width {
    @media screen and (min-width: 768px) {
      max-width: 970px;
    }
    h3 {
      @media screen and (min-width: 768px) {
        white-space: nowrap;
      }
    }
  }
  .how-it-works {
    font-family: 'Organetto';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 1.75rem;
    text-align: center;
    letter-spacing: 0.205em;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.76);
    @media screen and (min-width: 768px) {
      transform: translateX(-120px);
    }
  }
`;

export const Descr = styled.div`
  font-family: 'Organetto';
  color: #fff;
  font-style: normal;
  font-weight: 300;
  font-size: 1.313rem;
  line-height: 144.5%;
  span {
    color: #A55248;
    text-transform: uppercase;
    font-family: 'Organetto';
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
  }
`;

export const Qr = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
