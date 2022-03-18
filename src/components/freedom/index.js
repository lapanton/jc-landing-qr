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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Вы можете приобрести одно украшение или же составить набор из колец, серег, подвесок и браслетов. Используя различные миксы декоративных съемных вставок, каждый день набор может выглядеть совершенно по-новому, отражая требования этого дня или ваше настроение. Ограничения в возможностях выражения собственного стиля теперь стерты. Новая эксклюзивная шарм-коллекция ювелирных украшений поможет подчеркнуть именно Ваше настроение, исключая вероятность встретить такой же образ на улице.</p>
            <img src={bgmob} alt="JewelCocktail"/>
          </WrapperMob>
          :
          <Wrapper>
            <Inner>
              <img src={star} alt="JewelCocktail" className="freedomStar"/>
              <h3>СВОБОДА И ТВОРЧЕСТВО</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Вы можете приобрести одно украшение или же составить набор из колец, серег, подвесок и браслетов. Используя различные миксы декоративных съемных вставок, каждый день набор может выглядеть совершенно по-новому, отражая требования этого дня или ваше настроение. Ограничения в возможностях выражения собственного стиля теперь стерты. Новая эксклюзивная шарм-коллекция ювелирных украшений поможет подчеркнуть именно Ваше настроение, исключая вероятность встретить такой же образ на улице.</p>
            </Inner>
          </Wrapper>
      }
    </>
  )
}