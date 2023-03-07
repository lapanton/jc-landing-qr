import React from 'react';
import { Wrapper } from "./description-style";

export const Description = (props) => {
  const { langProps } = props;
  return (
    <Wrapper>
        <>
          <h1>{langProps.locale === "ru" ? "Создай свой талисман" : "Create your own talisman"}</h1>
        </>
    </Wrapper>
  );
};
