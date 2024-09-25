import React from "react";
import { Wrapper } from "./footer-styled";

export const Footer = (props) => {
  const { langProps, color } = props;
  console.log("black", color);
  return (
    <Wrapper color={color ? "#000" : "#fff"}>
      <p>© 2021 Jewel Cocktail</p>
      <p>
        {langProps.locale === "ru"
          ? "Использование любых материалов с данного ресурса возможно только после письменного согласия владельца авторских прав."
          : "The use of any materials from this resource is possible only with the written consent of the owner of the copyright."}
      </p>
    </Wrapper>
  );
};
