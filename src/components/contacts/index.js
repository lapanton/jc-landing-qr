import React from 'react';
import {Wrapper, WrapCart, WrapText, Copyright} from "./contacts-styled";
import {Ymaps} from "../../ymaps";

export const Contacts = () => {
  return (
    <Wrapper>
     <h3>Контакты</h3>
      <WrapCart>
        <Ymaps />
        <WrapText>
          <div className="phoneAddressEmail">+7 499 377 79 19</div>
          <div className="phoneAddressEmail">contact@jewelcocktail.com</div>
          <div className="phoneAddressEmail">г. Москва пр. Вернадского, 29 (ТЦ "ЛЕТО")</div>
          <div className="phoneAddressEmail">Режим работы:</div>
          <div className="phoneAddressEmail">
            Пн-Пт: с 09:00 до 21:00
          </div>
        </WrapText>
      </WrapCart>
      <Copyright>
        Все права защищены
        © ООО «НАЗВАНИЕ ООО», 2022.
      </Copyright>
    </Wrapper>
  )
}
