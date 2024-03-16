import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import emailjs from "@emailjs/browser";
import { WrapForm } from "./styled-order-form";
import { BounceAnimation } from "../../animation/BounceAnimation";

export const OrderForm = (props) => {
  const {
    card,
    showPopup,
    sumPrice,
    promocode,
    setCard,
    setShowPopup,
    langProps,
  } = props;
  const [showAnimationOrder, setShowAnimationOrder] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [failMessage, setFailedMessage] = useState(false);

  const intl = useIntl();

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("hide-overflow");
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
      document.body.classList.remove("hide-overflow");
      document.getElementsByTagName("html")[0].style.overflowY = "";
    }
  }, [showPopup]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setShowAnimationOrder(true);
    //  emailjs.sendForm('service_703tt8s', 'template_4qtz2iq', form.current, 'user_vtAgdf3zaqK3Mf8SVKA8o')
    // emailjs.sendForm('service_703tt8s', 'template_ppq46lh', form.current, 'user_vtAgdf3zaqK3Mf8SVKA8o')

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    const emailTemplate =
      langProps.locale === "ru" ? "template_4qtz2iq" : "template_dacpb7f";

    emailjs
      .sendForm(
        "service_703tt8s",
        emailTemplate,
        form.current,
        "user_vtAgdf3zaqK3Mf8SVKA8o",
      )
      .then(
        (result) => {
          localStorage.setItem("card-data", JSON.stringify([]));
          console.log(result.text);
          setShowAnimationOrder(false);
          setSuccessMessage(true);
          setCard([]);
          setTimeout(() => {
            setSuccessMessage(false);
            setShowPopup(false);
          }, 4000);
        },
        (error) => {
          setShowAnimationOrder(false);
          setFailedMessage(true);
          setTimeout(() => {
            setFailedMessage(false);
            setShowPopup(false);
          }, 4000);
          console.log(error.text);
        },
      );
  };

  if (successMessage) {
    return (
      <WrapForm>
        <p>
          <FormattedMessage
            id="card.thankyou"
            values={{
              br: <br />,
            }}
          />
        </p>
      </WrapForm>
    );
  }
  if (failMessage) {
    return (
      <WrapForm>
        <p>
          <FormattedMessage
            id="card.wrong"
            values={{
              br: <br />,
            }}
          />
          : +7 968 811 67 11
        </p>
      </WrapForm>
    );
  }
  return (
    <WrapForm>
      {showAnimationOrder && <BounceAnimation />}
      <p>
        <FormattedMessage id="card.details" />
      </p>
      <form ref={form} onSubmit={sendEmail}>
        {card.map((item, index) => {
          return (
            <>
              {item.product === "ring" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_ring"
                    value={
                      langProps.locale === "ru"
                        ? "Кольцо Mellish"
                        : "Ring Mellish"
                    }
                  />
                  {item.stone === "1r" && (
                    <>
                      <input
                        type="hidden"
                        name="ring_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Роза"
                            : "Stone: Rose"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2r" && (
                    <>
                      <input
                        type="hidden"
                        name="ring_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Роза"
                            : "Stone: Ocean"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3r" && (
                    <>
                      <input
                        type="hidden"
                        name="ring_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Жемчуг"
                            : "Stone: Pearls"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4r" && (
                    <>
                      <input
                        type="hidden"
                        name="ring_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Родохрозит"
                            : "Stone: Rhodochrosite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5r" && (
                    <>
                      <input
                        type="hidden"
                        name="ring_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Авантюрин"
                            : "Stone: Aventurine"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
              {item.product === "quasar" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_quasar"
                    value={
                      langProps.locale === "ru"
                        ? "Подвеска quasar"
                        : "Pendant Quasar"
                    }
                  />
                  {item.stone === "1p" && (
                    <>
                      <input
                        type="hidden"
                        name="quasar_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Роза"
                            : "Stone: Rose"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2p" && (
                    <>
                      <input
                        type="hidden"
                        name="quasar_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Океан"
                            : "Stone: Ocean"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3p" && (
                    <>
                      <input
                        type="hidden"
                        name="quasar_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Жемчуг"
                            : "Stone: Pearls"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4p" && (
                    <>
                      <input
                        type="hidden"
                        name="quasar_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Родохрозит"
                            : "Stone: Rhodochrosite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5p" && (
                    <>
                      <input
                        type="hidden"
                        name="quasar_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Авантюрин"
                            : "Stone: Aventurine"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
              {item.product === "alcor" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_alcor"
                    value={
                      langProps.locale === "ru"
                        ? "Браслет Alcor"
                        : "Bracelet Alcor"
                    }
                  />
                  {item.stone === "1a" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Роза"
                            : "Stone: Rose"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2a" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Океан"
                            : "Stone: Ocean"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3a" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Жемчуг"
                            : "Stone: Pearls"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4a" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Родохрозит"
                            : "Stone: Rhodochrosite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5a" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Авантюрин"
                            : "Stone: Aventurine"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
              {item.product === "orion" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_orion"
                    value={
                      langProps.locale === "ru"
                        ? "Браслет Orion"
                        : "Bracelet Orion"
                    }
                  />
                  {item.stone === "1o" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Роза"
                            : "Stone: Rose"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2o" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Океан"
                            : "Stone: Ocean"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3o" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Жемчуг"
                            : "Stone: Pearls"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4o" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Родохрозит"
                            : "Stone: Rhodochrosite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5o" && (
                    <>
                      <input
                        type="hidden"
                        name="alcor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Авантюрин"
                            : "Stone: Aventurine"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
              {item.product === "gidor" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_gidor"
                    value={
                      langProps.locale === "ru"
                        ? "Кулон Gidor"
                        : "Pendant Gidor"
                    }
                  />
                  {item.stone === "1g" && (
                    <>
                      <input
                        type="hidden"
                        name="gidor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Огонь"
                            : "Stone: Fire"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2g" && (
                    <>
                      <input
                        type="hidden"
                        name="gidor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Океан"
                            : "Stone: Ocean"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3g" && (
                    <>
                      <input
                        type="hidden"
                        name="gidor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Жёлтый органик"
                            : "Stone: Yellow marble"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4g" && (
                    <>
                      <input
                        type="hidden"
                        name="gidor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Агат"
                            : "Stone: Agat"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5g" && (
                    <>
                      <input
                        type="hidden"
                        name="gidor_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Белый оникс"
                            : "Stone: White onyx"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
              {item.product === "dors" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_dors"
                    value={
                      langProps.locale === "ru"
                        ? "Браслет Dors"
                        : "Bracelet Dors"
                    }
                  />
                  {item.stone === "1d" && (
                    <>
                      <input
                        type="hidden"
                        name="dors_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Огонь"
                            : "Stone: Fire"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2d" && (
                    <>
                      <input
                        type="hidden"
                        name="dors_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Океан"
                            : "Stone: Ocean"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3d" && (
                    <>
                      <input
                        type="hidden"
                        name="dors_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Жёлтый органик"
                            : "Stone: Yellow marble"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4d" && (
                    <>
                      <input
                        type="hidden"
                        name="dors_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Агат"
                            : "Stone: Agate"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5d" && (
                    <>
                      <input
                        type="hidden"
                        name="dors_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Белый оникс"
                            : "Stone: White onyx"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
              {item.product === "couple" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_couple"
                    value={
                      langProps.locale === "ru"
                        ? "парные браслеты"
                        : "Paired bracelets"
                    }
                  />
                  {item.stone === "1co" && (
                    <>
                      <input
                        type="hidden"
                        name="couple_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Огонь и Роза"
                            : "Stone: Rose and Fire"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2co" && (
                    <>
                      <input
                        type="hidden"
                        name="couple_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Белый оникс"
                            : "Stone: White onyx"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3co" && (
                    <>
                      <input
                        type="hidden"
                        name="couple_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Камeнь: Жёлтый органик"
                            : "Stone: Yellow marble"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
              {item.product === "glass" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_glass"
                    value="Бокал-декантер JC (2 шт.)"
                  />
                </div>
              ) : null}

              {item.product === "pendantTalisman" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_pendantTalisman"
                    value={
                      langProps.locale === "ru"
                        ? "талисман-кулон женский"
                        : "women`s talisman-pendant"
                    }
                  />
                  {item.stone === "1p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Змеевик — поглотитель негативной энергии и защитник."
                            : "Serpentine it is a mineral that is also called like Lizardite, Infinite or Healerite."
                        }
                      />
                    </>
                  )}
                  {item.stone === "2p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Агат - приносит здоровье, счастье и долголетие."
                            : "Agate has a stable and grounding quality."
                        }
                      />
                    </>
                  )}
                  {item.stone === "3p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Яшма — источник доброй энергии."
                            : "Jasper is a variety of Chalcedony."
                        }
                      />
                    </>
                  )}
                  {item.stone === "4p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Говлит - официально был описан только в конце XIX века"
                            : "Howlight is also called like Snow Leopard Stone or as magnesite."
                        }
                      />
                    </>
                  )}
                  {item.stone === "5p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Обсидиан - является мощным поглотителем энергии и хранителем информации."
                            : "Obsidian is truth-enhancing. A strongly protective stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "6p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Пирит - укрепляющет нервную систему"
                            : "Pyrite is an iron sulfide mineral with a metallic luster"
                        }
                      />
                    </>
                  )}
                  {item.stone === "7p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Тигровый глаз — камень мудрецов и правителей."
                            : "Tiger eye is a variety of Chalcedony, a cryptocrystalline form of silica"
                        }
                      />
                    </>
                  )}
                  {item.stone === "8p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Натуральный жемчуг — кладезь ценных микроэлементов."
                            : "Natural pearls have long been a source of pure fascination"
                        }
                      />
                    </>
                  )}
                  {item.stone === "9p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Гематит - один из сильнейших магических камней"
                            : "Hematite is also called like Blood stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "10p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Родохрозит - имеет удивительные свойства"
                            : "Rhodochrosite is a stone that integrates physical and spiritual energies"
                        }
                      />
                    </>
                  )}
                  {item.stone === "11p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Нефрит - является олицетворением пяти качеств человека."
                            : "Jade is a popular gemstone sometimes referred to as the stone of luck and happiness"
                        }
                      />
                    </>
                  )}
                  {item.stone === "12p-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Кошачий глаз - защищает от бед и болезней"
                            : "The Cat’s Eye is also known as the Lehsunia stone"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}

              {item.product === "ringTalisman" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_ringTalisman"
                    value={
                      langProps.locale === "ru"
                        ? "женское Кольцо-талисман"
                        : "women`s talisman-ring"
                    }
                  />
                  {item.stone === "1r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Змеевик — поглотитель негативной энергии и защитник"
                            : "Serpentine it is a mineral that is also called like Lizardite, Infinite or Healerite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Агат - приносит здоровье, счастье и долголетие"
                            : "Agate has a stable and grounding quality"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Яшма — источник доброй энергии"
                            : "Jasper is a variety of Chalcedony"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Говлит - официально был описан только в конце XIX века"
                            : "Howlight is also called like Snow Leopard Stone or as magnesite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Обсидиан - является мощным поглотителем энергии и хранителем информации"
                            : "Obsidian is truth-enhancing. A strongly protective stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "6r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Пирит - укрепляющет нервную систему"
                            : "Pyrite is an iron sulfide mineral with a metallic luster"
                        }
                      />
                    </>
                  )}
                  {item.stone === "7r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Тигровый глаз — камень мудрецов и правителей"
                            : "Tiger eye is a variety of Chalcedony, a cryptocrystalline form of silica"
                        }
                      />
                    </>
                  )}
                  {item.stone === "8r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Натуральный жемчуг — кладезь ценных микроэлементов"
                            : "Natural pearls have long been a source of pure fascination"
                        }
                      />
                    </>
                  )}
                  {item.stone === "9r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Гематит - один из сильнейших магических камней"
                            : "Hematite is also called like Blood stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "10r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Родохрозит - имеет удивительные свойства"
                            : "Rhodochrosite is a stone that integrates physical and spiritual energies"
                        }
                      />
                    </>
                  )}
                  {item.stone === "11r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Нефрит - является олицетворением пяти качеств человека"
                            : "Jade is a popular gemstone sometimes referred to as the stone of luck and happiness"
                        }
                      />
                    </>
                  )}
                  {item.stone === "12r-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Кошачий глаз - защищает от бед и болезней"
                            : "The Cat’s Eye is also known as the Lehsunia stone"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}

              {item.product === "alcorTalisman" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_alcorTalisman"
                    value={
                      langProps.locale === "ru"
                        ? "женскии браслет-талисман"
                        : "women`s talisman-bracelet"
                    }
                  />
                  {item.stone === "1a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Змеевик — поглотитель негативной энергии и защитник"
                            : "Serpentine it is a mineral that is also called like Lizardite, Infinite or Healerite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Агат - приносит здоровье, счастье и долголетие"
                            : "Agate has a stable and grounding quality"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Яшма — источник доброй энергии"
                            : "Jasper is a variety of Chalcedony"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Говлит - официально был описан только в конце XIX века"
                            : "Howlight is also called like Snow Leopard Stone or as magnesite"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Обсидиан - является мощным поглотителем энергии и хранителем информации"
                            : "Obsidian is truth-enhancing. A strongly protective stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "6a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Пирит - укрепляющет нервную систему"
                            : "Pyrite is an iron sulfide mineral with a metallic luster"
                        }
                      />
                    </>
                  )}
                  {item.stone === "7a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Тигровый глаз — камень мудрецов и правителей"
                            : "Tiger eye is a variety of Chalcedony, a cryptocrystalline form of silica"
                        }
                      />
                    </>
                  )}
                  {item.stone === "8a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Натуральный жемчуг — кладезь ценных микроэлементов"
                            : "Natural pearls have long been a source of pure fascination"
                        }
                      />
                    </>
                  )}
                  {item.stone === "9a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Гематит - один из сильнейших магических камней"
                            : "Hematite is also called like Blood stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "10a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Родохрозит - имеет удивительные свойства"
                            : "Rhodochrosite is a stone that integrates physical and spiritual energies"
                        }
                      />
                    </>
                  )}
                  {item.stone === "11a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Нефрит - является олицетворением пяти качеств человека"
                            : "Jade is a popular gemstone sometimes referred to as the stone of luck and happiness"
                        }
                      />
                    </>
                  )}
                  {item.stone === "12a-t" && (
                    <>
                      <input
                        type="hidden"
                        name="pendantTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Кошачий глаз - защищает от бед и болезней"
                            : "The Cat’s Eye is also known as the Lehsunia stone"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}

              {item.product === "gidorTalisman" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_gidorTalisman"
                    value={
                      langProps.locale === "ru"
                        ? "мужской кулон-талисман"
                        : "men`s talisman-pendant"
                    }
                  />

                  {item.stone === "1g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Яшма - приносит здоровье, счастье и долголетие"
                            : "Agate has a stable and grounding quality"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Агат — источник доброй энергии"
                            : "Jasper is a variety of Chalcedony"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Лазурит имеет способность помогать своему владельцу"
                            : "Lapis Lazuli is a beautiful celestial deep blue stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Обсидиан является мощным поглотителем энерги"
                            : "Obsidian is truth-enhancing. A strongly protective stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Пирит — источник доброй энергии"
                            : "Pyrite is an iron sulfide mineral with a metallic luster"
                        }
                      />
                    </>
                  )}
                  {item.stone === "6g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Тигровый глаз — камень мудрецов и правителей"
                            : "Tiger eye is a variety of Chalcedony"
                        }
                      />
                    </>
                  )}
                  {item.stone === "7g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Гематит - один из сильнейших магических камней"
                            : "Hematite is also called like Blood stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "8g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Оникс является мощным поглотителем энерги."
                            : "Onyx is a stone that offers up powerful vibrations of protection"
                        }
                      />
                    </>
                  )}
                  {item.stone === "9g-t" && (
                    <>
                      <input
                        type="hidden"
                        name="gidorTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Нефрит - является олицетворением пяти качеств человека"
                            : "Jade is a popular gemstone sometimes referred to as the stone"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}

              {item.product === "dorsTalisman" ? (
                <div key={index}>
                  <input
                    type="hidden"
                    name="product_dorsTalisman"
                    value={
                      langProps.locale === "ru"
                        ? "мужской браслет-талисман"
                        : "men`s talisman-bracelet"
                    }
                  />

                  {item.stone === "1d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Яшма - приносит здоровье, счастье и долголетие"
                            : "Agate has a stable and grounding quality"
                        }
                      />
                    </>
                  )}
                  {item.stone === "2d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Агат — источник доброй энергии"
                            : "Jasper is a variety of Chalcedony"
                        }
                      />
                    </>
                  )}
                  {item.stone === "3d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Лазурит имеет способность помогать своему владельцу"
                            : "Lapis Lazuli is a beautiful celestial deep blue stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "4d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Обсидиан является мощным поглотителем энерги"
                            : "Obsidian is truth-enhancing. A strongly protective stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "5d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Пирит — источник доброй энергии"
                            : "Pyrite is an iron sulfide mineral with a metallic luster"
                        }
                      />
                    </>
                  )}
                  {item.stone === "6d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Тигровый глаз — камень мудрецов и правителей"
                            : "Tiger eye is a variety of Chalcedony"
                        }
                      />
                    </>
                  )}
                  {item.stone === "7d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Гематит - один из сильнейших магических камней"
                            : "Hematite is also called like Blood stone"
                        }
                      />
                    </>
                  )}
                  {item.stone === "8d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Оникс является мощным поглотителем энерги."
                            : "Onyx is a stone that offers up powerful vibrations of protection"
                        }
                      />
                    </>
                  )}
                  {item.stone === "9d-t" && (
                    <>
                      <input
                        type="hidden"
                        name="dorsTalisman_stone"
                        value={
                          langProps.locale === "ru"
                            ? "Нефрит - является олицетворением пяти качеств человека"
                            : "Jade is a popular gemstone sometimes referred to as the stone"
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
            </>
          );
        })}

        <input type="hidden" name="sum_order" value={sumPrice} />
        <input type="hidden" name="promocode" value={promocode} />
        <input
          placeholder={intl.formatMessage({ id: "card.name" })}
          type="text"
          name="to_name"
        />
        <input
          placeholder={intl.formatMessage({ id: "card.contact" })}
          type="tel"
          name="to_phone"
          required
        />
        <input placeholder="Email" type="email" name="to_email" />
        <input
          placeholder={intl.formatMessage({ id: "card.adress" })}
          type="text"
          name="to_address"
        />
        <input
          placeholder={intl.formatMessage({ id: "card.comment" })}
          type="text"
          name="to_comment"
        />
        {langProps.locale === "ru" && (
          <>
            <div style={{ display: "flex" }}>
              <FormattedMessage id="card.offer" />
            </div>
            <div style={{ color: "#464343", marginTop: "5px" }}>
              <FormattedMessage id="card.deliverycosts" />
            </div>
          </>
        )}
        {langProps.locale === "en" && (
          <div>
            <p>
              WE CONTACT YOU AND PLACE A BILL IN SAFE{" "}
              <a
                style={{ color: "rgb(0, 153, 51)", display: "none" }}
                href="https://hitechjc.com"
                target="_blank"
              >
                {" "}
                SHOP pay
              </a>{" "}
              ecosystem
            </p>
            <span>
              * Please Check your contact and address with zip/ postcode
            </span>
          </div>
        )}

        <input
          disabled={card.length === 0}
          className="makeorder"
          type="submit"
          value={intl.formatMessage({ id: "card.doorder" })}
        />
      </form>
    </WrapForm>
  );
};
