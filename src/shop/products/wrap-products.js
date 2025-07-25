import React from "react";
import { useLocation } from "react-router-dom";
import { Rings } from "./rings";
import { WrapperProducts } from "./wrap-products-styled";
import { Pendants } from "./pendant";
import { Alcor } from "./alcor";
import { Gidor } from "./gidor";
import { Dors } from "./dors";
import { Popup } from "./popup";
import { CoupleBracelets } from "./coupleBracelets";
import { RingsTalisman } from "./talisman/rings";
import { PendantsTalisman } from "./talisman/pendant";
import { AlcorTalisman } from "./talisman/alcor";
import { GidorTalisman } from "./talisman/gidor";
import { DorsTalisman } from "./talisman/dors";
import { Orion } from "./orion";
import { KeyHolder } from "./keyHolder";
import { KeyHolderTalisman } from "./talisman/holderTalisman";
// import {CoupleBraceletsTalisman} from "./talisman/coupleBracelets";

export const WrapProducts = (props) => {
  const { showPopup, setShowPopup, card, setCard, langProps } = props;
  const location = useLocation();

  return (
    <>
      <WrapperProducts className={showPopup ? "showPopup" : "noPopup"}>
        {location.pathname === "/talisman" ? (
          <>
            <KeyHolderTalisman
              langProps={langProps}
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
            />
            <PendantsTalisman
              langProps={langProps}
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
            />
            <RingsTalisman
              langProps={langProps}
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
            />
            <AlcorTalisman
              langProps={langProps}
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
            />
            <GidorTalisman
              langProps={langProps}
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
            />
            <DorsTalisman
              langProps={langProps}
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
            />
          </>
        ) : (
          <>
            <KeyHolder
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
            <Orion
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
            <Dors
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
            <Alcor
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
            <Gidor
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
            <Pendants
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
            <Rings
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
            <CoupleBracelets
              setCard={setCard}
              setShowPopup={setShowPopup}
              card={card}
              langProps={langProps}
            />
          </>
        )}

        <Popup
          langProps={langProps}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          card={card}
          setCard={setCard}
        />
      </WrapperProducts>
    </>
  );
};
