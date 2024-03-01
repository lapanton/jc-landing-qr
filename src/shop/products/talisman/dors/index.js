import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";
import six from "./img/6.png";
import seven from "./img/7.png";

// import oneStone from './stone/1.png';
// import twoStone from './stone/2.png';
// import threeStone from './stone/3.png';
// import fourStone from './stone/4.png';
// import fiveStone from './stone/5.png';

import fire from "./fire.png";
import arDown from "./arrowDown.png";
import arUp from "./arrowUp.png";

import sale from "../sale.png";

import Mtwo from "../../../../talisman/talismanStone/man-stones/IMG_6052.png";
import Mfive from "../../../../talisman/talismanStone/man-stones/IMG_6059.png";
import Msix from "../../../../talisman/talismanStone/man-stones/IMG_6045.png";
import Meight from "../../../../talisman/talismanStone/man-stones/IMG_6057.png";
import Mnine from "../../../../talisman/talismanStone/man-stones/IMG_6058.png";
import Meleven from "../../../../talisman/talismanStone/man-stones/IMG_6043.png";
import Mthirteen from "../../../../talisman/talismanStone/man-stones/IMG_6060.png";
import Mseventeen from "../../../../talisman/talismanStone/man-stones/IMG_6053.png";
import Mtwenty from "../../../../talisman/talismanStone/wom-stones/IMG_6131.png";

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
  WrapZoomSlider,
} from "./styled-rings";
import whiteArrow from "../rings/img/white-arrow.svg";
import closeIcon from "../rings/img/cross_white.svg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import saleten from "../../saleten.png";

export const DorsTalisman = (props) => {
  const { card, setCard, setShowPopup, langProps } = props;
  const getPriceData = () => {
    let jsonData;

    // Import JSON files based on the detected locale
    if (langProps.locale === "ru") {
      jsonData = require("../../../../prices/price.json");
    } else {
      jsonData = require("../../../../prices/prices-en.json");
    }

    return jsonData;
  };
  const priceData = getPriceData();
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [dorsStone, setDorsStone] = useState("1d-t");
  const [showDescr, setShowDescr] = useState(false);
  const [openZoomImage, setOpenZoomImage] = useState(false);
  const [indexImg, setIndexImg] = useState(1);
  const [moveTo, setMoveTo] = useState("stop");

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
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
          centerPadding: "40px",
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
      setDorsStone(`${next + 1}d-t`);
    },
  };
  const buyDors = () => {
    const arr1 = [
      {
        product: "dorsTalisman",
        stone: dorsStone,
        price: +priceData["talisman-mugskoi-braslet"],
      },
    ];
    const checkedItem = card.filter(
      (value) => value.product !== "dorsTalisman",
    );
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
  const sliderReferral = (useRef < Slider) | (null > null);

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
          {langProps.locale === "ru" ? (
            <h4>
              мужской
              <br />
              браслет-талисман
            </h4>
          ) : (
            <h4>
              men`s
              <br /> talisman-bracelet
            </h4>
          )}
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            <div>
              <img src={one} alt="JewelCocktail" onClick={() => openZoom(1)} />
            </div>
            <div>
              <img src={two} alt="JewelCocktail" onClick={() => openZoom(2)} />
            </div>
            <div>
              <img
                src={three}
                alt="JewelCocktail"
                onClick={() => openZoom(3)}
              />
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
              <img src={six} alt="JewelCocktail" onClick={() => openZoom(7)} />
            </div>
          </Slider>
          {openZoomImage &&
            ReactDOM.createPortal(
              <WrapperZoom>
                <span
                  onClick={() => setOpenZoomImage(false)}
                  style={{
                    position: "absolute",
                    top: "2rem",
                    right: "15px",
                    cursor: "pointer",
                    zIndex: 9999999,
                  }}
                >
                  <img
                    src={closeIcon}
                    alt="JewelCocktail"
                    className="closeIcon"
                  />
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
                      <img src={three} alt="JewelCocktail" />
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
                  </Slider>
                </WrapZoomSlider>
              </WrapperZoom>,
              document.body,
            )}

          <Slider
            {...settingsTwo}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <img src={one} alt="JewelCocktail" />
            </div>
            <div>
              <img src={two} alt="JewelCocktail" />
            </div>
            <div>
              <img src={three} alt="JewelCocktail" />
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
          </Slider>
        </div>
        <ChooseStone>
          <p>
            {langProps.locale === "ru"
              ? "выбери QR вставку"
              : "choose QR stone"}
          </p>
          <WrapStone>
            <Slider {...settingsStones}>
              <div>
                <img src={Mtwo} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Mfive} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Msix} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Meight} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Mnine} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Meleven} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Mthirteen} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Mseventeen} alt="JewelCocktail" />
              </div>
              <div>
                <img src={Mtwenty} alt="JewelCocktail" />
              </div>
            </Slider>
          </WrapStone>
          <p className="description">
            {dorsStone === "1d-t" &&
              (langProps.locale === "ru"
                ? "Агат — источник доброй энергии"
                : "Jasper is a variety of Chalcedony")}
            {dorsStone === "2d-t" &&
              (langProps.locale === "ru"
                ? "Яшма - приносит здоровье, счастье и долголетие"
                : "Agate has a stable and grounding quality")}
            {dorsStone === "3d-t" &&
              (langProps.locale === "ru"
                ? "Лазурит имеет способность помогать своему владельцу"
                : "Lapis Lazuli is a beautiful celestial deep blue stone")}
            {dorsStone === "4d-t" &&
              (langProps.locale === "ru"
                ? "Обсидиан является мощным поглотителем энерги"
                : "Obsidian is truth-enhancing. A strongly protective stone")}
            {dorsStone === "5d-t" &&
              (langProps.locale === "ru"
                ? "Пирит — источник доброй энергии"
                : "Pyrite is an iron sulfide mineral with a metallic luster")}
            {dorsStone === "6d-t" &&
              (langProps.locale === "ru"
                ? "Тигровый глаз — камень мудрецов и правителей"
                : "Tiger eye is a variety of Chalcedony")}
            {dorsStone === "7d-t" &&
              (langProps.locale === "ru"
                ? "Гематит - один из сильнейших магических камней"
                : "Hematite is also called like Blood stone")}
            {dorsStone === "8d-t" &&
              (langProps.locale === "ru"
                ? "Оникс является мощным поглотителем энерги."
                : "Onyx is a stone that offers up powerful vibrations of protection")}
            {dorsStone === "9d-t" &&
              (langProps.locale === "ru"
                ? "Нефрит - является олицетворением пяти качеств человека"
                : "Jade is a popular gemstone sometimes referred to as the stone")}
          </p>
        </ChooseStone>
        <PriceBuySection>
          <p className="bonus">
            {langProps.locale === "ru"
              ? "описание материалов в"
              : "description of materials in the"}
            <Link to="/talisman/stone">
              {langProps.locale === "ru" ? "каталог" : "CATALOG"}
            </Link>
          </p>
          <WrapPrices>
            <p className="price">
              {priceData["talisman-mugskoi-braslet"]}{" "}
              <span> {langProps.locale === "ru" ? "₽" : "USD"}</span>
            </p>
            <p className="old-price">
              {priceData["talisman-mugskoi-braslet-old-price"]}{" "}
              {langProps.locale === "ru" ? "₽" : "USD"}
            </p>
            <img
              src={langProps.locale === "ru" ? saleten : sale}
              alt="JewelCocktail"
              className="sale-icon"
            />
          </WrapPrices>
          <div className="buy-button" onClick={() => buyDors()}>
            <FormattedMessage id="shop.buy" />
          </div>
          <div className="actsia  opacityzero" style={{ visibility: "hidden" }}>
            <img src={fire} alt="JewelCocktail" />
            <p className="actsia-text">
              <span>
                <FormattedMessage id="shop.action" />
              </span>
              <FormattedMessage id="shop.secketr" />
              <span>
                <FormattedMessage id="in.present" />
              </span>
            </p>
          </div>
        </PriceBuySection>
        <DescriptionProduct>
          <DescriptionButton>
            <span>
              <FormattedMessage id="shop.descriptions" />
            </span>
            <div
              onClick={() => setShowDescr(!showDescr)}
              className={showDescr ? "hide" : "show"}
            >
              <img src={arDown} alt="JewelCocktail" />
            </div>
          </DescriptionButton>
          {showDescr && (
            <DescriptionView>
              <p className="slave-text">
                {langProps.locale === "ru"
                  ? "Браслет-талисман Jewel Cocktail в стиле минимализм. Со сменными вставками из натуральных материалов. Особенная вставка с QR ссылкой на персональный талисман."
                  : "Jewel Cocktail talisman-bracelet in minimalist style with replaceable natural stones. Special stone with QR link to your personal talisman"}
              </p>
              <p className="main-text">
                <FormattedMessage id="shop.complectation" />:
              </p>
              <p className="slave-text">
                {langProps.locale === "ru"
                  ? "Браслет, вставка с QR, фирменная коробка"
                  : "pendant, engraved QR stone , branded box"}
              </p>
              <p className="main-text">
                {langProps.locale === "ru" ? "Размер вставки:" : "Stone size:"}
              </p>
              <p className="slave-text">
                12x12 <FormattedMessage id="size.mm" />
              </p>

              <ToRightMoveDesktop>
                <p className="main-text">
                  <FormattedMessage id="material.color" />:
                </p>
                <p className="slave-text">
                  <FormattedMessage id="serebro.gleanets" />
                </p>
                <p className="main-text">
                  {langProps.locale === "ru"
                    ? "материал вставки:"
                    : "Material of insert:"}
                </p>
                <p className="slave-text">
                  {langProps.locale === "ru"
                    ? "камень ручной огранки"
                    : "handcraft stone"}
                </p>
                {langProps.locale === "ru" && (
                  <>
                    <p className="main-text">
                      <FormattedMessage id="warranty.quality" />:
                    </p>

                    <p className="slave-text">
                      <FormattedMessage id="club.jewel" />
                      <a
                        href="https://jewelcocktail.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FormattedMessage id="read.more" />
                      </a>
                    </p>
                  </>
                )}
              </ToRightMoveDesktop>

              <div
                onClick={() => setShowDescr(!showDescr)}
                className="bottomButton"
              >
                <img src={arUp} alt="JewelCocktail" />
              </div>
            </DescriptionView>
          )}
        </DescriptionProduct>
      </Inner>
    </Wrapper>
  );
};
