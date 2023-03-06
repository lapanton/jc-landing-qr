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
import fourteen from "./wom-stones/IMG_6060.png";
import fifteen from "./wom-stones/IMG_6133.png";
import sixteen from "./wom-stones/IMG_6129.png";
import seventeen from "./wom-stones/IMG_6131.png";
import eightteen from "./wom-stones/IMG_6047.png";
import nineteen from "./wom-stones/IMG_6112.png";
import twenty from "./wom-stones/IMG_6049.png";
import twentyone from "./wom-stones/IMG_6134.png";
import twentytwo from "./wom-stones/IMG_6135.png";
import twentythree from "./wom-stones/IMG_6053.png";
import twentyfour from "./wom-stones/IMG_6119.png";
import twentyfive from "./wom-stones/IMG_6125.png";
import twentysix from "./wom-stones/IMG_6128.png";
import twentyseven from "./wom-stones/IMG_6138.png";
import twentyeight from "./wom-stones/IMG_6121.png";
import twentynine from "./wom-stones/IMG_6124.png";
import thirty from "./wom-stones/IMG_6115.png";
import thirtyone from "./wom-stones/IMG_6123.png";
import thirtytwo from "./wom-stones/IMG_6132.png";
import thirtythree from "./wom-stones/IMG_6113.png";
import thirtyfour from "./wom-stones/IMG_6116.png";
import thirtyfive from "./wom-stones/IMG_6117.png";

import Mone from "./man-stones/IMG_6046.png";
import Mtwo from "./man-stones/IMG_6052.png";
import Mthree from "./man-stones/IMG_6061.png";
import Mfour from "./man-stones/IMG_6066.png";
import Mfive from "./man-stones/IMG_6059.png";
import Msix from "./man-stones/IMG_6045.png";
import Mseven from "./man-stones/IMG_6051.png";
import Meight from "./man-stones/IMG_6057.png";
import Mnine from "./man-stones/IMG_6058.png";
import Mten from "./man-stones/IMG_6050.png";
import Meleven from "./man-stones/IMG_6043.png";
import Mtwelve from "./man-stones/IMG_6044.png";
import Mthirteen from "./man-stones/IMG_6060.png";
import Mfourteen from "./man-stones/IMG_6047.png";
import Mfifteen from "./man-stones/IMG_6112.png";
import Msixteen from "./man-stones/IMG_6049.png";
import Mseventeen from "./man-stones/IMG_6053.png";
import Meightteen from "./man-stones/IMG_6056.png";
import Mnineteen from "./man-stones/IMG_6055.png";
import Mtwenty from "./man-stones/IMG_6054.png";
import {FormattedMessage} from "react-intl";


export const TalismanStone = (props) => {
  const { langProps } = props;
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
          женские<br/>
          10х10 <FormattedMessage id="size.mm" />
        </GenderSelected>

        <GenderSelected className={gender === "man" ? "man": "no"} onClick={() => setGender("man")}>
          <img src={manIcon} alt="JewelCocktail.com"/>
          мужские<br/>
          12х12 <FormattedMessage id="size.mm" />
        </GenderSelected>
      </WrapGenderButton>

      <WrapStonesView>
        <InnerViewStones>

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
                    <img src={fourteen} alt="JewelCocktail.com" className="stone-inner"/>
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
                    <img src={fifteen} alt="JewelCocktail.com" className="stone-inner"/>
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
                    <img src={seventeen} alt="JewelCocktail.com" className="stone-inner"/>
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
              </>
            )

          }

          {
            gender === "man" && (
              <>
                <ItemStones>
                  <InnerItemStones>
                    <img src={Mfive} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
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
                    <img src={Mtwo} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
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
                    <img src={Msix} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
                    </WrapGendersIcons>
                    <Wraptext>
                      <span>Лазурит</span> имеет способность помогать своему владельцу в обретении мудрости. По мнению современных литотерапевтов, он способен очистить ауру владельца и в дальнейшем оберегать его от порчи и сглаза, а также менять судьбу в лучшую сторону. Упоминания о целебных свойствах этого минерала встречаются еще в трудах Авиценны. Он считал, что лазурит смягчает течение болезни. Также небесный камень способен избавить от заболеваний почек и язвенных поражений ЖКТ, очищает кровь, обладает противомикробным действием, успешно лечит болезни кожи, облегчает роды. Ляпис-лазурь поможет нормализовать давление, к тому же он используется при лечении психических заболеваний. Издревле камень использовали в белой магии, а йоги очищали с его помощью ауру от негативных влияний.

                    </Wraptext>
                  </InnerItemStones>
                  <InShop>
                    <Link to="/talisman">в магазин</Link>
                  </InShop>
                </ItemStones>

                <ItemStones>
                  <InnerItemStones>
                    <img src={Meight} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
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
                    <img src={Mnine} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
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
                    <img src={Meleven} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
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
                    <img src={Mthirteen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
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
                    <img src={Mseventeen} alt="JewelCocktail.com" className="stone-inner"/>
                    <WrapGendersIcons>
                      <img src={manIcon} alt="JewelCocktail.com"/>
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
                    <img src={seventeen} alt="JewelCocktail.com" className="stone-inner"/>
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
              </>
            )

          }
        </InnerViewStones>

      </WrapStonesView>

    </Wrapper>
  )
};
