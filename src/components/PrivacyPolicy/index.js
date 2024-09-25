import React from "react";
import {
  Wrapper,
  HeaderDiv,
  WrapContacts,
  WrapLogo,
  WrapContent,
} from "./privacy-styled";
import logo from "../first/logo.png";
import whatsapp from "../../whatsapp.png";
import telegram from "../../telegram.png";

export const PrivacyPolicy = (props) => {
  const { langProps } = props;

  return (
    <>
      {langProps.locale === "ru" ? (
        <Wrapper>
          <HeaderDiv>
            <WrapLogo>
              <a href="/" className="wrapLogo">
                <img src={logo} alt="JewelCocktail" />
              </a>
            </WrapLogo>
            <WrapContacts>
              <a href="mailto:contact@jewelcocktail.com" rel="noreferrer">
                contact@jewelcocktail.com
              </a>
            </WrapContacts>
          </HeaderDiv>
          <WrapContent>
            <h2>Оферта:</h2>
            <p>
              Предложения на сайте https://jewelcocktail.com не является
              публичной офертой.
            </p>

            <h2>
              Согласие пользователя на публичное размещение персональных данных
            </h2>
            <p>
              Используя данный сайт, пользователь признает и соглашается с тем,
              что он добровольно предоставляет свои персональные данные и
              контент для публичного размещения в Интернете. Пользователь
              выражает свое согласие на обработку, хранение и распространение
              своих персональных данных в открытом доступе, который может быть
              просмотрен неограниченным количеством людей.
            </p>
            <p>
              Пользователь понимает и принимает риски, связанные с публичным
              размещением персональных данных, включая потенциальный доступ
              третьих лиц и возможность дальнейшего распространения.
              Пользователь несет полную ответственность за информацию, которую
              он решает предоставить, и понимает, что оператор сайта не может
              нести ответственность за любые последствия, возникающие в
              результате публичного характера данных.
            </p>
            <p>
              Если пользователь желает отозвать свое согласие или запросить
              удаление конкретных данных из открытого доступа, он может сделать
              это, связавшись с оператором сайта. Однако оператор не гарантирует
              удаление контента, который уже был распространен или индексирован
              третьими сторонами.
            </p>

            <h2>Условия бессрочной гарантии</h2>
            <p>
              На все продукты бренда Jewel Cocktail предоставляется пожизненная
              гарантия, за исключением расходных материалов, аксессуаров и
              электронных компонентов. Гарантия покрывает неисправности и
              дефекты, вызванные производственными недостатками.
            </p>
            <p>Гарантия не распространяется на неисправности, вызванные:</p>
            <ul>
              <li>Нарушением инструкции по эксплуатации;</li>
              <li>Очевидным механическим повреждением;</li>
              <li>Неавторизованными или самостоятельными попытками ремонта;</li>
              <li>Неправильным хранением и транспортировкой;</li>
              <li>Естественным износом продукта.</li>
            </ul>
            <p>
              В случае выявления производственного дефекта его ремонт или замена
              будет производиться за счет производителя. Срок действия
              пожизненной гарантии соответствует сроку эксплуатации продукта.
            </p>

            <h2>Рекомендации по эксплуатации, хранению и транспортировке</h2>
            <p>Избегайте следующих условий:</p>
            <ul>
              <li>Резких изменений температуры;</li>
              <li>
                Воздействия декоративных или ухаживающих средств (кремов,
                спреев, пенок), парфюмерии, медикаментов или эфирных масел;
              </li>
              <li>Длительного контакта с морской водой;</li>
              <li>
                Контакта с хлором, ацетоном, щелочами, йодом, перманганатом
                калия, серой, ртутью или агрессивными моющими средствами,
                включая стиральные порошки, пятновыводители и отбеливатели;
              </li>
              <li>
                Контакта с абразивными веществами или предметами с абразивными
                поверхностями, такими как скрабы, песок или пилки для ногтей.
              </li>
            </ul>
            <p>
              Рекомендуемая температура хранения и эксплуатации: от -45°C до
              +45°C.
            </p>

            <h2>Согласие на публикацию контента, созданного пользователем</h2>
            <p>
              Подписывая любой контент (в дальнейшем "Контент") на сайте
              оператора (в дальнейшем "Оператор"), пользователь (в дальнейшем
              "Пользователь") соглашается с условиями, изложенными ниже.
            </p>
            <p>
              Пользователь предоставляет Оператору разрешение на публичную
              публикацию Контента в Интернете, доступного неограниченному
              количеству лиц, и принимает на себя полную ответственность за
              соблюдение законности и последствия такой публикации.
            </p>

            <h2>Ответственность пользователя</h2>
            <p>1. Полная ответственность:</p>
            <p>
              Пользователь несет единоличную ответственность за то, чтобы весь
              Контент, который он загружает или делится, соответствовал
              действующим законам Российской Федерации и международному
              законодательству.
            </p>
            <p>2. Соблюдение законов о конфиденциальности и защите данных:</p>
            <p>
              Пользователь подтверждает, что любые персональные данные,
              содержащиеся в Контенте, соответствуют действующему
              законодательству о защите персональных данных, включая Федеральный
              закон "О персональных данных".
            </p>
            <p>
              3. Соблюдение авторских прав и прав интеллектуальной
              собственности:
            </p>
            <p>
              Пользователь должен удостовериться, что его Контент не нарушает
              авторские права, товарные знаки или другие права интеллектуальной
              собственности третьих лиц.
            </p>
            <p>4. Отказ от ответственности Оператора:</p>
            <p>
              Оператор не осуществляет предварительный контроль Контента и,
              следовательно, не несет ответственности за любые юридические
              вопросы, возникающие из Контента, загруженного Пользователем.
            </p>

            <h2>Удаление и уничтожение контента</h2>
            <p>
              Право на удаление: Оператор оставляет за собой право, по своему
              усмотрению, удалять или ограничивать доступ к любому Контенту,
              который нарушает эти условия или действующее законодательство, без
              предварительного уведомления Пользователя.
            </p>

            <h2>Перевод данных через границу</h2>
            <p>
              Пользователь соглашается на возможную передачу любых персональных
              данных или Контента в третьи страны, где стандарты защиты данных
              могут отличаться.
            </p>

            <h2>Разрешение споров</h2>
            <p>
              Все споры, возникающие в результате использования сайта или
              Контента, предоставленного Пользователем, регулируются
              законодательством Российской Федерации.
            </p>
          </WrapContent>
        </Wrapper>
      ) : (
        <Wrapper>
          <HeaderDiv>
            <WrapLogo>
              <a href="/" className="wrapLogo">
                <img src={logo} alt="JewelCocktail" />
              </a>
            </WrapLogo>
            <WrapContacts>
              <a href="mailto:contact@jewelcocktail.com" rel="noreferrer">
                contact@jewelcocktail.com
              </a>
            </WrapContacts>
          </HeaderDiv>
          <WrapContent>
            <h2>User Consent for Public Posting of Personal Data</h2>
            <p>
              By using this website, the user acknowledges and agrees that they
              are voluntarily providing personal data and content for public
              posting on the internet. The user expressly consents to the
              processing, storage, and dissemination of their personal data in
              an open-access format, which may be viewed by an unlimited number
              of people.
            </p>
            <p>
              The user understands and accepts the risks associated with the
              public posting of personal data, including potential access by
              third parties and the possibility of further dissemination. The
              user bears full responsibility for the information they choose to
              share and acknowledges that the website operator cannot be held
              responsible for any consequences arising from the public nature of
              the data.
            </p>
            <p>
              If the user wishes to revoke their consent or request the removal
              of specific data from public access, they may do so by contacting
              the website operator. However, the operator does not guarantee the
              removal of content that has already been disseminated or indexed
              by third-party services.
            </p>

            <h2>Terms of the Perpetual Warranty</h2>
            <p>
              A lifetime warranty is provided for all products of the Jewel
              Cocktail brand, with the exception of consumables, accessories,
              and electronic components. The warranty covers malfunctions and
              defects that are the result of manufacturing faults (due to
              defects or errors).
            </p>
            <p>The warranty does not cover malfunctions caused by:</p>
            <ul>
              <li>Violation of operating instructions</li>
              <li>Obvious mechanical damage</li>
              <li>Unauthorized or self-repair attempts</li>
              <li>Improper storage and transportation</li>
              <li>Natural wear and tear of the product</li>
            </ul>
            <p>
              If a manufacturing defect is identified, its repair or replacement
              will be guaranteed at the manufacturer’s expense. The duration of
              the lifetime warranty corresponds to the product's operational
              lifespan.
            </p>

            <h2>Operating, Storage, and Transportation Guidelines</h2>
            <p>Avoid the following:</p>
            <ul>
              <li>Sudden temperature changes</li>
              <li>
                Exposure to decorative or care products for skin and hair
                (creams, sprays, foams), perfumes, medications, or essential
                oils
              </li>
              <li>Prolonged contact with seawater</li>
              <li>
                Contact with chlorine, acetone, alkalis, iodine, potassium
                permanganate, sulfur, mercury, or aggressive detergents,
                including washing powders, stain removers, and bleach
              </li>
              <li>
                Contact with abrasive substances or items with abrasive
                surfaces, such as scrubs, sand, or nail files
              </li>
            </ul>
            <p>
              Recommended storage and operating temperature: -45°C to +45°C.
            </p>

            <h2>Agreement on User-Generated Content Publication</h2>
            <p>
              By submitting any content (hereinafter "Content") to the website
              of the operator (hereinafter "Operator"), the user (hereinafter
              "User") agrees to the following terms. The User grants the
              Operator permission to publish the Content publicly on the
              internet, accessible to an unlimited number of individuals, and
              assumes full responsibility for the legal compliance and
              consequences of such publication.
            </p>

            <h2>User Responsibility</h2>
            <p>1. Full Responsibility:</p>
            <p>
              The User is solely responsible for ensuring that all Content they
              upload or share complies with applicable laws, including but not
              limited to:
            </p>
            <ul>
              <li>
                United States law: such as the Digital Millennium Copyright Act
                (DMCA), Communications Decency Act (CDA), and applicable state
                laws.
              </li>
              <li>
                European Union law: including the General Data Protection
                Regulation (GDPR) and the e-Commerce Directive.
              </li>
              <li>
                International law: related to copyright, intellectual property
                rights, and privacy regulations under treaties like the Berne
                Convention for the Protection of Literary and Artistic Works and
                international human rights treaties.
              </li>
            </ul>
            <p>
              The User agrees to indemnify and hold the Operator harmless from
              any and all claims, liabilities, damages, or costs (including
              attorney’s fees) that may arise as a result of the User’s Content
              violating any local, national, or international laws.
            </p>
            <p>2. Compliance with Privacy and Data Protection Laws:</p>
            <p>
              The User confirms that any personal data included in the Content
              complies with applicable privacy laws, including but not limited
              to the GDPR in Europe and the California Consumer Privacy Act
              (CCPA) in the United States. The User must ensure that they have
              obtained explicit consent from individuals whose personal data is
              contained within the Content, where applicable.
            </p>
            <p>3. Copyright and Intellectual Property Compliance:</p>
            <p>
              The User must ensure that their Content does not infringe upon the
              copyrights, trademarks, or other intellectual property rights of
              third parties. In the case of any violations, the User assumes
              full responsibility and liability for such infringements.
            </p>
            <p>4. Operator's Liability Waiver:</p>
            <p>
              The Operator does not pre-screen Content and, therefore, assumes
              no responsibility for any legal issues arising from the User’s
              uploaded Content. The User acknowledges that the Operator
              functions solely as a service provider under the protections
              offered by the Communications Decency Act (CDA) in the USA and the
              e-Commerce Directive (EU), which limit liability for content
              hosted or transmitted on behalf of users.
            </p>

            <h2>Content Removal and Deletion</h2>
            <p>
              Right to Removal: The Operator reserves the right, at its sole
              discretion, to remove or restrict access to any Content that
              violates these terms or any applicable law, without prior notice
              to the User.
            </p>
            <p>
              Content Withdrawal: The User may request the removal of their
              Content from the website by submitting a written request to the
              Operator. However, the User acknowledges that once the Content has
              been published, its complete removal from all internet sources,
              including search engine indexes and third-party archives, cannot
              be guaranteed.
            </p>

            <h2>Cross-Border Data Transfers</h2>
            <p>
              The User agrees to the possible cross-border transfer of any
              personal data or Content to third-party countries where data
              protection standards may differ. In accordance with the GDPR, the
              Operator will ensure appropriate safeguards are in place for any
              transfers to countries outside of the European Economic Area
              (EEA).
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from the use of the website or the Content
              provided by the User shall be governed by the laws of the United
              States, European Union, or relevant international laws, depending
              on the jurisdiction of the parties involved. The User agrees to
              submit to the jurisdiction of the courts located in the Operator’s
              primary place of business.
            </p>
          </WrapContent>
        </Wrapper>
      )}
    </>
  );
};
