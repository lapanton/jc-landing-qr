import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Link, Navigate
// import StarfieldAnimation from 'react-starfield-animation';
import { Footer } from "./footer";
import { createGlobalStyle } from "styled-components";
import { Main } from "./components/first";
import { BlackSquare } from "./components/blackSquare";
import { WithUs } from "./components/withUs";
import { Uverenosti } from "./components/uverennosti";
import { Freedom } from "./components/freedom";
import { Different } from "./components/different";
import { SelfProduct } from "./components/selfProduct";
import { OsobennostiTehnologii } from "./components/osobennostiTehnologii";
import { ImgBottom } from "./components/imgBottom";
import MoveStuffAround from "./components/blackSquare/lineTicker";
import { Contacts } from "./components/contacts";
import { Qr1001 } from "./giftMessage/qr1001";
import { Qr1002 } from "./giftMessage/qr1002";
import { Qr00001 } from "./giftMessage/qr00001";
import { Qr1 } from "./giftMessage/qr1";
// import {SliderGalerry} from "./components/slider";
import { Carousel } from "./components/Carousel/Carousel";
import { ConstructorQr } from "./components/ConstructorQr/ConstructorQr";
import CheckStatusQR from "./hocs/CheckStatusQR";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { PrivacyPolicyQr } from "./components/PrivacyPolicyQr";

// Shop
import { SelfProductShop } from "./shop/selfProduct";
import { OsobennostiTehnologiiShop } from "./shop/osobennostiTehnologii";
import { ContactsShop } from "./shop/contacts";
import { MainShop } from "./shop/first";
import { Second } from "./shop/second";
import { Info } from "./shop/info/iindex";
import { ShowHideSection } from "./shop/showHideSection/iindex";
import { WrapProducts } from "./shop/products/wrap-products";
// import {Preloader} from "./shop/preloader";
import ScrollArrow from "./shop/arrowToTop";
import { Glass } from "./shop/products/glass";
// /shop

import ScrollToTop from "./ScrollToTop";
import { CustomScripts } from "./CustomScripts";
// import {TalismanPage} from "./talisman";
import { TalismanStone } from "./talisman/talismanStone";
import { SecondTalisman } from "./talisman/second";
import { ConstructorQrTalisman } from "./components/ConstructorQrTalisman/ConstructorQrTalisman";
import { ExampleTalisman } from "./talisman/exampleTalisman";
import { PopupShopClose } from "./components/popupshopclose";
import { Oldnew } from "./shop/oldnew";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    // font-family: 'Inter', sans-serif;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    button:focus {outline:0;}
  }
  #root {
    background: #000;
    @media screen and (max-width: 768px) {
      overflow: hidden;
    }
  }
`;

export const App = (props) => {
  // http://localhost:3000/qr/PU7H9Gx3ly
  // http://localhost:3000/letter/piJ2N1KiBC
  // http://localhost:3000/qrt/uLuFx_XfzO
  // http://localhost:3000/letter/Kpvjc99Hdg
  // http://localhost:3000/qr/nOccLPeW9C with typeMessage
  // for testing https://jewelcocktail.com/qr/9lddgEXDdo

  const dataFromStorage = localStorage.getItem("card-data");
  const [card, setCard] = useState(
    dataFromStorage?.length > 0 ? JSON.parse(dataFromStorage) : [],
  );
  const [showPopup, setShowPopup] = useState(null);

  useEffect(() => {
    if (dataFromStorage === null)
      localStorage.setItem("card-data", JSON.stringify(card));
    if (card?.length > 0) {
      localStorage.setItem("card-data", JSON.stringify(card));
    }
  }, [card, showPopup, dataFromStorage]);

  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    if (window.location.pathname === "/about") {
      setTimeout(() => {
        const toHeight = isMobile ? 4300 : 3950;
        window.scrollTo({ top: toHeight, left: 0, behavior: "smooth" });
      }, 1000);
    }
    if (window.location.pathname === "/gallery") {
      setTimeout(() => {
        const toHeight = isMobile ? 3850 : 3500;
        window.scrollTo({ top: toHeight, left: 0, behavior: "smooth" });
      }, 1000);
    }
    if (window.location.pathname === "/contact") {
      setTimeout(() => {
        const toHeight = isMobile ? 5850 : 8900;
        window.scrollTo({ top: toHeight, left: 0, behavior: "smooth" });
      }, 1000);
    }
  }, [isMobile]);

  return (
    <Router>
      <CustomScripts />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <PopupShopClose />
              <GlobalStyle />
              <Main langProps={props} />
              <MoveStuffAround />
              <BlackSquare />
              <WithUs />
              <Uverenosti langProps={props} />
              <Freedom langProps={props} />
              <Different langProps={props} />
              <Carousel langProps={props} />
              <SelfProduct langProps={props} />
              <OsobennostiTehnologii langProps={props} />
              <ImgBottom />
              {/*<Contacts/>*/}
              <ContactsShop langProps={props} />
            </div>
          }
          exact
        />
        <Route
          path="/qr/:id"
          element={
            <CheckStatusQR>
              {(typeMessage) => {
                return typeMessage === "letter" || typeMessage === undefined ? (
                  <ConstructorQr langProps={props} />
                ) : (
                  <ConstructorQrTalisman langProps={props} />
                );
              }}
            </CheckStatusQR>
          }
          exact
        />
        <Route
          path="/i/:id"
          element={
            <CheckStatusQR>
              {(typeMessage) => {
                return typeMessage === "letter" || typeMessage === undefined ? (
                  <ConstructorQr langProps={props} />
                ) : (
                  <ConstructorQrTalisman langProps={props} />
                );
              }}
            </CheckStatusQR>
          }
          exact
        />
        {/* TODO remove */}
        <Route
          path="/qrt/:id"
          element={
            <CheckStatusQR>
              <ConstructorQrTalisman />
            </CheckStatusQR>
          }
          exact
        />
        <Route
          path="/letter/:id"
          element={
            <CheckStatusQR>
              <ConstructorQr />
            </CheckStatusQR>
          }
          exact
        />
        {/* TODO remove */}
        <Route
          path="/qr1001"
          element={
            <>
              <Qr1001 />
              <Footer langProps={props} exact />
            </>
          }
          exact
        />
        <Route
          path="/qr1002"
          element={
            <>
              <Qr1002 />
              <Footer langProps={props} />
            </>
          }
          exact
        />

        <Route
          path="/qr00001"
          element={
            <>
              <Qr00001 />
              <Footer langProps={props} />
            </>
          }
          exact
        />

        <Route
          path="/qr1"
          element={
            <>
              <Qr1 />
              <Footer langProps={props} />
            </>
          }
          exact
        />

        <Route
          path="/privacy"
          element={
            <>
              <PrivacyPolicy langProps={props} />
              <Footer langProps={props} color={true} />
            </>
          }
          exact
        />

        <Route
          path="/privacyqr"
          element={
            <>
              <PrivacyPolicyQr langProps={props} />
              <Footer langProps={props} color={true} />
            </>
          }
          exact
        />




        <Route
          path="/shop"
          element={
            <>
              <MainShop
                langProps={props}
                setShowPopup={setShowPopup}
                showPopup={showPopup}
              />
              <PopupShopClose />
              <Second langProps={props} />
              <Info langProps={props} />
              <ShowHideSection langProps={props} />
              <WrapProducts
                langProps={props}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                card={card}
                setCard={setCard}
              />
              <Oldnew langProps={props} />
              <SelfProductShop langProps={props} />
              <OsobennostiTehnologiiShop langProps={props} />
              <ContactsShop langProps={props} />
              <ScrollArrow />
            </>
          }
          exact
        />

        <Route
          path="/glass"
          element={
            <>
              <MainShop
                langProps={props}
                setShowPopup={setShowPopup}
                showPopup={showPopup}
              />
              <PopupShopClose />
              <Glass
                card={card}
                setCard={setCard}
                setShowPopup={setShowPopup}
                showPopup={showPopup}
              />
              <OsobennostiTehnologiiShop langProps={props} />
              <ContactsShop langProps={props} />
              <ScrollArrow />
            </>
          }
          exact
        />

        <Route
          path="/about"
          element={
            <div>
              <GlobalStyle />
              <PopupShopClose />
              <Main langProps={props} />
              <MoveStuffAround />
              <BlackSquare />
              <WithUs />
              <Uverenosti langProps={props} />
              <Freedom />
              <Different langProps={props} />
              <Carousel langProps={props} />
              <SelfProduct langProps={props} />
              <OsobennostiTehnologii langProps={props} />
              <ImgBottom />
              <Contacts langProps={props} />
            </div>
          }
          exact
        />

        <Route
          path="/gallery"
          element={
            <div>
              <GlobalStyle />
              <PopupShopClose />
              <Main langProps={props} />
              <MoveStuffAround />
              <BlackSquare />
              <WithUs />
              <Uverenosti langProps={props} />
              <Freedom langProps={props} />
              <Different langProps={props} />
              <Carousel langProps={props} />
              <SelfProduct langProps={props} />
              <OsobennostiTehnologii langProps={props} />
              <ImgBottom />
              <Contacts langProps={props} />
            </div>
          }
          exact
        />

        <Route
          path="/contact"
          element={
            <div>
              <GlobalStyle />
              <PopupShopClose />
              <Main langProps={props} />
              <MoveStuffAround />
              <BlackSquare />
              <WithUs />
              <Uverenosti langProps={props} />
              <Freedom langProps={props} />
              <Different langProps={props} />
              <Carousel langProps={props} />
              <SelfProduct langProps={props} />
              <OsobennostiTehnologii langProps={props} />
              <ImgBottom />
              <Contacts langProps={props} />
            </div>
          }
          exact
        />
        <Route
          path="/talisman"
          element={
            <div>
              <MainShop
                langProps={props}
                setShowPopup={setShowPopup}
                showPopup={showPopup}
              />
              <PopupShopClose />
              <SecondTalisman langProps={props} />
              {/*<ExampleTalisman langProps={props} />*/}
              <WrapProducts
                langProps={props}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                card={card}
                setCard={setCard}
              />
              <SelfProductShop langProps={props} />
              <OsobennostiTehnologiiShop langProps={props} />
              <ContactsShop langProps={props} />
              <ScrollArrow />
            </div>
          }
        />
        <Route
          path="/talisman/stone"
          element={
            <div>
              <PopupShopClose />
              <MainShop
                langProps={props}
                setShowPopup={setShowPopup}
                showPopup={showPopup}
              />
              <TalismanStone langProps={props} />
              <ContactsShop langProps={props} />
              <ScrollArrow />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
