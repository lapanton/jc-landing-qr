import React from "react";
import Slider from "react-slick";

import {
  WrapLiveProjecct,
  WrapInner
} from './style/Carousel-style';
import first from "./image/1.jpg";
import two from "./image/2.jpg";
import three from "./image/3.jpg";
import four from "./image/4.jpg";
import five from "./image/5.jpg";
import six from "./image/6.jpg";
import seven from "./image/7.jpg";
import eight from "./image/8.jpg";
import nine from "./image/9.jpg";
import ten from "./image/10.jpg";
import eleven from "./image/11.jpg";
import twelve from "./image/12.png";
import thirteen from "./image/13.png";
import fourteen from "./image/14.png";
import fifteen from "./image/15.png";
import sixteen from "./image/16.png";
import seventeen from "./image/17.png";
import eigtteen from "./image/18.png";
import nineteen from "./image/19.png";
import twenty from "./image/20.png";
import twentyone from "./image/21.png";

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
                <img src={four} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={five} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={six} alt="JewelCocktail"/>
              </WrapInner>


              <WrapInner className="innerSliderItems">
                <img src={seven} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={eight} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={nine} alt="JewelCocktail"/>
              </WrapInner>

              <WrapInner className="innerSliderItems">
                <img src={ten} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={eleven} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={twelve} alt="JewelCocktail"/>
              </WrapInner>

              <WrapInner className="innerSliderItems">
                <img src={thirteen} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={fourteen} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={fifteen} alt="JewelCocktail"/>
              </WrapInner>

              <WrapInner className="innerSliderItems">
                <img src={sixteen} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={seventeen} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={eigtteen} alt="JewelCocktail"/>
              </WrapInner>

              <WrapInner className="innerSliderItems">
                <img src={nineteen} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={twenty} alt="JewelCocktail"/>
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={twentyone} alt="JewelCocktail"/>
              </WrapInner>

            </Slider>
          </div>
        </div>
      </div>
    </WrapLiveProjecct>
  )
}