import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from "react-dom";
import Slider from "react-slick";
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.png';
import four from './img/4.png';
import five from './img/5.png';

// import oneStone from './stone/1.png';
// import twoStone from './stone/2.png';
// import threeStone from './stone/3.png';
// import fourStone from './stone/4.png';
// import fiveStone from './stone/5.png';

import fire from './fire.png';
import arDown from './arrowDown.png';
import arUp from './arrowUp.png';

// import sale from '../sale.png';

import Mone from "../../../../talisman/talismanStone/man-stones/IMG_6046.png";
import Mtwo from "../../../../talisman/talismanStone/man-stones/IMG_6052.png";
import Mthree from "../../../../talisman/talismanStone/man-stones/IMG_6061.png";
import Mfour from "../../../../talisman/talismanStone/man-stones/IMG_6066.png";
import Mfive from "../../../../talisman/talismanStone/man-stones/IMG_6059.png";
import Msix from "../../../../talisman/talismanStone/man-stones/IMG_6045.png";
import Mseven from "../../../../talisman/talismanStone/man-stones/IMG_6051.png";
import Meight from "../../../../talisman/talismanStone/man-stones/IMG_6057.png";
import Mnine from "../../../../talisman/talismanStone/man-stones/IMG_6058.png";
import Mten from "../../../../talisman/talismanStone/man-stones/IMG_6050.png";
import Meleven from "../../../../talisman/talismanStone/man-stones/IMG_6043.png";
import Mtwelve from "../../../../talisman/talismanStone/man-stones/IMG_6044.png";
import Mthirteen from "../../../../talisman/talismanStone/man-stones/IMG_6060.png";
import Mfourteen from "../../../../talisman/talismanStone/man-stones/IMG_6047.png";
import Mfifteen from "../../../../talisman/talismanStone/man-stones/IMG_6112.png";
import Msixteen from "../../../../talisman/talismanStone/man-stones/IMG_6049.png";
import Mseventeen from "../../../../talisman/talismanStone/man-stones/IMG_6053.png";
import Meightteen from "../../../../talisman/talismanStone/man-stones/IMG_6056.png";
import Mnineteen from "../../../../talisman/talismanStone/man-stones/IMG_6055.png";
import Mtwenty from "../../../../talisman/talismanStone/man-stones/IMG_6054.png";

import { Wrapper, Inner, ChooseStone, WrapStone, PriceBuySection, DescriptionProduct, DescriptionButton, DescriptionView, ToRightMoveDesktop, WrapPrices,  WrapperZoom, WrapZoomSlider } from "./styled-rings";
import whiteArrow from "../rings/img/white-arrow.svg";
import closeIcon from "../rings/img/cross_white.svg";
import {Link} from "react-router-dom";

export const GidorTalisman = (props) => {
  const { card, setCard, setShowPopup } = props;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [gidorStone, setGidorStone] = useState('1g-t');
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
    className: "gidor-slider",
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
    className: "gidor-slider-two",
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
  const settingsStones = {
    className: "stones-slider",
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    beforeChange: (current, next) => {
      setGidorStone(`${next + 1}g-t`)
    }
  };
  const buyGidor = () => {
    const arr1 = [{ product: "gidorTalisman", stone: gidorStone, price: 11700 }];
    const checkedItem = card.filter((value) => value.product !== "gidorTalisman");
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
  /*eslint-disable no-self-compare */
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
          <h4>мужской<br/>кулон-талисман</h4>
          <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            <div>
              <img src={one} alt="JewelCocktail" onClick={() => openZoom(1)} />
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

          </Slider>
        </div>
        <ChooseStone>
          <p>выбери вставку</p>
          <WrapStone>
            <Slider {...settingsStones}>
              <div>
                <img src={Mone} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mtwo} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mthree} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mfour} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mfive} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Msix} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mseven} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Meight} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mnine} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mten} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Meleven} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mtwelve} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mthirteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mfourteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mfifteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Msixteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mseventeen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Meightteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mnineteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={Mtwenty} alt="JewelCocktail"/>
              </div>
            </Slider>
          </WrapStone>
          <p className="description">
            { gidorStone === '1g-t' && "Яшма — источник доброй энергии."}
            { gidorStone === '2g-t' && "Агат - приносит здоровье, счастье и долголетие."}
            { gidorStone === '3g-t' && "Агат - приносит здоровье, счастье и долголетие."}
            { gidorStone === '4g-t' && "Агат - приносит здоровье, счастье и долголетие."}
            { gidorStone === '5g-t' && "Яшма — источник доброй энергии."}
            { gidorStone === '6g-t' && "Лазурит имеет способность помогать своему владельцу."}
            { gidorStone === '7g-t' && "Обсидиан является мощным поглотителем энерги."}
            { gidorStone === '8g-t' && "Обсидиан является мощным поглотителем энерги."}
            { gidorStone === '9g-t' && "Пирит — укрепляющего нервную систему."}
            { gidorStone === '10g-t' && "Тигровый глаз — камень мудрецов и правителей."}
            { gidorStone === '11g-t' && "Тигровый глаз — камень мудрецов и правителей."}
            { gidorStone === '12g-t' && "Тигровый глаз — камень мудрецов и правителей."}
            { gidorStone === '13g-t' && "Гематит - один из сильнейших магических камней."}
            { gidorStone === '14g-t' && "Орех — дерево победы над внешними обстоятельствами."}
            { gidorStone === '15g-t' && "Сандалу - могущественная стихия Воздуха."}
            { gidorStone === '16g-t' && "Красное дерево - помогает человеку жить в гармонии с природой."}
            { gidorStone === '17g-t' && "Оникс — обладает сильной энергетикой."}
            { gidorStone === '18g-t' && "Серебро - это лунный металл."}
            { gidorStone === '19g-t' && "Серебро - это лунный металл."}
            { gidorStone === '20g-t' && "Серебро - это лунный металл."}
          </p>
        </ChooseStone>
        <PriceBuySection>
          <p className="bonus">описание материалов в
            <Link to="/talisman/stone">каталог</Link>
          </p>
          <WrapPrices>
            <p className="price">11 700 <span>₽</span></p>
            {/*<p className="old-price">12 700 ₽</p>*/}
            {/*<img src={sale} alt="JewelCocktail" className="sale-icon"/>*/}
          </WrapPrices>
          <div className="buy-button" onClick={() => buyGidor()}>Купить</div>
          <div className="actsia" style={{ visibility: "hidden" }}>
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
              <p className="slave-text">Мужской кулон Jewel Cocktail в стиле минимализм. Со сменными вставками из натуральных материалов. Особенная вставка с QR ссылкой на персональный талисман.</p>
              <p className="main-text">
                Комплектация:
              </p>
              <p className="slave-text">
                кулон, шнурок, 2 сменных камня, система хранения камней фирменная коробка и пакет.
              </p>
              <p className="main-text">
                Размер камня:
              </p>
              <p className="slave-text">
                12x12 мм
              </p>
              <ToRightMoveDesktop>
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
