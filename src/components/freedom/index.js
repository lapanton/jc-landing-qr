import React, { useEffect, useState } from 'react';
import { Wrapper, Inner, WrapperMob } from "./withus-styled";
import star from './star.png';
import bgmob from './bgmob.png';


export const Freedom = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;
  return (
    <>
      {
        isMobile ?
          <WrapperMob>
            <h3>СВОБОДА И ТВОРЧЕСТВО</h3>
            <p>Наши украшения своей формой всегда будут напоминать об одном из величайших символов изобразительного искусства, а наборные вставки позволяют менять собственный комплект, максимально раскрывая творческие возможности. Максимальная свобода быть собой без однотипных украшений в шкатулке.</p>
            <img src={bgmob} alt="JewelCocktail"/>
          </WrapperMob>
          :
          <Wrapper>
            <Inner>
              <img src={star} alt="JewelCocktail" className="freedomStar"/>
              <h3>СВОБОДА И ТВОРЧЕСТВО</h3>
              <p>Наши украшения своей формой всегда будут напоминать об одном из величайших символов изобразительного искусства, а наборные вставки позволяют менять собственный комплект, максимально раскрывая творческие возможности. Максимальная свобода быть собой без однотипных украшений в шкатулке.</p>
            </Inner>
          </Wrapper>
      }
    </>
  )
}