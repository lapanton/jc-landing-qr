import styled from 'styled-components';
import arrow from '../image/arrow.png';
import breakpoint from "styled-components-breakpoint";


export const WrapLiveProjecct = styled.div`
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  @media (max-width: 768px) { 
    .row {
      margin-right: inherit;
      margin-left: inherit;
    }
    .container {
      padding-right: inherit;
      padding-left: inherit;
      margin-right: inherit;
      margin-left: inherit;
    }
  }
  background: transparent;
  padding: 50px 0 80px 0px;
  z-index: 99999;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    overflow: hidden;
  }
  h3{
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
  &:hover {
    cursor: pointer;
  }
}
.slick-prev:before {
  content: url(${arrow});
  font-size: 30px;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(0, -50%) rotate(90deg);
  z-index: 98;
  padding: 10px;
  left: -5px;
  &:hover {
    cursor: pointer;
  }
}
.slick-next {
    &:hover {
      cursor: pointer;
    }
  }


  .slick-next:before {
  content: url(${arrow});
  font-size: 30px;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(0, -50%) rotate(-90deg);
  z-index: 98;
  padding: 10px;
  right: -5px;
}
`;

export const WrapInner = styled.div`
  text-align: center;
  img{
    width: 300px;
    height: 300px;
    background-size: contain;
    display: inline-block !important;
    @media (max-width: 768px) {
      width: 270px;
      height: 270px;
    }
  }

`;