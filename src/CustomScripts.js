import React from "react";
import { Helmet } from "react-helmet";
import {useLocation} from "react-router-dom";
import StarfieldAnimation from "react-starfield-animation";

export const CustomScripts = () => {
  const location = useLocation();
  if (location.pathname === "/glass" || location.pathname === "/" || location.pathname === "/shop") {
    return (
      <>
        <Helmet>
          <script src="js/script.js"></script>
        </Helmet>
      </>
    )
  }
  if (location.pathname === "/talisman" || location.pathname === "/talisman/stone") {
    return (
      <StarfieldAnimation
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh'
        }}
        depth={4000}
      />
    )
  }
  return (
    <>

    </>
  )
};
