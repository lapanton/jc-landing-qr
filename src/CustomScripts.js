import React from "react";
import { Helmet } from "react-helmet";
import {useLocation} from "react-router-dom";

export const CustomScripts = () => {
  const location = useLocation();
  if (location.pathname === "/glass" || location.pathname === "/" || location.pathname === "/shop") {
    alert("BBBBB")
    return (
      <>
        <Helmet>
          <script src="js/script.js"></script>
        </Helmet>
      </>
    )
  }
  return (
    <>

    </>
  )
};
