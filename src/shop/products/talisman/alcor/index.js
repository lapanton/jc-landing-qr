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
import eight from "./img/8.png";
import ninen from "./img/9.png";

// import oneStone from './stone/1.png';
// import twoStone from './stone/2.png';
// import threeStone from './stone/3.png';
// import fourStone from './stone/4.png';
// import fiveStone from './stone/5.png';

import fire from "./fire.png";
import arDown from "./arrowDown.png";
import arUp from "./arrowUp.png";

import sale from "../sale.png";

import oneS from "../../../../talisman/talismanStone/wom-stones/IMG_6136.png";
import twoS from "../../../../talisman/talismanStone/wom-stones/IMG_6061.png";
import fourS from "../../../../talisman/talismanStone/wom-stones/IMG_6130.png";
import fiveS from "../../../../talisman/talismanStone/wom-stones/IMG_6127.png";
import sixS from "../../../../talisman/talismanStone/wom-stones/IMG_6051.png";
import eighS from "../../../../talisman/talismanStone/wom-stones/IMG_6058.png";
import nine from "../../../../talisman/talismanStone/wom-stones/IMG_6050.png";
import twelve from "../../../../talisman/talismanStone/wom-stones/IMG_6120.png";
import fourteen from "../../../../talisman/talismanStone/wom-stones/IMG_6060.png";
import fifteen from "../../../../talisman/talismanStone/wom-stones/IMG_6133.png";
import seventeen from "../../../../talisman/talismanStone/wom-stones/IMG_6131.png";
import twentyfive from "../../../../talisman/talismanStone/wom-stones/IMG_6125.png";

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

export const AlcorTalisman = (props) => {
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
  const [alcorStone, setAlcorStone] = useState("1a-t");
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
    className: "alcor-slider-two",
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
      setAlcorStone(`${next + 1}a-t`);
    },
  };
  const buyAlcor = () => {
    const arr1 = [
      {
        product: "alcorTalisman",
        stone: alcorStone,
        price: +priceData["talisman-genskii-braslet"],
      },
    ];
    const checkedItem = card.filter(
      (value) => value.product !== "alcorTalisman",
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
              женский
              <br /> браслет-талисман
            </h4>
          ) : (
            <h4>
              women`s
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
              <img
                src={seven}
                alt="JewelCocktail"
                onClick={() => openZoom(7)}
              />
            </div>
            <div>
              <img
                src={eight}
                alt="JewelCocktail"
                onClick={() => openZoom(8)}
              />
            </div>
            <div>
              <img
                src={ninen}
                alt="JewelCocktail"
                onClick={() => openZoom(9)}
              />
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
                    <div>
                      <img src={eight} alt="JewelCocktail" />
                    </div>
                    <div>
                      <img src={ninen} alt="JewelCocktail" />
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
            <div>
              <img src={eight} alt="JewelCocktail" />
            </div>
            <div>
              <img src={ninen} alt="JewelCocktail" />
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
                <img src={oneS} alt="JewelCocktail" />
              </div>
              <div>
                <img src={twoS} alt="JewelCocktail" />
              </div>
              <div>
                <img src={fourS} alt="JewelCocktail" />
              </div>
              <div>
                <img src={fiveS} alt="JewelCocktail" />
              </div>
              <div>
                <img src={sixS} alt="JewelCocktail" />
              </div>
              <div>
                <img src={eighS} alt="JewelCocktail" />
              </div>
              <div>
                <img src={nine} alt="JewelCocktail" />
              </div>

              <div>
                <img src={twelve} alt="JewelCocktail" />
              </div>

              <div>
                <img src={fourteen} alt="JewelCocktail" />
              </div>
              <div>
                <img src={fifteen} alt="JewelCocktail" />
              </div>

              <div>
                <img src={seventeen} alt="JewelCocktail" />
              </div>

              <div>
                <img src={twentyfive} alt="JewelCocktail" />
              </div>
            </Slider>
          </WrapStone>
          <p className="description">
            {alcorStone === "1a-t" &&
              (langProps.locale === "ru"
                ? "Змеевик — поглотитель негативной энергии и защитник"
                : "Serpentine it is a mineral that is also called like Lizardite, Infinite or Healerite")}
            {alcorStone === "2a-t" &&
              (langProps.locale === "ru"
                ? "Агат - приносит здоровье, счастье и долголетие"
                : "Agate has a stable and grounding quality")}
            {alcorStone === "3a-t" &&
              (langProps.locale === "ru"
                ? "Яшма — источник доброй энергии"
                : "Jasper is a variety of Chalcedony")}
            {alcorStone === "4a-t" &&
              (langProps.locale === "ru"
                ? "Говлит - официально был описан только в конце XIX века"
                : "Howlight is also called like Snow Leopard Stone or as magnesite")}
            {alcorStone === "5a-t" &&
              (langProps.locale === "ru"
                ? "Обсидиан - является мощным поглотителем энергии и хранителем информации"
                : "Obsidian is truth-enhancing. A strongly protective stone")}
            {alcorStone === "6a-t" &&
              (langProps.locale === "ru"
                ? "Пирит - укрепляющет нервную систему"
                : "Pyrite is an iron sulfide mineral with a metallic luster")}
            {alcorStone === "7a-t" &&
              (langProps.locale === "ru"
                ? "Тигровый глаз — камень мудрецов и правителей"
                : "Tiger eye is a variety of Chalcedony, a cryptocrystalline form of silica")}
            {alcorStone === "8a-t" &&
              (langProps.locale === "ru"
                ? "Натуральный жемчуг — кладезь ценных микроэлементов"
                : "Natural pearls have long been a source of pure fascination")}
            {alcorStone === "9a-t" &&
              (langProps.locale === "ru"
                ? "Гематит - один из сильнейших магических камней"
                : "Hematite is also called like Blood stone")}
            {alcorStone === "10a-t" &&
              (langProps.locale === "ru"
                ? "Родохрозит - имеет удивительные свойства"
                : "Rhodochrosite is a stone that integrates physical and spiritual energies")}
            {alcorStone === "11a-t" &&
              (langProps.locale === "ru"
                ? "Нефрит - является олицетворением пяти качеств человека"
                : "Jade is a popular gemstone sometimes referred to as the stone of luck and happiness")}
            {alcorStone === "12a-t" &&
              (langProps.locale === "ru"
                ? "Кошачий глаз - защищает от бед и болезней"
                : "The Cat’s Eye is also known as the Lehsunia stone")}
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
              {priceData["talisman-genskii-braslet"]}{" "}
              <span> {langProps.locale === "ru" ? "₽" : "USD"}</span>
            </p>
            <p className="old-price">
              {priceData["talisman-genskii-braslet-old-price"]}{" "}
              {langProps.locale === "ru" ? "₽" : "USD"}
            </p>
            <img
              src={langProps.locale === "ru" ? saleten : sale}
              alt="JewelCocktail"
              className="sale-icon"
            />
          </WrapPrices>
          <div className="buy-button" onClick={() => buyAlcor()}>
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
                  ? "браслет, вставка с QR, фирменная коробка"
                  : "bracelet, engraved QR stone , branded box"}
              </p>
              <p className="main-text">
                <FormattedMessage id="size.ketroy" />:
              </p>
              <p className="slave-text">
                10x10 <FormattedMessage id="size.mm" />
              </p>

              <ToRightMoveDesktop>
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
                <p className="main-text">
                  <FormattedMessage id="type.insert" />:
                </p>
                <p className="slave-text">
                  <FormattedMessage id="natural.ketroy" />
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
