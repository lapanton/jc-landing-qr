import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Link, Navigate
import { Footer } from "./footer";
import { createGlobalStyle } from "styled-components";
import { Main } from "./components/first";
import  {BlackSquare } from "./components/blackSquare";
import {WithUs} from "./components/withUs";
import {Uverenosti} from "./components/uverennosti";
import {Freedom} from "./components/freedom";
import {Different} from "./components/different";
import {SelfProduct} from "./components/selfProduct";
import {OsobennostiTehnologii} from "./components/osobennostiTehnologii";
import {ImgBottom} from "./components/imgBottom";
import MoveStuffAround from "./components/blackSquare/lineTicker";
import {Contacts} from "./components/contacts";
import {Qr1001} from "./giftMessage/qr1001";
import {Qr1002} from "./giftMessage/qr1002";
import {Qr00001} from "./giftMessage/qr00001";
import {Qr1} from "./giftMessage/qr1";
// import {SliderGalerry} from "./components/slider";
import {Carousel} from "./components/Carousel/Carousel";
import {ConstructorQr} from './components/ConstructorQr/ConstructorQr';
import CheckStatusQR from "./hocs/CheckStatusQR";
import {PrivacyPolicy} from "./components/PrivacyPolicy";

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
// /shop

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
    @media screen and (max-width: 768px) {
      overflow: hidden;
    }
  }
`;

export const App = (props) => {
  // http://localhost:3000/qr/PU7H9Gx3ly
  // http://localhost:3000/letter/piJ2N1KiBC

  const [showPopup, setShowPopup] = useState(null);
  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    if (window.location.pathname === "/about") {
      setTimeout(() => {
        const toHeight = isMobile ? 4300 : 3950;
        window.scrollTo({top: toHeight, left: 0, behavior: 'smooth'});
      }, 1000);
    }
    if (window.location.pathname === "/gallery") {
      setTimeout(() => {
        const toHeight = isMobile ? 3850 : 3500;
        window.scrollTo({top: toHeight, left: 0, behavior: 'smooth'});
      }, 1000);
    }
    if (window.location.pathname === "/contact") {
      setTimeout(() => {
        const toHeight = isMobile ? 5850 : 8900;
        window.scrollTo({top: toHeight, left: 0, behavior: 'smooth'});
      }, 1000);
    }
  }, [isMobile]);

  return (
    <Router>

        <Routes>
            <Route path="/" element={
              <div>
                <GlobalStyle />
                <Main langProps={props} />
                <MoveStuffAround/>
                <BlackSquare />
                <WithUs/>
                <Uverenosti/>
                <Freedom/>
                <Different/>
                <Carousel/>
                <SelfProduct/>
                <OsobennostiTehnologii/>
                <ImgBottom/>
                <Contacts/>
              </div>
            } exact/>
            <Route path="/qr/:id"
                   element={
                     <CheckStatusQR>
                      <ConstructorQr />
                     </CheckStatusQR>
                   }
                     exact />
          <Route path="/letter/:id"
                 element={
                   <CheckStatusQR>
                     <ConstructorQr />
                   </CheckStatusQR>
                 }
                 exact />
            <Route path="/qr1001" element={<>
                <Qr1001/>
                <Footer exact />
            </>
            } exact />
            <Route path="/qr1002" element={<>
                <Qr1002/>
                <Footer />
            </>
            } exact />

            <Route path="/qr00001" element={<>
                <Qr00001/>
                <Footer />
            </>
            } exact />

            <Route path="/qr1" element={<>
                <Qr1/>
                <Footer />
            </>
            } exact />

          <Route path="/privacy" element={<>
            <PrivacyPolicy/>
            <Footer />
          </>
          } exact />

          <Route path="/shop" element={
            <>
              <MainShop langProps={props} setShowPopup={setShowPopup} showPopup={showPopup} />
              <Second/>
              <Info />
              <ShowHideSection />
              <WrapProducts showPopup={showPopup} setShowPopup={setShowPopup} />
              <SelfProductShop />
              <OsobennostiTehnologiiShop />
              <ContactsShop />
              <ScrollArrow />
            </>
          } exact />

          <Route path="/about" element={
            <div>
              <GlobalStyle />
              <Main langProps={props} />
              <MoveStuffAround/>
              <BlackSquare />
              <WithUs/>
              <Uverenosti/>
              <Freedom/>
              <Different/>
              <Carousel/>
              <SelfProduct/>
              <OsobennostiTehnologii/>
              <ImgBottom/>
              <Contacts/>
            </div>
          } exact />

          <Route path="/gallery" element={
            <div>
              <GlobalStyle />
              <Main langProps={props} />
              <MoveStuffAround/>
              <BlackSquare />
              <WithUs/>
              <Uverenosti/>
              <Freedom/>
              <Different/>
              <Carousel/>
              <SelfProduct/>
              <OsobennostiTehnologii/>
              <ImgBottom/>
              <Contacts/>
            </div>
          } exact />


          <Route path="/contact" element={
            <div>
              <GlobalStyle />
              <Main langProps={props} />
              <MoveStuffAround/>
              <BlackSquare />
              <WithUs/>
              <Uverenosti/>
              <Freedom/>
              <Different/>
              <Carousel/>
              <SelfProduct/>
              <OsobennostiTehnologii/>
              <ImgBottom/>
              <Contacts/>
            </div>
          } exact />

        </Routes>
    </Router>
  );
}
