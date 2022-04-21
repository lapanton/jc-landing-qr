import React from 'react';
import { Wrapper } from "./description-style";
import imgGift from './gift.png';

export const Description = (props) => {
  const value = props.value;
  return (
    <Wrapper>
      <h1><span>Украшения</span><br/>
        с МЕТА - посланием</h1>
      <img src={imgGift} alt="JewelCocktail"/>
      { ['default'].includes(value?.status) && <div className="mobButtonCreate" onClick={() => window.scrollTo({top: 1100, left: 0, behavior: 'smooth'})}>Создать</div>}
      <p className="textOne">Роскошь и минимализм авангарда отлично сочетаются с современными технологиями, которые позволяют сделать ювелирные украшения не просто оригинальными, но и индивидуальными.</p>
      <p className="textTwo">На обратной стороне выбранной сменной вставки наносится гравировка с QR-кодом.</p>
      <p className="textThree">Этот код ведет на цифровое послание любого типа – открытка, поздравление, изображение, видеоролик, признание в любви, фотография, любой формат пожеланий в цифровом виде. Это уникальная возможность сделать подарок с личным посланием и смыслом, сохранить важные и дорогие сердцу моменты или передать свои признания и эмоции близким на собственном украшении с душой.</p>
    </Wrapper>
  );
};
