import React from "react";
import { Rings } from "./rings";
import { WrapperProducts } from "./wrap-products-styled";
import { Pendants } from "./pendant";
import { Alcor } from "./alcor";
import { Gidor } from "./gidor";
import { Dors } from "./dors";
import { Popup } from "./popup";
import { CoupleBracelets } from "./coupleBracelets";

export const WrapProducts = (props) => {
  const {showPopup, setShowPopup, card, setCard} = props
  return (
      <WrapperProducts className={showPopup ? "showPopup": "noPopup"}>
        <Dors setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Alcor setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Gidor setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Pendants setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <Rings setCard={setCard} setShowPopup={setShowPopup} card={card} />
        <CoupleBracelets setCard={setCard} setShowPopup={setShowPopup} card={card} />



        <Popup showPopup={showPopup} setShowPopup={setShowPopup} card={card} setCard={setCard} />
      </WrapperProducts>
  );
}
