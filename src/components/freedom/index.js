import React from 'react';
import { Wrapper, Inner } from "./withus-styled";
import star from './star.png'


export const Freedom = () => {
  return (
    <Wrapper>
      <Inner>
        <img src={star} alt="JewelCocktail" className="freedomStar"/>
        <h3>СВОБОДА И ТВОРЧЕСТВО</h3>
        <p>Наши украшения своей формой всегда будут напоминать об одном из величайших символов изобразительного искусства, а наборные вставки позволяют менять собственный комплект, максимально раскрывая творческие возможности. Максимальная свобода быть собой без однотипных украшений в шкатулке.</p>
      </Inner>
    </Wrapper>
  )
}