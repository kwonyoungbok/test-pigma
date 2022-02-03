import React from "react";
import styled from "styled-components";
import { Heading2, Label01, Label2, Body1 } from "../../styledMixins";
import FooterNav from "../Navbar/footer-nav";
import {MenuItem} from '../Navbar/menu'
import {SocialMediaKind} from './social-media'


export interface Props{
  copyrightString?:string
  className?:string
  onClickSocialMedia?:(s:SocialMediaKind)=>void
  onClickMenu?:(m:MenuItem)=>void
}


function Footer(props:Props) {
  const { copyrightString, className } = props;
  const onClickSocialMedia = React.useCallback((e,s:SocialMediaKind)=>{
    e?.stopPropagation?.()
    props.onClickSocialMedia?.(s)
  },[])

  return (
    <Footer1 className={`footer ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1-1">
        <OverlapGroup2 className="overlap-group2">
          <Content className="content">
            <WeAreAlwaysOpenT className="we-are-always-open-t">
              We are always open to discuss your project and improve your online presence.
            </WeAreAlwaysOpenT>
            <FlexCol className="flex-col-1">
              <LetsTalk className="lets-talk">Lets Talk!</LetsTalk>
              <WeAreAlwaysOpenT1 className="we-are-always-open-t-1">
                We are always open to discuss your project, improve your online presence and help with your UX/UI design
                challenges.
              </WeAreAlwaysOpenT1>

              <SocialMediaIconList>
                <SocialMediaIcon src={'/img/github.svg'} onClick={(e)=>onClickSocialMedia(e,'git-hub')} />
                <SocialMediaIcon src={'/img/twitter.svg'} onClick={(e)=>onClickSocialMedia(e,'twitter')} />
              </SocialMediaIconList>

              <SocialMediaIconOrigin className="social-media-icon" src="/img/social-media-icon@2x.svg" />
            </FlexCol>
          </Content>
          <Logo className="logo" src="/img/logo@2x.svg" />
        </OverlapGroup2>
        <ContactInfo className="contact-info">
          <FlexCol1 className="flex-col-2">
            <EmailMeAt className="email-me-at">Email me at</EmailMeAt>
            <Contactwebsitecom className="contactwebsitecom">contact@website.com</Contactwebsitecom>
          </FlexCol1>
          <FlexCol2 className="flex-col-3">
            <EmailMeAt className="call-us">Call us</EmailMeAt>
            <Contactwebsitecom className="phone">0927 6277 28525</Contactwebsitecom>
          </FlexCol2>
        </ContactInfo>
      </OverlapGroup1>
      <FooterNav copyrightString={copyrightString} onClick={props.onClickMenu} />
    </Footer1>
  );
}

const Footer1 = styled.div`
  width: 1600px;
  margin-top: 128px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 489px;

  &.footer.footer-1 {
    margin-left: 2px;
  }

  &.footer.footer-2 {
    margin-left: unset;
  }

  &.footer.footer-3 {
    margin-left: unset;
  }

  &.footer.footer-4 {
    margin-left: 6px;
  }

  &.footer.footer-5 {
    margin-left: unset;
  }

  &.footer.footer-6 {
    margin-top: unset;
    margin-left: unset;
  }

  &.footer.footer-7 {
    margin-left: unset;
  }

  &.footer.footer-8 {
    margin-left: unset;
  }

  &.footer.footer-9 {
    margin-left: unset;
  }
`;

const OverlapGroup1 = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  padding: 0 158px;
  align-items: flex-start;
  min-height: 397px;
  background-color: var(--tint-blue);
`;

const OverlapGroup2 = styled.div`
  width: 1066px;
  height: 206px;
  position: relative;
  margin-top: 96px;
`;

const Content = styled.div`
  position: absolute;
  height: 206px;
  top: 0;
  left: 2px;
  display: flex;
  align-items: center;
  min-width: 1064px;
`;

const WeAreAlwaysOpenT = styled.p`
  ${Label2};
  width: 399px;
  min-height: 56px;
  margin-bottom: 22px;
  opacity: 0.8;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
`;

const FlexCol = styled.div`
  width: 400px;
  margin-left: 259px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 206px;
`;

const LetsTalk = styled.div`
  ${Heading2};
  min-height: 64px;
  font-weight: 600;
  color: var(--french-gray);
  line-height: 64px;
  white-space: nowrap;
`;

const WeAreAlwaysOpenT1 = styled.p`
  ${Body1};
  width: 399px;
  min-height: 84px;
  margin-top: 14px;
  margin-left: 1px;
  opacity: 0.8;
  font-weight: 400;
  color: var(--french-gray);
  line-height: 28px;
`;

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 28px;
  margin-left: 1px;
  cursor: pointer;
`;


const SocialMediaIconOrigin = styled.img`
  width: 144px;
  height: 16px;
  margin-top: 28px;
  margin-left: 1px;
`;

const SocialMediaIconList = styled.div`
  display: flex;
  gap: 10px;
`

const Logo = styled.img`
  position: absolute;
  width: 156px;
  height: 38px;
  top: 4px;
  left: 0;
`;

const ContactInfo = styled.div`
  height: 95px;
  margin-left: 2px;
  display: flex;
  padding: 16px 37px;
  align-items: center;
  min-width: 517px;
  background-color: var(--yellow);
`;

const FlexCol1 = styled.div`
  width: 181px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 61px;
`;

const EmailMeAt = styled.div`
  ${Label01};
  min-height: 32px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 32px;
  white-space: nowrap;
`;

const Contactwebsitecom = styled.div`
  ${Body1};
  min-height: 28px;
  margin-top: 1px;
  opacity: 0.8;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const FlexCol2 = styled.div`
  width: 133px;
  margin-left: 29px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 61px;
`;

// const OverlapGroup = styled.div`
//   ${Label2};
//   height: 92px;
//   display: flex;
//   padding: 0 159px;
//   justify-content: flex-end;
//   align-items: center;
//   min-width: 1600px;
//   background-color: var(--white);
// `;
//
// const Copyright2021Finsweetcom = styled.div`
//   min-height: 28px;
//   min-width: 238px;
//   font-weight: 500;
//   color: var(--dark-blue);
//   line-height: 28px;
//   white-space: nowrap;
// `;
//
//
//
// const Copyright2021Finsweetcom1 = styled.div`
//   .footer.footer-9 & {
//     min-width: 241px;
//   }
// `;
//
// const Place1 = styled.div`
//   .footer.footer-9 & {
//     margin-left: 567px;
//   }
// `;

export default Footer;
