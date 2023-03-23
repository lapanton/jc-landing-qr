import React from 'react';
import Slider from "react-slick";
import {useLocation} from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Wrapper
} from "./bottomSlider-style";

import first from "./image/1.png";
import two from "./image/2.png";
import three from "./image/3.png";
import four from "./image/4.png";
import five from "./image/5.png";
import six from "./image/6.png";
import seven from "./image/7.png";
import eight from "./image/8.png";
import nine from "./image/9.png";
import ten from "./image/10.png";
import eleven from "./image/11.png";
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

export const BottomSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  };
  const { pathname } = useLocation();
  const { langProps } = props;
  return (
    <>
    {!(pathname.includes('/letter') || pathname.includes('/qr/')) ?
      <Wrapper>
          <h5 style={{ display: "none" }}>{langProps.locale === "ru" ? "Красивые решения" : "Beautiful solutions"}</h5>
        <Slider {...settings}>
          <div className="innerSliderItems">
            <img src={first} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={two} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={three} alt="JewelCocktail"/>
          </div>


          <div className="innerSliderItems">
            <img src={four} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={five} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={six} alt="JewelCocktail"/>
          </div>


          <div className="innerSliderItems">
            <img src={seven} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={eight} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={nine} alt="JewelCocktail"/>
          </div>

          <div className="innerSliderItems">
            <img src={ten} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={eleven} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={twelve} alt="JewelCocktail"/>
          </div>

          <div className="innerSliderItems">
            <img src={thirteen} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={fourteen} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={fifteen} alt="JewelCocktail"/>
          </div>

          <div className="innerSliderItems">
            <img src={sixteen} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={seventeen} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={eigtteen} alt="JewelCocktail"/>
          </div>

          <div className="innerSliderItems">
            <img src={nineteen} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={twenty} alt="JewelCocktail"/>
          </div>
          <div className="innerSliderItems">
            <img src={twentyone} alt="JewelCocktail"/>
          </div>

        </Slider>
      </Wrapper> : null }
    </>
  );
};
