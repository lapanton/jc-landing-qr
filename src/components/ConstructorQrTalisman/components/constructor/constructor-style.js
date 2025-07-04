import styled from "styled-components";

export const Wrapper = styled.div`
  .completed {
    display: none;
  }
  .noMarging {
    margin: 0;
    padding-bottom: 40px;
  }
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.875rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
      text-align: center;
    }
  }
`;

export const WrapConstructorArea = styled.div`
  width: 100%;
  border-radius: 10px;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const SideArea = styled.div`
  background: rgba(103, 62, 55, 0.25);
  color: #fff;
  width: 246px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  padding: 32px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ConstructorArea = styled.div`
  margin-left: 310px;
  background: rgba(167, 144, 134, 0.25);
  padding: 2.2rem 2.8rem;
  textarea {
    resize: none;
    outline-color: #ffffff;
    width: calc(100% - 44px);
    border-radius: 5px;
    background: transparent;
    padding: 11px 22px;
    border: 1px solid #fff;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding: 0;
    border-radius: 10px 10px 0 0;
    textarea {
      padding: 11px 22px;
      width: calc(100% - 88px);
      margin: 0 22px;
    }
  }
  p {
    display: none;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 768px) {
      display: block;
      padding: 10px 22px 15px 22px;
      color: rgba(255, 255, 255, 0.71);
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      text-align: center;
    }
  }
`;

export const TextMessage = styled.div`
  position: relative;
  div {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #fff;
    padding-left: 35px;
    margin-bottom: 1rem;
  }
  span {
    color: rgba(255, 255, 255, 0.38);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
  }
  img {
    position: absolute;
  }
`;

export const Fon = styled.div`
  position: relative;
  margin-top: 66px;
  div {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #fff;
    padding-left: 35px;
    margin-bottom: 1rem;
  }
  span {
    color: rgba(255, 255, 255, 0.38);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
  }
  img {
    position: absolute;
  }
`;

export const Ramka = styled.div`
  position: relative;
  margin-top: 100px;
  div {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #fff;
    padding-left: 35px;
    margin-bottom: 1rem;
  }
  span {
    color: rgba(255, 255, 255, 0.38);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
  }
  img {
    position: absolute;
  }
  display: none
`;

export const ResultPrewiev = styled.div`
  position: relative;
  margin-top: 45px;
  div {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #fff;
    padding-left: 35px;
    margin-bottom: 1rem;
  }
  span {
    color: rgba(255, 255, 255, 0.38);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
  }
  img {
    position: absolute;
  }
`;

export const Podpsi = styled.div`
  position: relative;
  margin-top: 50px;
  div {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #fff;
    padding-left: 35px;
    margin-bottom: 1rem;
  }
  span {
    color: rgba(255, 255, 255, 0.38);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
  }
  img {
    position: absolute;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const TextMessageMob = styled.div`
  display: none;
  background: rgba(103, 62, 55, 0.25);;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    display: flex;
    div {
      padding-left: 20px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
  }
`;

export const WrapPhotoUpload = styled.div`
  background: rgba(255, 255, 255, 0.26);
  border-radius: 5px;
  margin: 28px 0 0 0;
  p {
    @media screen and (max-width: 768px) {
      background:  rgba(167, 144, 134, 0.25);;
    }
  }
`;

export const InnerPhoto = styled.div`
  padding: 19px;
  @media screen and (max-width: 768px) {
    background:  rgba(167, 144, 134, 0.25);;
  }
  .container {
    display: flex;
    font-family: sans-serif;
  }
  .dropzone {
    max-width: 96px;
    max-height: 96px;
    min-width: 96px;
    min-height: 96px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 2px;
    border-color: #eeeeee;
    border-style: dashed;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const AddPhoto = styled.div`
  width: 123px;
  height: 123px;
  border: 2px dashed rgba(255, 255, 255, 0.28);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Thumb = styled.div`
  position: relative;
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
  img {
    max-width: 100%;
  }
  .remove-xxxx {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    border-radius: 50%;
    max-width: 50px;
    width: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const FonMobile = styled.div`
  display: none;
  background: rgba(103, 62, 55, 0.25);;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    background: rgba(103, 62, 55, 0.25);;
    display: flex;
    div {
      padding-left: 20px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
  }
`;



export const WrapPreviewResult = styled.div`
  margin-top: 50px;
  .emptyHeight {
    height: auto;
    position: relative;
    @media screen and (max-width: 768px) {
      height: auto;
      margin: 0 6px;
      border-bottom: 4px solid #fff;
      border-left: 4px solid #fff;
      border-right: 4px solid #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .emptyHeightCompl{
    height: auto;
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
`;
export const InnerPreviewResult = styled.div`
  text-align: center;
`;

export const MessageView = styled.div`
  color: #FFFFFF;
  margin-bottom: 40px;
  .poezi {
    display: block !important;
    padding: 0;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0 22px 40px 22px;
    margin-bottom: 0;
  }
  &.morePadding{
    @media screen and (max-width: 768px) {
      padding-top: 40px;
    }
  }
  &.messageInit {
    @media screen and (max-width: 768px) {
      margin: 0 6px;
      border-top: 4px solid #fff;
      border-left: 4px solid #fff;
      border-right: 4px solid #fff;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
`;

export const ButtonSubmit = styled.div`
  padding: 25px 96px;
  background: #009933;
  border-radius: 5px;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 40px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;


export const ResultPrewievMob = styled.div`
  display: none;
  background: rgba(103, 62, 55, 0.25);;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    .iconBorder {
      width: inherit;
      height: inherit;
    }
    background: rgba(103, 62, 55, 0.25);;
    display: flex;
    div {
      padding-left: 7px;
      padding-top: 6px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
  }
`;

export const WrapSlider = styled.div`

`;
export const WrapBorderView = styled.div`
  position: relative;
`;


export const InnerWrapSlider = styled.div`
  max-width: 610px;
  min-width: 610px;
  @media screen and (max-width: 1150px) {
    max-width: 440px;
    min-width: 440px;
  }
  @media screen and (max-width: 1080px) {
    max-width: 240px;
    min-width: 240px
  }
  @media screen and (max-width: 768px) {
    max-width: inherit;
  }
  margin: 0 auto;
  img {
    max-width: 610px;
    min-width: 610px;
    @media screen and (max-width: 1150px) {
      max-width: 440px;
    min-width: 440px
  }
    @media screen and (max-width: 1080px) {
      max-width: 240px;
      min-width: 240px;
    }
    @media screen and (max-width: 768px) {
      max-width: inherit;
    }
  }
  .slick-track {
    margin:auto;
  }
  .slick-prev{
    z-index: 2;
    top: 270px;
    left: -65px;
    @media screen and (max-width: 1080px) {
      top: 120px;
    }
  }
  .slick-next{
    z-index: 2;
    top: 270px;
    right: -65px;
    @media screen and (max-width: 1080px) {
      top: 120px;
    }
  }
  .slick-list{
    max-height: auto;
  }
  .imageInnerSlider {
    min-height: 510px;
    @media screen and (max-width: 1080px) {
      min-height: 440px;
    }
    @media screen and (max-width: 768px) {
      min-height: 440px;
    }
  }
  .slick-dots {
    bottom: 0;
    @media screen and (max-width: 768px) {
      bottom: 20px;
    }
  }
  .slick-dots li.slick-active button:before {
    @media screen and (max-width: 768px) {
      color: transparent;
      border: 5px solid #fff;
    }
  }
  .slick-dots li button:before{
    @media screen and (max-width: 768px) {
      color: transparent;
      border: 5px solid rgba(255,255,255,.25);
    }
    }
  .slick-dots li {
    @media screen and (max-width: 768px) {
      margin: 15px;
    }
  }
  &.iscompeletedSl.colorSl_0 {
    .slick-dots {
      bottom: -43px;
      @media screen and (max-width: 768px) {
        bottom: -48px;
      }
    }
  }
`;

export const WrapInnerBorder = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%,-4px);
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    min-width: 100%;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 290px;
    min-width: 290px;
  }
`;

export const WrapperPending = styled.div`
  text-align: center;
  margin-top: 2rem;
  background: rgba(103, 62, 55, 0.25);;
  padding: 10px;
  color: #fff;
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;
export const WrapInputCheckBox = styled.div`
  display: inline-block;
  .checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }

  .checkbox-round:checked {
    background-color: #A55248;
  }
  span {
    text-align: left;
    color: #fff;
    max-width: 260px;
    display: inline-block;
    transform: translateY(19px);
    padding-left: 15px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    padding-left: 10px;
    margin-bottom: 20px;
  }
  a {
    color: #fff;
  }
`;

export const WrapPhoneEmail = styled.div`
  color: #fff;
  text-align: left;
  margin: 20px auto 0 auto;
  max-width: 400px;
  input {
    border-radius: 5px;
    background: transparent;
    padding: 11px 22px;
    border: 1px solid #fff;
    color: #fff;
    width: 100%
  }
  .numberPhone {
    margin-bottom: 20px;
  }
  .emailUser {
    
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    max-width: 100%;
    padding: 10px 20px 0 20px;
    input {
      width: calc(100% - 60px);
    }
  }
`;
