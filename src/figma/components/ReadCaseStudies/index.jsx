import React from "react";
import Navbar from "../Navbar";
import List2 from "../List2";
import Button from "../Button";
import Footer from "../Footer";
import styled from "styled-components";
import { Heading2, Heading3, Heading6, Label2, Body1, Label01 } from "../../styledMixins";
import "./ReadCaseStudies.css";

function ReadCaseStudies(props) {
  const {
    webDesignAndDevelopment,
    finsweetDesignCaseStudies,
    summary,
    mainImage,
    client,
    facebookCom,
    service,
    productDesign,
    deliverable,
    uiScreensUxFlowPrototype,
    aboutTheProject,
    loremIpsumDolorSi1,
    group2508,
    howWeDoIt,
    loremIpsumDolorSi2,
    keywords,
    design,
    uiUx,
    wireframing,
    branding,
    development,
    webflow,
    letSBuildSomethingGreatTogether,
    nullamVitaePurusA,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="read-case-studies screen">
        <Navbar />
        <BlogHeader>
          <WebDesignAndDevelopment>{webDesignAndDevelopment}</WebDesignAndDevelopment>
          <FinsweetDesignCaseStudies>{finsweetDesignCaseStudies}</FinsweetDesignCaseStudies>
        </BlogHeader>
        <Summary>{summary}</Summary>
        <MainImage style={{ backgroundImage: `url(${mainImage})` }}></MainImage>
        <Information>
          <Group2522>
            <Group2518>
              <Client>{client}</Client>
              <Facebookcom>{facebookCom}</Facebookcom>
            </Group2518>
            <Group2519>
              <Client>{service}</Client>
              <Facebookcom>{productDesign}</Facebookcom>
            </Group2519>
            <Group2520>
              <Client>{deliverable}</Client>
              <Facebookcom>{uiScreensUxFlowPrototype}</Facebookcom>
            </Group2520>
          </Group2522>
          <Line46 src="/img/line-46@1x.svg" />
        </Information>
        <Article>
          <AboutTheProject>{aboutTheProject}</AboutTheProject>
          <LoremIpsumDolorSi>{loremIpsumDolorSi1}</LoremIpsumDolorSi>
          <List2 />
          <Group2508 style={{ backgroundImage: `url(${group2508})` }}></Group2508>
          <HowWeDoIt>{howWeDoIt}</HowWeDoIt>
          <LoremIpsumDolorSi1>{loremIpsumDolorSi2}</LoremIpsumDolorSi1>
          <List2 />
        </Article>
        <Keywords>
          <Line47 src="/img/line-47@1x.svg" />
          <Group2547>
            <Keywords1>{keywords}</Keywords1>
            <Design>{design}</Design>
            <UIUX>{uiUx}</UIUX>
            <Wireframing>{wireframing}</Wireframing>
            <Branding>{branding}</Branding>
            <Development>{development}</Development>
            <Webflow>{webflow}</Webflow>
          </Group2547>
          <Line48 src="/img/line-47@1x.svg" />
        </Keywords>
        <CTAWrapper>
          <HeadlineBody>
            <LetsBuildSomethingGreatTogether>{letSBuildSomethingGreatTogether}</LetsBuildSomethingGreatTogether>
            <NullamVitaePurusA>{nullamVitaePurusA}</NullamVitaePurusA>
          </HeadlineBody>
          <Button />
        </CTAWrapper>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const BlogHeader = styled.div`
  width: 650px;
  margin-top: 128px;
  margin-right: 412px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 176px;
`;

const WebDesignAndDevelopment = styled.div`
  ${Heading6}
  min-height: 36px;
  opacity: 0.8;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const FinsweetDesignCaseStudies = styled.div`
  ${Heading2}
  width: 646px;
  min-height: 128px;
  margin-top: 12px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 64px;
`;

const Summary = styled.p`
  ${Label2}
  width: 817px;
  min-height: 84px;
  margin-top: 16px;
  margin-right: 245px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
`;

const MainImage = styled.div`
  width: 1063px;
  height: 641px;
  margin-top: 48px;
  margin-right: 1px;
  background-size: 100% 100%;
`;

const Information = styled.div`
  width: 1063px;
  margin-top: 48px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100px;
`;

const Group2522 = styled.div`
  height: 68px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 1062px;
`;

const Group2518 = styled.div`
  width: 179px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 68px;
`;

const Client = styled.div`
  ${Label2}
  min-height: 28px;
  opacity: 0.8;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Facebookcom = styled.div`
  ${Heading6}
  min-height: 36px;
  margin-top: 4px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const Group2519 = styled.div`
  width: 188px;
  margin-left: 149px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 68px;
`;

const Group2520 = styled.div`
  width: 410px;
  margin-left: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 68px;
`;

const Line46 = styled.img`
  width: 1063px;
  height: 1px;
  margin-top: 31px;
`;

const Article = styled.div`
  width: 850px;
  position: relative;
  margin-top: 96px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1420px;
`;

const AboutTheProject = styled.div`
  ${Heading3}
  min-height: 56px;
  margin-left: 2.03px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi = styled.p`
  ${Body1}
  width: 838px;
  min-height: 140px;
  margin-top: 12px;
  margin-left: 3px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const Group2508 = styled.div`
  width: 842px;
  height: 508px;
  margin-top: 64px;
  background-size: 100% 100%;
`;

const HowWeDoIt = styled.div`
  ${Heading3}
  min-height: 56px;
  margin-top: 64px;
  margin-left: 1px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi1 = styled.p`
  ${Body1}
  width: 836px;
  min-height: 140px;
  margin-top: 12px;
  margin-left: 4px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const Keywords = styled.div`
  width: 952px;
  margin-top: 96px;
  margin-left: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 84px;
`;

const Line47 = styled.img`
  width: 952px;
  height: 1px;
`;

const Group2547 = styled.div`
  height: 36px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 959px;
`;

const Keywords1 = styled.div`
  ${Heading6}
  min-height: 36px;
  min-width: 118px;
  font-weight: 500;
  color: var(--royal-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const Design = styled.div`
  ${Label01}
  min-height: 32px;
  margin-left: 53px;
  min-width: 63px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 32px;
  white-space: nowrap;
`;

const UIUX = styled.div`
  ${Label01}
  min-height: 32px;
  margin-left: 53px;
  min-width: 51px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 32px;
  white-space: nowrap;
`;

const Wireframing = styled.div`
  ${Label01}
  min-height: 32px;
  margin-left: 53px;
  min-width: 114px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 32px;
  white-space: nowrap;
`;

const Branding = styled.div`
  ${Label01}
  min-height: 32px;
  margin-left: 53px;
  min-width: 83px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 32px;
  white-space: nowrap;
`;

const Development = styled.div`
  ${Label01}
  min-height: 32px;
  margin-left: 53px;
  min-width: 122px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 32px;
  white-space: nowrap;
`;

const Webflow = styled.div`
  ${Label01}
  min-height: 32px;
  margin-left: 53px;
  min-width: 76px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 32px;
  white-space: nowrap;
`;

const Line48 = styled.img`
  width: 952px;
  height: 1px;
  margin-top: 24px;
`;

const CTAWrapper = styled.div`
  width: 844px;
  position: relative;
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 308px;
`;

const HeadlineBody = styled.div`
  width: 848px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 204px;
`;

const LetsBuildSomethingGreatTogether = styled.div`
  ${Heading2}
  width: 844px;
  min-height: 128px;
  margin-right: 4px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
`;

const NullamVitaePurusA = styled.p`
  ${Label2}
  width: 624px;
  min-height: 56px;
  margin-top: 20px;
  margin-right: 4px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
`;

export default ReadCaseStudies;
