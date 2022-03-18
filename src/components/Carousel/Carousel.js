import React from "react";
import Slider from "react-slick";

import {
  WrapLiveProjecct,
  WrapInner
} from './style/Carousel-style';
import first from "../slider/1.png";
import two from "../slider/2.png";
import three from "../slider/3.png";

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }
  return (
    <WrapLiveProjecct>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>НАША ГАЛЕРЕЯ</h3>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Slider {...settings}>
              <WrapInner className="innerSliderItems">
                <img src={first} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={two} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={three} alt="JewelCocktail"/>
              </WrapInner>


              <WrapInner className="innerSliderItems">
                <img src={first} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={two} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={three} alt="JewelCocktail"/>
              </WrapInner>


              <WrapInner className="innerSliderItems">
                <img src={first} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={two} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={three} alt="JewelCocktail"/>
              </WrapInner>
            </Slider>
          </div>
        </div>
      </div>
    </WrapLiveProjecct>
  )
}