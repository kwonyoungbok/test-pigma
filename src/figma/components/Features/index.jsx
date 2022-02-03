import React from "react";
import Navbar from "../Navbar";
import LogoSection from "../LogoSection";
import HeaderRight from "../HeaderRight";
import FaqHeading from "../FaqHeading";
import FAQ from "../FAQ";
import FAQ2 from "../FAQ2";
import Footer from "../Footer";
import styled from "styled-components";
import {
  Heading2,
  Body1,
  ManropeSemiBoldCharade18px,
  Label01,
  Heading1,
  Heading3,
  Heading6,
  Label2,
} from "../../styledMixins";
import "./Features.css";

function Features(props) {
  const {
    allTheFeaturesYouNeed,
    loremIpsumDolorSi1,
    viewPricing,
    theBenefitsOfWorkingWithOurTeam,
    customizeWithEase,
    loremIpsumDolorSi2,
    perfectlyResponsive,
    loremIpsumDolorSi3,
    friendlySupport,
    loremIpsumDolorSi4,
    useClientFirst,
    topAgenciesAndFre,
    loremIpsumDolorSi5,
    httpsWwwPexelsComPhotoManExplaining,
    httpsWwwPexelsComPhotoPhotoOfManHol,
    httpsWwwPexelsComPhotoAManWorkingIn,
    httpsWwwPexelsComPhotoPersonUsingMa,
    quickDelivery,
    guranteed1WeekDel,
    loremIpsumDolorSi6,
    number1,
    iHaveABiggerProj,
    x758900,
    number2,
    whatIsYourClassNamingConvention,
    x758895,
    navbarProps,
    logoSectionProps,
    headerRight1Props,
    headerRight2Props,
    faqHeadingProps,
    fAQProps,
    fAQ21Props,
    fAQ22Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="features screen">
        <OverlapGroup3>
          <FeaturesHeroSection>
            <HeaderLeft>
              <AllTheFeaturesYouNeed>{allTheFeaturesYouNeed}</AllTheFeaturesYouNeed>
              <LoremIpsumDolorSi>{loremIpsumDolorSi1}</LoremIpsumDolorSi>
              <Button>
                <ViewPricing>{viewPricing}</ViewPricing>
              </Button>
            </HeaderLeft>
            <FeatureHeroIllustration src="/img/feature-hero-illustration@1x.svg" />
          </FeaturesHeroSection>
          <Navbar className={navbarProps.className} />
        </OverlapGroup3>
        <LogoSection figmaUsers={logoSectionProps.figmaUsers} />
        <Benefits>
          <TheBenefitsOfWorkingWithOurTeam>{theBenefitsOfWorkingWithOurTeam}</TheBenefitsOfWorkingWithOurTeam>
          <FlexRow>
            <OverlapGroup1>
              <Icon src="/img/icon-2@2x.svg" />
              <CustomizeWithEase>{customizeWithEase}</CustomizeWithEase>
              <LoremIpsumDolorSi1>{loremIpsumDolorSi2}</LoremIpsumDolorSi1>
            </OverlapGroup1>
            <OverlapGroup>
              <Icon1 src="/img/icon-1@2x.svg" />
              <PerfectlyResponsive>{perfectlyResponsive}</PerfectlyResponsive>
              <LoremIpsumDolorSi2>{loremIpsumDolorSi3}</LoremIpsumDolorSi2>
            </OverlapGroup>
            <Card>
              <Icon2 src="/img/icon@2x.svg" />
              <PointText1>
                <FriendlySupport>{friendlySupport}</FriendlySupport>
                <LoremIpsumDolorSi3>{loremIpsumDolorSi4}</LoremIpsumDolorSi3>
              </PointText1>
            </Card>
          </FlexRow>
        </Benefits>
        <BestInClass>
          <HeaderLeft1>
            <UseClientFirst>{useClientFirst}</UseClientFirst>
            <TopAgenciesAndFre>{topAgenciesAndFre}</TopAgenciesAndFre>
            <LoremIpsumDolorSi4>{loremIpsumDolorSi5}</LoremIpsumDolorSi4>
          </HeaderLeft1>
          <HttpswwwpexelscomphotomanExplaining src={httpsWwwPexelsComPhotoManExplaining} />
        </BestInClass>
        <FreeRevisions>
          <HttpswwwpexelscomphotophotoOfManHol src={httpsWwwPexelsComPhotoPhotoOfManHol} />
          <HeaderRight
            freeRevisionRounds={headerRight1Props.freeRevisionRounds}
            getFreeRevisionsA={headerRight1Props.getFreeRevisionsA}
          />
        </FreeRevisions>
        <Support>
          <HeaderRight
            freeRevisionRounds={headerRight2Props.freeRevisionRounds}
            getFreeRevisionsA={headerRight2Props.getFreeRevisionsA}
            className={headerRight2Props.className}
          />
          <HttpswwwpexelscomphotomanExplaining src={httpsWwwPexelsComPhotoAManWorkingIn} />
        </Support>
        <QuickDeliver>
          <HttpswwwpexelscomphotophotoOfManHol src={httpsWwwPexelsComPhotoPersonUsingMa} />
          <HeaderRight1>
            <QuickDelivery>{quickDelivery}</QuickDelivery>
            <Guranteed1WeekDel>{guranteed1WeekDel}</Guranteed1WeekDel>
            <LoremIpsumDolorSi5>{loremIpsumDolorSi6}</LoremIpsumDolorSi5>
          </HeaderRight1>
        </QuickDeliver>
        <FAQ1>
          <FaqHeading frequentlyAskedQuestion={faqHeadingProps.frequentlyAskedQuestion} />
          <Question>
            <FAQ
              howMuchTimeDoesItTake={fAQProps.howMuchTimeDoesItTake}
              apparentlyWeHadRe={fAQProps.apparentlyWeHadRe}
            />
            <Line src="/img/line-1@1x.svg" />
            <FAQ2
              number={fAQ21Props.number}
              whatIsYourClassNamingConvention={fAQ21Props.whatIsYourClassNamingConvention}
            />
            <Line1 src="/img/line-1@1x.svg" />
            <FAQ2
              number={fAQ22Props.number}
              whatIsYourClassNamingConvention={fAQ22Props.whatIsYourClassNamingConvention}
              className={fAQ22Props.className}
            />
            <Line1 src="/img/line-1@1x.svg" />
            <FAQ3>
              <Number>{number1}</Number>
              <IHaveABiggerProj>{iHaveABiggerProj}</IHaveABiggerProj>
              <X758900 src={x758900} />
            </FAQ3>
            <Line1 src="/img/line-1@1x.svg" />
            <FAQ3>
              <Number>{number2}</Number>
              <WhatIsYourClassNamingConvention>{whatIsYourClassNamingConvention}</WhatIsYourClassNamingConvention>
              <X758895 src={x758895} />
            </FAQ3>
          </Question>
        </FAQ1>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 1600px;
  height: 757px;
  position: relative;
`;

const FeaturesHeroSection = styled.div`
  position: absolute;
  height: 757px;
  top: 0;
  left: 0;
  display: flex;
  padding: 129px 159px;
  align-items: flex-end;
  min-width: 1600px;
  background-color: var(--tint-blue);
  border: 1px solid var(--black);
`;

const HeaderLeft = styled.div`
  width: 566px;
  margin-bottom: 38px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 332px;
`;

const AllTheFeaturesYouNeed = styled.div`
  ${Heading1}
  width: 468px;
  min-height: 148px;
  font-weight: 600;
  color: var(--white);
  line-height: 74px;
`;

const LoremIpsumDolorSi = styled.p`
  ${Label2}
  width: 562px;
  min-height: 56px;
  margin-top: 32px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--white);
  line-height: 28px;
`;

const Button = styled.div`
  height: 64px;
  margin-top: 32px;
  display: flex;
  padding: 0 48px;
  align-items: center;
  min-width: 200px;
  background-color: var(--yellow);
  border-radius: 41px;
`;

const ViewPricing = styled.div`
  ${ManropeSemiBoldCharade18px}
  min-height: 32px;
  min-width: 104px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const FeatureHeroIllustration = styled.img`
  width: 639px;
  height: 409px;
  margin-left: 56px;
`;

const Benefits = styled.div`
  width: 1282px;
  margin-top: 96px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 492px;
`;

const TheBenefitsOfWorkingWithOurTeam = styled.div`
  ${Heading2}
  width: 630px;
  min-height: 128px;
  margin-right: 6px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
`;

const FlexRow = styled.div`
  height: 316px;
  margin-top: 48px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const OverlapGroup1 = styled.div`
  width: 405px;
  display: flex;
  flex-direction: column;
  padding: 48px 32.6px;
  align-items: flex-start;
  min-height: 316px;
  background-color: var(--grey);
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 2px;
  margin-left: 15.39px;
`;

const CustomizeWithEase = styled.div`
  ${Heading6}
  width: 315px;
  min-height: 36px;
  align-self: center;
  margin-top: 26px;
  margin-left: 5.68px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi1 = styled.p`
  ${Body1}
  width: 324px;
  min-height: 112px;
  align-self: flex-end;
  margin-top: 12px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const OverlapGroup = styled.div`
  width: 406px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  padding: 48px 33px;
  align-items: flex-start;
  min-height: 316px;
  background-color: var(--grey);
`;

const Icon1 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 2px;
  margin-left: 14.5px;
`;

const PerfectlyResponsive = styled.div`
  ${Heading6}
  width: 315px;
  min-height: 36px;
  align-self: center;
  margin-top: 26px;
  margin-left: 5.3px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi2 = styled.p`
  ${Body1}
  width: 325px;
  min-height: 112px;
  align-self: flex-end;
  margin-top: 12px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const Card = styled.div`
  width: 405px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  padding: 48px 28px;
  align-items: flex-start;
  min-height: 316px;
  background-color: var(--grey);
`;

const Icon2 = styled.img`
  width: 32px;
  height: 28px;
  margin-top: 4px;
  margin-left: 20px;
`;

const PointText1 = styled.div`
  width: 329px;
  align-self: flex-end;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
`;

const FriendlySupport = styled.div`
  ${Heading6}
  min-height: 36px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi3 = styled.p`
  ${Body1}
  width: 325px;
  min-height: 112px;
  margin-top: 12px;
  margin-left: 0.35px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const BestInClass = styled.div`
  margin-top: 128px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 1280px;
`;

const HeaderLeft1 = styled.div`
  width: 630px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 316px;
`;

const UseClientFirst = styled.div`
  ${Label01};
  position: relative;
  min-height: 32px;
  margin-left: 2px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--black);
  line-height: 32px;
  white-space: nowrap;
`;

const TopAgenciesAndFre = styled.div`
  ${Heading3}
  width: 624px;
  min-height: 168px;
  margin-top: 16px;
  font-weight: 600;
  color: var(--steel-gray);
  line-height: 56px;
`;

const LoremIpsumDolorSi4 = styled.p`
  ${Body1}
  width: 622px;
  min-height: 84px;
  margin-top: 16px;
  opacity: 0.6;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const HttpswwwpexelscomphotomanExplaining = styled.img`
  width: 575px;
  height: 398px;
  margin-left: 75px;
  object-fit: cover;
`;

const FreeRevisions = styled.div`
  height: 654px;
  position: relative;
  margin-top: 128px;
  margin-left: 1px;
  display: flex;
  padding: 0 154px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1599px;
  background-color: var(--grey);
`;

const HttpswwwpexelscomphotophotoOfManHol = styled.img`
  width: 575px;
  height: 398px;
  object-fit: cover;
`;

const Support = styled.div`
  height: 654px;
  position: relative;
  margin-left: 1px;
  display: flex;
  padding: 0 159px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1599px;
  background-color: var(--white);
`;

const QuickDeliver = styled.div`
  height: 654px;
  margin-right: 1px;
  display: flex;
  padding: 0 154px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1599px;
  background-color: var(--goldenrod-2);
`;

const HeaderRight1 = styled.div`
  width: 630px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 256px;
`;

const QuickDelivery = styled.div`
  ${Label2}
  min-height: 28px;
  margin-left: 2px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--black);
  line-height: 28px;
  white-space: nowrap;
`;

const Guranteed1WeekDel = styled.div`
  ${Heading3}
  width: 624px;
  min-height: 112px;
  margin-top: 16px;
  font-weight: 600;
  color: var(--steel-gray);
  line-height: 56px;
`;

const LoremIpsumDolorSi5 = styled.p`
  ${Body1}
  width: 622px;
  min-height: 84px;
  margin-top: 16px;
  opacity: 0.6;
  font-weight: 400;
  color: var(--steel-gray);
  line-height: 28px;
`;

const FAQ1 = styled.div`
  height: 537px;
  position: relative;
  margin-top: 128px;
  margin-right: 0.69px;
  display: flex;
  align-items: flex-start;
  min-width: 1283px;
`;

const Question = styled.div`
  width: 846px;
  position: relative;
  align-self: flex-end;
  margin-left: 105px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 530px;
`;

const Line = styled.img`
  width: 843px;
  height: 2px;
  margin-top: 47px;
  margin-right: 3.31px;
`;

const Line1 = styled.img`
  width: 843px;
  height: 2px;
  margin-top: 31px;
  margin-right: 3.31px;
`;

const FAQ3 = styled.div`
  ${Heading6}
  height: 36px;
  margin-top: 31px;
  margin-right: -0.69px;
  display: flex;
  align-items: center;
  min-width: 817px;
`;

const Number = styled.div`
  min-height: 36px;
  min-width: 31px;
  font-weight: 500;
  color: var(--royal-blue);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const IHaveABiggerProj = styled.div`
  min-height: 36px;
  margin-left: 51px;
  min-width: 518px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const X758900 = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 197px;
`;

const WhatIsYourClassNamingConvention = styled.div`
  min-height: 36px;
  margin-left: 49px;
  min-width: 482px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const X758895 = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 235px;
`;

export default Features;
