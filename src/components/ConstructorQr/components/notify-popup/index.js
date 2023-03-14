import React, {useEffect} from "react";
import {InnerPopup, Wrapper} from "./notify-styled";

export const NotifyPopup = (props) => {
  const {value} = props;
  return(
    <Wrapper>
      <InnerPopup>
        {value}
      </InnerPopup>
    </Wrapper>
  )
};