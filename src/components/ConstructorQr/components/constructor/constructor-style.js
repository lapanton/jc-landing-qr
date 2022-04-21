import styled from "styled-components";

export const Wrapper = styled.div`
  .completed {
    display: none;
  }
  .noMarging {
    margin: 0;
  }
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
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
  background: #673E37;
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
  background: #A79086;
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
`;

export const TextMessageMob = styled.div`
  display: none;
  background: #673E37;
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
  background: rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  margin: 28px 0 0 0;
  p {
    @media screen and (max-width: 768px) {
      background: #A79086;
    }
  }
`;

export const InnerPhoto = styled.div`
  padding: 19px;
  @media screen and (max-width: 768px) {
    background: #A79086;
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
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
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
  background: #673E37;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    background: #673E37;
    display: flex;
    div {
      padding-left: 20px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
  }
`;

export const WrapBoardSelect = styled.div`
  margin-top: 36px;
`;

export const InnerBoard = styled.div`
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
    img {
      width: 72px;
      height: 56px;
      margin-right: 20px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        transform: scale(1.1);
      }
      @media screen and (max-width: 768px) {
        &:last-child {
          margin-top: 11px;
        }
      }
    }
`;

export const RamkaMob = styled.div`
  display: none;
  background: #673E37;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    .iconBorder {
      width: inherit;
      height: inherit;
    }
    background: #673E37;
    display: flex;
    div {
      padding-left: 20px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
  }
`;

export const WrapSignature = styled.div`
  margin-top: 64px;
`;

export const InnerSignatture = styled.div`
  input {
    width: calc(100% - 44px);
    border-radius: 5px;
    background: transparent;
    padding: 11px 22px;
    border: 1px solid #fff;
    color: #fff;
    @media screen and (max-width: 768px) {
      padding: 11px 22px;
      width: calc(100% - 88px);
      margin: 0 22px 30px 22px;
    }
  }
`;

export const PodpsiMob = styled.div`
  display: none;
  background: #673E37;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    .iconBorder {
      width: inherit;
      height: inherit;
    }
    background: #673E37;
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
    height: 531px;
    position: relative;
    @media screen and (max-width: 768px) {
      height: 180px;
    }
  }
  .emptyHeightCompl{
    height: 531px;
    @media screen and (max-width: 768px) {
      height: 310px;
    }
  }
`;
export const InnerPreviewResult = styled.div`
  text-align: center;
`;

export const MessageView = styled.div`
  color: #FFFFFF;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    padding: 0 22px;
  }
  &.morePadding{
    @media screen and (max-width: 768px) {
      padding-top: 40px;
    }
  }
`;

export const ButtonSubmit = styled.div`
  padding: 25px 96px;
  background: #A55248;
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

export const WrapName =styled.div`
  background: linear-gradient(270deg, #B27C2C -4.63%, #FDC760 10.8%, #FFFDDF 36.14%, #FFF3CA 39.44%, #FDCA6E 52.67%, #FDCF7A 55.97%, #FEE2A5 68.09%, #FEDF9E 69.19%, #FDCE71 82.42%, #FDC760 87.93%, #B27C2C 104.45%);
  padding: 12px 55px;
  display: inline-block;
  color: #96651D;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  left: 50%;
  bottom: 4px;
  transform: translateX(-50%);
  z-index: 3;
  @media screen and (max-width: 768px) {
    padding: 10px 12px;
  }
  &.color_0 {
    @media screen and (max-width: 768px) {
      bottom: -63px;
    }
  }
  &.color_1 {
    
  }
  &.color_2{
    bottom: -8px;
    padding: 8px 55px;
    color: #000;
    background: linear-gradient(270deg,#d6d6d6 -4.63%,#d0d0d0 10.8%,#dedede 36.14%,#cecece 39.44%,#d0d0d0 52.67%,#c9c9c9 55.97%,#cbcbcb 68.09%,#d3d3d3 69.19%,#c6c6c6 82.42%,#d0d0d0 87.93%,#d0d0d0 104.45%);
    @media screen and (max-width: 768px) {
      padding: 10px 12px;
    }
    &.iscompeleted {
      bottom: 34px;
    }
  }
  &.color_3 {
    bottom: -12px;
    padding: 5px 55px;
    @media screen and (max-width: 768px) {
      padding: 12px 10px;
    }
  }
  &.color_4 {
    padding: 5px 55px;
    bottom: -17px;
    @media screen and (max-width: 768px) {
      padding: 12px 10px;
    }
  }
  @media screen and (max-width: 768px) {
    bottom: -43px;
    &.iscompeleted {
      bottom: 83px;
    }
  }
`;

export const ResultPrewievMob = styled.div`
  display: none;
  background: #673E37;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 768px) {
    .iconBorder {
      width: inherit;
      height: inherit;
    }
    background: #673E37;
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
    max-height: 531px;
  }
  .imageInnerSlider {
    min-height: 510px;
    @media screen and (max-width: 1080px) {
      min-height: 230px;
    }
    @media screen and (max-width: 768px) {
      min-height: 210px;
    }
  }
  .slick-dots {
    bottom: -38px;
    @media screen and (max-width: 768px) {
      bottom: -58px;
    }
  }
  .slick-dots li.slick-active button:before {
    @media screen and (max-width: 768px) {
      color: transparent;
      border: 5px solid #000;
    }
  }
  .slick-dots li button:before{
    @media screen and (max-width: 768px) {
      color: transparent;
      border: 5px solid rgba(0,0,0,.25);
    }
    }
  .slick-dots li {
    @media screen and (max-width: 768px) {
      margin: 15px;
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
  background: #673E37;
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
    margin-top: 100px;
    max-width: 100%;
    padding: 0 20px;
    input {
      width: calc(100% - 60px);
    }
  }
`;
