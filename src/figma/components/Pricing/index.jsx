import React from "react";
import Navbar from "../Navbar";
import Qn2 from "../Qn2";
import Footer from "../Footer";
import styled from "styled-components";
import {
  Heading2,
  Body1,
  ManropeSemiBoldCharade18px,
  Label01,
  Heading3,
  ManropeSemiBoldZircon18px,
  Heading6,
  Label2,
} from "../../styledMixins";
import "./Pricing.css";

function Pricing(props) {
  const {
    ourPricingPlans,
    whenYoureReadyTo1,
    x201,
    month1,
    starter1,
    whenYoureReadyTo2,
    allLimitedLinks1,
    allLimitedLinks2,
    allLimitedLinks3,
    allLimitedLinks4,
    allLimitedLinks5,
    getStarted1,
    x202,
    month2,
    starter2,
    whenYoureReadyTo3,
    allLimitedLinks6,
    allLimitedLinks7,
    allLimitedLinks8,
    allLimitedLinks9,
    allLimitedLinks10,
    getStarted2,
    x203,
    month3,
    starter3,
    whenYoureReadyTo4,
    allLimitedLinks11,
    allLimitedLinks12,
    allLimitedLinks13,
    allLimitedLinks14,
    allLimitedLinks15,
    allLimitedLinks16,
    contactUs,
    frequentlyAskedQuestions,
    contactUsForMoreInfo,
    number,
    howMuchTimeDoesItTake,
    x1844,
    loremIpsumDolorSi,
    qn21Props,
    qn22Props,
    qn23Props,
    qn24Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="pricing screen">
        <Navbar />
        <PricingHeading>
          <OurPricingPlans>{ourPricingPlans}</OurPricingPlans>
          <WhenYoureReadyTo>{whenYoureReadyTo1}</WhenYoureReadyTo>
        </PricingHeading>
        <OverlapGroupContainer>
          <OverlapGroup5>
            <FlexRow>
              <X20>{x201}</X20>
              <Month>{month1}</Month>
            </FlexRow>
            <Starter>{starter1}</Starter>
            <WhenYoureReadyTo1>{whenYoureReadyTo2}</WhenYoureReadyTo1>
            <List>
              <PointerContainer>
                <Pointer src="/img/pointer-11@2x.svg" />
                <Pointer1 src="/img/pointer-12@2x.svg" />
                <Pointer1 src="/img/pointer-13@2x.svg" />
                <Pointer2 src="/img/pointer-14@2x.svg" />
                <Pointer2 src="/img/pointer-15@2x.svg" />
              </PointerContainer>
              <AllLimitedLinksContainer>
                <AllLimitedLinks>{allLimitedLinks1}</AllLimitedLinks>
                <AllLimitedLinks1>{allLimitedLinks2}</AllLimitedLinks1>
                <AllLimitedLinks1>{allLimitedLinks3}</AllLimitedLinks1>
                <AllLimitedLinks2>{allLimitedLinks4}</AllLimitedLinks2>
                <AllLimitedLinks2>{allLimitedLinks5}</AllLimitedLinks2>
              </AllLimitedLinksContainer>
            </List>
            <Button>
              <GetStarted>{getStarted1}</GetStarted>
            </Button>
          </OverlapGroup5>
          <OverlapGroup4>
            <FlexRow1>
              <X201>{x202}</X201>
              <Month1>{month2}</Month1>
            </FlexRow1>
            <Starter1>{starter2}</Starter1>
            <WhenYoureReadyTo2>{whenYoureReadyTo3}</WhenYoureReadyTo2>
            <List1>
              <PointerContainer>
                <Pointer src="/img/pointer-6@2x.svg" />
                <Pointer1 src="/img/pointer-7@2x.svg" />
                <Pointer1 src="/img/pointer-8@2x.svg" />
                <Pointer1 src="/img/pointer-9@2x.svg" />
                <Pointer1 src="/img/pointer-10@2x.svg" />
              </PointerContainer>
              <AllLimitedLinksContainer>
                <AllLimitedLinks3>{allLimitedLinks6}</AllLimitedLinks3>
                <AllLimitedLinks4>{allLimitedLinks7}</AllLimitedLinks4>
                <AllLimitedLinks4>{allLimitedLinks8}</AllLimitedLinks4>
                <AllLimitedLinks4>{allLimitedLinks9}</AllLimitedLinks4>
                <AllLimitedLinks4>{allLimitedLinks10}</AllLimitedLinks4>
              </AllLimitedLinksContainer>
            </List1>
            <Button1>
              <GetStarted1>{getStarted2}</GetStarted1>
            </Button1>
          </OverlapGroup4>
          <OverlapGroup3>
            <FlexRow2>
              <X202>{x203}</X202>
              <Month2>{month3}</Month2>
            </FlexRow2>
            <Starter2>{starter3}</Starter2>
            <WhenYoureReadyTo3>{whenYoureReadyTo4}</WhenYoureReadyTo3>
            <List2>
              <PointerContainer1>
                <Pointer src="/img/pointer@2x.svg" />
                <Pointer1 src="/img/pointer-1@2x.svg" />
                <Pointer1 src="/img/pointer-2@2x.svg" />
                <Pointer1 src="/img/pointer-3@2x.svg" />
                <Pointer1 src="/img/pointer-4@2x.svg" />
                <Pointer1 src="/img/pointer-5@2x.svg" />
              </PointerContainer1>
              <AllLimitedLinksContainer1>
                <AllLimitedLinks>{allLimitedLinks11}</AllLimitedLinks>
                <AllLimitedLinks1>{allLimitedLinks12}</AllLimitedLinks1>
                <AllLimitedLinks1>{allLimitedLinks13}</AllLimitedLinks1>
                <AllLimitedLinks1>{allLimitedLinks14}</AllLimitedLinks1>
                <AllLimitedLinks1>{allLimitedLinks15}</AllLimitedLinks1>
                <AllLimitedLinks1>{allLimitedLinks16}</AllLimitedLinks1>
              </AllLimitedLinksContainer1>
            </List2>
            <Button2>
              <ContactUs>{contactUs}</ContactUs>
            </Button2>
          </OverlapGroup3>
        </OverlapGroupContainer>
        <FAQ>
          <FaqHeading>
            <FrequentlyAskedQuestions>{frequentlyAskedQuestions}</FrequentlyAskedQuestions>
            <ContactUsForMoreInfo>{contactUsForMoreInfo}</ContactUsForMoreInfo>
          </FaqHeading>
          <Question>
            <Qn1Expand>
              <FlexRow3>
                <Number>{number}</Number>
                <HowMuchTimeDoesItTake>{howMuchTimeDoesItTake}</HowMuchTimeDoesItTake>
                <X1844 src={x1844} />
              </FlexRow3>
              <FlexCol>
                <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
                <Line src="/img/line-44@1x.svg" />
              </FlexCol>
            </Qn1Expand>
            <Qn2
              number={qn21Props.number}
              whatIsYourClassNamingConvention={qn21Props.whatIsYourClassNamingConvention}
            />
            <Qn2
              number={qn22Props.number}
              whatIsYourClassNamingConvention={qn22Props.whatIsYourClassNamingConvention}
              className={qn22Props.className}
            />
            <Qn2
              number={qn23Props.number}
              whatIsYourClassNamingConvention={qn23Props.whatIsYourClassNamingConvention}
              className={qn23Props.className}
            />
            <Qn2
              number={qn24Props.number}
              whatIsYourClassNamingConvention={qn24Props.whatIsYourClassNamingConvention}
              className={qn24Props.className}
            />
          </Question>
        </FAQ>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} />
      </div>
    </div>
  );
}

const PricingHeading = styled.div`
  width: 566px;
  margin-top: 128px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 136px;
`;

const OurPricingPlans = styled.div`
  ${Heading2}
  min-height: 64px;
  margin-right: 6px;
  min-width: 414px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 64px;
  white-space: nowrap;
`;

const WhenYoureReadyTo = styled.p`
  ${Label2}
  width: 562px;
  min-height: 56px;
  margin-top: 16px;
  margin-right: 4px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
`;

const OverlapGroupContainer = styled.div`
  height: 745px;
  margin-top: 64px;
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 1290px;
`;

const OverlapGroup5 = styled.div`
  width: 406px;
  display: flex;
  flex-direction: column;
  padding: 62px 48px;
  align-items: flex-start;
  min-height: 745px;
  background-color: var(--grey);
  border-radius: 12px;
`;

const FlexRow = styled.div`
  height: 56px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  min-width: 187px;
`;

const X20 = styled.div`
  ${Heading3}
  width: 95px;
  min-height: 56px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const Month = styled.div`
  ${Body1}
  min-height: 28px;
  margin-left: 8px;
  min-width: 84px;
  font-weight: 400;
  color: var(--royal-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Starter = styled.div`
  ${Heading6}
  min-height: 38px;
  margin-top: 20px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const WhenYoureReadyTo1 = styled.p`
  ${Label2}
  width: 281px;
  min-height: 56px;
  margin-top: 8px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
`;

const List = styled.div`
  height: 220px;
  margin-top: 78px;
  display: flex;
  padding: 0 1px;
  align-items: center;
  min-width: 227px;
`;

const PointerContainer = styled.div`
  width: 16px;
  margin-top: 1.28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 212px;
`;

const Pointer = styled.img`
  width: 16px;
  height: 20px;
`;

const Pointer1 = styled.img`
  width: 16px;
  height: 20px;
  margin-top: 28px;
`;

const Pointer2 = styled.img`
  width: 16px;
  height: 20px;
  margin-top: 28px;
  mix-blend-mode: luminosity;
`;

const AllLimitedLinksContainer = styled.div`
  ${Body1}
  width: 187px;
  margin-left: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 220px;
`;

const AllLimitedLinks = styled.div`
  min-height: 28px;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const AllLimitedLinks1 = styled.div`
  min-height: 28px;
  margin-top: 20px;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const AllLimitedLinks2 = styled.div`
  min-height: 28px;
  margin-top: 20px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Button = styled.div`
  height: 64px;
  align-self: center;
  margin-top: 79px;
  display: flex;
  padding: 0 77.5px;
  align-items: center;
  min-width: 254px;
  background-color: var(--dark-blue);
  border-radius: 41px;
`;

const GetStarted = styled.div`
  ${ManropeSemiBoldZircon18px}
  min-height: 32px;
  min-width: 99px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const GetStarted1 = styled.div`
  ${ManropeSemiBoldCharade18px}
  min-height: 32px;
  min-width: 99px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 406px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  padding: 62px 48px;
  align-items: flex-start;
  min-height: 745px;
  background-color: var(--tint-blue);
  border-radius: 12px;
  background-image: url(/img/mask-group@1x.svg);
  background-size: 100% 100%;
`;

const FlexRow1 = styled.div`
  height: 56px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  min-width: 200px;
`;

const X201 = styled.div`
  ${Heading3}
  width: 95px;
  min-height: 56px;
  font-weight: 600;
  color: var(--white);
  line-height: 56px;
  white-space: nowrap;
`;

const Month1 = styled.div`
  ${Body1}
  min-height: 28px;
  margin-left: 8px;
  min-width: 97px;
  font-weight: 400;
  color: var(--yellow);
  line-height: 28px;
  white-space: nowrap;
`;

const Starter1 = styled.div`
  ${Heading6}
  min-height: 38px;
  margin-top: 20px;
  font-weight: 500;
  color: var(--white);
  line-height: 36px;
  white-space: nowrap;
`;

const WhenYoureReadyTo2 = styled.p`
  ${Label2}
  width: 281px;
  min-height: 84px;
  margin-top: 8px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--white);
  line-height: 28px;
`;

const List1 = styled.div`
  height: 220px;
  margin-top: 50px;
  display: flex;
  padding: 0 1px;
  align-items: center;
  min-width: 227px;
`;

const AllLimitedLinks3 = styled.div`
  min-height: 28px;
  font-weight: 400;
  color: var(--white);
  line-height: 28px;
  white-space: nowrap;
`;

const AllLimitedLinks4 = styled.div`
  min-height: 28px;
  margin-top: 20px;
  font-weight: 400;
  color: var(--white);
  line-height: 28px;
  white-space: nowrap;
`;

const Button1 = styled.div`
  height: 64px;
  align-self: center;
  margin-top: 79px;
  display: flex;
  padding: 0 77.5px;
  align-items: center;
  min-width: 254px;
  background-color: var(--yellow);
  border-radius: 41px;
`;

const OverlapGroup3 = styled.div`
  width: 406px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  padding: 62px 48px;
  align-items: flex-start;
  min-height: 745px;
  background-color: var(--grey);
  border-radius: 12px;
`;

const FlexRow2 = styled.div`
  height: 56px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  min-width: 226px;
`;

const X202 = styled.div`
  ${Heading3}
  min-height: 56px;
  min-width: 124px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const Month2 = styled.div`
  ${Body1}
  min-height: 28px;
  margin-left: 18px;
  min-width: 84px;
  font-weight: 400;
  color: var(--royal-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Starter2 = styled.div`
  ${Heading6}
  min-height: 36px;
  margin-top: 20px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const WhenYoureReadyTo3 = styled.p`
  ${Label2}
  width: 281px;
  min-height: 56px;
  margin-top: 10px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
`;

const List2 = styled.div`
  height: 268px;
  margin-top: 44px;
  display: flex;
  padding: 0 1px;
  align-items: center;
  min-width: 229px;
`;

const PointerContainer1 = styled.div`
  width: 16px;
  margin-top: 1.28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 260px;
`;

const AllLimitedLinksContainer1 = styled.div`
  ${Body1}
  width: 187px;
  margin-left: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 268px;
`;

const Button2 = styled.div`
  height: 64px;
  align-self: center;
  margin-top: 65px;
  display: flex;
  padding: 0 79px;
  align-items: center;
  min-width: 254px;
  background-color: var(--dark-blue);
  border-radius: 41px;
`;

const ContactUs = styled.div`
  ${ManropeSemiBoldZircon18px}
  min-height: 32px;
  min-width: 96px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const FAQ = styled.div`
  height: 562px;
  margin-top: 128px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const FaqHeading = styled.div`
  width: 415px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 176px;
`;

const FrequentlyAskedQuestions = styled.div`
  ${Heading2}
  width: 406px;
  min-height: 128px;
  align-self: flex-end;
  margin-right: 4px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 64px;
`;

const ContactUsForMoreInfo = styled.div`
  ${Label01}
  min-height: 32px;
  margin-top: 16px;
  min-width: 221px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--royal-blue);
  text-align: center;
  line-height: 32px;
  white-space: nowrap;
`;

const Question = styled.div`
  width: 844px;
  position: relative;
  margin-left: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 562px;
`;

const Qn1Expand = styled.div`
  width: 849px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 162px;
`;

const FlexRow3 = styled.div`
  ${Heading6}
  height: 36px;
  margin-right: 11.64px;
  display: flex;
  align-items: center;
  min-width: 781px;
`;

const Number = styled.div`
  min-height: 36px;
  min-width: 24px;
  font-weight: 500;
  color: var(--royal-blue);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const HowMuchTimeDoesItTake = styled.div`
  min-height: 36px;
  margin-left: 58px;
  min-width: 356px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const X1844 = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 328px;
  margin-bottom: 0.96px;
`;

const FlexCol = styled.div`
  width: 843px;
  margin-top: 16px;
  margin-right: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 110px;
`;

const LoremIpsumDolorSi = styled.div`
  ${Label01}
  width: 624px;
  min-height: 62px;
  margin-left: 1px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 32px;
`;

const Line = styled.img`
  width: 843px;
  height: 1px;
  margin-top: 48px;
`;

export default Pricing;
