import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  WrapGenderButton,
  GenderSelected,
  WrapStonesView,
  InnerViewStones,
  ItemStones,
  InnerItemStones,
  WrapGendersIcons,
  Wraptext,
  InShop
} from "./styled-talismanStone";
import wonIcon from "./woman-gender.png";
import manIcon from "./man-gender.png";

import one from "./bi-gender/1.png";



export const TalismanStone = () => {
  useEffect(() => {
    document.body.style.background = "#000";
    return () =>  document.body.style.background = "#DBDDDE";
  }, []);
  const [gender, setGender] = useState("wom"); // "man"
  return (
    <Wrapper>

      <WrapGenderButton>
        <GenderSelected className={gender === "wom" ? "woman": "no"} onClick={() => setGender("wom")}>
          <img src={wonIcon} alt="JewelCocktail.com"/>
          женская<br/>
          10х10 мм
        </GenderSelected>

        <GenderSelected className={gender === "man" ? "man": "no"} onClick={() => setGender("man")}>
          <img src={manIcon} alt="JewelCocktail.com"/>
          мужская<br/>
          12х12 мм
        </GenderSelected>
      </WrapGenderButton>

      <WrapStonesView>
        <InnerViewStones>
          <ItemStones>
            <InnerItemStones>
              <img src={one} alt="JewelCocktail.com" className="stone-inner"/>
              <WrapGendersIcons>
                <img src={wonIcon} alt="JewelCocktail.com"/>
                <img src={manIcon} alt="JewelCocktail.com"/>
              </WrapGendersIcons>
              <Wraptext>
                <span>
                тигровый глаз</span> помогает иметь четкие мысли и трезво смотреть на вещи, поскольку в
                первую очередь воздействует на разум. помогает твёрдо осознать собственные потребности
                человека и их взаимосвязь с потребностями окружающих. Созерцание личного символа,
                вырезанного на камне, является отличным способом погрузится в медитацию.
              </Wraptext>
            </InnerItemStones>
            <InShop>
              <Link to="/talisman">в магазин</Link>
            </InShop>
          </ItemStones>
          <ItemStones>
            <InnerItemStones>
              <img src={one} alt="JewelCocktail.com" className="stone-inner"/>
              <WrapGendersIcons>
                <img src={wonIcon} alt="JewelCocktail.com"/>
                <img src={manIcon} alt="JewelCocktail.com"/>
              </WrapGendersIcons>
              <Wraptext>
                <span>
                тигровый глаз</span> помогает иметь четкие мысли и трезво смотреть на вещи, поскольку в
                первую очередь воздействует на разум. помогает твёрдо осознать собственные потребности
                человека и их взаимосвязь с потребностями окружающих. Созерцание личного символа,
                вырезанного на камне, является отличным способом погрузится в медитацию.
              </Wraptext>
            </InnerItemStones>
            <InShop>
              <Link to="/talisman">в магазин</Link>
            </InShop>
          </ItemStones>
          <ItemStones>
            <InnerItemStones>
              <img src={one} alt="JewelCocktail.com" className="stone-inner"/>
              <WrapGendersIcons>
                <img src={wonIcon} alt="JewelCocktail.com"/>
                <img src={manIcon} alt="JewelCocktail.com"/>
              </WrapGendersIcons>
              <Wraptext>
                <span>
                тигровый глаз</span> помогает иметь четкие мысли и трезво смотреть на вещи, поскольку в
                первую очередь воздействует на разум. помогает твёрдо осознать собственные потребности
                человека и их взаимосвязь с потребностями окружающих. Созерцание личного символа,
                вырезанного на камне, является отличным способом погрузится в медитацию.
              </Wraptext>
            </InnerItemStones>
            <InShop>
              <Link to="/talisman">в магазин</Link>
            </InShop>
          </ItemStones>
          {
            gender === "wom" && (
              <>

              </>
            )

          }

          {
            gender === "man" && (
              <>

              </>
            )

          }
        </InnerViewStones>

      </WrapStonesView>

    </Wrapper>
  )
};
