import React  from 'react';
import Slider from "react-slick";
import { Wrapper, Inner } from "./slider-style";
import first from './1.png';
import two from './2.png';
import three from './3.png';

import ScrollContainer from 'react-indiana-drag-scroll'

export const SliderGalerry = () =>  {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
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
  }
  return (
    <Wrapper>
      <h3>НАША ГАЛЕРЕЯ</h3>
      <br/>

      <ScrollContainer className="scroll-container" vertical={false} horizontal={true} >
        <Inner>
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
              <img src={first} alt="JewelCocktail"/>
            </div>
            <div className="innerSliderItems">
              <img src={two} alt="JewelCocktail"/>
            </div>
            <div className="innerSliderItems">
              <img src={three} alt="JewelCocktail"/>
            </div>


            <div className="innerSliderItems">
              <img src={first} alt="JewelCocktail"/>
            </div>
            <div className="innerSliderItems">
              <img src={two} alt="JewelCocktail"/>
            </div>
            <div className="innerSliderItems">
              <img src={three} alt="JewelCocktail"/>
            </div>
          </Slider>

        </Inner>
      </ScrollContainer>
    </Wrapper>
  )
}
