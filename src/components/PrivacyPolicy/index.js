import React from 'react';
import { Wrapper, HeaderDiv, WrapContacts, WrapLogo, WrapContent } from "./privacy-styled";
import logo from "../first/logo.png";
import whatsapp from "../../whatsapp.png";
import telegram from "../../telegram.png";

export const PrivacyPolicy = (props) => {
  const { langProps } = props;
  console.log('langProps.locale', langProps.locale);
  return (
    <>
    {langProps.locale === "ru" ?
      <Wrapper>
        <HeaderDiv>
          <WrapLogo>
            <a href="/" className="wrapLogo">
              <img src={logo} alt="JewelCocktail" />
            </a>
          </WrapLogo>
          <WrapContacts>
            <a href="mailto:contact@jewelcocktail.com" rel="noreferrer" >
              contact@jewelcocktail.com
            </a>
          </WrapContacts>
        </HeaderDiv>
        <WrapContent>
          <h2>Оферта:</h2>
          <p>Предложения на сайте https://jewelcocktail.com не является публичной офертой.</p>

          <h2>Размещение запрещённого контента:</h2>
          <p>Информация, документы и материалы, размещённые пользователями на сайте <a href="https://jewelcocktail.com" target="_blank" style={{color: "#fff", textDecoration: "underline"}}>https://jewelcocktail.com</a>, не должны нарушать закон № 149-ФЗ (<a
            href="https://cga.mos.ru/upload/medialibrary/83f/fz-ot-27.07.2006-_-149_fz-_red.-ot-08.06.2020_.pdf" target="_blank" style={{color: "#fff", textDecoration: "underline"}}>https://cga.mos.ru/upload/medialibrary/83f/fz-ot-27.07.2006-_-149_fz-_red.-ot-08.06.2020_.pdf</a> ).</p>
          <p>Вся ответственность за контент, нарушающий закон № 149-ФЗ, перекладывается на автора.</p>
          <p>Компания Jewel Cocktail оставляет за собой право удалять запрещённый контент, без предварительного уведомления автора.</p>
          <br/>
          <h2>Условия гарантии и правил эксплуатации</h2>
          <br/>
          <h5>Условия бессрочной гарантии</h5>
          <span>Бессрочная гарантия предоставляется на всю продукцию бренда Jewel Cocktail, за исключением расходных материалов, аксессуаров и электронных компонентов.
Гарантия распространяется на неисправности и дефекты, возникшие по вине производителя (в результате брака/погрешности).</span><br/>
          <span>Гарантия не распространяется на поломки, возникшие в связи:</span><br/>
          <span>- нарушение правил эксплуатации</span><br/>
          <span>- явных механических повреждений</span><br/>
          <span>- попыток самостоятельного или постороннего ремонта</span><br/>
          <span>- нарушения правил хранения и транспортировки</span><br/>
          <span>- естественный износ продукта</span><br/>
          <span>В случае выявления заводского брака, гарантируется его устранение за счет производителя. </span><br/>
          <span>Срок действия бессрочной гарантии на товар соответствует сроку службы продукта.</span><br/>
          <h5>Правила эксплуатации, хранения и транспортировки.</h5>
          <span>Не допускать:</span><br/>
          <span>- механическую нагрузку;</span><br/>
          <span>- резкие перепады температуры;</span>
          <span>- длительный контакт с морской водой; </span><br/>
          <span>- воздействие декоративных и ухаживающих средств для кожи и волос (крема, лаки, пенки), духи, лекарства и эфирные масла; </span>
          <span>- контакт с хлором, ацетоном, щелочами, йодом, марганцовкой, серой и ртутью, а так же с агрессивными моющими средствами и стиральными порошками, пятновыводителями и отбеливателями; </span><br/>
          <span>- контакт с абразивными веществами и предметами с абразивной поверхностью: скрабы, песок, пилочка для маникюра.</span><br/>
          <span>Температура хранения и эксплуатации: от -45 до +45 C"</span><br/>

          <h1>Политика в отношении обработки персональных данных</h1>
          <h5>1. Общие положения</h5>

          <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Jewel Cocktail (далее – Оператор).</p>

          <span>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</span><br/>
          <span>1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта: <a href="">https://www.jewelcocktail.com</a> .</span>
          <p>2. Основные понятия, используемые в Политике</p>
          <span>2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники.</span><br/>
          <span>2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</span><br/>
          <span>2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу <a href="">https://www.jewelcocktail.com</a> .</span><br/>
          <span>2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств.</span><br/>
          <span>2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.</span><br/>
          <span>2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</span><br/>
          <span>2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.</span><br/>
          <span>2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта <a href="">https://www.jewelcocktail.com</a> .</span><br/>
          <span>2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, - персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее - персональные данные, разрешенные для распространения).</span><br/>
          <span>2.10. Пользователь – любой посетитель веб-сайта <a href="">https://www.jewelcocktail.com</a> .</span><br/>
          <span>2.11. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.</span><br/>
          <span>2.12. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.</span><br/>
          <span>2.13. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.</span><br/>
          <span>2.14. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.</span><br/>

          <h5>3. Основные права и обязанности Оператора</h5>

          <span>3.1. Оператор имеет право:</span><br/>
          <span>– получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные</span><br/>
          <span>– в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;</span><br/>
          <span>– самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.</span><br/>
          <span>3.2. Оператор обязан:</span><br/>
          <span>– предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;</span><br/>
          <span>– организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;</span><br/>
          <span>– отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;</span><br/>
          <span>– сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 30 дней с даты получения такого запроса;</span><br/>
          <span>– публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;</span><br/>
          <span>– принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;</span><br/>
          <span>– прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;</span><br/>
          <span>– исполнять иные обязанности, предусмотренные Законом о персональных данных.</span><br/>

          <h5>4. Основные права и обязанности субъектов персональных данных</h5>

          <span>4.1. Субъекты персональных данных имеют право:</span><br/>
          <span>– получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;</span><br/>
          <span>– требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;</span><br/>
          <span>– выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;</span><br/>
          <span>– на отзыв согласия на обработку персональных данных;</span><br/>
          <span>– обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных</span><br/>
          <span>– на осуществление иных прав, предусмотренных законодательством РФ.</span><br/>
          <span>4.2. Субъекты персональных данных обязаны:</span><br/>
          <span>– предоставлять Оператору достоверные данные о себе;</span><br/>
          <span>– сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.</span><br/>
          <span>4.3. Лица, передавшие Оператору недостоверные сведения о себе, либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством РФ.</span><br/>

          <h5>5. Оператор может обрабатывать следующие персональные данные Пользователя</h5>

          <span>5.1.Фамилия, имя, отчество.</span><br/>
          <span>5.2.Электронный адрес.</span><br/>
          <span>5.3.Номера телефонов.</span><br/>
          <span>5.4.Год, месяц, дата и место рождения.</span><br/>
          <span>5.5.Фотографии.</span><br/>
          <span>5.6. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).</span><br/>
          <span>5.7. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные</span><br/>
          <span>5.8. Обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, интимной жизни, Оператором не осуществляется.</span><br/>
          <span>5.9. Обработка персональных данных, разрешенных для распространения, из числа специальных категорий персональных данных, указанных в ч. 1 ст. 10 Закона о персональных данных, допускается, если соблюдаются запреты и условия, предусмотренные ст. 10.1 Закона о персональных данных.</span><br/>
          <span>5.10. Согласие Пользователя на обработку персональных данных, разрешенных для распространения, оформляется отдельно от других согласий на обработку его персональных данных. При этом соблюдаются условия, предусмотренные, в частности, ст. 10.1 Закона о персональных данных. Требования к содержанию такого согласия устанавливаются уполномоченным органом по защите прав субъектов персональных данных.</span><br/>
          <span>5.10.1 Согласие на обработку персональных данных, разрешенных для распространения, Пользователь предоставляет Оператору непосредственно.</span><br/>
          <span>5.10.2 Оператор обязан в срок не позднее трех рабочих дней с момента получения указанного согласия Пользователя опубликовать информацию об условиях обработки, о наличии запретов и условий на обработку неограниченным кругом лиц персональных данных, разрешенных для распространения.</span><br/>
          <span>5.10.3 Передача (распространение, предоставление, доступ) персональных данных, разрешенных субъектом персональных данных для распространения, должна быть прекращена в любое время по требованию субъекта персональных данных. Данное требование должно включать в себя фамилию, имя, отчество (при наличии), контактную информацию (номер телефона, адрес электронной почты или почтовый адрес) субъекта персональных данных, а также перечень персональных данных, обработка которых подлежит прекращению. Указанные в данном требовании персональные данные могут обрабатываться только Оператором, которому оно направлено.</span><br/>
          <span>5.10.4 Согласие на обработку персональных данных, разрешенных для распространения, прекращает свое действие с момента поступления Оператору требования, указанного в п. 5.10.3 настоящей Политики в отношении обработки персональных данных.</span><br/>

          <h5>6. Принципы обработки персональных данных</h5>

          <span>6.1. Обработка персональных данных осуществляется на законной и справедливой основе.</span><br/>
          <span>6.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.</span><br/>
          <span>6.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.</span><br/>
          <span>6.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.</span><br/>
          <span>6.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.</span><br/>
          <span>6.6. При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных. Оператор принимает необходимые меры и/или обеспечивает их принятие по удалению или уточнению неполных или неточных данных.</span><br/>
          <span>6.7. Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.</span><br/>

          <h5>7. Цели обработки персональных данных</h5>

          <span>7.1. Цель обработки персональных данных Пользователя:</span><br/>
          <span>–информирование Пользователя посредством отправки электронных писем;</span><br/>
          <span>–предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте <a href="https://www.jewelcocktail.com">https://www.jewelcocktail.com</a> .</span><br/>
          <span>7.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты <a href="mailto:contact@jewelcocktail.com">contact@jewelcocktail.com</a>с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».</span><br/>
          <span>7.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</span><br/>

          <h5>8. Правовые основания обработки персональных данных</h5>
          <span>8.1. Правовыми основаниями обработки персональных данных Оператором являются:</span><br/>
          <span>–уставные (учредительные) документы Оператора</span><br/>
          <span>–договоры, заключаемые между оператором и субъектом персональных данных;</span><br/>
          <span>– федеральные законы, иные нормативно-правовые акты в сфере защиты персональных данных;</span><br/>
          <span>– согласия Пользователей на обработку их персональных данных, на обработку персональных данных, разрешенных для распространения.</span><br/>
          <span>8.2. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте <a href="tel:+79688116711">+7 968 811 67 11</a> или направленные Оператору посредством электронной почты. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</span><br/>
          <span>8.3. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).</span><br/>
          <span>8.4. Субъект персональных данных самостоятельно принимает решение о предоставлении его персональных данных и дает согласие свободно, своей волей и в своем интересе.</span><br/>

          <h5>9. Условия обработки персональных данных</h5>

          <span>9.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.</span><br/>
          <span>9.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.</span><br/>
          <span>9.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве.</span><br/>
          <span>9.4. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.</span><br/>
          <span>9.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.</span><br/>
          <span>9.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее – общедоступные персональные данные).</span><br/>
          <span>9.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.</span><br/>

          <h5>10. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h5>

          <span>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</span><br/>
          <span>10.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</span><br/>
          <span>10.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.</span><br/>
          <span>10.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора <a href="mailto:contact@jewelcocktail.com">contact@jewelcocktail.com</a> с пометкой «Актуализация персональных данных».</span><br/>
          <span>10.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством.Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора <a href="mailto:contact@jewelcocktail.com">contact@jewelcocktail.com</a> с пометкой «Отзыв согласия на обработку персональных данных».</span><br/>
          <span>10.5. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Субъект персональных данных и/или Пользователь обязан самостоятельно своевременно ознакомиться с указанными документами. Оператор не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.</span><br/>
          <span>10.6. Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством РФ.</span><br/>
          <span>10.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.</span><br/>
          <span>10.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных.</span><br/>
          <span>10.9. Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных или отзыв согласия субъектом персональных данных, а также выявление неправомерной обработки персональных данных.</span><br/>

          <h5>11. Перечень действий, производимых Оператором с полученными персональными данными</h5>

          <span>11.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.</span><br/>
          <span>11.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.</span><br/>

          <h5>2. Трансграничная передача персональных данных</h5>

          <span>12.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.</span><br/>
          <span>12.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.</span><br/>

          <h5>13. Конфиденциальность персональных данных</h5>

          <span>Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.</span><br/>

          <h5>14. Заключительные положения</h5>

          <span>4.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты <a href="mailto:contact@jewelcocktail.com">contact@jewelcocktail.com</a> .</span><br/>
          <span>14.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.</span><br/>
          <span>14.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу <a href="https://jewelcocktail.com/privacy">https://jewelcocktail.com/privacy</a> .</span><br/>

        </WrapContent>
      </Wrapper>
      :
      <Wrapper>
        <HeaderDiv>
          <WrapLogo>
            <a href="/" className="wrapLogo">
              <img src={logo} alt="JewelCocktail" />
            </a>
          </WrapLogo>
          <WrapContacts>
            <a href="mailto:contact@jewelcocktail.com" rel="noreferrer" >
              contact@jewelcocktail.com
            </a>
          </WrapContacts>
        </HeaderDiv>
        <WrapContent>
          <h2>Offer:</h2>
          <p>Offers on the https://jewelcocktail.com it is not a public offer.</p>

          <h2>Placement of prohibited content:</h2>
          <p>Information, documents and materials posted by users on the site www.jewelcocktail.com , must not violate the law in the country of use, such as The General Data Protection Regulation (GDPR), The CCPA (California Consumer Privacy Act) and other laws and acts concerning the placement of personal data in a particular country. All responsibility for content that violates the law is shifted to the author.</p>

          <h2>Warranty conditions and operating rules</h2>
          <br/>
          <h5>Terms of the perpetual warranty</h5>
          <span>An indefinite warranty is provided for all products of the Jewel Cocktail brand, with the exception of consumables, accessories and electronic components. The warranty covers malfunctions and defects caused by the fault of the manufacturer (as a result of defects / errors).</span><br/>
          <span>The warranty does not apply to breakdowns caused by:</span><br/>
          <span>- violation of the rules of operation</span><br/>
          <span>- obvious mechanical damage</span><br/>
          <span>- attempts of independent or extraneous repair</span><br/>
          <span>- violations of the rules of storage and transportation</span><br/>
          <span>- natural wear of the product</span><br/>
          <span>In case of detection of a factory defect, its elimination is guaranteed at the expense of the manufacturer.</span><br/>
          <span>The term of the indefinite warranty on the product corresponds to the service life of the product.</span><br/>
          <h5>Rules of operation, storage and transportation.</h5>
          <span>Do not allow:</span><br/>
          <span>- sudden temperature changes;</span><br/>
          <span>- exposure to decorative and caring products for skin and hair (creams, varnishes, foams), perfumes, medicines and essential oils;</span>
          <span>- prolonged contact with seawater</span><br/>
          <span> - contact with chlorine, acetone, alkalis, iodine, potassium permanganate, sulfur and mercury, as well as with aggressive detergents and washing powders, stain removers and bleaches;</span>
          <span>- contact with abrasive substances and objects with an abrasive surface: scrubs, sand, nail file.</span><br/>
          <span>Storage and operation temperature: -45 to +45 C"</span><br/>

          <h1>Personal Data Processing Policy</h1>
          <h5>1. General provisions</h5>

          <p>This personal data processing policy defines the procedure for processing personal data and measures to ensure the security of personal data taken by Jewel Cocktail (hereinafter referred to as the Operator).</p>

          <span>1.1. The Operator sets as its most important goal and condition for the implementation of its activities the observance of human and civil rights and freedoms in the processing of his personal data, including the protection of the rights to privacy life, personal and family secrets.</span><br/>
          <span>1.2. This Operator's policy regarding the processing of personal data (hereinafter referred to as the Policy) applies to all information that the Operator can receive about website visitors: https://www.jewelcocktail.com.</span>
          <p>2. Basic concepts used in the Policy</p>
          <span>2.1. Automated processing of personal data – processing of personal data using computer technology.</span><br/>
          <span>2.2. Blocking of personal data – temporary termination of processing of personal data (except in cases where processing is necessary to clarify personal data).</span><br/>
          <span>2.3. Website - a set of graphic and informational materials, as well as computer programs and databases that ensure their availability on the Internet at a network address https://www.jewelcocktail.com .</span><br/>
          <span>2.4. Personal data information system — a set of personal data contained in databases, and information technologies and technical means that ensure their processing.</span><br/>
          <span>2.5. Depersonalization of personal data — actions as a result of which it is impossible to determine, without the use of additional information, the identity of personal data to a specific User or other subject of personal data.</span><br/>
          <span>2.6. Processing of personal data – any action (operation) or a set of actions (operations) performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.</span><br/>
          <span>2.7. Operator – a state body, municipal body, legal entity or individual, independently or jointly with other persons organizing and (or) processing personal data, as well as determining the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data.</span><br/>
          <span>2.8. Personal data – any information related directly or indirectly to a specific or identifiable User of the Website https://www.jewelcocktail.com .</span><br/>
          <span>2.9. Personal data authorized by the subject of personal data for distribution - personal data to which an unlimited number of persons have access by the subject of personal data by giving consent to the processing of personal data authorized by the subject of personal data for distribution in accordance with the procedure provided for by the Law on Personal Data (hereinafter - personal data authorized for distribution).</span><br/>
          <span>2.10. User – any visitor to the website https://www.jewelcocktail.com .</span><br/>
          <span>2.11. Provision of personal data – actions aimed at disclosure of personal data to a certain person or a certain circle of persons.</span><br/>
          <span>2.12. Dissemination of personal data – any actions aimed at disclosure of personal data to an indefinite circle of persons (transfer of personal data) or familiarization with personal data of an unlimited circle of persons, including the publication of personal data in the media, placement in information and telecommunications networks or providing access to personal data in any other way.</span><br/>
          <span>2.13. Cross–border transfer of personal data - transfer of personal data to the territory of a foreign state to the authority of a foreign state, a foreign individual or a foreign legal entity.</span><br/>
          <span>2.14. Destruction of personal data – any actions as a result of which personal data is permanently destroyed with the impossibility of further restoration of the content of personal data in the personal data information system and (or) the material carriers of personal data are destroyed.</span><br/>

          <h5>3. Basic rights and obligations of the Operator</h5>

          <span>3.1. The Operator has the right to:</span><br/>
          <span>– receive reliable information and /or documents containing personal data from the subject of personal data</span><br/>
          <span>– in case the subject of personal data withdraws consent to the processing of personal data, the Operator has the right to continue processing personal data without the consent of the subject of personal data if there are grounds specified in the Law on Personal Data;</span><br/>
          <span>– independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of obligations provided for by the Law on Personal Data and regulatory legal acts adopted in accordance with it, unless otherwise provided by the Law on Personal Data or other federal laws.</span><br/>
          <span>3.2. The Operator is obliged to:</span><br/>
          <span>– to provide the subject of personal data, at his request, with information concerning the processing of his personal data;</span><br/>
          <span>– organize the processing of personal data in accordance with the procedure established by the current legislation;</span><br/>
          <span>– respond to requests and requests from personal data subjects and their legal representatives in accordance with the requirements on personal data;</span><br/>
          <span>– publish or otherwise provide unrestricted access to this Policy regarding the processing of personal data;</span><br/>
          <span>– take legal, organizational and technical measures to protect personal data from unauthorized or accidental access to them, destruction, modification, blocking, copying, provision, dissemination of personal data, as well as from other illegal actions with respect to personal data;</span><br/>
          <span>– stop the transfer (distribution, provision, access) of personal data, stop processing and destroy personal data in the manner and cases provided for by the Law on Personal Data;</span><br/>

          <h5>4. Basic rights and obligations of personal data subjects</h5>

          <span>4.1. Personal data subjects have the right to:</span><br/>
          <span>– receive information concerning the processing of his personal data, except in cases provided for by federal laws. The information is provided to the personal data subject by the Operator in an accessible form, and it should not contain personal data related to other personal data subjects, except in cases where there are legitimate grounds for disclosure of such personal data. The list of information and the procedure for obtaining it is established by the Law on Personal Data;</span><br/>
          <span>– require the operator to clarify his personal data, block or destroy them if the personal data are incomplete, outdated, inaccurate, illegally obtained or are not necessary for the stated purpose of processing, as well as take measures provided by law to protect their rights;</span><br/>
          <span>– to put forward a condition of prior consent when processing personal data in order to promote goods, works and services on the market;</span><br/>
          <span>– to revoke consent to the processing of personal data;</span><br/>

          <span>4.2. Personal data subjects are obliged to:</span><br/>
          <span>– provide the Operator with reliable data about yourself;</span><br/>
          <span>– inform the Operator about the clarification (update, change) of their personal data.</span><br/>

          <span>4.3. Persons who have provided the Operator with false information about themselves or information about another personal data subject without the latter's consent are personally liable in accordance with the legislation of the country of use.</span><br/>

          <h5>5. The Operator may process the following personal data of the User</h5>

          <span>5.1. Surname, first name, patronymic.</span><br/>
          <span>5.2.Email address.</span><br/>
          <span>5.3. Phone numbers.</span><br/>
          <span>5.4. Year, month, date and place of birth.</span><br/>
          <span>5.5.Photos, text, video.</span><br/>
          <span>5.6. The site also collects and processes depersonalized data about visitors (including cookies) using Internet statistics services (Google Analytics and others).</span><br/>
          <span>5.7. The above data is further combined by the general concept of Personal Data in the text of the Policy</span><br/>
          <span>5.8. Processing of special categories of personal data concerning race, nationality, political views, religious or philosophical beliefs, intimate life is not carried out by the Operator.</span><br/>

          <h5>6. Principles of personal data processing</h5>

          <span>6.1. The processing of personal data is carried out on a legal and fair basis.</span><br/>
          <span>6.2. The processing of personal data is limited to the achievement of specific, predetermined and legitimate goals. Processing of personal data incompatible with the purposes of personal data collection is not allowed.</span><br/>
          <span>6.3. It is not allowed to combine databases containing personal data, the processing of which is carried out for purposes incompatible with each other.</span><br/>
          <span>6.4. Only personal data that meet the purposes of their processing are subject to processing.</span><br/>
          <span>6.5. The content and volume of the processed personal data correspond to the stated purposes of processing. Redundancy of the processed personal data in relation to the stated purposes of their processing is not allowed.</span><br/>
          <span>6.6. When processing personal data, the accuracy of personal data, their sufficiency, and, if necessary, relevance in relation to the purposes of personal data processing is ensured. The Operator takes the necessary measures and/or ensures that they are taken to delete or clarify incomplete or inaccurate data.</span><br/>

          <h5>7. Purposes of personal data processing</h5>

          <span>7.1. The purpose of processing the User's personal data:</span><br/>
          <span>–informing the User by sending emails;</span><br/>
          <span>–providing the User with access to the services, information and/or materials contained on the website https://www.jewelcocktail.com .</span><br/>
          <span>7.2. The Operator also has the right to send notifications to the User about new products and services, special offers and various events. The User can always refuse to receive informational messages by sending an email to the Operator</span><br/>

          <h5>8. Legal grounds for processing personal data</h5>
          <span>8.1. The legal grounds for processing personal data by the Operator are:</span><br/>
          <span>–statutory (constituent) documents of the Operator</span><br/>
          <span>– contracts concluded between the operator and the subject of personal data;</span><br/>
          <span>–laws and other regulatory legal acts in the field of personal data protection;</span><br/>
          <span>– Users' consent to the processing of their personal data, to the processing of personal data allowed for distribution.</span><br/>
          <span>8.2. The Operator processes the User's personal data only if they are filled in and /or sent by the User independently through special forms located on the website or sent to the Operator via e-mail. By filling out the appropriate forms and/or sending their personal data to the Operator, the User agrees with this Policy.</span><br/>
          <span>8.3. The Operator processes depersonalized data about the User if this is allowed in the User's browser settings (the saving of cookies and the use of JavaScript technology are enabled).</span><br/>
          <span>8.4. The subject of personal data independently decides on the provision of his personal data and gives consent freely, of his own free will and in his own interest.</span><br/>

          <h5>9. Terms of personal data processing</h5>

          <span>9.1. The processing of personal data is carried out with the consent of the personal data subject to the processing of his personal data.</span><br/>
          <span>9.2. The processing of personal data is necessary for the execution of a contract to which the personal data subject is a party or beneficiary or guarantor, as well as for the conclusion of a contract on the initiative of the personal data subject or a contract under which the personal data subject will be the beneficiary or guarantor.</span><br/>
          <span>9.3. The processing of personal data is necessary to exercise the rights and legitimate interests of the operator or third parties or to achieve socially significant goals, provided that the rights and freedoms of the personal data subject are not violated.</span><br/>
          <span>9.4. Personal data is processed, access to which is granted to an unlimited number of persons by the subject of personal data or at his request (hereinafter referred to as publicly available personal data).</span><br/>

          <h5>10. Procedure for the collection, storage, transfer and other types of personal data processing</h5>

          <span>10.1. The Operator ensures the safety of personal data and takes all possible measures to exclude access to the personal data of unauthorized persons.</span><br/>
          <span>10.2. In case of inaccuracies in personal data, the User can update them independently by sending a notification to the Operator to the Operator's email address contact@jewelcocktail.com marked "Updating of personal data".</span><br/>
          <span>10.3. The term of personal data processing is determined by the achievement of the purposes for which personal data was collected, unless another term is provided for by the contract or current legislation. The User can withdraw his consent to the processing of personal data at any time by sending a notification to the Operator via e-mail to the Operator's e-mail address contact@jewelcocktail.com marked "Withdrawal of consent to the processing of personal data".</span><br/>
          <span>10.4. All information collected by third-party services, including payment systems, means of communication and other service providers, is stored and processed by these persons (Operators) in accordance with their User Agreement and Privacy Policy. The subject of personal data and/or the User is obliged to familiarize themselves with these documents in a timely manner. The Operator is not responsible for the actions of third parties, including the service providers specified in this paragraph.</span><br/>
          <span>10.5. The prohibitions established by the subject of personal data on the transfer (except for granting access), as well as on the processing or processing conditions (except for obtaining access) of personal data allowed for distribution, do not apply in cases of processing of personal data in the state, public and other public interests.</span><br/>
          <span>10.6. The Operator ensures the confidentiality of personal data when processing personal data.</span><br/>
          <span>10.7. The Operator stores personal data in a form that allows to determine the subject of personal data, no longer than the purposes of personal data processing require, unless the period of storage of personal data is established by an agreement to which the subject of personal data is a party, beneficiary or guarantor.</span><br/>
          <span>10.8. The condition for the termination of personal data processing may be the achievement of the purposes of personal data processing, the expiration of the consent of the personal data subject or the withdrawal of consent by the personal data subject, as well as the identification of unlawful processing of personal data.</span><br/>

          <h5>11. List of actions performed by the Operator with the received personal data</h5>

          <span>11.1. The Operator collects, records, systematizes, accumulates, stores, clarifies (updates, changes), extracts, uses, transfers (distribution, provision, access), depersonalizes, blocks, deletes and destroys personal data.</span><br/>
          <span>11.2. The Operator performs automated processing of personal data with or without receiving and/or transmitting the received information via information and telecommunication networks.</span><br/>

          <h5>12. Cross-border transfer of personal data</h5>

          <span>12.1. Before the start of the cross-border transfer of personal data, the Operator is obliged to make sure that the foreign state to whose territory the transfer of personal data is supposed to be carried out provides reliable protection of the rights of personal data subjects.</span><br/>
          <span>12.2. Cross-border transfer of personal data on the territory of foreign states that do not meet the above requirements may be carried out only if there is written consent of the personal data subject to the cross-border transfer of his personal data and/or execution of the contract to which the personal data subject is a party.</span><br/>

          <h5>13. Final provisions</h5>

          <span>13.1. The User can receive any clarifications on issues of interest concerning the processing of his personal data by contacting the Operator via e-mail contact@jewelcocktail.com .</span><br/>
          <span>13.2. This document will reflect any changes to the Operator's personal data processing policy. The policy is valid indefinitely until it is replaced by a new version.</span><br/>
          <span>13.3. The current version of the Policy is freely available on the Internet at www.jewelcocktail.com/privacy .</span><br/>

        </WrapContent>
      </Wrapper>
    }
    </>

  )
}
