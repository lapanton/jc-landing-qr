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
import nine from "./img/9.png";

import oneStone from "./stone/1.png";
import twoStone from "./stone/2.png";
import threeStone from "./stone/3.png";
import fourStone from "./stone/4.png";
import fiveStone from "./stone/5.png";

import fire from "./fire.png";
import arDown from "./arrowDown.png";
import arUp from "./arrowUp.png";

import sale from "../sale.png";
import Mthirteen from "./stone/IMG_6061.png";

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
import { FormattedMessage } from "react-intl";

export const Gidor = (props) => {
  const { card, setCard, setShowPopup } = props;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [gidorStone, setGidorStone] = useState("1g");
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
  const buyGidor = () => {
    const arr1 = [{ product: "gidor", stone: gidorStone, price: 6900 }];
    const checkedItem = card.filter((value) => value.product !== "gidor");
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
          <h4>
            <FormattedMessage id="man.culon" />
            <br />
            Gidor
          </h4>
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
              <img src={nine} alt="JewelCocktail" onClick={() => openZoom(8)} />
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
                      <img src={nine} alt="JewelCocktail" />
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
              <img src={nine} alt="JewelCocktail" />
            </div>
          </Slider>
        </div>
        <ChooseStone>
          <p>
            <FormattedMessage id="choose.ketroy" />
          </p>
          <WrapStone>
            <div
              onClick={() => setGidorStone("1g")}
              className={gidorStone === "1g" ? "active" : "not"}
            >
              <img src={oneStone} alt="JewelCocktail" />
            </div>
            <div
              onClick={() => setGidorStone("2g")}
              className={gidorStone === "2g" ? "active" : "not"}
            >
              <img src={twoStone} alt="JewelCocktail" />
            </div>
            <div
              onClick={() => setGidorStone("3g")}
              className={gidorStone === "3g" ? "active" : "not"}
            >
              <img src={threeStone} alt="JewelCocktail" />
            </div>
            <div
              onClick={() => setGidorStone("4g")}
              className={gidorStone === "4g" ? "active" : "not"}
            >
              <img src={Mthirteen} alt="JewelCocktail" />
            </div>
            <div
              onClick={() => setGidorStone("5g")}
              className={gidorStone === "5g" ? "active" : "not"}
            >
              <img src={fiveStone} alt="JewelCocktail" />
            </div>
          </WrapStone>
          <p className="description">
            {gidorStone === "1g" && <FormattedMessage id="ketroy.fire" />}
            {gidorStone === "2g" && <FormattedMessage id="ketroy.ocean" />}
            {gidorStone === "3g" && <FormattedMessage id="ketroy.yeloworg" />}
            {gidorStone === "4g" && <FormattedMessage id="agat.prinosit" />}
            {gidorStone === "5g" && <FormattedMessage id="ketroy.whiteonix" />}
          </p>
        </ChooseStone>
        <PriceBuySection>
          <WrapPrices>
            <p className="price">
              6 900 <span>₽</span>
            </p>
            <p className="old-price">9 850 ₽</p>
            <img src={sale} alt="JewelCocktail" className="sale-icon" />
          </WrapPrices>
          <p className="bonus">
            <FormattedMessage id="culon.twoketroys" />
          </p>
          <div className="buy-button" onClick={() => buyGidor()}>
            <FormattedMessage id="shop.buy" />
          </div>
          <div className="actsia  opacityzero">
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
                <FormattedMessage id="dizainerskii.kulon" />
              </p>
              <p className="main-text">
                <FormattedMessage id="shop.complectation" />:
              </p>
              <p className="slave-text">
                <FormattedMessage id="kulon.shnurok" />
              </p>
              <p className="main-text">
                <FormattedMessage id="size.ketroy" />:
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
                  <FormattedMessage id="type.insert" />:
                </p>
                <p className="slave-text">
                  <FormattedMessage id="natural.ketroy" />
                </p>
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
