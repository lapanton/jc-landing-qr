import React, {useEffect, useState} from "react";
import { Wrapper } from "./popupshopclose-styled";


export const PopupShopClose = () => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 4000);
  }, []);
  return(
    <>
      {hide && (
        <Wrapper>
          <p>Принимаем заказы с 29 января 2023 года</p>
          <div onClick={() => setHide(false)}>Закрыть</div>
        </Wrapper>
      )}

    </>
  );
};
