import React, {useEffect} from "react";
import StarfieldAnimation from 'react-starfield-animation';
import {Wrapper} from "./styled-talisman";

export const TalismanPage = (props) => {
  const { card, setCard, setShowPopup, showPopup } = props;
  useEffect(() => {
    document.body.style.background = "#000";
    return () =>  document.body.style.background = "#DBDDDE";
  }, []);
  return (
    <Wrapper>
      Talisman page
    </Wrapper>
  )
};
