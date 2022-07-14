import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import one from './img/1.png';
import two from './img/2.png';
import three from './img/3.png';
import four from './img/4.png';
import five from './img/5.png';

import oneStone from './stone/1.png';
import twoStone from './stone/2.png';
import threeStone from './stone/3.png';
import fourStone from './stone/4.png';
import fiveStone from './stone/5.png';

import fire from './fire.png';
import arDown from './arrowDown.png';
import arUp from './arrowUp.png';

import sale from '../sale.png';

import { Wrapper, Inner, ChooseStone, WrapStone, PriceBuySection, DescriptionProduct, DescriptionButton, DescriptionView, ToRightMoveDesktop, WrapPrices} from "./styled-rings";

export const Pendants = (props) => {
  const { card, setCard, setShowPopup } = props;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [quasarStone, setQuasarStone] = useState('1p');
  const [showDescr, setShowDescr] = useState(false);

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
        },
      },
    ],
  };
  const buyPendant = () => {
    const arr1 = [{ product: "quasar", stone: quasarStone, price: 8900 }];
    const checkedItem = card.filter((value) => value.product !== "quasar");
    setCard(() => [...checkedItem, ...arr1]);
    setShowPopup(true);
  };
  return (
    <Wrapper>
      <Inner>
        <div className="slider-wrap">
          <h4>подвеска quasar</h4>
          <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
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
          <p>выбери камень с qr-посланием</p>
          <WrapStone>
            <div onClick={() => setQuasarStone('1p')} className={quasarStone === '1p' ? 'active' : 'not' }>
              <img src={oneStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('2p')} className={quasarStone === '2p' ? 'active' : 'not' }>
              <img src={twoStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('3p')} className={quasarStone === '3p' ? 'active' : 'not' }>
              <img src={threeStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('4p')} className={quasarStone === '4p' ? 'active' : 'not' }>
              <img src={fourStone} alt="JewelCocktail"/>
            </div>
            <div onClick={() => setQuasarStone('5p')} className={quasarStone === '5p' ? 'active' : 'not' }>
              <img src={fiveStone} alt="JewelCocktail"/>
            </div>
          </WrapStone>
          <p className="description">
            { quasarStone === '1p' && "роза - символ страсти, красоты, энергии и любви"}
            { quasarStone === '2p' && "океан - символ творчества,мечты, свободы и созидания"}
            { quasarStone === '3p' && "жемчуг - символизирует чистоту, силу воли и благополучие"}
            { quasarStone === '4p' && "родохрозит - романтичный камень, олицетворяет нежность и любовь"}
            { quasarStone === '5p' && "авантюрин - оптимизм, успех и удача на вашей стороне"}
          </p>
        </ChooseStone>
        <PriceBuySection>
          <WrapPrices>
            <p className="price">8 900 <span>₽</span></p>
            <p className="old-price">12 700 ₽</p>
            <img src={sale} alt="JewelCocktail" className="sale-icon"/>
          </WrapPrices>
          <p className="bonus">подвеска + 2 разных камня</p>
          <div className="buy-button" onClick={() => buyPendant()}>Купить</div>
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
              <p className="slave-text">дизайнерская подвеска
                в стиле минимализм
                на каждый день со сменными вставками (камнями)</p>
              <p className="main-text">
                Комплектация:
              </p>
              <p className="slave-text">
                подвеска, 2 сменных камня, система хранения камней фирменная коробка и пакет.
              </p>
              <p className="main-text">
                Размер камня:
              </p>
              <p className="slave-text">
                10x10 мм
              </p>

              <ToRightMoveDesktop>
              <p className="main-text">
                Материал и цвет основы:
              </p>
              <p className="slave-text">
                Натуральный или органический
                камень ручной огранки
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
