import React, { useEffect, useState } from "react";
import { Rings } from "./rings";
import { WrapperProducts } from "./wrap-products-styled";
import { Pendants } from "./pendant";
import { Alcor } from "./alcor";
import { Gidor } from "./gidor";
import { Dors } from "./dors";
import { Popup } from "./popup";

export const WrapProducts = (props) => {
  const dataFromStorage = localStorage.getItem('card-data');
  const [card, setCard] = useState((dataFromStorage?.length > 0) ? JSON.parse(dataFromStorage) : []);
  const {showPopup, setShowPopup} = props

  useEffect(() => {
    if (dataFromStorage === null) localStorage.setItem("card-data", JSON.stringify(card));
    if (card?.length > 0) {
      localStorage.setItem("card-data", JSON.stringify(card));
    }
  }, [card, showPopup, dataFromStorage]);

  return (
      <WrapperProducts className={showPopup ? "showPopup": "noPopup"}>
        <Rings setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Pendants setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Alcor setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Gidor setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Dors setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} card={card} setCard={setCard} />,
      </WrapperProducts>
  );
}
