import React from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

import { WrapLiveProjecct, WrapInner } from "./style/Carousel-style";
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

import twentytwo from "./image/22.png";
import twentythree from "./image/23.png";
import twentyfour from "./image/24.png";
import twentyfive from "./image/25.png";
import twentysix from "./image/26.png";

export const Carousel = (props) => {
  const { langProps } = props;
  const settings = {
    autoplay: true,
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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <WrapLiveProjecct>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>
              {langProps.locale === "ru" && (
                <FormattedMessage id="message.ourgal" />
              )}
            </h3>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Slider {...settings}>
              <WrapInner className="innerSliderItems">
                <img src={first} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={two} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={three} alt="JewelCocktail" />
              </WrapInner>

              <WrapInner className="innerSliderItems">
                <img src={four} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={five} alt="JewelCocktail" />
              </WrapInner>

              {/*<WrapInner className="innerSliderItems">*/}
              {/*  <img src={six} alt="JewelCocktail" />*/}
              {/*</WrapInner>*/}

              <WrapInner className="innerSliderItems">
                <img src={seven} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={eight} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={nine} alt="JewelCocktail" />
              </WrapInner>

              {/*<WrapInner className="innerSliderItems">*/}
              {/*  <img src={ten} alt="JewelCocktail" />*/}
              {/*</WrapInner>*/}
              <WrapInner className="innerSliderItems">
                <img src={eleven} alt="JewelCocktail" />
              </WrapInner>
              {/*<WrapInner className="innerSliderItems">*/}
              {/*  <img src={twelve} alt="JewelCocktail" />*/}
              {/*</WrapInner>*/}

              <WrapInner className="innerSliderItems">
                <img src={thirteen} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={fourteen} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={fifteen} alt="JewelCocktail" />
              </WrapInner>

              {/*<WrapInner className="innerSliderItems">*/}
              {/*  <img src={sixteen} alt="JewelCocktail" />*/}
              {/*</WrapInner>*/}
              <WrapInner className="innerSliderItems">
                <img src={seventeen} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={eigtteen} alt="JewelCocktail" />
              </WrapInner>

              <WrapInner className="innerSliderItems">
                <img src={nineteen} alt="JewelCocktail" />
              </WrapInner>
              {/*<WrapInner className="innerSliderItems">*/}
              {/*  <img src={twenty} alt="JewelCocktail" />*/}
              {/*</WrapInner>*/}
              <WrapInner className="innerSliderItems">
                <img src={twentyone} alt="JewelCocktail" />
              </WrapInner>

              <WrapInner className="innerSliderItems">
                <img src={twentytwo} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={twentythree} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={twentyfour} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={twentyfive} alt="JewelCocktail" />
              </WrapInner>
              <WrapInner className="innerSliderItems">
                <img src={twentysix} alt="JewelCocktail" />
              </WrapInner>
            </Slider>
          </div>
        </div>
      </div>
    </WrapLiveProjecct>
  );
};
