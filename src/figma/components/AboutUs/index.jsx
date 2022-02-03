import React from "react";
import Navbar from "../Navbar";
import Card from "../Card";
import LogoSection from "../LogoSection";
import Footer from "../Footer";
import styled from "styled-components";
import { Heading2, Heading3, Heading6, Label01, Label2, Body1, Heading1 } from "../../styledMixins";
import "./AboutUs.css";

function AboutUs(props) {
  const {
    aboutUs,
    ourDesignsSolveProblems,
    loremIpsumDolorSi1,
    httpsWwwPexelsComPhotoGroupOfPeople,
    whoWeAre,
    goalFocussed,
    loremIpsumDolorSi2,
    continuousImprovement,
    loremIpsumDolorSi3,
    httpsWwwPexelsComPhotoManInBlueJack,
    sectionTitle,
    ourMission,
    inspireInnovateShare,
    loremIpsumDolorSi4,
    httpsWwwPexelsComPhotoAManStandingI,
    httpsWwwPexelsComPhotoPhotoOfWomenA,
    ourVision,
    laserFocus,
    loremIpsumDolorSi5,
    theBenefitsOfWorkingWithUs,
    customizeWithEase,
    loremIpsumDolorSi6,
    perfectlyResponsive,
    loremIpsumDolorSi7,
    friendlySupport,
    loremIpsumDolorSi8,
    meetOurTeam,
    httpsWwwPexelsComPhotoManInBlackSui,
    name1,
    ceo,
    httpsWwwPexelsComPhotoSeriousMan376,
    name2,
    cto,
    httpsWwwPexelsComPhotoManInWhiteShi,
    name3,
    designLead,
    httpsWwwPexelsComPhotoTransgenderMo,
    name4,
    projectManager,
    card1Props,
    card2Props,
    card3Props,
    card4Props,
    logoSectionProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about-us screen">
        <Navbar />
        <AboutUsHero>
          <Content>
            <AboutUs1>{aboutUs}</AboutUs1>
            <OurDesignsSolveProblems>{ourDesignsSolveProblems}</OurDesignsSolveProblems>
            <LoremIpsumDolorSi>{loremIpsumDolorSi1}</LoremIpsumDolorSi>
          </Content>
          <HttpswwwpexelscomphotogroupOfPeople src={httpsWwwPexelsComPhotoGroupOfPeople} />
        </AboutUsHero>
        <WhoWeAre>
          <FlexRow>
            <FlexCol>
              <WhoWeAre1>{whoWeAre}</WhoWeAre1>
              <GoalFocussed>{goalFocussed}</GoalFocussed>
              <LoremIpsumDolorSi1>{loremIpsumDolorSi2}</LoremIpsumDolorSi1>
            </FlexCol>
            <FlexCol1>
              <ContinuousImprovement>{continuousImprovement}</ContinuousImprovement>
              <LoremIpsumDolorSi2>{loremIpsumDolorSi3}</LoremIpsumDolorSi2>
            </FlexCol1>
          </FlexRow>
          <HttpswwwpexelscomphotomanInBlueJack src={httpsWwwPexelsComPhotoManInBlueJack} />
        </WhoWeAre>
        <Process>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <Cards>
            <Card heading={card1Props.heading} />
            <Card heading={card2Props.heading} className={card2Props.className} />
            <Card heading={card3Props.heading} className={card3Props.className} />
            <Card heading={card4Props.heading} className={card4Props.className} />
          </Cards>
        </Process>
        <OurMissionAndOurVision>
          <SionContainer>
            <OurVision>
              <Content1>
                <OurMission>{ourMission}</OurMission>
                <InspireInnovateShare>{inspireInnovateShare}</InspireInnovateShare>
                <LoremIpsumDolorSi3>{loremIpsumDolorSi4}</LoremIpsumDolorSi3>
              </Content1>
              <HttpswwwpexelscomphotoaManStandingI src={httpsWwwPexelsComPhotoAManStandingI} />
            </OurVision>
            <OurMission1>
              <HttpswwwpexelscomphotophotoOfWomenA src={httpsWwwPexelsComPhotoPhotoOfWomenA} />
              <Content2>
                <OurVision1>{ourVision}</OurVision1>
                <LaserFocus>{laserFocus}</LaserFocus>
                <LoremIpsumDolorSi4>{loremIpsumDolorSi5}</LoremIpsumDolorSi4>
              </Content2>
            </OurMission1>
          </SionContainer>
        </OurMissionAndOurVision>
        <Benefits>
          <TheBenefitsOfWorkingWithUs>{theBenefitsOfWorkingWithUs}</TheBenefitsOfWorkingWithUs>
          <FlexRow1>
            <OverlapGroup1>
              <Icon src="/img/icon-2@2x.svg" />
              <CustomizeWithEase>{customizeWithEase}</CustomizeWithEase>
              <LoremIpsumDolorSi5>{loremIpsumDolorSi6}</LoremIpsumDolorSi5>
            </OverlapGroup1>
            <OverlapGroup>
              <Icon1 src="/img/icon-1@2x.svg" />
              <PerfectlyResponsive>{perfectlyResponsive}</PerfectlyResponsive>
              <LoremIpsumDolorSi6>{loremIpsumDolorSi7}</LoremIpsumDolorSi6>
            </OverlapGroup>
            <Card1>
              <Icon2 src="/img/icon@2x.svg" />
              <PointText1>
                <FriendlySupport>{friendlySupport}</FriendlySupport>
                <LoremIpsumDolorSi7>{loremIpsumDolorSi8}</LoremIpsumDolorSi7>
              </PointText1>
            </Card1>
          </FlexRow1>
          <LogoSection figmaUsers={logoSectionProps.figmaUsers} className={logoSectionProps.className} />
        </Benefits>
        <OurTeam>
          <OverlapGroup4>
            <MeetOurTeam>{meetOurTeam}</MeetOurTeam>
            <Cards1>
              <OverlapGroup3>
                <OverlapGroup2>
                  <HttpswwwpexelscomphotomanInBlackSui src={httpsWwwPexelsComPhotoManInBlackSui} />
                  <Name>{name1}</Name>
                  <CEO>{ceo}</CEO>
                </OverlapGroup2>
                <Ellipse228 src="/img/ellipse-228@2x.svg" />
                <Socials src="/img/socials@2x.svg" />
              </OverlapGroup3>
              <OverlapGroup11>
                <HttpswwwpexelscomphotoseriousMan376 src={httpsWwwPexelsComPhotoSeriousMan376} />
                <Name>{name2}</Name>
                <CTO>{cto}</CTO>
              </OverlapGroup11>
              <OverlapGroup5>
                <HttpswwwpexelscomphotomanInBlackSui src={httpsWwwPexelsComPhotoManInWhiteShi} />
                <Name1>{name3}</Name1>
                <DesignLead>{designLead}</DesignLead>
              </OverlapGroup5>
              <OverlapGroup5>
                <HttpswwwpexelscomphotomanInBlackSui src={httpsWwwPexelsComPhotoTransgenderMo} />
                <Name2>{name4}</Name2>
                <ProjectManager>{projectManager}</ProjectManager>
              </OverlapGroup5>
            </Cards1>
          </OverlapGroup4>
        </OurTeam>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const AboutUsHero = styled.div`
  margin-top: 128px;
  display: flex;
  align-items: center;
  min-width: 1280px;
`;

const Content = styled.div`
  width: 601px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 303px;
`;

const AboutUs1 = styled.div`
  ${Label01}
  min-height: 32px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 32px;
  white-space: nowrap;
`;

const OurDesignsSolveProblems = styled.div`
  ${Heading1}
  width: 595px;
  min-height: 148px;
  margin-top: 8px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 74px;
`;

const LoremIpsumDolorSi = styled.p`
  ${Body1}
  width: 484px;
  min-height: 84px;
  margin-top: 31px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 28px;
`;

const HttpswwwpexelscomphotogroupOfPeople = styled.img`
  width: 547px;
  height: 336px;
  margin-left: 132px;
  object-fit: cover;
`;

const WhoWeAre = styled.div`
  width: 1280px;
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 716px;
`;

const FlexRow = styled.div`
  height: 376px;
  display: flex;
  padding: 0 79px;
  align-items: center;
  min-width: 1280px;
  background-color: #f4f4f5;
`;

const FlexCol = styled.div`
  width: 516px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 216px;
`;

const WhoWeAre1 = styled.div`
  ${Label2}
  min-height: 28px;
  min-width: 95px;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const GoalFocussed = styled.div`
  ${Heading3}
  min-height: 56px;
  margin-top: 4px;
  margin-left: 1px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi1 = styled.p`
  ${Body1}
  width: 515px;
  min-height: 112px;
  margin-top: 16px;
  margin-left: 1px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const FlexCol1 = styled.div`
  width: 515px;
  margin-left: 61px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 184px;
`;

const ContinuousImprovement = styled.div`
  ${Heading3}
  min-height: 56px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi2 = styled.p`
  ${Body1}
  width: 515px;
  min-height: 112px;
  margin-top: 16px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const HttpswwwpexelscomphotomanInBlueJack = styled.img`
  width: 1280px;
  height: 340px;
  object-fit: cover;
`;

const Process = styled.div`
  width: 1282px;
  margin-top: 128px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 268px;
`;

const SectionTitle = styled.div`
  ${Heading2}
  min-height: 64px;
  margin-left: 12px;
  min-width: 532px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 64px;
  white-space: nowrap;
`;

const Cards = styled.div`
  height: 156px;
  position: relative;
  margin-top: 48px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const OurMissionAndOurVision = styled.div`
  height: 1022px;
  margin-top: 128px;
  margin-right: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 1599px;
  background-color: var(--accent);
`;

const SionContainer = styled.div`
  width: 1599px;
  display: flex;
  flex-direction: column;
  padding: 128px 159px;
  align-items: flex-end;
  min-height: 1022px;
  background-color: var(--accent);
`;

const OurVision = styled.div`
  align-self: center;
  margin-right: 1px;
  display: flex;
  align-items: center;
  min-width: 1278px;
`;

const Content1 = styled.div`
  width: 629px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 228px;
`;

const OurMission = styled.div`
  ${Label2}
  min-height: 28px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const InspireInnovateShare = styled.div`
  ${Heading3}
  min-height: 56px;
  margin-top: 16px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi3 = styled.p`
  ${Body1}
  width: 623px;
  min-height: 112px;
  margin-top: 16px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const HttpswwwpexelscomphotoaManStandingI = styled.img`
  width: 515px;
  height: 336px;
  margin-left: 134px;
  object-fit: cover;
`;

const OurMission1 = styled.div`
  margin-top: 96px;
  display: flex;
  align-items: center;
  min-width: 1280px;
`;

const HttpswwwpexelscomphotophotoOfWomenA = styled.img`
  width: 514px;
  height: 334px;
  object-fit: cover;
`;

const Content2 = styled.div`
  width: 655px;
  margin-left: 117px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 228px;
`;

const OurVision1 = styled.div`
  ${Label2}
  min-height: 28px;
  align-self: flex-start;
  min-width: 82px;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const LaserFocus = styled.div`
  ${Heading3}
  width: 623px;
  min-height: 56px;
  margin-top: 16px;
  margin-right: 6px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi4 = styled.p`
  ${Body1}
  width: 623px;
  min-height: 112px;
  margin-top: 16px;
  margin-right: 6px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const Benefits = styled.div`
  width: 1282px;
  position: relative;
  margin-top: 128px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 624px;
`;

const TheBenefitsOfWorkingWithUs = styled.div`
  ${Heading2}
  width: 630px;
  min-height: 128px;
  margin-right: 6px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
`;

const FlexRow1 = styled.div`
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

const LoremIpsumDolorSi5 = styled.p`
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

const LoremIpsumDolorSi6 = styled.p`
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

const Card1 = styled.div`
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

const LoremIpsumDolorSi7 = styled.p`
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

const OurTeam = styled.div`
  height: 712px;
  margin-top: 128px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1602px;
`;

const OverlapGroup4 = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  padding: 128px 159px;
  align-items: flex-end;
  min-height: 712px;
  background-color: var(--grey);
`;

const MeetOurTeam = styled.div`
  ${Heading2}
  min-height: 64px;
  align-self: center;
  margin-right: 11px;
  min-width: 357px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
  white-space: nowrap;
`;

const Cards1 = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const OverlapGroup3 = styled.div`
  width: 296px;
  height: 344px;
  position: relative;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 296px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
  min-height: 344px;
  background-color: var(--white);
`;

const HttpswwwpexelscomphotomanInBlackSui = styled.img`
  width: 168px;
  height: 168px;
  margin-top: 16px;
  object-fit: cover;
`;

const Name = styled.div`
  ${Heading6}
  width: 208px;
  min-height: 36px;
  margin-top: 30px;
  font-weight: 500;
  color: var(--bastille);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const CEO = styled.div`
  ${Body1}
  min-height: 28px;
  margin-top: 2px;
  min-width: 34px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--bastille);
  line-height: 28px;
  white-space: nowrap;
`;

const Ellipse228 = styled.img`
  position: absolute;
  width: 168px;
  height: 168px;
  top: 48px;
  left: 64px;
`;

const Socials = styled.img`
  position: absolute;
  width: 62px;
  height: 13px;
  top: 175px;
  left: 119px;
`;

const OverlapGroup11 = styled.div`
  width: 296px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  padding: 34px 0;
  align-items: center;
  min-height: 344px;
  background-color: var(--white);
`;

const HttpswwwpexelscomphotoseriousMan376 = styled.img`
  width: 168px;
  height: 168px;
  margin-top: 14px;
  object-fit: cover;
`;

const CTO = styled.div`
  ${Body1}
  min-height: 28px;
  min-width: 34px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--bastille);
  line-height: 28px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  width: 296px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
  min-height: 344px;
  background-color: var(--white);
`;

const Name1 = styled.div`
  ${Heading6}
  min-height: 36px;
  margin-top: 30px;
  margin-left: 1px;
  min-width: 131px;
  font-weight: 500;
  color: var(--bastille);
  line-height: 36px;
  white-space: nowrap;
`;

const DesignLead = styled.div`
  ${Body1}
  width: 126px;
  min-height: 28px;
  margin-top: 2px;
  margin-right: 2px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--bastille);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const Name2 = styled.div`
  ${Heading6}
  min-height: 36px;
  margin-top: 30px;
  min-width: 144px;
  font-weight: 500;
  color: var(--bastille);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const ProjectManager = styled.div`
  ${Body1}
  width: 148px;
  min-height: 28px;
  margin-top: 2px;
  margin-right: 2px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--bastille);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

export default AboutUs;
