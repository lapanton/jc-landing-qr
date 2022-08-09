import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from "react-dom";
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

import closeIcon from "./img/cross_white.svg";
import whiteArrow from "./img/white-arrow.svg";

import { Wrapper, Inner, ChooseStone, WrapStone, ChooseSize, SizeButton, PriceBuySection, DescriptionProduct, DescriptionButton, DescriptionView, ToRightMoveDesktop, WrapPrices, WrapperZoom, WrapZoomSlider } from "./styled-rings";

export const Rings = (props) => {
  const { card, setCard, setShowPopup } = props;

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [ringStone, setRingStone] = useState('1r');
  const [sizeRing, setSizeRing] = useState('sizes');
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
    className: "rings-slider",
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
    className: "rings-slider-two",
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

  const buyRing = () => {
    const arr1 = [{ product: "ring", stone: ringStone, size: sizeRing, price: 9800 }];
    const checkedItem = card.filter((value) => value.product !== "ring");
    setCard(() => [...checkedItem, ...arr1]);
    setShowPopup(true);
  };

  useEffect(() => {
    const isRingInCart = card.filter((value) => value.product === "ring");
    if (isRingInCart && isRingInCart[0]){
      setSizeRing(isRingInCart[0].size);
    }
  },[card]);

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
          <h4>женское Кольцо<br/> Mellish</h4>
          <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            <div>
              <img src={one} alt="JewelCocktail" onClick={() => openZoom(1)}/>
            </div>
            <div>
              <img src={two} alt="JewelCocktail" onClick={() => openZoom(2)} />
            </div>
            <div>
              <img src={three} alt="JewelCocktail" onClick={() => openZoom(3)} />
            </div>
            <div>
              <img src={four} alt="JewelCocktail" onClick={() => openZoom(4)} />
            </div>
            <div>
              <img src={five} alt="JewelCocktail" onClick={() => openZoom(5)} />
            </div>
            <div>
              <img src={six} alt="JewelCocktail" onClick={() => openZoom(6)} />
            </div>
            <div>
              <img src={seven} alt="JewelCocktail" onClick={() => openZoom(7)} />
            </div>
            <div>
              <img src={eight} alt="JewelCocktail" onClick={() => openZoom(8)} />
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
          <p>выбери камень с qr-посланием</p>
          <WrapStone>
            <div onClick={() => setRingStone('1r')} className={ringStone === '1r' ? 'active' : 'not' }>
              <img src={oneStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setRingStone('2r')} className={ringStone === '2r' ? 'active' : 'not' }>
              <img src={twoStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setRingStone('3r')} className={ringStone === '3r' ? 'active' : 'not' }>
              <img src={threeStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setRingStone('4r')} className={ringStone === '4r' ? 'active' : 'not' }>
              <img src={fourStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setRingStone('5r')} className={ringStone === '5r' ? 'active' : 'not' }>
              <img src={fiveStone} alt="JewelCocktail"/>
            </div>
          </WrapStone>
          <p className="description">
            { ringStone === '1r' && "роза - символ страсти, красоты, энергии и любви"}
            { ringStone === '2r' && "океан - символ творчества,мечты, свободы и созидания"}
            { ringStone === '3r' && "жемчуг - символизирует чистоту, силу воли и благополучие"}
            { ringStone === '4r' && "родохрозит - романтичный камень, олицетворяет нежность и любовь"}
            { ringStone === '5r' && "авантюрин - оптимизм, успех и удача на вашей стороне"}
          </p>
        </ChooseStone>
        <ChooseSize>
          <span>
            Размер кольца
          </span>
          <SizeButton onClick={() => setSizeRing('sizes')} className={sizeRing === 'sizes' ? 'active' : 'no'}>
            S
          </SizeButton>
          <SizeButton onClick={() => setSizeRing('sizem')} className={sizeRing === 'sizem' ? 'active' : 'no'}>
            M
          </SizeButton>
          <SizeButton onClick={() => setSizeRing('sizel')} className={sizeRing === 'sizel' ? 'active' : 'no'}>
            L
          </SizeButton>
        </ChooseSize>
        <PriceBuySection>
          <WrapPrices>
            <p className="price">9 800 <span>₽</span></p>
            <p className="old-price">14 000 ₽</p>
            <img src={sale} alt="JewelCocktail" className="sale-icon"/>
          </WrapPrices>
          <p className="bonus">кольцо + 2 разных камня</p>
          <div className="buy-button" onClick={() => buyRing()}>Купить</div>
          <div className="actsia">
            <img src={fire} alt="JewelCocktail"/>
            <p className="actsia-text"><span>Акция!</span> второй камень <span>в подарок</span></p>
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
              <p className="slave-text">дизайнерское кольцо в стиле минимализм на каждый день со сменными вставками (камнями)</p>
              <p className="main-text">
                Комплектация:
              </p>
              <p className="slave-text">
                кольцо, 2 сменных камня, система хранения камней фирменная коробка и пакет.
              </p>
              <p className="main-text">
                Размер камня:
              </p>
              <p className="slave-text">
                10x10 мм
              </p>

              <ToRightMoveDesktop>
              <p className="main-text">
                Размер кольца:
              </p>
              <p className="slave-text">
                S: 16-18 M: 17-19 L: 18-20
              </p>
              <p className="main-text">
                Материал и цвет основы:
              </p>
              <p className="slave-text">
                Серебряный сплав, глянец
              </p>
              <p className="main-text">
                Тип вставки:
              </p>
              <p className="slave-text">
                Натуральный или органический
                камень ручной огранки
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
