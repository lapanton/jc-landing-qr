import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { WrapForm } from './styled-order-form';
import { BounceAnimation } from "../../animation/BounceAnimation";

export const OrderForm = (props) => {
  const { card, showPopup, sumPrice, setCard, setShowPopup } = props;
  const [showAnimationOrder, setShowAnimationOrder] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [failMessage, setFailedMessage] = useState(false);


  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('hide-overflow');
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    } else {
      document.body.classList.remove('hide-overflow');
      document.getElementsByTagName('html')[0].style.overflowY = '';
    }
  }, [showPopup]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setShowAnimationOrder(true);
    //  emailjs.sendForm('service_703tt8s', 'template_4qtz2iq', form.current, 'user_vtAgdf3zaqK3Mf8SVKA8o')
    // emailjs.sendForm('service_703tt8s', 'template_ppq46lh', form.current, 'user_vtAgdf3zaqK3Mf8SVKA8o')

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')

    emailjs.sendForm('service_703tt8s', 'template_4qtz2iq', form.current, 'user_vtAgdf3zaqK3Mf8SVKA8o')
      .then((result) => {
        console.log(result.text);
        setShowAnimationOrder(false);
        setSuccessMessage(true);
        setCard([]);
        setTimeout(() => {
          setSuccessMessage(false);
          setShowPopup(false);
        }, 4000);
      }, (error) => {
        setShowAnimationOrder(false);
        setFailedMessage(true);
        setTimeout(() => {
          setFailedMessage(false);
          setShowPopup(false);
        }, 4000);
        console.log(error.text);
      });
  }

  if (successMessage) {
    return (
      <WrapForm>
        <p>Спасибо за заказ!<br/> В ближайшее время с вами свяжется наш консультант! </p>
      </WrapForm>
    )
  }
  if (failMessage) {
    return (
      <WrapForm>
        <p>Что то пошло не так!<br/> Попробуйте снова или свяжить с нами по телефону: +7 499 377 79 19</p>
      </WrapForm>
    )
  }
  return (
    <WrapForm>
      {showAnimationOrder && <BounceAnimation />}
      <p>Данные для заказа</p>
      <form ref={form} onSubmit={sendEmail}>
        {card.map((item, index) => {
          return (
            <>
              {item.product === "ring" ?
                <div key={index}>
                  <input type="hidden" name="product_ring" value="Кольцо Mellish" />
                  {item.stone === "1r" && <><input type="hidden" name="ring_stone" value="Роза" /></>}
                  {item.stone === "2r" && <><input type="hidden" name="ring_stone" value="Океан" /></>}
                  {item.stone === "3r" && <><input type="hidden" name="ring_stone" value="Жемчуг" /></>}
                  {item.stone === "4r" && <><input type="hidden" name="ring_stone" value="Родохрозит" /></>}
                  {item.stone === "5r" && <><input type="hidden" name="ring_stone" value="Авантюрин" /></>}

                  </div>:
                null
              }
              {
                item.product === "quasar" ?
                  <div key={index}>
                    <input type="hidden" name="product_quasar" value="Подвеска quasar" />
                    {item.stone === "1p" && <><input type="hidden" name="quasar_stone" value="Роза" /></>}
                    {item.stone === "2p" && <><input type="hidden" name="quasar_stone" value="Океан" /></>}
                    {item.stone === "3p" && <><input type="hidden" name="quasar_stone" value="Жемчуг" /></>}
                    {item.stone === "4p" && <><input type="hidden" name="quasar_stone" value="Родохрозит" /></>}
                    {item.stone === "5p" && <><input type="hidden" name="quasar_stone" value="Авантюрин" /></>}
                  </div> :
                  null
              }
              {item.product === "alcor" ?
                <div key={index}>
                  <input type="hidden" name="product_alcor" value="Браслет Alcor" />
                  {item.stone === "1a" && <><input type="hidden" name="alcor_stone" value="Роза" /></>}
                  {item.stone === "2a" && <><input type="hidden" name="alcor_stone" value="Океан" /></>}
                  {item.stone === "3a" && <><input type="hidden" name="alcor_stone" value="Жемчуг" /></>}
                  {item.stone === "4a" && <><input type="hidden" name="alcor_stone" value="Родохрозит" /></>}
                  {item.stone === "5a" && <><input type="hidden" name="alcor_stone" value="Авантюрин" /></>}
                </div>
              :
                null
              }
              {item.product === "gidor" ?
                <div key={index}>
                  <input type="hidden" name="product_gidor" value="Мужской кулон Gidor" />
                  {item.stone === "1g" && <><input type="hidden" name="gidor_stone" value="Огонь" /></>}
                  {item.stone === "2g" && <><input type="hidden" name="gidor_stone" value="Океан" /></>}
                  {item.stone === "3g" && <><input type="hidden" name="gidor_stone" value="Жёлтый органик" /></>}
                  {item.stone === "4g" && <><input type="hidden" name="gidor_stone" value="Черный сандал" /></>}
                  {item.stone === "5g" && <><input type="hidden" name="gidor_stone" value="Белый оникс" /></>}
                </div>
              :
              null
              }
              {item.product === "dors" ?
                <div key={index}>
                  <input type="hidden" name="product_dors" value="Мужской браслет Dors" />
                  {item.stone === "1d" && <><input type="hidden" name="dors_stone" value="Огонь" /></>}
                  {item.stone === "2d" && <><input type="hidden" name="dors_stone" value="Океан" /></>}
                  {item.stone === "3d" && <><input type="hidden" name="dors_stone" value="Жёлтый органик" /></>}
                  {item.stone === "4d" && <><input type="hidden" name="dors_stone" value="Черный сандал" /></>}
                  {item.stone === "5d" && <><input type="hidden" name="dors_stone" value="Белый оникс" /></>}
                </div>
                :
                null
              }
              {item.product === "couple" ?
                <div key={index}>
                  <input type="hidden" name="product_couple" value="парные браслеты" />
                  {item.stone === "1co" && <><input type="hidden" name="couple_stone" value="Огонь и Роза" /></>}
                  {item.stone === "2co" && <><input type="hidden" name="couple_stone" value="Жемчуг и Оникс" /></>}
                  {item.stone === "3co" && <><input type="hidden" name="couple_stone" value="Жёлтый органик" /></>}
                </div>
                :
                null
              }
            </>
          )
        })}

        <input type="hidden" name="sum_order" value={sumPrice}/>
        <input placeholder="Имя" type="text" name="to_name"/>
        <input placeholder="Телефон" type="tel" name="to_phone" required />
        <input placeholder="Email" type="email" name="to_email" />
        <input placeholder="Адрес отправки" type="text" name="to_address"/>
        <input placeholder="Комментарий" type="text" name="to_comment"/>
        <div style={{ display: "flex"}}>
          Оформляя заказ, я принимаю условия конфиденциальности персональной информации. Не является публичной офертой.
        </div>
        <input disabled={card.length === 0} className='makeorder' type="submit" value="ЗАКАЗАТЬ"/>
      </form>
    </WrapForm>
  )
}