import React from 'react';
import { Wrapper, Inner, CloseButton, RemoveItem, WrapProductDescription, CardName, WrapCardPrice } from "./styled-popup";
import close from './cross.svg';

import oneStoneM from './stone/m/1.png';
import twoStoneM from './stone/m/2.png';
import threeStoneM from './stone/m/3.png';
import fourStoneM from './stone/m/4.png';
import fiveStoneM from './stone/m/5.png';

import oneStoneW from './stone/w/1.png';
import twoStoneW from './stone/w/2.png';
import threeStoneW from './stone/w/3.png';
import fourStoneW from './stone/w/4.png';
import fiveStoneW from './stone/w/5.png';
import {OrderForm} from "../orderForm";
import ringImg from '../rings/img/1.png';
import pendantImg from '../pendant/img/1.png';
import alcorImg from '../alcor/img/1.png';
import gidorImg from '../gidor/img/1.png';
import dorsImg from '../dors/img/1.png';
import coupleImg from '../coupleBracelets/img/1.png';
import oneStoneCouple from '../coupleBracelets/stone/1.png';
import twoStoneCouple from '../coupleBracelets/stone/2.png';
import threeStoneCouple from '../coupleBracelets/stone/3.png';
import glass from '../glass/img/1.png';

import giftIcon from './gift_icon.png';

import sales from '../sale.png';

export const Popup = (props) => {
  const { showPopup, setShowPopup, card, setCard } = props;
  const handleClick = () => {
    setShowPopup(!showPopup);
  }

  const removeItem = (item) => {
    const newItem = card.filter((value) => value.product !== item.product);
    if (newItem.length === 0) localStorage.setItem("card-data", JSON.stringify([]));
    setCard(newItem);
  };
  const sumPrice = card.reduce((a, b) => a + (b['price'] || 0), 0);
  // console.log('card', card);
  return (
    <Wrapper className={showPopup ? "show" : "hide"} >
      <Inner>
        <CloseButton onClick={() => handleClick()}>
          <img src={close} alt="JewelCocktail"/>
        </CloseButton>
        <CardName>Корзина</CardName>
        <div>
          {card.map((item, index) => {
            const currentPrice = item.price.toString().slice(0, -3) +" "+item.price.toString().slice(-3);
            return (
              <div key={index}>
                {item.product === "ring" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={ringImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block" }}>
                          Кольцо Mellish
                          Рамер: ONE SIZE
                          {/*Рамер: {item.size === "sizes" && "S" } {item.size === "sizem" && "M" } {item.size === "sizel" && "L" }*/}
                        </span>
                        <div>
                          <div style={{ textAlign: "left", textTransform: "inherit" }}>
                            {item.stone === "1r" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "РОЗА": <img src={oneStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                              </>}
                            {item.stone === "2r" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ОКЕАН": <img src={twoStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "3r" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ЖЕМЧУГ": <img src={threeStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "4r" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "РОДОХРОЗИТ": <img src={fourStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} style={{transform: "translate(10px, 3px)", maxWidth: "17px"}} alt="JewelCocktail"/></div>
                            </>}
                            {item.stone === "5r" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "АВАНТЮРИН": <img src={fiveStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span className="card-line-old">  14 000 ₽</span> <span className="price-card-new">= {currentPrice} ₽ </span></div>
                          <img src={sales} alt="JewelCocktail" className="card-icon-sale" />
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                    </>
                  :
                  null
                }
                {item.product === "quasar" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={pendantImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block" }}>
                          Подвеска quasar
                        </span>
                        <div>
                          <div style={{ textAlign: "left", textTransform: "inherit" }}>
                            {item.stone === "1p" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "РОЗА": <img src={oneStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "2p" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ОКЕАН": <img src={twoStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "3p" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ЖЕМЧУГ": <img src={threeStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "4p" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "РОДОХРОЗИТ": <img src={fourStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "5p" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "АВАНТЮРИН": <img src={fiveStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span className="card-line-old">  12 700 ₽</span> <span className="price-card-new">= {currentPrice} ₽ </span></div>
                          <img src={sales} alt="JewelCocktail" className="card-icon-sale" />
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }
                {item.product === "alcor" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={alcorImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block" }}>
                          Браслет Alcor
                        </span>
                        <div>
                          <div style={{ textAlign: "left", textTransform: "inherit" }}>
                            {item.stone === "1a" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "РОЗА": <img src={oneStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "2a" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ОКЕАН": <img src={twoStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "3a" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ЖЕМЧУГ": <img src={threeStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "4a" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "РОДОХРОЗИТ": <img src={fourStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "5a" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "АВАНТЮРИН": <img src={fiveStoneW} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span className="card-line-old"> 9 570 ₽</span> <span className="price-card-new">= {currentPrice} ₽ </span></div>
                          <img src={sales} alt="JewelCocktail" className="card-icon-sale" />
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }
                {item.product === "gidor" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={gidorImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block" }}>
                          Мужской кулон<br/>Gidor
                        </span>
                        <div>
                          <div style={{ textAlign: "left", textTransform: "inherit" }}>
                            {item.stone === "1g" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ОГОНЬ": <img src={oneStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "2g" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ОКЕАН": <img src={twoStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "3g" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ЖЕЛТЫЙ ОРГАНИК": <img src={threeStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "4g" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ЧЕРНЫЙ САНДАЛ": <img src={fourStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "5g" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "БЕЛЫЙ ОНИКС": <img src={fiveStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span className="card-line-old">  12 700 ₽</span> <span className="price-card-new">= {currentPrice} ₽ </span></div>
                          <img src={sales} alt="JewelCocktail" className="card-icon-sale" />
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }
                {item.product === "dors" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={dorsImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block" }}>
                          Мужской браслет<br/>Dors
                        </span>
                        <div>
                          <div style={{ textAlign: "left", textTransform: "inherit" }}>
                            {item.stone === "1d" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ОГОНЬ": <img src={oneStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "2d" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ОКЕАН": <img src={twoStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "3d" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ЖЕЛТЫЙ ОРГАНИК": <img src={threeStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "4d" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "ЧЕРНЫЙ САНДАЛ": <img src={fourStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "5d" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "БЕЛЫЙ ОНИКС": <img src={fiveStoneM} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Второй камень в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span className="card-line-old">  9 850 ₽</span> <span className="price-card-new">= {currentPrice} ₽ </span></div>
                          <img src={sales} alt="JewelCocktail" className="card-icon-sale" />
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }
                {item.product === "couple" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={coupleImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block" }}>
                          парные браслеты
                        </span>
                        <div>
                          <div style={{ textAlign: "left", textTransform: "inherit" }}>
                            {item.stone === "1co" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "Огонь и Роза": <img src={oneStoneCouple} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Два камня в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "2co" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "Белый оникс": <img src={twoStoneCouple} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Два камня в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                            {item.stone === "3co" && <>
                              <div style={{fontSize: "14px", marginBottom: "10px"}}>Камень с QR "Жёлтый органик": <img src={threeStoneCouple} alt="JewelCocktail" style={{transform: "translate(10px, 3px)"}}/></div>
                              <div style={{fontSize: "14px"}}>Два камня в подарок: <img src={giftIcon} alt="JewelCocktail" style={{transform: "translate(10px, 4px)", maxWidth: "17px"}}/></div>
                            </>}
                          </div>
                        </div>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span className="card-line-old"> 14 140 ₽</span> <span className="price-card-new">= {currentPrice} ₽ </span></div>
                          <img src={sales} alt="JewelCocktail" className="card-icon-sale" />
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }
                {item.product === "glass" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={glass} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block" }}>
                          Бокал-декантер JC
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span className="card-line-old"> 9 150 ₽</span> <span className="price-card-new">= {currentPrice} ₽ </span></div>
                          <img src={sales} alt="JewelCocktail" className="card-icon-sale" />
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }

                {item.product === "pendantTalisman" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={pendantImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block", textAlign: "center", marginTop: "10px" }}>
                          талисман-кулон женский
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span style={{ bottom: 0, left: "inherit", right: 0 }} className="price-card-new">{currentPrice} ₽ </span></div>
                          {/*<img src={sales} alt="JewelCocktail" className="card-icon-sale" />*/}
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }

                {item.product === "ringTalisman" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={ringImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block", textAlign: "center", marginTop: "10px" }}>
                          женское Кольцо-талисман
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span style={{ bottom: 0, left: "inherit", right: 0 }} className="price-card-new">{currentPrice} ₽ </span></div>
                          {/*<img src={sales} alt="JewelCocktail" className="card-icon-sale" />*/}
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }

                {item.product === "alcorTalisman" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={alcorImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block", textAlign: "center", marginTop: "10px" }}>
                          женскии браслет-талисман
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span style={{ bottom: 0, left: "inherit", right: 0 }} className="price-card-new">{currentPrice} ₽ </span></div>
                          {/*<img src={sales} alt="JewelCocktail" className="card-icon-sale" />*/}
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }

                {item.product === "gidorTalisman" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={gidorImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block", textAlign: "center", marginTop: "10px" }}>
                          мужской кулон-талисман
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span style={{ bottom: 0, left: "inherit", right: 0 }} className="price-card-new">{currentPrice} ₽ </span></div>
                          {/*<img src={sales} alt="JewelCocktail" className="card-icon-sale" />*/}
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }

                {item.product === "dorsTalisman" ?
                  <>
                    <RemoveItem onClick={() => removeItem(item)}>
                      <div style={{ textAlign: "right" }}>
                        <img src={close} alt="JewelCocktail" style={{ maxWidth: "18px", opacity: "0.7" }}/>
                      </div>
                    </RemoveItem>
                    <div style={{ textAlign: "center" }}><img style={{maxWidth: "100px"}} src={dorsImg} alt="JewelCocktail"/></div>
                    <WrapProductDescription>
                      <div style={{ textAlign: "left" }}>
                        <span style={{ color: "#727070", marginBottom: "10px", display: "inline-block", textAlign: "center", marginTop: "10px" }}>
                          мужской браслет-талисман
                        </span>
                        <WrapCardPrice>
                          <div className="price-card">Цена: <span style={{ bottom: 0, left: "inherit", right: 0 }} className="price-card-new">{currentPrice} ₽ </span></div>
                          {/*<img src={sales} alt="JewelCocktail" className="card-icon-sale" />*/}
                        </WrapCardPrice>
                      </div>

                    </WrapProductDescription>
                    <br/>
                    <hr/>
                    <br/>
                  </>
                  :
                  null
                }

              </div>
            )
          })
          }
        </div>
        <div style={{ textAlign: "right" }}>Итого: {sumPrice} ₽</div>
        <OrderForm card={card} sumPrice={sumPrice} setCard={setCard} showPopup={showPopup} setShowPopup={setShowPopup} />
      </Inner>
    </Wrapper>
  );
};
