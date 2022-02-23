import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
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
import {Slider} from "./components/slider";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    // font-family: 'Inter', sans-serif;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    button:focus {outline:0;}
  }
`;

export const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={
              <div>
                <GlobalStyle />
                <Main />
                <MoveStuffAround/>
                <BlackSquare />
                <WithUs/>
                <Uverenosti/>
                <Freedom/>
                <Different/>
                <Slider/>
                <SelfProduct/>
                <OsobennostiTehnologii/>
                <ImgBottom/>
                <Contacts/>
              </div>
            } exact/>

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

        </Routes>
    </Router>
  );
}
