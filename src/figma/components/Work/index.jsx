import React from "react";
import Navbar from "../Navbar";
import Image from "../Image";
import Link from "../Link";
import Button from "../Button";
import Footer from "../Footer";
import styled from "styled-components";
import { Heading2, Heading3, Label01, Label2, Body1 } from "../../styledMixins";
import "./Work.css";

function Work(props) {
  const {
    breadcrumbs,
    ourWorkPortfolio,
    weHelpTeamsCreate,
    all,
    uiDesign,
    webflowDesign,
    figmaDesign,
    projectTitle1,
    apparentlyWeHadRe1,
    projectTags1,
    projectTitle2,
    apparentlyWeHadRe2,
    projectTitle3,
    apparentlyWeHadRe3,
    projectTitle4,
    apparentlyWeHadRe4,
    projectTags2,
    projectTitle5,
    apparentlyWeHadRe5,
    projectTitle6,
    apparentlyWeHadRe6,
    letSBuildSomethingGreatTogether,
    nullamVitaePurusA,
    image1Props,
    image2Props,
    image3Props,
    link1Props,
    image4Props,
    image5Props,
    image6Props,
    link2Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="work screen">
        <Navbar />
        <WorkHero>
          <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
          <MyWork>
            <OurWorkPortfolio>{ourWorkPortfolio}</OurWorkPortfolio>
            <WeHelpTeamsCreate>{weHelpTeamsCreate}</WeHelpTeamsCreate>
          </MyWork>
          <SocialMediaIcon src="/img/social-media-icon-8@2x.svg" />
        </WorkHero>
        <OurWork>
          <WorkCategories>
            <All>{all}</All>
            <UIDesign>{uiDesign}</UIDesign>
            <WebflowDesign>{webflowDesign}</WebflowDesign>
            <FigmaDesign>{figmaDesign}</FigmaDesign>
          </WorkCategories>
          <FlexRow>
            <WorkCardContainer>
              <WorkCard>
                <Image cover={image1Props.cover} />
                <Content>
                  <ProjectTitle>{projectTitle1}</ProjectTitle>
                  <ApparentlyWeHadRe>{apparentlyWeHadRe1}</ApparentlyWeHadRe>
                  <Link1>
                    <ProjectTags>{projectTags1}</ProjectTags>
                    <Arrow3 src="/img/arrow-3@2x.svg" />
                  </Link1>
                </Content>
              </WorkCard>
              <WorkCard1>
                <Image cover={image2Props.cover} className={image2Props.className} />
                <Content1>
                  <ProjectTitle>{projectTitle2}</ProjectTitle>
                  <ApparentlyWeHadRe>{apparentlyWeHadRe2}</ApparentlyWeHadRe>
                  <Link />
                </Content1>
              </WorkCard1>
              <WorkCard2>
                <Image cover={image3Props.cover} className={image3Props.className} />
                <Content2>
                  <ProjectTitle>{projectTitle3}</ProjectTitle>
                  <ApparentlyWeHadRe>{apparentlyWeHadRe3}</ApparentlyWeHadRe>
                  <Link className={link1Props.className} />
                </Content2>
              </WorkCard2>
            </WorkCardContainer>
            <WorkCardContainer1>
              <WorkCard>
                <Image cover={image4Props.cover} className={image4Props.className} />
                <Content>
                  <ProjectTitle>{projectTitle4}</ProjectTitle>
                  <ApparentlyWeHadRe>{apparentlyWeHadRe4}</ApparentlyWeHadRe>
                  <Link1>
                    <ProjectTags>{projectTags2}</ProjectTags>
                    <Arrow3 src="/img/arrow-3@2x.svg" />
                  </Link1>
                </Content>
              </WorkCard>
              <WorkCard1>
                <Image cover={image5Props.cover} className={image5Props.className} />
                <Content1>
                  <ProjectTitle>{projectTitle5}</ProjectTitle>
                  <ApparentlyWeHadRe>{apparentlyWeHadRe5}</ApparentlyWeHadRe>
                  <Link />
                </Content1>
              </WorkCard1>
              <WorkCard2>
                <Image cover={image6Props.cover} className={image6Props.className} />
                <Content2>
                  <ProjectTitle>{projectTitle6}</ProjectTitle>
                  <ApparentlyWeHadRe>{apparentlyWeHadRe6}</ApparentlyWeHadRe>
                  <Link className={link2Props.className} />
                </Content2>
              </WorkCard2>
            </WorkCardContainer1>
          </FlexRow>
        </OurWork>
        <CTASection>
          <HeadlineBody>
            <LetsBuildSomethingGreatTogether>{letSBuildSomethingGreatTogether}</LetsBuildSomethingGreatTogether>
            <NullamVitaePurusA>{nullamVitaePurusA}</NullamVitaePurusA>
          </HeadlineBody>
          <Button />
        </CTASection>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const WorkHero = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  padding: 96px 433px;
  align-items: center;
  min-height: 416px;
  background-color: var(--grey);
`;

const Breadcrumbs = styled.div`
  ${Label2}
  min-height: 28px;
  margin-left: 2px;
  min-width: 138px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const MyWork = styled.div`
  width: 733px;
  align-self: flex-end;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 144px;
`;

const OurWorkPortfolio = styled.div`
  ${Heading2}
  width: 504px;
  min-height: 64px;
  margin-left: 1px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
  white-space: nowrap;
`;

const WeHelpTeamsCreate = styled.p`
  ${Label2}
  width: 733px;
  min-height: 56px;
  margin-top: 24px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
`;

const SocialMediaIcon = styled.img`
  width: 148px;
  height: 16px;
  margin-top: 32px;
  margin-left: 5.06px;
`;

const OurWork = styled.div`
  width: 1280px;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1942px;
`;

const WorkCategories = styled.div`
  ${Label01}
  height: 32px;
  margin-left: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 481px;
`;

const All = styled.div`
  min-height: 32px;
  min-width: 23px;
  font-weight: 500;
  color: var(--royal-blue);
  line-height: 32px;
  white-space: nowrap;
`;

const UIDesign = styled.div`
  min-height: 32px;
  margin-left: 32px;
  min-width: 84px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 32px;
  white-space: nowrap;
`;

const WebflowDesign = styled.div`
  min-height: 32px;
  margin-left: 32px;
  min-width: 146px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 32px;
  white-space: nowrap;
`;

const FigmaDesign = styled.div`
  min-height: 32px;
  margin-left: 32px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 32px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  height: 1862px;
  margin-top: 48px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const WorkCardContainer = styled.div`
  width: 623px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1862px;
`;

const WorkCard = styled.div`
  width: 623px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 576px;
`;

const Content = styled.div`
  width: 627px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 172px;
`;

const ProjectTitle = styled.div`
  ${Heading3}
  min-height: 56px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const ApparentlyWeHadRe = styled.p`
  ${Body1}
  width: 623px;
  min-height: 56px;
  margin-top: 12px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 28px;
`;

const Link1 = styled.div`
  height: 24px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 151px;
`;

const ProjectTags = styled.div`
  ${Label2}
  min-height: 24px;
  min-width: 109px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 24px;
  white-space: nowrap;
`;

const Arrow3 = styled.img`
  width: 25px;
  height: 15px;
  margin-left: 16px;
  margin-bottom: 1.27px;
`;

const WorkCard1 = styled.div`
  width: 623px;
  position: relative;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 576px;
`;

const Content1 = styled.div`
  width: 627px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 172px;
`;

const WorkCard2 = styled.div`
  width: 623px;
  position: relative;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 582px;
`;

const Content2 = styled.div`
  width: 627px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 178px;
`;

const WorkCardContainer1 = styled.div`
  width: 623px;
  margin-left: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1862px;
`;

const CTASection = styled.div`
  width: 730px;
  position: relative;
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 308px;
`;

const HeadlineBody = styled.div`
  width: 734px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 204px;
`;

const LetsBuildSomethingGreatTogether = styled.div`
  ${Heading2}
  width: 730px;
  min-height: 128px;
  margin-right: 4px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
`;

const NullamVitaePurusA = styled.p`
  ${Label2}
  width: 562px;
  min-height: 56px;
  margin-top: 20px;
  margin-right: 4px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
`;

export default Work;
