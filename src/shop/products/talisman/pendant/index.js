import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import one from './img/1.png';
import two from './img/2.png';
import three from './img/3.png';
import four from './img/4.png';
import five from './img/5.png';
import six from './img/6.png';
import seven from './img/7.png';
import eight from './img/8.png';

import oneStone from './stone/1.png';
import twoStone from './stone/2.png';
import threeStone from './stone/3.png';
import fourStone from './stone/4.png';
import fiveStone from './stone/5.png';

import fire from './fire.png';
import arDown from './arrowDown.png';
import arUp from './arrowUp.png';

import sale from '../sale.png';

import {
  Wrapper,
  Inner,
  ChooseStone,
  WrapStone,
  PriceBuySection,
  DescriptionProduct,
  DescriptionButton,
  DescriptionView,
  ToRightMoveDesktop,
  WrapPrices,
  WrapperZoom,
  WrapZoomSlider
} from "./styled-rings";
import whiteArrow from "../rings/img/white-arrow.svg";
import closeIcon from "../rings/img/cross_white.svg";

export const PendantsTalisman = (props) => {
  const { card, setCard, setShowPopup } = props;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [quasarStone, setQuasarStone] = useState('1p-t'); // 1pendant-talisman
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
    className: "pendant-talisman-slider",
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
    className: "pendant-talisman-two",
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
        breakpoint: 1300,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 968,
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
  const buyPendant = () => {
    const arr1 = [{ product: "pendantTalisman", stone: quasarStone, price: 11700 }];
    const checkedItem = card.filter((value) => value.product !== "pendantTalisman");
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
          <h4>талисман-кулон<br/>
            женский</h4>
          <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
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
            <div>
              <img src={seven} alt="JewelCocktail" onClick={() => openZoom(7)}/>
            </div>
            <div>
              <img src={eight} alt="JewelCocktail" onClick={() => openZoom(8)}/>
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
                    <div>
                      <img src={seven} alt="JewelCocktail" />
                    </div>
                    <div>
                      <img src={eight} alt="JewelCocktail" />
                    </div>
                  </Slider>
                </WrapZoomSlider>
              </WrapperZoom>,
              document.body
            )}
          }
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
            <div>
              <img src={seven} alt="JewelCocktail"/>
            </div>
            <div>
              <img src={eight} alt="JewelCocktail"/>
            </div>
          </Slider>
        </div>
        <ChooseStone>
          <p>выбери вставку</p>
          <WrapStone>
            <div onClick={() => setQuasarStone('1p-t')} className={quasarStone === '1p-t' ? 'active' : 'not' }>
              <img src={oneStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('2p-t')} className={quasarStone === '2p-t' ? 'active' : 'not' }>
              <img src={twoStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('3p-t')} className={quasarStone === '3p-t' ? 'active' : 'not' }>
              <img src={threeStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('4p-t')} className={quasarStone === '4p-t' ? 'active' : 'not' }>
              <img src={fourStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('5p-t')} className={quasarStone === '5p-t' ? 'active' : 'not' }>
              <img src={fiveStone} alt="JewelCocktail"/>
            </div>
          </WrapStone>
          <p className="description">
            { quasarStone === '1p-t' && "роза - символ страсти, красоты, энергии и любви"}
            { quasarStone === '2p-t' && "океан - символ творчества,мечты, свободы и созидания"}
            { quasarStone === '3p-t' && "жемчуг - символизирует чистоту, силу воли и благополучие"}
            { quasarStone === '4p-t' && "родохрозит - романтичный камень, олицетворяет нежность и любовь"}
            { quasarStone === '5p-t' && "авантюрин - оптимизм, успех и удача на вашей стороне"}
          </p>
        </ChooseStone>
        <PriceBuySection>
          <p className="bonus">описание материалов в
            <Link to="/talisman/stone">каталог</Link>
          </p>
          <WrapPrices>
            <p className="price">11700 <span>₽</span></p>
            {/*<p className="old-price" style={{ visibility: "hidden" }}>12 700 ₽</p>*/}
            {/*<img src={sale} alt="JewelCocktail" className="sale-icon" style={{ visibility: "hidden" }}/>*/}
          </WrapPrices>
          <div className="buy-button" onClick={() => buyPendant()}>Купить</div>
          <div className="actsia" style={{ visibility: "hidden" }}>
            <img src={fire} alt="JewelCocktail"/>
            <p className="actsia-text" style={{ visibility: "hidden" }}><span>Акция!</span> второй камень <span>в подарок</span></p>
          </div>
        </PriceBuySection>
        <DescriptionProduct>
          <DescriptionButton>
            <span>Описание</span>
            <div onClick={() => setShowDescr(!showDescr)} className={showDescr ? 'hide' : 'show'}>
              <img src={arDown} alt="JewelCocktail"/>
            </div>
          </DescriptionButton>
          {showDescr && (
            <DescriptionView>
              <p className="slave-text">подвескаJewel Cocktail в стиле минимализм. Со сменными вставками из натуральных материалов.
                Особенная вставка с QR ссылкой на персональный талисман.</p>
              <p className="main-text">
                Комплектация:
              </p>
              <p className="slave-text">
                подвеска, 2 сменные вставки (на выбор с QR-ссылкой), система хранения камней фирменная коробка и пакет.
              </p>
              {/*<p className="main-text">*/}
              {/*  материал вставки:*/}
              {/*</p>*/}
              {/*<p className="slave-text">*/}
              {/*  камень, дерево или серебро*/}
              {/*</p>*/}

              <ToRightMoveDesktop>
              <p className="main-text">
                материал вставки:
              </p>
              <p className="slave-text">
                камень, дерево или серебро
              </p>
              <p className="main-text">
                Размер вставки:
              </p>
              <p className="slave-text">
                10x10 мм
              </p>
              <p className="main-text">
                бессрочная гарантия:
              </p>
              <p className="slave-text">
                для членов клуба jewel cocktail
                <a href="https://jewelcocktail.com/privacy" target="_blank" rel="noreferrer" >Подробнее</a>
              </p>
              </ToRightMoveDesktop>


              <div onClick={() => setShowDescr(!showDescr)} className="bottomButton">
                <img src={arUp} alt="JewelCocktail"/>
              </div>
            </DescriptionView>
          )}
        </DescriptionProduct>
      </Inner>
    </Wrapper>
  );
};
