import styled from 'styled-components';

export const WrapForm = styled.div`
  input {
    border: none;
    border-bottom: 1px solid #000;
    width: 100%;
    margin: 20px 0;
    font-size: 16px;
  }
  input:disabled {
    background: #ccc;
  }
  form {
    margin-top: 0px;
  }
  .makeorder {
    background: #3C3721;
    color: #fff;
    Width: 100%;
    Height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin: 25px auto 15px auto;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
    font-family: 'Organetto';
    text-transform: uppercase;
  }
`;