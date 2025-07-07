import React from 'react';
import {
  Wrapper, HeaderDiv, WrapContacts, WrapLogo, WrapContent
} from './privacy-styled';
import logo from '../first/logo.png';
import whatsapp from '../../whatsapp.png';
import telegram from '../../telegram.png';

export const PrivacyPolicyQr = (props) => {
  const {langProps} = props;

  return (<>
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
          <h2>User Agreement for Creating Digital Messages</h2>

          <h3>1. General Provisions</h3>
          <p>
            1.1. By creating a personal digital message on the website
            https://jewelcocktail.com (hereinafter referred to as the "Website"), the
            user (hereinafter referred to as the "User") uploads personal content
            (photos, text messages, audio files), which becomes accessible via a unique
            public link (QR code).
          </p>
          <p>
            1.2. By creating a digital message, the User fully agrees to this Agreement
            and the Privacy Policy governing data processing.
          </p>

          <h3>2. Submitted Content</h3>
          <p>The User may upload:</p>
          <ul>
            <li>images (photos, illustrations);</li>
            <li>text messages;</li>
            <li>audio recordings (optional);</li>
            <li>email address (for notifications and access recovery).</li>
          </ul>

          <h3>3. Public Nature of the Message and Storage Period</h3>
          <p>
            3.1. The content uploaded by the User is published in a publicly accessible
            format via a unique link (QR code), which can be accessed by anyone who has
            this link.
          </p>
          <p>
            3.2. The Operator does not control who may access or share the QR code.
            Anyone possessing the link may view the content.
          </p>
          <p>
            3.3. The digital message will be stored for 12 months from its creation
            date. After this period, the content will be permanently deleted and cannot
            be recovered.
          </p>
          <p>
            3.4. By creating a message, the User acknowledges and accepts the public
            nature of the content.
          </p>

          <h3>4. Responsibility for Uploaded Content</h3>
          <p>4.1. The User is solely responsible for all uploaded content.</p>
          <p>
            4.2. The User confirms that:
            <ul>
              <li>they have all necessary rights to the submitted materials;</li>
              <li>
                the content does not violate any copyright, intellectual property rights,
                or any applicable laws;
              </li>
              <li>
                the content does not include prohibited, offensive, defamatory,
                discriminatory, pornographic, extremist, or otherwise illegal material.
              </li>
            </ul>
          </p>
          <p>
            4.3. In the event of any claims, legal actions, or complaints by third
            parties or authorities related to the content, the User bears full
            responsibility and liability.
          </p>
          <p>
            4.4. The Operator reserves the right to remove any content that violates
            this Agreement without prior notice.
          </p>

          <h3>5. Data Processing</h3>
          <p>
            5.1. The User’s email address and any personal data provided are processed
            solely for:
            <ul>
              <li>confirming message creation;</li>
              <li>sending status notifications;</li>
              <li>restoring access if needed.</li>
            </ul>
          </p>
          <p>
            5.2. Data storage and processing are performed in accordance with the
            Privacy Policy available on the Website.
          </p>

          <h3>6. Limitation of Operator’s Liability</h3>
          <p>6.1. The Operator does not pre-moderate or edit the content submitted by Users.</p>
          <p>
            6.2. The Operator is not responsible for any damage or claims resulting from
            the distribution or access to digital messages created by Users.
          </p>
          <p>
            6.3. The User assumes full responsibility for any risks associated with
            uploading, sharing, and distributing content, including sharing QR codes
            with third parties.
          </p>

          <h3>7. Acceptance of Terms</h3>
          <p>
            By creating a digital message and uploading any content to the Website, the
            User acknowledges and agrees to all terms of this Agreement.
          </p>
        </WrapContent>

      </Wrapper>
    </>);
};
