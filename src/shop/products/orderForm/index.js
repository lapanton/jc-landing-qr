import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import emailjs from '@emailjs/browser';
import { WrapForm } from './styled-order-form';
import { BounceAnimation } from "../../animation/BounceAnimation";

export const OrderForm = (props) => {
  const { card, showPopup, sumPrice, setCard, setShowPopup } = props;
  const [showAnimationOrder, setShowAnimationOrder] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [failMessage, setFailedMessage] = useState(false);

  const intl = useIntl();

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
        <p><FormattedMessage id="card.thankyou" values={{
          br: (<br/>)
        }} /></p>
      </WrapForm>
    )
  }
  if (failMessage) {
    return (
      <WrapForm>
        <p><FormattedMessage id="card.wrong" values={{
          br: (<br/>)
        }} />: +7 968 811 67 11</p>
      </WrapForm>
    )
  }
  return (
    <WrapForm>
      {showAnimationOrder && <BounceAnimation />}
      <p><FormattedMessage id="card.details" /></p>
      <form ref={form} onSubmit={sendEmail}>
        {card.map((item, index) => {
          return (
            <>
              {item.product === "ring" ?
                <div key={index}>
                  <input type="hidden" name="product_ring" value="Кольцо Mellish" />
                  {item.stone === "1r" && <><input type="hidden" name="ring_stone" value="Камeнь: Роза" /></>}
                  {item.stone === "2r" && <><input type="hidden" name="ring_stone" value="Камeнь: Океан" /></>}
                  {item.stone === "3r" && <><input type="hidden" name="ring_stone" value="Камeнь: Жемчуг" /></>}
                  {item.stone === "4r" && <><input type="hidden" name="ring_stone" value="Камeнь: Родохрозит" /></>}
                  {item.stone === "5r" && <><input type="hidden" name="ring_stone" value="Камeнь: Авантюрин" /></>}

                  </div>:
                null
              }
              {
                item.product === "quasar" ?
                  <div key={index}>
                    <input type="hidden" name="product_quasar" value="Подвеска quasar" />
                    {item.stone === "1p" && <><input type="hidden" name="quasar_stone" value="Камeнь: Роза" /></>}
                    {item.stone === "2p" && <><input type="hidden" name="quasar_stone" value="Камeнь: Камeнь: Океан" /></>}
                    {item.stone === "3p" && <><input type="hidden" name="quasar_stone" value="Камeнь: Жемчуг" /></>}
                    {item.stone === "4p" && <><input type="hidden" name="quasar_stone" value="Камeнь: Родохрозит" /></>}
                    {item.stone === "5p" && <><input type="hidden" name="quasar_stone" value="Камeнь: Авантюрин" /></>}
                  </div> :
                  null
              }
              {item.product === "alcor" ?
                <div key={index}>
                  <input type="hidden" name="product_alcor" value="Браслет Alcor" />
                  {item.stone === "1a" && <><input type="hidden" name="alcor_stone" value="Камeнь: Роза" /></>}
                  {item.stone === "2a" && <><input type="hidden" name="alcor_stone" value="Камeнь: Океан" /></>}
                  {item.stone === "3a" && <><input type="hidden" name="alcor_stone" value="Камeнь: Жемчуг" /></>}
                  {item.stone === "4a" && <><input type="hidden" name="alcor_stone" value="Камeнь: Родохрозит" /></>}
                  {item.stone === "5a" && <><input type="hidden" name="alcor_stone" value="Камeнь: Авантюрин" /></>}
                </div>
              :
                null
              }
              {item.product === "gidor" ?
                <div key={index}>
                  <input type="hidden" name="product_gidor" value="Мужской кулон Gidor" />
                  {item.stone === "1g" && <><input type="hidden" name="gidor_stone" value="Камeнь: Огонь" /></>}
                  {item.stone === "2g" && <><input type="hidden" name="gidor_stone" value="Камeнь: Океан" /></>}
                  {item.stone === "3g" && <><input type="hidden" name="gidor_stone" value="Камeнь: Жёлтый органик" /></>}
                  {item.stone === "4g" && <><input type="hidden" name="gidor_stone" value="Камeнь: Черный сандал" /></>}
                  {item.stone === "5g" && <><input type="hidden" name="gidor_stone" value="Камeнь: Белый оникс" /></>}
                </div>
              :
              null
              }
              {item.product === "dors" ?
                <div key={index}>
                  <input type="hidden" name="product_dors" value="Мужской браслет Dors" />
                  {item.stone === "1d" && <><input type="hidden" name="dors_stone" value="Камeнь: Огонь" /></>}
                  {item.stone === "2d" && <><input type="hidden" name="dors_stone" value="Камeнь: Океан" /></>}
                  {item.stone === "3d" && <><input type="hidden" name="dors_stone" value="Камeнь: Жёлтый органик" /></>}
                  {item.stone === "4d" && <><input type="hidden" name="dors_stone" value="Камeнь: Черный сандал" /></>}
                  {item.stone === "5d" && <><input type="hidden" name="dors_stone" value="Камeнь: Белый оникс" /></>}
                </div>
                :
                null
              }
              {item.product === "couple" ?
                <div key={index}>
                  <input type="hidden" name="product_couple" value="парные браслеты" />
                  {item.stone === "1co" && <><input type="hidden" name="couple_stone" value="Камeнь: Огонь и Роза" /></>}
                  {item.stone === "2co" && <><input type="hidden" name="couple_stone" value="Камeнь: Белый оникс" /></>}
                  {item.stone === "3co" && <><input type="hidden" name="couple_stone" value="Камeнь: Жёлтый органик" /></>}
                </div>
                :
                null
              }
              {item.product === "glass" ?
                <div key={index}>
                  <input type="hidden" name="product_glass" value="Бокал-декантер JC (2 шт.)" />
                </div>
                :
                null
              }

              {item.product === "pendantTalisman" ?
                <div key={index}>
                  <input type="hidden" name="product_pendantTalisman" value="талисман-кулон женский" />
                  { item.stone === '1p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Змеевик — поглотитель негативной энергии и защитник." /></>}
                  { item.stone === '2p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '3p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '4p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '5p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Говлит - официально был описан только в конце XIX века" /></>}
                  { item.stone === '6p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Обсидиан - является мощным поглотителем энергии и хранителем информации." /></>}
                  { item.stone === '7p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '8p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Пирит - укрепляющет нервную систему" /></>}
                  { item.stone === '9p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '10p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '11p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '12p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '13p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '14p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Гематит - один из сильнейших магических камней." /></>}
                  { item.stone === '15p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Родохрозит - имеет удивительные свойства." /></>}
                  { item.stone === '16p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '17p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Нефрит - является олицетворением пяти качеств человека." /></>}
                  { item.stone === '18p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Орех — дерево победы над внешними обстоятельствами." /></>}
                  { item.stone === '19p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Сандалу - могущественная стихия Воздуха." /></>}
                  { item.stone === '20p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Красное дерево - помогает человеку жить в гармонии с природой." /></>}
                  { item.stone === '21p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Авантюрин - является амулетом в любовных отношениях." /></>}
                  { item.stone === '22p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Авантюрин - является амулетом в любовных отношениях." /></>}
                  { item.stone === '23p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Оникс - обладает сильной энергетикой." /></>}
                  { item.stone === '24p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '25p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '26p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '27p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '28p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '29p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Лунно-зеленый опал по древним поверьям способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '30p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Голубой опал - способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '31p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Огненно-снежный опал - способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '32p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Мрамор - быстро подстраивается под энергетику хозяина." /></>}
                  { item.stone === '33p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                  { item.stone === '34p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                  { item.stone === '35p-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                </div>
                :
                null
              }


              {item.product === "ringTalisman" ?
                <div key={index}>
                  <input type="hidden" name="product_ringTalisman" value="женское кольцо-талисман" />
                  { item.stone === '1r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Змеевик — поглотитель негативной энергии и защитник." /></>}
                  { item.stone === '2r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '3r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '4r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '5r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Говлит - официально был описан только в конце XIX века" /></>}
                  { item.stone === '6r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Обсидиан - является мощным поглотителем энергии и хранителем информации." /></>}
                  { item.stone === '7r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '8r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Пирит - укрепляющет нервную систему" /></>}
                  { item.stone === '9r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '10r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '11r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '12r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '13r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '14r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Гематит - один из сильнейших магических камней." /></>}
                  { item.stone === '15r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Родохрозит - имеет удивительные свойства." /></>}
                  { item.stone === '16r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '17r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Нефрит - является олицетворением пяти качеств человека." /></>}
                  { item.stone === '18r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Орех — дерево победы над внешними обстоятельствами." /></>}
                  { item.stone === '19r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Сандалу - могущественная стихия Воздуха." /></>}
                  { item.stone === '20r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Красное дерево - помогает человеку жить в гармонии с природой." /></>}
                  { item.stone === '21r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Авантюрин - является амулетом в любовных отношениях." /></>}
                  { item.stone === '22r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Авантюрин - является амулетом в любовных отношениях." /></>}
                  { item.stone === '23r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Оникс - обладает сильной энергетикой." /></>}
                  { item.stone === '24r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '25r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '26r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '27r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '28r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '29r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Лунно-зеленый опал по древним поверьям способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '30r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Голубой опал - способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '31r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Огненно-снежный опал - способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '32r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Мрамор - быстро подстраивается под энергетику хозяина." /></>}
                  { item.stone === '33r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                  { item.stone === '34r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                  { item.stone === '35r-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                </div>
                :
                null
              }

              {item.product === "alcorTalisman" ?
                <div key={index}>
                  <input type="hidden" name="product_alcorTalisman" value="женское браслет-талисман" />
                  { item.stone === '1a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Змеевик — поглотитель негативной энергии и защитник." /></>}
                  { item.stone === '2a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '3a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '4a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '5a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Говлит - официально был описан только в конце XIX века" /></>}
                  { item.stone === '6a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Обсидиан - является мощным поглотителем энергии и хранителем информации." /></>}
                  { item.stone === '7a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '8a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Пирит - укрепляющет нервную систему" /></>}
                  { item.stone === '9a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '10a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '11a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '12a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Натуральный жемчуг — кладезь ценных микроэлементов." /></>}
                  { item.stone === '13a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '14a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Гематит - один из сильнейших магических камней." /></>}
                  { item.stone === '15a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Родохрозит - имеет удивительные свойства." /></>}
                  { item.stone === '16a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '17a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Нефрит - является олицетворением пяти качеств человека." /></>}
                  { item.stone === '18a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Орех — дерево победы над внешними обстоятельствами." /></>}
                  { item.stone === '19a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Сандалу - могущественная стихия Воздуха." /></>}
                  { item.stone === '20a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Красное дерево - помогает человеку жить в гармонии с природой." /></>}
                  { item.stone === '21a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Авантюрин - является амулетом в любовных отношениях." /></>}
                  { item.stone === '22a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Авантюрин - является амулетом в любовных отношениях." /></>}
                  { item.stone === '23a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Оникс - обладает сильной энергетикой." /></>}
                  { item.stone === '24a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '25a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '26a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '27a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '28a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Кошачий глаз - минерал отводит от носителя смерть." /></>}
                  { item.stone === '29a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Лунно-зеленый опал по древним поверьям способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '30a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Голубой опал - способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '31a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Огненно-снежный опал - способен поддерживать таланты своего владельца." /></>}
                  { item.stone === '32a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Мрамор - быстро подстраивается под энергетику хозяина." /></>}
                  { item.stone === '33a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                  { item.stone === '34a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                  { item.stone === '35a-t' &&  <><input type="hidden" name="pendantTalisman_stone" value="Талисман: Серебро — это лунный металл." /></>}
                </div>
                :
                null
              }

              {item.product === "gidorTalisman" ?
                <div key={index}>
                  <input type="hidden" name="product_gidorTalisman" value="мужской кулон-талисман" />

                  { item.stone === '1g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '2g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '3g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '4g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '5g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '6g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Лазурит имеет способность помогать своему владельцу." /></>}
                  { item.stone === '7g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Обсидиан является мощным поглотителем энерги." /></>}
                  { item.stone === '8g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Обсидиан является мощным поглотителем энерги." /></>}
                  { item.stone === '9g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Пирит — укрепляющего нервную систему." /></>}
                  { item.stone === '10g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '11g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '12g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '13g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Гематит - один из сильнейших магических камней." /></>}
                  { item.stone === '14g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Орех — дерево победы над внешними обстоятельствами." /></>}
                  { item.stone === '15g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Сандалу - могущественная стихия Воздуха." /></>}
                  { item.stone === '16g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Красное дерево - помогает человеку жить в гармонии с природой." /></>}
                  { item.stone === '17g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Оникс — обладает сильной энергетикой." /></>}
                  { item.stone === '18g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Серебро - это лунный металл." /></>}
                  { item.stone === '19g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Серебро - это лунный металл." /></>}
                  { item.stone === '20g-t' && <><input type="hidden" name="gidorTalisman_stone" value="Талисман: Серебро - это лунный металл." /></>}
                </div>
                :
                null
              }

              {item.product === "dorsTalisman" ?
                <div key={index}>
                  <input type="hidden" name="product_dorsTalisman" value="мужской браслет-талисман" />

                  { item.stone === '1d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '2d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '3d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '4d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Агат - приносит здоровье, счастье и долголетие." /></>}
                  { item.stone === '5d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Яшма — источник доброй энергии." /></>}
                  { item.stone === '6d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Лазурит имеет способность помогать своему владельцу." /></>}
                  { item.stone === '7d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Обсидиан является мощным поглотителем энерги." /></>}
                  { item.stone === '8d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Обсидиан является мощным поглотителем энерги." /></>}
                  { item.stone === '9d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Пирит — укрепляющего нервную систему." /></>}
                  { item.stone === '10d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '11d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '12d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Тигровый глаз — камень мудрецов и правителей." /></>}
                  { item.stone === '13d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Гематит - один из сильнейших магических камней." /></>}
                  { item.stone === '14d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Орех — дерево победы над внешними обстоятельствами." /></>}
                  { item.stone === '15d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Сандалу - могущественная стихия Воздуха." /></>}
                  { item.stone === '16d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Красное дерево - помогает человеку жить в гармонии с природой." /></>}
                  { item.stone === '17d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Оникс — обладает сильной энергетикой." /></>}
                  { item.stone === '18d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Серебро - это лунный металл." /></>}
                  { item.stone === '19d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Серебро - это лунный металл." /></>}
                  { item.stone === '20d-t' && <><input type="hidden" name="dorsTalisman_stone" value="Талисман: Серебро - это лунный металл." /></>}
                </div>
                :
                null
              }

            </>
          )
        })}

        <input type="hidden" name="sum_order" value={sumPrice}/>
        <input placeholder={intl.formatMessage({ id: "card.name" })} type="text" name="to_name"/>
        <input placeholder={intl.formatMessage({ id: "card.contact" })} type="tel" name="to_phone" required />
        <input placeholder="Email" type="email" name="to_email" />
        <input placeholder={intl.formatMessage({ id: "card.adress" })} type="text" name="to_address"/>
        <input placeholder={intl.formatMessage({ id: "card.comment" })} type="text" name="to_comment"/>
        <div style={{ display: "flex"}}>
          <FormattedMessage id="card.offer" />
        </div>
        <div style={{ color: "#464343", marginTop: "5px"}}>
          <FormattedMessage id="card.deliverycosts" />
        </div>
        <input disabled={card.length === 0} className='makeorder' type="submit" value={intl.formatMessage({ id: "card.doorder" })}/>
      </form>
    </WrapForm>
  )
}