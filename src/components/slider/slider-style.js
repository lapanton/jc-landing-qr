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
  //height: 100%;
  //display: flex;
  //align-items: center;
  //padding: 0;
  //width: 900px;
  //justify-content: space-between;

  background: transparent;
  padding-top: 20px;
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  } /*# sourceMappingURL=slick.min.css.map */

  .slick-prev,
  .slick-next{
    border: none;
    background: transparent;
    color: transparent;
    &:hover{
      &:after, &:before{
        opacity: 1;
      }
    }
  }
  .slick-prev{

  }
  .slick-prev:before {
    content: url("arrow.png");
    font-size: 30px;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translate(0, -50%) rotate(-180deg);
    z-index: 98;
    padding: 10px;
   
  }

  .slick-next:before {
    content: url("arrow.png");
    font-size: 30px;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(0, -50%);
    z-index: 98;
    padding: 10px;
   
  }
`;
