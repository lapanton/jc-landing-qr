import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from "react-dom";
import Slider from "react-slick";
import one from './img/1.png';
import two from './img/2.png';
import three from './img/3.png';
import four from './img/4.png';
import five from './img/5.png';
import six from './img/6.png';
import vid from './img/1.MOV';

import schema from './img/schema.png';

import fire from './fire.png';
import arDown from './arrowDown.png';
import arUp from './arrowUp.png';

import sale from '../sale.png';

import { Wrapper, Inner, ChooseStone, PriceBuySection, DescriptionProduct, DescriptionButton, DescriptionView, ToRightMoveDesktop, WrapPrices,  WrapperZoom, WrapZoomSlider } from "./styled-glass";
import whiteArrow from "../rings/img/white-arrow.svg";
import closeIcon from "../rings/img/cross_white.svg";
import {Popup} from "../popup";

export const Glass = (props) => {
  const { card, setCard, setShowPopup, showPopup } = props;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [showDescr, setShowDescr] = useState(false);
  const [openZoomImage, setOpenZoomImage] = useState(false);
  const [indexImg, setIndexImg] = useState(1);
  const [moveTo, setMoveTo] = useState("stop");

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;
  useEffect(() => {
    if (!isMobile) setShowDescr(true);
  }, [isMobile]);

  const settings = {
    className: "alcor-slider",
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 968,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const settingsTwo = {
    className: "glass-slider-two",
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
    ],
  };
  const buyGlass = () => {
    const arr1 = [{ product: "glass", price: 6400 }];
    const checkedItem = card.filter((value) => value.product !== "glass");
    setCard(() => [...checkedItem, ...arr1]);
    setShowPopup(true);
  };



  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      setMoveTo("next");
      setTimeout(() => {
        setMoveTo("stop");
      }, 100);
    }
    if (e.key === "ArrowLeft") {
      setMoveTo("back");
      setTimeout(() => {
        setMoveTo("stop");
      }, 100);
    }
  });

  const Next = (props) => {
    const { style, onClick } = props;
    return (
      <div
        className="customNext whiteBg"
        style={{ ...style, display: "block" }}
        onClick={() => {
          onClick();
        }}
      >
        <img src={whiteArrow} alt="JewelCocktail" />
      </div>
    );
  };

  const Prev = (props) => {
    const { style, onClick } = props;
    return (
      <div
        className="customPrev whiteBg"
        style={{ ...style, display: "block" }}
        onClick={() => {
          onClick();
        }}
      >
        <img src={whiteArrow} alt="JewelCocktail" />
      </div>
    );
  };

  const sliderReferral = useRef<Slider | null>(null);

  useEffect(() => {
    // @ts-ignore

    if (moveTo === "next") {
      sliderReferral.current?.slickNext();
    }
    if (moveTo === "back") {
      sliderReferral.current?.slickPrev();
    }

    // eslint-disable-next-line no-use-before-define
  }, [moveTo, sliderReferral]);

  const settingsZoom = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 80000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    initialSlide: indexImg - 1,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: indexImg - 1,
          arrows: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  const openZoom = (index) => {
    setIndexImg(index);
    setOpenZoomImage(true);
    sliderReferral.current?.slickGoTo(index);
  };

  return (
    <Wrapper>
      <Inner>
        <div className="slider-wrap">
          <h4>Бокал-декантер JC (2 шт.)</h4>
          <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            <div>
              <video width="100%" height="100%" autoPlay loop muted playsInline style={{maxHeight: "500px"}}>
                <source src={vid} type="video/mp4"/>
              </video>
            </div>
            <div>
              <img src={one} alt="JewelCocktail" onClick={() => openZoom(1)}/>
            </div>
            <div>
              <img src={two} alt="JewelCocktail" onClick={() => openZoom(2)}/>
            </div>
            <div>
              <img src={three} alt="JewelCocktail" onClick={() => openZoom(3)}/>
            </div>
            <div>
              <img src={four} alt="JewelCocktail" onClick={() => openZoom(4)}/>
            </div>
            <div>
              <img src={five} alt="JewelCocktail" onClick={() => openZoom(5)}/>
            </div>
            <div>
              <img src={six} alt="JewelCocktail" onClick={() => openZoom(6)}/>
            </div>
          </Slider>
          {
            openZoomImage &&
            ReactDOM.createPortal(
              <WrapperZoom>
                <span
                  onClick={() => setOpenZoomImage(false)}
                  style={{ position: "absolute", top: "2rem", right: "15px", cursor: "pointer", zIndex: 9999999 }}
                >
                  <img src={closeIcon} alt="JewelCocktail" className="closeIcon" />
                </span>
                <WrapZoomSlider>
                  <Slider {...settingsZoom}>
                    <div>
                      <img src={one} alt="JewelCocktail" />
                    </div>
                    <div>
                      <img src={two} alt="JewelCocktail" />
                    </div>
                    <div>
                      <img src={three} alt="JewelCocktail"  />
                    </div>
                    <div>
                      <img src={four} alt="JewelCocktail" />
                    </div>
                    <div>
                      <img src={five} alt="JewelCocktail" />
                    </div>
                    <div>
                      <img src={six} alt="JewelCocktail" />
                    </div>
                  </Slider>
                </WrapZoomSlider>
              </WrapperZoom>,
              document.body
            )}

          <Slider {...settingsTwo} asNavFor={nav1} ref={(slider2) => setNav2(slider2)} swipeToSlide={true} focusOnSelect={true}>
            <div>
              <img src={one} alt="JewelCocktail"/>
            </div>
            <div>
              <img src={two} alt="JewelCocktail"/>
            </div>
            <div>
              <img src={three} alt="JewelCocktail"/>
            </div>
            <div>
              <img src={four} alt="JewelCocktail"/>
            </div>
            <div>
              <img src={five} alt="JewelCocktail"/>
            </div>
            <div>
              <img src={six} alt="JewelCocktail"/>
            </div>
          </Slider>
        </div>
        <ChooseStone>
          <p>Изящная минималистичная пара бокалов-декантер на длинной ножке для красных и белых вин.
          </p>
          <p>
            Уникальная форма позволяет насытить вино кислородом для раскрытия аромата напитка.
          </p>
        </ChooseStone>
        <PriceBuySection>
          <WrapPrices>
            <p className="price">6 400 <span>₽</span></p>
            <p className="old-price">9 150 ₽</p>
            <img src={sale} alt="JewelCocktail" className="sale-icon"/>
          </WrapPrices>
          <div className="buy-button" onClick={() => buyGlass()}>Купить</div>
          <div className="actsia">
            <img src={fire} alt="JewelCocktail"/>
            <p className="actsia-text"><span>Бесплатная доставка по москве и МО</span></p>
          </div>
        </PriceBuySection>
        <DescriptionProduct>
          <DescriptionButton>
            <span>Описание</span>
          </DescriptionButton>
            <DescriptionView>
              <p className="slave-text">Изящная минималистичная пара бокалов-декантер на длинной ножке для красных и белых вин.
                Уникальная форма позволяет насытить вино кислородом для раскрытия аромата напитка.
              </p>
              <p className="main-text">
                Характеристики:
              </p>
              <p className="slave-text">
                Комплектация: Бокал 2 шт., подарочная упаковка<br/>
                Высота: 280 мм<br/>
                Объем: 636 мл<br/>
                Материл: закалённое Стекло<br/>
                Производство: Россия
              </p>
              <ToRightMoveDesktop>
                <img src={schema} alt="JewelCocktail" style={{maxWidth: "200px"}}/>
              </ToRightMoveDesktop>
            </DescriptionView>
        </DescriptionProduct>
      </Inner>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} card={card} setCard={setCard} />
    </Wrapper>
  );
};
