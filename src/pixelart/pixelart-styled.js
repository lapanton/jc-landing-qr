import styled from "styled-components";
const maxwidth = "1000px";
const secondarycolor = "#f5ca18";
const callcolor = "#c1563d";
const maincolor = "#21383a";
const white = "#fdfdfd";
export const Wrapper = styled.div`
  max-width: 1000px;
  color: #fff;
  margin: 0 auto;
  position: relative;
  z-index: 999999999;
  padding: 20px;
  p {
    color: #fff;
  }
  .maxwidth {
    max-width: ${maxwidth};
    margin: 0 auto;
  }

  .inputbtn {
    background-color: ${secondarycolor};
    color: $white;
    font-size: 1rem;
    padding: 10px 10px;
  }

  .btn {
    margin: 15px;
    display: inline-block;
    padding: 0px 25px;
    color: $white;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: ${secondarycolor};
    text-transform: uppercase;
    position: relative;
    z-index: 10;
    border: 0;
    &.small {
      margin: 5px 0;
      font-size: 1rem;
    }
    &:after {
      position: absolute;
      top: -5px;
      left: 5px;
      background-color: ${secondarycolor};
      width: calc(100% - 10px);
      height: 100%;
      content: "";
      z-index: -1;
    }
    &:before {
      position: absolute;
      bottom: -5px;
      right: 5px;
      background-color: ${secondarycolor};
      width: calc(100% - 10px);
      height: 100%;
      content: "";
      z-index: -1;
    }
    &.call {
      background-color: ${callcolor};
      &:after,
      &:before {
        background-color: ${callcolor};
      }
    }
  }

  .infoselects {
    width: 100%;
    p {
      text-align: left;
      margin-left: 0;
    }
    button.btn {
      cursor: pointer;
    }
  }
  .colorpalette {
    margin-top: 18px;
    margin-bottom: 18px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .text {
      margin-right: 15px;
      margin-bottom: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      button {
        margin-right: 16px;
        margin-bottom: 0px;
      }
    }
    .icons {
      //margin-top:10px;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .colorblock {
      margin-right: 2px;
      margin-bottom: 0px;
      margin-top: 6px;
      height: 25px;
      width: 25px !important;
      border: solid 0px white;
    }
    .ss-main {
      width: calc(100%);
      margin-top: 8px;
      max-width: 480px;
      .ss-single-selected {
        display: inline-flex;
        width: calc(100%);
        background-color: #ececec;
      }
      .ss-option {
        margin-bottom: 6px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1) !important;
        }
      }
    }
    .ss-content {
      width: 100%;
    }
    .ss-content .ss-list .ss-option {
      padding: 0px 10px;
    }
  }

  #custompalette {
    margin: 12px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input {
      margin-right: 12px;
    }
  }
  #currentpallete {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .container {
    canvas {
      margin: 15px auto;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      max-width: 100%;
      border: solid 5px ${white};
    }
  }
  .selectors {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    label {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      margin: 10px 0;
      margin-right: 15px;
      text-transform: uppercase;
      flex-shrink: 1;
      &#uploadimage {
        flex-grow: 1;
        margin-right: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        input {
          margin: 5px 0;
          padding: 3px;
        }
      }
      @media screen and (max-width: 768px) {
        width: calc(100%);
      }
      span {
        display: inline-block;
        width: 40px;
        margin-left: 5px;
        text-align: center;
      }

      input {
        margin-left: 5px;
        //padding:3px;
        padding: 3px;
        &[type="range"] {
          width: 100px;
        }
        &[type="input"] {
          width: 50px;
        }
      }
    }
  }

  .dothings {
    margin-top: 15px;
    button {
      border: 0;
      margin-top: 10px;
      padding: 5px 10px;
      text-transform: uppercase;
    }
  }

  .loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(${maincolor}, 0.4);
    &.active {
      display: flex;
    }
  }
  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    //display: none;
  }
  .lds-spinner div {
    transform-origin: 32px 32px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 29px;
    width: 5px;
    height: 14px;
    border-radius: 20%;
    background: #fff;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
