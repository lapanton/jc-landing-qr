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

import one from "./wom-stones/IMG_6136.png";
import two from "./wom-stones/IMG_6061.png";
import three from "./wom-stones/IMG_6066.png";
import four from "./wom-stones/IMG_6130.png";
import five from "./wom-stones/IMG_6127.png";
import six from "./wom-stones/IMG_6051.png";
import seven from "./wom-stones/IMG_6137.png";
import eight from "./wom-stones/IMG_6058.png";
import nine from "./wom-stones/IMG_6050.png";
import ten from "./wom-stones/IMG_6118.png";
import eleven from "./wom-stones/IMG_6114.png";
import twelve from "./wom-stones/IMG_6120.png";
import thirteen from "./wom-stones/IMG_6126.png";
import fourteen from "./wom-stones/IMG_6133.png";
import fifteen from "./wom-stones/IMG_6129.png";
import sixteen from "./wom-stones/IMG_6131.png";
import seventeen from "./wom-stones/IMG_6047.png";
import eightteen from "./wom-stones/IMG_6112.png";
import nineteen from "./wom-stones/IMG_6049.png";
import twenty from "./wom-stones/IMG_6134.png";
import twentyone from "./wom-stones/IMG_6135.png";
import twentytwo from "./wom-stones/IMG_6053.png";
import twentythree from "./wom-stones/IMG_6119.png";
import twentyfour from "./wom-stones/IMG_6125.png";
import twentyfive from "./wom-stones/IMG_6125.png";
import twentysix from "./wom-stones/IMG_6128.png";
import twentyseven from "./wom-stones/IMG_6128.png";
import twentyeight from "./wom-stones/IMG_6138.png";
import twentynine from "./wom-stones/IMG_6121.png";
import thirty from "./wom-stones/IMG_6124.png";
import thirtyone from "./wom-stones/IMG_6115.png";
import thirtytwo from "./wom-stones/IMG_6123.png";
import thirtythree from "./wom-stones/IMG_6132.png";
import thirtyfour from "./wom-stones/IMG_6113.png";
import thirtyfive from "./wom-stones/IMG_6116.png";
import thirtysix from "./wom-stones/IMG_6117.png";


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

          {/*<ItemStones>*/}
          {/*  <InnerItemStones>*/}
          {/*    <img src={one} alt="JewelCocktail.com" className="stone-inner"/>*/}
          {/*    <WrapGendersIcons>*/}
          {/*      <img src={wonIcon} alt="JewelCocktail.com"/>*/}
          {/*      <img src={manIcon} alt="JewelCocktail.com"/>*/}
          {/*    </WrapGendersIcons>*/}
          {/*    <Wraptext>*/}
          {/*      <span>*/}
          {/*      тигровый глаз</span> помогает иметь четкие мысли и трезво смотреть на вещи, поскольку в*/}
          {/*      первую очередь воздействует на разум. помогает твёрдо осознать собственные потребности*/}
          {/*      человека и их взаимосвязь с потребностями окружающих. Созерцание личного символа,*/}
          {/*      вырезанного на камне, является отличным способом погрузится в медитацию.*/}
          {/*    </Wraptext>*/}
          {/*  </InnerItemStones>*/}
          {/*  <InShop>*/}
          {/*    <Link to="/talisman">в магазин</Link>*/}
          {/*  </InShop>*/}
          {/*</ItemStones>*/}

          {
            gender === "wom" && (
              <>
                <ItemStones>
                  <InnerItemStones>
                    <img src={one} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                <span>Змеевик</span> — поглотитель негативной энергии и защитник. Литотерапевты советуют хранить лечебные растворы в пузырьках из змеевика, они утверждают, что камень обладает универсальными антисептическими свойствами. Браслеты из серпентина способствуют нормализации кровяного давления. Украшения способны снять сильные головные боли. Замечено, что у владельцев змеевика быстрее проходит восстановление после хирургического вмешательства и травм.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={two} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Агат</span> приносит здоровье, счастье и долголетие. Он укреплял дух, оберегал от зла. Агату приписывается способность вбирать в себя отрицательную энергию, защищая от нее владельца, поэтому литотерапевты рекомендуют очищать камень от негатива, промывая его в проточной воде. Чтобы облегчить болезни дыхательных путей, камень носят в виде бус и брошей; для нормализации сердечной деятельности агат принято носить на левой руке, а в качестве успокоительного средства — на правой.

                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={three} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Агат</span> приносит здоровье, счастье и долголетие. Он укреплял дух, оберегал от зла. Агату приписывается способность вбирать в себя отрицательную энергию, защищая от нее владельца, поэтому литотерапевты рекомендуют очищать камень от негатива, промывая его в проточной воде. Чтобы облегчить болезни дыхательных путей, камень носят в виде бус и брошей; для нормализации сердечной деятельности агат принято носить на левой руке, а в качестве успокоительного средства — на правой.

                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={four} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Яшма</span> — источник доброй энергии. Изделия из этого камня не могут навредить его хозяину. Все предметы и ювелирные украшения из яшмы действуют как обереги. Они приносят счастье и мир в дом. В древности яшмой исцеляли зрение и оберегали дома от сглаза. В храмах делали полы из яшмы, поскольку этот камень считался божественным, изгоняющим бесов. Колдуны и маги хранили свое вещи в шкатулках и коробах, изготовленных из этого минерала. Также считалось, что для совершения обрядов на расстоянии, портрет человека необходимо поместить в яшмовую рамку.

                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={five} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Говлит</span> официально был описан только в конце XIX века, но известен минерал был с древних времён. Он способен расслабить психику и защитить человека от любого негатива, избавив от дурных мыслей. Популярен этот камень и у толкователей снов. Считается, что положенный у изголовья кровати камень приносит вещие сновидения. В Средние Века минерал был известен как покровитель студентов и учёных. Пористая структура камня ассоциировалась со способностью говлита считывать информацию из окружающей среды и передавать знания владельцу.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={six} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Обсидиан</span> является мощным поглотителем энергии и хранителем информации. Из него изготавливают магические шары и зеркала для того, чтобы увидеть прошлое и будущее человека. А талисманы из обсидиана способны оберегать своего хозяина, притягивая на себя весь негатив, обращенный в его сторону от посторонних людей. Однако с камнем нужно быть предельно осторожным. Злые помыслы камень обращает против того, кто их задумал. Носителю украшений из обсидиана следует быть предельно честным перед самим собой, и тогда этот камень способен принести удачу.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={seven} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Яшма</span> — источник доброй энергии. Изделия из этого камня не могут навредить его хозяину. Все предметы и ювелирные украшения из яшмы действуют как обереги. Они приносят счастье и мир в дом. В древности яшмой исцеляли зрение и оберегали дома от сглаза. В храмах делали полы из яшмы, поскольку этот камень считался божественным, изгоняющим бесов. Колдуны и маги хранили свое вещи в шкатулках и коробах, изготовленных из этого минерала. Также считалось, что для совершения обрядов на расстоянии, портрет человека необходимо поместить в яшмовую рамку.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={eight} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Пирит</span> литотерапевты советуют использовать в качестве средства, укрепляющего нервную систему. Он поможет при нервном истощении, интенсивных физических и психологических нагрузках, во время стрессовых ситуаций. Он снимет напряжение и улучшит настроение. Вместе с этим на смену бессоннице придёт спокойный здоровый сон. Эти свойства связаны с золотым цветом пирита. Действует пирит на клеточном уровне, заряжая каждую частичку организма человека энергией, восстанавливая обменные процессы. Это положительно сказывается на работе всех систем и органов. Вместе с бодростью амулет из пирита приносит человеку молодость. Это сказывается не только на внутреннем ощущении, но и на внешности. Улучшается цвет лица, разглаживаются морщины, глаза блестят.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={nine} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Тигровый глаз</span> — камень мудрецов и правителей. Он предостерегает носителя от необдуманных решений, импульсивных поступков, развивает интуицию, способность к чтению невербальных сигналов собеседника. Самоцвет может стать могущественным оберегом против нечистой силы. Первые упоминания о магических свойствах тигрового глаза встречаются в индийских и древнеримских манускриптах. Талисман помогает выявить ложь, неискренность, лицемерие. Оберег с тигровым глазом способен предупредить носителя об опасности, которая ему угрожает. В такой ситуации он начинает тяжелеть. Если хозяин это заметил, лучше всего покинуть место, где человек сейчас находится, потому что может произойти несчастье. Самоцвет дарует вдохновение, помогает преодолеть кризис идей. За это самоцвет ценится среди актеров, писателей, музыкантов, художников.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={ten} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Натуральный жемчуг</span> — кладезь ценных микроэлементов, и именно это его свойство чаще всего использовалось в лечебных целях. Иногда на камне выдерживали воду, иногда растирали до состояния мельчайшего порошка, но в итоге его принимали внутрь, чтобы организм насытился всеми полезными веществами. Сегодня даже в массовой косметике используется этот органоминерал для укрепления волос, ногтей и даже омоложения кожи. С древних времен жемчуг ассоциировали с красотой, невинностью и искренними чувствами. Так, в Древнем Риме это был камень богини любви и красоты Венеры. Кроме того, многие считают жемчуг способным приносить своему владельцу большую удачу, в том числе финансовую. Необыкновенный драгоценный камень принесет гармонию и покой в сердце, убережет от чужих дурных мыслей.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={eleven} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Натуральный жемчуг</span> — кладезь ценных микроэлементов, и именно это его свойство чаще всего использовалось в лечебных целях. Иногда на камне выдерживали воду, иногда растирали до состояния мельчайшего порошка, но в итоге его принимали внутрь, чтобы организм насытился всеми полезными веществами. Сегодня даже в массовой косметике используется этот органоминерал для укрепления волос, ногтей и даже омоложения кожи. С древних времен жемчуг ассоциировали с красотой, невинностью и искренними чувствами. Так, в Древнем Риме это был камень богини любви и красоты Венеры. Кроме того, многие считают жемчуг способным приносить своему владельцу большую удачу, в том числе финансовую. Необыкновенный драгоценный камень принесет гармонию и покой в сердце, убережет от чужих дурных мыслей.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={twelve} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Натуральный жемчуг</span> — кладезь ценных микроэлементов, и именно это его свойство чаще всего использовалось в лечебных целях. Иногда на камне выдерживали воду, иногда растирали до состояния мельчайшего порошка, но в итоге его принимали внутрь, чтобы организм насытился всеми полезными веществами. Сегодня даже в массовой косметике используется этот органоминерал для укрепления волос, ногтей и даже омоложения кожи. С древних времен жемчуг ассоциировали с красотой, невинностью и искренними чувствами. Так, в Древнем Риме это был камень богини любви и красоты Венеры. Кроме того, многие считают жемчуг способным приносить своему владельцу большую удачу, в том числе финансовую. Необыкновенный драгоценный камень принесет гармонию и покой в сердце, убережет от чужих дурных мыслей.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={thirteen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Гематит</span> один из сильнейших магических камней встречается в книгах и писаниях многих древних народов. Люди верят в защитные свойства камня. Его носят, чтобы уберечься от сглаза, матери надевали обереги на детей для защиты от несчастных случаев, римские воины украшали гематитом щиты. Для египтян камень был символом культа Исиды, из него делали жуков-скарабеев, которые служили земными хранителями богини. Основные целебные свойства гематита связаны с его воздействие на кровеносную систему человека. Он чистит кровь, укрепляет сосуды, нормализует уровень гемоглобина. Кроме того, минерал оказывает тонизирующее действие на организм и может поднимать артериальное давление, поэтому он рекомендован людям с пониженным давлением, а вот гипертоникам стоит носить его с осторожностью.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={fourteen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Родохрозит</span> имеет удивительные свойства: очищение души, укрепление любви и семейных ценностей, увеличение стремления к новым знаниям. Народные лекари часто рекомендуют ношение украшений с родохрозитом в следующих случаях: при заболеваниях почек; для очищения крови, ЖКТ; нормализации работы щитовидной железы; борьбы с вирусными инфекциями; очищения печени. Минерал способствует улучшению памяти, гармонизации жизненной энергии, усилению сексуального потенциала. Кроме того, родохрозит широко используется в массаже: один такой сеанс способен существенно повысить тонус организма, придать ему сил и зарядить бодростью.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={fifteen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Яшма</span> — источник доброй энергии. Изделия из этого камня не могут навредить его хозяину. Все предметы и ювелирные украшения из яшмы действуют как обереги. Они приносят счастье и мир в дом. В древности яшмой исцеляли зрение и оберегали дома от сглаза. В храмах делали полы из яшмы, поскольку этот камень считался божественным, изгоняющим бесов. Колдуны и маги хранили свое вещи в шкатулках и коробах, изготовленных из этого минерала. Также считалось, что для совершения обрядов на расстоянии, портрет человека необходимо поместить в яшмовую рамку.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={sixteen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Нефрит</span> является олицетворением пяти качеств человека: честность, справедливость, милосердие, мужество и мудрость. Если его возьмет человек с дурными помыслами, то камень потемнеет. Украшения с этим минералом способны защитить человека от негативного воздействия потусторонних сил. Кольцо из нефрита помогает в достижении целей и сберегает семейное счастье. Целебные свойства нефрита также обширны. Массаж нефритовыми пластинами способен снять боль и излечить растяжения, ушибы и вывихи. Помогает этот камень и в избавлении от различных инфекционных и желудочно-кишечных заболеваний. Благотворно влияет на сон человека, избавляя от кошмаров и бессонниц.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={seventeen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Орех</span> — дерево победы над внешними обстоятельствами. Помогает быстрому восстановлению сил. Предоставляет много верных соратников. Делает человека стойким в самых непредвиденных ситуациях. Дерево - высший символ бесконечности бытия, умирания и обновления жизни и природы. Деревья считались священными, обладавшими магической силой в большинстве культур и цивилизаций.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={eightteen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Сандалу</span> покровительствует ночное светило и могущественная стихия Воздуха, которая наделяет растение целительной светлой энергетикой. Особенно почитается дерево индусами, так как согласно верованиям, божества любят дурманящий сандаловый аромат. Дерево - высший символ бесконечности бытия, умирания и обновления жизни и природы. Деревья считались священными, обладавшими магической силой в большинстве культур и цивилизаций.

                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={nineteen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Красное дерево</span> помогает человеку жить в гармонии с природой, очистить ум, обрести более глубокое понимание себя, поэтому следование старинной традиции отправляться на прогулку с красным деревом обещает укрепить вашу связь с природой и самими собой. Дерево - высший символ бесконечности бытия, умирания и обновления жизни и природы. Деревья считались священными, обладавшими магической силой в большинстве культур и цивилизаций.


                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twenty} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Авантюрин</span> является амулетом в любовных отношениях, но не стоит носить его постоянно, ведь он изменчив и капризен. Его можно надеть, если начинаете какое-то важное дело и хотите заручиться поддержкой Фортуны. Существует мнение, что за игровым столом авантюрин также способен принести владельцу большую удачу, но если использовать украшение с авантюрином постоянно, то можно разориться. Что же касается целебных свойств, то этот камень следует надевать людям, которые имеют проблемы с кожным покровом. Для выздоровления надо либо ежедневно делать массаж пораженного участка кожи, либо носить украшение с авантюрином на этом месте.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>
                <ItemStones>
                  <InnerItemStones>
                    <img src={twentyone} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Авантюрин</span> является амулетом в любовных отношениях, но не стоит носить его постоянно, ведь он изменчив и капризен. Его можно надеть, если начинаете какое-то важное дело и хотите заручиться поддержкой Фортуны. Существует мнение, что за игровым столом авантюрин также способен принести владельцу большую удачу, но если использовать украшение с авантюрином постоянно, то можно разориться. Что же касается целебных свойств, то этот камень следует надевать людям, которые имеют проблемы с кожным покровом. Для выздоровления надо либо ежедневно делать массаж пораженного участка кожи, либо носить украшение с авантюрином на этом месте.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentytwo} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Оникс</span> обладает сильной энергетикой. У древних греков, ацтеков, в Индии это был камень лидера, человека, смело идущего к цели. Он давал дополнительный заряд энергии и приносил удачу. Вождям оникс помогал обуздать свои эмоции, сохранять холодный ум, добиться уважения подданных. Считалось, что этот камень способен забирать на себя страхи своего обладателя, придавая ему отваги и решительности, поэтому его советовали носить неуверенным и робким людям. Талисман из оникса способен был противостоять сглазу и негативной энергии, защищать от несчастных случаев и врагов.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentythree} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentyfour} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentyfive} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentysix} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentyseven} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentyeight} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentynine} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={twentynine} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Кошачий глаз</span> - минерал отводит от носителя смерть. Такие верования возникли из-за ассоциации с кошкой, у которой девять жизней. Дворянам, которые покидали Россию после революции и гражданской войны, кошачий кристалл помогал пережить тяготы разрыва с родиной. Талисман несколько по-разному действует на представителей противоположного пола, подчеркивая нужные качества. Мужчины приобретают твердость характера, смелость и упорство. Женщины — шарм, загадочность и очарование. Минерал способен отвести беду, избавить носителя от сглаза и порчи. Кристалл делает носителя внимательнее к знакам судьбы, которые посылаются свыше каждому человеку. Он открывает связь с космосом и укрепляет ауру. Считается, что благодаря талисману можно научиться читать намеки и невербальные знаки, которые люди применяют в общении.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={thirty} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Лунно-зеленый опал</span> по древним поверьям способен поддерживать таланты своего владельца, и неважно, направлены ли они во благо или во зло. Опал — эмоциональный камень, отражающий настроение носителя. Он усиливает эмоции и снимает запреты. Поощряет свободу и независимость. Опал стимулирует оригинальность и творчество. Помогает высвободить гнев и заявить о себе, помогая найти и выразить свое истинное «я». Это камень обманчивых надежд и иллюзий, тайных страстей, суеверий, любимый камень магов и алхимиков. Опалы усиливают интуицию и способствуют вдохновению. Считается, что эти удивительные самоцветы помогают вспомнить прошлые жизни. Магические свойства связаны с цветом камня, и, поскольку цвета опала очень разнообразны, таковы его магические свойства.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={thirtyone} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Голубой опал</span> по древним поверьям способен поддерживать таланты своего владельца, и неважно, направлены ли они во благо или во зло. Опал — эмоциональный камень, отражающий настроение носителя. Он усиливает эмоции и снимает запреты. Поощряет свободу и независимость. Опал стимулирует оригинальность и творчество. Помогает высвободить гнев и заявить о себе, помогая найти и выразить свое истинное «я». Это камень обманчивых надежд и иллюзий, тайных страстей, суеверий, любимый камень магов и алхимиков. Опалы усиливают интуицию и способствуют вдохновению. Считается, что эти удивительные самоцветы помогают вспомнить прошлые жизни. Магические свойства связаны с цветом камня, и, поскольку цвета опала очень разнообразны, таковы его магические свойства.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={thirtytwo} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Огненно-снежный опал</span> по древним поверьям способен поддерживать таланты своего владельца, и неважно, направлены ли они во благо или во зло. Опал — эмоциональный камень, отражающий настроение носителя. Он усиливает эмоции и снимает запреты. Поощряет свободу и независимость. Опал стимулирует оригинальность и творчество. Помогает высвободить гнев и заявить о себе, помогая найти и выразить свое истинное «я». Это камень обманчивых надежд и иллюзий, тайных страстей, суеверий, любимый камень магов и алхимиков. Опалы усиливают интуицию и способствуют вдохновению. Считается, что эти удивительные самоцветы помогают вспомнить прошлые жизни. Магические свойства связаны с цветом камня, и, поскольку цвета опала очень разнообразны, таковы его магические свойства.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={thirtythree} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Мрамор</span> быстро подстраивается под энергетику хозяина и начинает благотворно влиять на его жизнь: ограждает от злых людей, опасностей; способствует доброжелательным отношениям в семье; помогает завоевать доверие окружающих, найти свою настоящую любовь. Талисман из мрамора помогает сохранить гармонию и тепло в отношениях с любимым человеком, устранить ревность и недоверие, укрепить семейные узы, наладить отношения среди всех домочадцев. Продавцам, врачам амулет подарит защиту от ошибочных действий.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={thirtyfour} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Мрамор</span> быстро подстраивается под энергетику хозяина и начинает благотворно влиять на его жизнь: ограждает от злых людей, опасностей; способствует доброжелательным отношениям в семье; помогает завоевать доверие окружающих, найти свою настоящую любовь. Талисман из мрамора помогает сохранить гармонию и тепло в отношениях с любимым человеком, устранить ревность и недоверие, укрепить семейные узы, наладить отношения среди всех домочадцев. Продавцам, врачам амулет подарит защиту от ошибочных действий.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={thirtyfive} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Серебро</span> — это лунный металл. Духовная структура серебра способна отражать эмоциональный настрой человека. Серебро может хранить информацию об эмоциональном мире хозяина. Серебро может снимать и перераспределять негативную энергию и поэтому может использоваться для чистки энергетического поля человека. Этот металл — прекрасный очиститель вод, антисептик. Серебро – металл чистый и девственный, хранящий в себе принцип неоскверненной чистоты, связан с Луной – покровительницей тайных знаний и сил. Ношение предметов из серебра способствует развитию природной интуиции (особенно у женщин) и других паранормальных способностей. Серебро попадая в энергетику человека очищает ее и способствует его духовному развитию.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={thirtysix} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={wonIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Серебро</span> — это лунный металл. Духовная структура серебра способна отражать эмоциональный настрой человека. Серебро может хранить информацию об эмоциональном мире хозяина. Серебро может снимать и перераспределять негативную энергию и поэтому может использоваться для чистки энергетического поля человека. Этот металл — прекрасный очиститель вод, антисептик. Серебро – металл чистый и девственный, хранящий в себе принцип неоскверненной чистоты, связан с Луной – покровительницей тайных знаний и сил. Ношение предметов из серебра способствует развитию природной интуиции (особенно у женщин) и других паранормальных способностей. Серебро попадая в энергетику человека очищает ее и способствует его духовному развитию.
                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>




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
