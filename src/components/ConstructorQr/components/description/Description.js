import React from 'react';
import { FormattedMessage } from "react-intl";
import {useLocation} from "react-router-dom";
import { Wrapper } from "./description-style";
import imgGift from './gift.png';

export const Description = (props) => {
  const value = props.value;
  const langProps = props.langProps;
  const { pathname } = useLocation();
  return (
    <Wrapper>
      {(pathname.includes('/letter') || pathname.includes('/qr/')) ?
        <>
          <h1><span><FormattedMessage id="qr.title" /></span></h1>
          <img className="letter-image" src={imgGift} alt="JewelCocktail"/>
        </>
        :
        <>
          <h1><span>{langProps.locale === "ru" ? "Украшения" : "Live Hi-Tech jewelry"}</span><br/>
            {langProps.locale === "ru" ? "с МЕТА - посланием" : "with  META MESSAGE" }</h1>
          <img src={imgGift} alt="JewelCocktail"/>
          { ['default'].includes(value?.status) && <div className="mobButtonCreate" onClick={() => window.scrollTo({top: 1100, left: 0, behavior: 'smooth'})}><FormattedMessage id="shop.createi" /></div>}
          <p className="textOne">{langProps.locale === "ru" ? "Роскошь и минимализм авангарда отлично сочетаются с современными технологиями, которые позволяют сделать ювелирные украшения не просто оригинальными, но и индивидуальными." : "The luxury and minimalism of the avant-garde blend perfectly with modern technologies, which allow jewelry to be not only original but also personalized."}</p>
          <p className="textTwo">{langProps.locale === "ru" ? "На обратной стороне выбранной сменной вставки наносится гравировка с QR-кодом." : "On the reverse side of the selected interchangeable insert, an engraving with a QR code is applied."}</p>
          <p className="textThree">{langProps.locale === "ru" ? "Этот код ведет на цифровое послание любого типа – открытка, поздравление, изображение, видеоролик, признание в любви, фотография, любой формат пожеланий в цифровом виде. Это уникальная возможность сделать подарок с личным посланием и смыслом, сохранить важные и дорогие сердцу моменты или передать свои признания и эмоции близким на собственном украшении с душой." : "This code leads to a digital message of any type - a postcard, greeting, image, love confession, photograph. This is a unique opportunity to make a gift with a personal message and meaning, to preserve important and dear-to-heart moments or to convey your acknowledgments and emotions to your loved ones on your own piece of jewelry with soul."}</p>
        </>
      }
    </Wrapper>
  );
};
