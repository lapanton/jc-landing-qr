import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import {
  Wrapper,
  Inner,
  CloseButton,
  RemoveItem,
  WrapProductDescription,
  CardName,
  WrapCardPrice,
  WrapDiscountButton,
  WrapDiscount,
} from "./styled-popup";
import close from "./cross.svg";

import oneStoneM from "./stone/m/1.png";
import twoStoneM from "./stone/m/2.png";
import threeStoneM from "./stone/m/3.png";
import fourStoneM from "./stone/m/4.png";
import fiveStoneM from "./stone/m/5.png";

import oneStoneW from "./stone/w/1.png";
import twoStoneW from "./stone/w/2.png";
import threeStoneW from "./stone/w/3.png";
import fourStoneW from "./stone/w/4.png";
import fiveStoneW from "./stone/w/5.png";
import { OrderForm } from "../orderForm";
import ringImg from "../rings/img/1.png";
import pendantImg from "../pendant/img/1.png";
import alcorImg from "../alcor/img/1.png";
import orionImg from "../orion/img/1.png";
import gidorImg from "../gidor/img/1.png";
import dorsImg from "../dors/img/1.png";
import coupleImg from "../coupleBracelets/img/1.png";
import oneStoneCouple from "../coupleBracelets/stone/1.png";
import twoStoneCouple from "../coupleBracelets/stone/2.png";
import threeStoneCouple from "../coupleBracelets/stone/3.png";
import glass from "../glass/img/1.png";

import giftIcon from "./gift_icon.png";

import sales from "../sale.png";
import sale from "../sale.png";
import saleten from "../saleten.png";

export const Popup = (props) => {
  const { showPopup, setShowPopup, card, setCard, langProps } = props;
  const getPriceData = () => {
    let jsonData;

    // Import JSON files based on the detected locale
    if (langProps.locale === "ru") {
      jsonData = require("../../../prices/price.json");
    } else {
      jsonData = require("../../../prices/prices-en.json");
    }

    return jsonData;
  };
  const priceData = getPriceData();
  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const removeItem = (item) => {
    const newItem = card.filter((value) => value.product !== item.product);
    if (newItem.length === 0)
      localStorage.setItem("card-data", JSON.stringify([]));
    setCard(newItem);
  };

  const [inputValue, setInputValue] = useState("");
  const [discount, setDiscount] = useState(null);
  const [discountResults, setDiscountResults] = useState(null);
  const [promo, setPromo] = useState(null);

  const handleCheckDiscount = async () => {
    try {
      const url = `https://admin.jewelcocktail.com/v1/discounts/code?name=${encodeURIComponent(
        inputValue.toLowerCase(),
      )}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch discount");
      }

      const data = await response.json();
      setPromo(inputValue);
      setDiscount(data);
    } catch (error) {
      console.error("Error checking discount:", error);
      // Handle error, show message to user, etc.
    }
  };

  useEffect(() => {
    if (discount && card.length > 0) {
      const discountType = discount.typeProduct;
      const discountPercent = discount.discount;

      // Apply discount logic to each product in the card array
      const discounts = card.map((item) => {
        let discountedPrice = item.price; // Initialize with original price
        if (
          discountType.includes("talisman") &&
          item.product.includes("Talisman")
        ) {
          // Apply discount only if product type is talisman
          discountedPrice = item.price * (1 - discountPercent / 100);
        }
        if (
          discountType.includes("jewerly") &&
          !item.product.includes("Talisman")
        ) {
          // Apply discount only if product type is jewelry
          discountedPrice = item.price * (1 - discountPercent / 100);
        }
        return { ...item, discountedPrice };
      });

      setDiscountResults(discounts);
    }
  }, [discount, card]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sumPrice =
    discountResults === null
      ? card.reduce((a, b) => a + (b["price"] || 0), 0)
      : discountResults.reduce(
          (total, item) => total + item.discountedPrice,
          0,
        );

  return (
    <Wrapper className={showPopup ? "show" : "hide"}>
      <Inner>
        <CloseButton onClick={() => handleClick()}>
          <img src={close} alt="JewelCocktail" />
        </CloseButton>
        <CardName>
          <FormattedMessage id="card.corzina" />
        </CardName>
        <div>
          {card.map((item, index) => {
            const currentPrice =
              item.price.toString().slice(0, -3) +
              " " +
              item.price.toString().slice(-3);
            return (
              <div key={index}>
                {item.product === "ring" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={ringImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "Кольцо Mellish"
                            : "Ring Mellish"}
                          {langProps.locale === "ru"
                            ? "Рамер: ONE SIZE"
                            : "Size: ONE SIZE"}
                          {/*Рамер: {item.size === "sizes" && "S" } {item.size === "sizem" && "M" } {item.size === "sizel" && "L" }*/}
                        </span>
                        <div>
                          <div
                            style={{
                              textAlign: "left",
                              textTransform: "inherit",
                            }}
                          >
                            {item.stone === "1r" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rose" />:{" "}
                                  <img
                                    src={oneStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "2r" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.ocean" />:{" "}
                                  <img
                                    src={twoStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "3r" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.pearls" />:{" "}
                                  <img
                                    src={threeStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "4r" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rhod" />:{" "}
                                  <img
                                    src={fourStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    style={{
                                      transform: "translate(10px, 3px)",
                                      maxWidth: "17px",
                                    }}
                                    alt="JewelCocktail"
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "5r" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.avant" />:{" "}
                                  <img
                                    src={fiveStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {priceData["genskii-mellish-old"]}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : sale}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
                {item.product === "quasar" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={pendantImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "Подвеска quasar"
                            : "Pendant Quasar"}
                        </span>
                        <div>
                          <div
                            style={{
                              textAlign: "left",
                              textTransform: "inherit",
                            }}
                          >
                            {item.stone === "1p" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rose" />:{" "}
                                  <img
                                    src={oneStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "2p" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.ocean" />:{" "}
                                  <img
                                    src={twoStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "3p" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.pearls" />:{" "}
                                  <img
                                    src={threeStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "4p" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rhod" />:{" "}
                                  <img
                                    src={fourStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "5p" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.avant" />:{" "}
                                  <img
                                    src={fiveStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {priceData["genskii-quasar-old"]}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : sale}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
                {item.product === "alcor" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={alcorImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "Браслет Alcor"
                            : "Bracelet Alcor"}
                        </span>
                        <div>
                          <div
                            style={{
                              textAlign: "left",
                              textTransform: "inherit",
                            }}
                          >
                            {item.stone === "1a" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rose" />:{" "}
                                  <img
                                    src={oneStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "2a" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.ocean" />:{" "}
                                  <img
                                    src={twoStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "3a" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.pearls" />:{" "}
                                  <img
                                    src={threeStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "4a" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rhod" />:{" "}
                                  <img
                                    src={fourStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "5a" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.avant" />:{" "}
                                  <img
                                    src={fiveStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {priceData["genskii-alcor-old"]}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : sale}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
                {item.product === "orion" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={orionImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "Браслет Orion"
                            : "Bracelet Orion"}
                        </span>
                        <div>
                          <div
                            style={{
                              textAlign: "left",
                              textTransform: "inherit",
                            }}
                          >
                            {item.stone === "1o" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rose" />:{" "}
                                  <img
                                    src={oneStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "2o" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.ocean" />:{" "}
                                  <img
                                    src={twoStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "3o" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.pearls" />:{" "}
                                  <img
                                    src={threeStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "4o" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rhod" />:{" "}
                                  <img
                                    src={fourStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "5o" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.avant" />:{" "}
                                  <img
                                    src={fiveStoneW}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {priceData["genskii-orion-old"]}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : sale}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
                {item.product === "gidor" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={gidorImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "Кулон Gidor"
                            : "Pendant Gidor"}
                        </span>
                        <div>
                          <div
                            style={{
                              textAlign: "left",
                              textTransform: "inherit",
                            }}
                          >
                            {item.stone === "1g" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.fire" />:{" "}
                                  <img
                                    src={oneStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "2g" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  {" "}
                                  <FormattedMessage id="st.ocean" />:{" "}
                                  <img
                                    src={twoStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "3g" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.yeorg" />:{" "}
                                  <img
                                    src={threeStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "4g" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.agat" />:{" "}
                                  <img
                                    src={fourStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "5g" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.whiteon" />:{" "}
                                  <img
                                    src={fiveStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {priceData["mugskoi-gidor-old"]}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : sale}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
                {item.product === "dors" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={dorsImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "Браслет Dors"
                            : "Bracelet Dors"}
                        </span>
                        <div>
                          <div
                            style={{
                              textAlign: "left",
                              textTransform: "inherit",
                            }}
                          >
                            {item.stone === "1d" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.fire" />:{" "}
                                  <img
                                    src={oneStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "2d" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  {" "}
                                  <FormattedMessage id="st.ocean" />:{" "}
                                  <img
                                    src={twoStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "3d" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.yeorg" />:{" "}
                                  <img
                                    src={threeStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "4d" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.agat" />:{" "}
                                  <img
                                    src={fourStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "5d" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.whiteon" />:{" "}
                                  <img
                                    src={fiveStoneM}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="second.gift" />
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {priceData["mugskoi-dors-old"]}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : sale}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
                {item.product === "couple" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={coupleImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "парные браслеты"
                            : "Paired bracelets"}
                        </span>
                        <div>
                          <div
                            style={{
                              textAlign: "left",
                              textTransform: "inherit",
                            }}
                          >
                            {item.stone === "1co" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.rosfir" />:{" "}
                                  <img
                                    src={oneStoneCouple}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="st.twogift" />:{" "}
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "2co" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.whiteon" />:{" "}
                                  <img
                                    src={twoStoneCouple}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="st.twogift" />:{" "}
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                            {item.stone === "3co" && (
                              <>
                                <div
                                  style={{
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <FormattedMessage id="st.yeorg" />:{" "}
                                  <img
                                    src={threeStoneCouple}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 3px)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="opacityzero"
                                  style={{ fontSize: "14px" }}
                                >
                                  <FormattedMessage id="st.twogift" />:{" "}
                                  <img
                                    src={giftIcon}
                                    alt="JewelCocktail"
                                    style={{
                                      transform: "translate(10px, 4px)",
                                      maxWidth: "17px",
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {priceData["parnie-brasleti-old"]}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : sale}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
                {item.product === "glass" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={glass}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                          }}
                        >
                          Бокал-декантер JC
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              9 150 {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              = {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : saleten}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}

                {item.product === "pendantTalisman" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={pendantImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "талисман-кулон женский"
                            : "women`s talisman-pendant"}
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {
                                priceData["talisman-kulon-genskii-old-price"]
                              }{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : saleten}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}

                {item.product === "ringTalisman" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={ringImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "женское Кольцо-талисман"
                            : "women`s talisman-ring"}
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {
                                priceData["talisman-genskoe-kolitso-old-price"]
                              }{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : saleten}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}

                {item.product === "alcorTalisman" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={alcorImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "женскии браслет-талисман"
                            : "women`s talisman-bracelet"}
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {
                                priceData["talisman-genskii-braslet-old-price"]
                              }{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : saleten}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}

                {item.product === "gidorTalisman" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={gidorImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "мужской кулон-талисман"
                            : "men`s talisman-pendant"}
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {
                                priceData["talisman-mugskoi-kulon-old-price"]
                              }{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>{" "}
                            <span className="price-card-new">
                              {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : saleten}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}

                {item.product === "dorsTalisman" ? (
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img
                          src={close}
                          alt="JewelCocktail"
                          style={{ maxWidth: "18px", opacity: "0.7" }}
                        />
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "100px" }}
                        src={dorsImg}
                        alt="JewelCocktail"
                      />
                    </div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span
                          style={{
                            color: "#727070",
                            marginBottom: "10px",
                            display: "inline-block",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          {langProps.locale === "ru"
                            ? "мужской браслет-талисман"
                            : "men`s talisman-bracelet"}
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">
                            <FormattedMessage id="shop.price" />:{" "}
                            <span className="card-line-old">
                              {" "}
                              {
                                priceData["talisman-mugskoi-braslet-old-price"]
                              }{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}
                            </span>
                            <span className="price-card-new">
                              {currentPrice}{" "}
                              {langProps.locale === "ru" ? "₽" : "USD"}{" "}
                            </span>
                          </div>
                          <img
                            src={langProps.locale === "ru" ? sale : saleten}
                            alt="JewelCocktail"
                            className="card-icon-sale"
                          />
                        </WrapCardPrice>
                      </div>
                    </WrapProductDescription>
                    <br />
                    <hr />
                    <br />
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
        {card.length > 0 && (
          <div style={{ textAlign: "right" }}>
            <FormattedMessage id="card.total" />: {sumPrice}{" "}
            {langProps.locale === "ru" ? "₽" : "USD"}
          </div>
        )}
        {card.length > 0 && (
          <WrapDiscount>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder=""
            />
            <WrapDiscountButton onClick={handleCheckDiscount}>
              <FormattedMessage id="check.discount" />
            </WrapDiscountButton>
          </WrapDiscount>
        )}

        <OrderForm
          langProps={langProps}
          card={card}
          sumPrice={sumPrice}
          setCard={setCard}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          promocode={promo}
        />
      </Inner>
    </Wrapper>
  );
};
