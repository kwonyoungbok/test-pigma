import Frame3 from "../Frame3";
import React from "react";
import styled from "styled-components";
import {Body1, Border15pxWhite, Heading1, Heading5, Label01, Label2} from "../../styledMixins";

export interface Props{

}

function SendInquiryCard(props:Props){
    const sendInquiry = 'Send inquiry'
    const loremIpsumDolorSi5 = 'Lorem ipsum dolor sit lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'

    const yourName = "Your Name"
    const email= "Email"
    const pasteYourFigmaDesignUrl = "Paste your Figma design URL"

    return (
        <OverlapGroupContainer3>
            <OverlapGroup9>
                <HttpswwwpexelscomphotowomanWritingO src={'/img/https---www-pexels-com-photo-woman-writing-on-paper-3228878-@1x.png'} />
                <Background></Background>
                <HeadingTwo>
                    <BuildingStellarWeb2>Building stellar websites for early startups</BuildingStellarWeb2>
                    <LoremIpsumDolorSi3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."</LoremIpsumDolorSi3>
                </HeadingTwo>
            </OverlapGroup9>

        <OverlapGroup22>
            <SendInquiry>{sendInquiry}</SendInquiry>
            <LoremIpsumDolorSi4>{loremIpsumDolorSi5}</LoremIpsumDolorSi4>
            <OverlapGroup12>
                <Rectangle1302></Rectangle1302>
                <Rectangle1303></Rectangle1303>
                <Rectangle1304></Rectangle1304>
                <Group2399>
                    <YourName>{yourName}</YourName>
                    <Email>{email}</Email>
                    <Email>{pasteYourFigmaDesignUrl}</Email>
                </Group2399>
            </OverlapGroup12>
            <Frame3>Send an Inquiry</Frame3>
            <OverlapGroup10>
                <GetInTouchWithUs1>Get in touch with us</GetInTouchWithUs1>
                <Arrow2 src="/img/arrow-2@2x.svg" />
            </OverlapGroup10>
        </OverlapGroup22>

        </OverlapGroupContainer3>
    )
}
const OverlapGroupContainer3 = styled.div`
  width: 1280px;
  height: 691px;
  position: relative;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  width: 1280px;
  height: 691px;
  top: 0;
  left: 0;
`;

const HttpswwwpexelscomphotowomanWritingO = styled.img`
  position: absolute;
  width: 656px;
  height: 691px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const LoremIpsumDolorSi3 = styled.p`
  ${Label2};
  width: 464px;
  min-height: 85px;
  margin-top: 24px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
`;

const BuildingStellarWeb2 = styled.div`
  ${Heading1};
  width: 464px;
  min-height: 225px;
  font-weight: 600;
  color: var(--french-gray);
  line-height: 74px;
`;


const HeadingTwo = styled.div`
  position: absolute;
  width: 468px;
  top: 96px;
  left: 96px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 334px;
`;

const Background = styled.div`
  position: absolute;
  width: 1280px;
  height: 691px;
  top: 0;
  left: 0;
  background-color: #1c1e5380;
`;


const OverlapGroup22 = styled.div`
  position: absolute;
  width: 624px;
  top: 0;
  left: 656px;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  align-items: center;
  min-height: 681px;
  background-color: var(--tint-blue);
`;


const OverlapGroup12 = styled.div`
  width: 432px;
  height: 224px;
  position: relative;
  margin-top: 40px;
`;

const SendInquiry = styled.div`
  ${Heading5};
  width: 432px;
  min-height: 48px;
  margin-top: 48px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 48px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi4 = styled.p`
  ${Label2};
  width: 432px;
  min-height: 56px;
  margin-top: 16px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
`;

const Rectangle1302 = styled.div`
  ${Border15pxWhite};
  position: absolute;
  width: 432px;
  height: 64px;
  top: 0;
  left: 0;
  border-radius: 8px;
`;

const Group2399 = styled.div`
  ${Body1};
  position: absolute;
  width: 235px;
  top: 18px;
  left: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 188px;
`;

const YourName = styled.div`
  min-height: 28px;
  opacity: 0.5;
  font-weight: 400;
  color: var(--grey);
  line-height: 28px;
  white-space: nowrap;
`;

const Email = styled.div`
  min-height: 28px;
  margin-top: 52px;
  opacity: 0.5;
  font-weight: 400;
  color: var(--grey);
  line-height: 28px;
  white-space: nowrap;
`;

const Rectangle1303 = styled.div`
  ${Border15pxWhite};
  position: absolute;
  width: 432px;
  height: 64px;
  top: 80px;
  left: 0;
  border-radius: 8px;
`;

const Rectangle1304 = styled.div`
  ${Border15pxWhite};
  position: absolute;
  width: 432px;
  height: 64px;
  top: 160px;
  left: 0;
  border-radius: 8px;
`;

const OverlapGroup10 = styled.div`
  width: 244px;
  height: 32px;
  position: relative;
  margin-top: 28px;
`;

const GetInTouchWithUs1 = styled.div`
  ${Label01};
  position: absolute;
  width: 244px;
  top: 0;
  left: 0;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 32px;
  white-space: nowrap;
`;


const Arrow2 = styled.img`
  position: absolute;
  width: 25px;
  height: 11px;
  top: 10px;
  left: 190px;
`;
export default SendInquiryCard;