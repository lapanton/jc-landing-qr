import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from "react-dom";
import Slider from "react-slick";
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.jpg';
import five from './5.jpg';

// import oneStone from './stone/1.png';
// import twoStone from './stone/2.png';
// import threeStone from './stone/3.png';
// import fourStone from './stone/4.png';
// import fiveStone from './stone/5.png';

import fire from './fire.png';
import arDown from './arrowDown.png';
import arUp from './arrowUp.png';

import oneS from "../../../../talisman/talismanStone/wom-stones/IMG_6136.png";
import twoS from "../../../../talisman/talismanStone/wom-stones/IMG_6061.png";
import threeS from "../../../../talisman/talismanStone/wom-stones/IMG_6066.png";
import fourS from "../../../../talisman/talismanStone/wom-stones/IMG_6130.png";
import fiveS from "../../../../talisman/talismanStone/wom-stones/IMG_6127.png";
import sixS from "../../../../talisman/talismanStone/wom-stones/IMG_6051.png";
import sevenS from "../../../../talisman/talismanStone/wom-stones/IMG_6137.png";
import eighS from "../../../../talisman/talismanStone/wom-stones/IMG_6058.png";
import nine from "../../../../talisman/talismanStone/wom-stones/IMG_6050.png";
import ten from "../../../../talisman/talismanStone/wom-stones/IMG_6118.png";
import eleven from "../../../../talisman/talismanStone/wom-stones/IMG_6114.png";
import twelve from "../../../../talisman/talismanStone/wom-stones/IMG_6120.png";
import thirteen from "../../../../talisman/talismanStone/wom-stones/IMG_6126.png";
import fourteen from "../../../../talisman/talismanStone/wom-stones/IMG_6060.png";
import fifteen from "../../../../talisman/talismanStone/wom-stones/IMG_6133.png";
import sixteen from "../../../../talisman/talismanStone/wom-stones/IMG_6129.png";
import seventeen from "../../../../talisman/talismanStone/wom-stones/IMG_6131.png";
import eightteen from "../../../../talisman/talismanStone/wom-stones/IMG_6047.png";
import nineteen from "../../../../talisman/talismanStone/wom-stones/IMG_6112.png";
import twenty from "../../../../talisman/talismanStone/wom-stones/IMG_6049.png";
import twentyone from "../../../../talisman/talismanStone/wom-stones/IMG_6134.png";
import twentytwo from "../../../../talisman/talismanStone/wom-stones/IMG_6135.png";
import twentythree from "../../../../talisman/talismanStone/wom-stones/IMG_6053.png";
import twentyfour from "../../../../talisman/talismanStone/wom-stones/IMG_6119.png";
import twentyfive from "../../../../talisman/talismanStone/wom-stones/IMG_6125.png";
import twentysix from "../../../../talisman/talismanStone/wom-stones/IMG_6128.png";
import twentyseven from "../../../../talisman/talismanStone/wom-stones/IMG_6138.png";
import twentyeight from "../../../../talisman/talismanStone/wom-stones/IMG_6121.png";
import twentynine from "../../../../talisman/talismanStone/wom-stones/IMG_6124.png";
import thirty from "../../../../talisman/talismanStone/wom-stones/IMG_6115.png";
import thirtyone from "../../../../talisman/talismanStone/wom-stones/IMG_6123.png";
import thirtytwo from "../../../../talisman/talismanStone/wom-stones/IMG_6132.png";
import thirtythree from "../../../../talisman/talismanStone/wom-stones/IMG_6113.png";
import thirtyfour from "../../../../talisman/talismanStone/wom-stones/IMG_6116.png";
import thirtyfive from "../../../../talisman/talismanStone/wom-stones/IMG_6117.png";


// import sale from '../sale.png';

import closeIcon from "./img/cross_white.svg";
import whiteArrow from "./img/white-arrow.svg";

import { Wrapper, Inner, ChooseStone, WrapStone, ChooseSize, SizeButton, PriceBuySection, DescriptionProduct, DescriptionButton, DescriptionView, ToRightMoveDesktop, WrapPrices, WrapperZoom, WrapZoomSlider } from "./styled-rings";
import {Link} from "react-router-dom";

export const RingsTalisman = (props) => {
  const { card, setCard, setShowPopup } = props;

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [ringStone, setRingStone] = useState('1r-t');
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
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setRingStone(`${next + 1}r-t`)
    }
  };

  const buyRing = () => {
    const arr1 = [{ product: "ringTalisman", stone: ringStone, size: sizeRing, price: 12900 }];
    const checkedItem = card.filter((value) => value.product !== "ringTalisman");
    setCard(() => [...checkedItem, ...arr1]);
    setShowPopup(true);
  };

  useEffect(() => {
    const isRingInCart = card.filter((value) => value.product === "ringTalisman");
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
          <h4>женское<br/>Кольцо-талисман</h4>
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
                <img src={oneS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twoS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={threeS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={fourS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={fiveS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={sixS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={sevenS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={eighS} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={nine} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={ten} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={eleven} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twelve} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={thirteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={fourteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={fifteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={sixteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={seventeen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={eightteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={nineteen} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twenty} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentyone} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentytwo} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentythree} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentyfour} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentyfive} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentysix} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentyseven} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentyeight} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={twentynine} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={thirty} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={thirtyone} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={thirtytwo} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={thirtythree} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={thirtyfour} alt="JewelCocktail"/>
              </div>
              <div>
                <img src={thirtyfive} alt="JewelCocktail"/>
              </div>

            </Slider>
          </WrapStone>
          <p className="description">
            { ringStone === '1r-t' && "Змеевик — поглотитель негативной энергии и защитник."}
            { ringStone === '2r-t' && "Агат - приносит здоровье, счастье и долголетие."}
            { ringStone === '3r-t' && "Агат - приносит здоровье, счастье и долголетие."}
            { ringStone === '4r-t' && "Яшма — источник доброй энергии. "}
            { ringStone === '5r-t' && "Говлит - официально был описан только в конце XIX века"}
            { ringStone === '6r-t' && "Обсидиан - является мощным поглотителем энергии и хранителем информации."}
            { ringStone === '7r-t' && "Яшма — источник доброй энергии."}
            { ringStone === '8r-t' && "Пирит - укрепляющет нервную систему"}
            { ringStone === '9r-t' && "Тигровый глаз — камень мудрецов и правителей."}
            { ringStone === '10r-t' && "Натуральный жемчуг — кладезь ценных микроэлементов."}
            { ringStone === '11r-t' && "Натуральный жемчуг — кладезь ценных микроэлементов."}
            { ringStone === '12r-t' && "Натуральный жемчуг — кладезь ценных микроэлементов."}
            { ringStone === '13r-t' && "Яшма — источник доброй энергии."}
            { ringStone === '14r-t' && "Гематит - один из сильнейших магических камней."}
            { ringStone === '15r-t' && "Родохрозит - имеет удивительные свойства."}
            { ringStone === '16r-t' && "Яшма — источник доброй энергии."}
            { ringStone === '17r-t' && "Нефрит - является олицетворением пяти качеств человека."}
            { ringStone === '18r-t' && "Орех — дерево победы над внешними обстоятельствами."}
            { ringStone === '19r-t' && "Сандалу - могущественная стихия Воздуха."}
            { ringStone === '20r-t' && "Красное дерево - помогает человеку жить в гармонии с природой."}
            { ringStone === '21r-t' && "Авантюрин - является амулетом в любовных отношениях."}
            { ringStone === '22r-t' && "Авантюрин - является амулетом в любовных отношениях."}
            { ringStone === '23r-t' && "Оникс - обладает сильной энергетикой."}
            { ringStone === '24r-t' && "Кошачий глаз - минерал отводит от носителя смерть."}
            { ringStone === '25r-t' && "Кошачий глаз - минерал отводит от носителя смерть."}
            { ringStone === '26r-t' && "Кошачий глаз - минерал отводит от носителя смерть."}
            { ringStone === '27r-t' && "Кошачий глаз - минерал отводит от носителя смерть."}
            { ringStone === '28r-t' && "Кошачий глаз - минерал отводит от носителя смерть."}
            { ringStone === '29r-t' && "Лунно-зеленый опал по древним поверьям способен поддерживать таланты своего владельца."}
            { ringStone === '30r-t' && "Голубой опал - способен поддерживать таланты своего владельца."}
            { ringStone === '31r-t' && "Огненно-снежный опал - способен поддерживать таланты своего владельца."}
            { ringStone === '32r-t' && "Мрамор - быстро подстраивается под энергетику хозяина."}
            { ringStone === '33r-t' && "Серебро — это лунный металл."}
            { ringStone === '34r-t' && "Серебро — это лунный металл."}
            { ringStone === '35r-t' && "Серебро — это лунный металл."}
          </p>
        </ChooseStone>
        <ChooseSize>
          <span>
            Размер кольца
          </span>
          <SizeButton>ONE SIZE</SizeButton>
          {/*<SizeButton onClick={() => setSizeRing('sizes')} className={sizeRing === 'sizes' ? 'active' : 'no'}>*/}
          {/*  S*/}
          {/*</SizeButton>*/}
          {/*<SizeButton onClick={() => setSizeRing('sizem')} className={sizeRing === 'sizem' ? 'active' : 'no'}>*/}
          {/*  M*/}
          {/*</SizeButton>*/}
          {/*<SizeButton onClick={() => setSizeRing('sizel')} className={sizeRing === 'sizel' ? 'active' : 'no'}>*/}
          {/*  L*/}
          {/*</SizeButton>*/}
        </ChooseSize>
        <PriceBuySection>
          <p className="bonus">описание материалов в
            <Link to="/talisman/stone">каталог</Link>
          </p>
          <WrapPrices>
            <p className="price">12900 <span>₽</span></p>
            {/*<p className="old-price">14 000 ₽</p>*/}
            {/*<img src={sale} alt="JewelCocktail" className="sale-icon"/>*/}
          </WrapPrices>
          <div className="buy-button" onClick={() => buyRing()}>Купить</div>
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
              <p className="slave-text">Кольцо Jewel Cocktail в стиле минимализм. Со сменными вставками из натуральных материалов. Особенная вставка с QR ссылкой на персональный талисман.</p>
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
              <p className="main-text" style={{ display: "none" }}>
                Размер кольца:
              </p>
              <p className="slave-text" style={{ display: "none" }}>
                ONE SIZE
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
