import React from "react";
import ButtonPrimaryHover from "../ButtonPrimaryHover";
import styled from "styled-components";
import {
  Heading4,
  Heading2,
  GilroyBoldSteelGray24px,
  Body1,
  PoppinsSemiBoldWhite24px,
  Label01,
  Heading1,
  Heading3,
  PoppinsNormalSteelGray32px,
  Heading6,
  Label2,
  Heading5,
} from "../../styledMixins";
import "./Promotion.css";

function Promotion(props) {
  const {
    styleGuideSection,
    downloadTheFontFamily,
    aa,
    poppinsFontFamily,
    title,
    headingH2,
    headingH3,
    headingH4,
    headingH5,
    headingH6,
    body01,
    apparentlyWeHadRe1,
    body02,
    apparentlyWeHadRe2,
    label1,
    apparentlyWeHadReached1,
    label2,
    apparentlyWeHadReached2,
    colorPallette,
    buttonHoverStates,
    viewOurWork1,
    viewOurWork2,
    buttonPrimaryHoverProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="promotion screen">
        <StyleGuideSection>{styleGuideSection}</StyleGuideSection>
        <Line53 src="/img/line-53@1x.svg" />
        <DownloadFont>
          <OverlapGroup1>
            <Icon>
              <Arrow5 src="/img/arrow-5@2x.svg" />
            </Icon>
            <DownloadTheFontFamily>{downloadTheFontFamily}</DownloadTheFontFamily>
            <OverlapGroup>
              <Aa>{aa}</Aa>
            </OverlapGroup>
            <a href="https://fonts.google.com/specimen/Poppins?query=popp" target="_blank">
              <PoppinsFontFamily>{poppinsFontFamily}</PoppinsFontFamily>
            </a>
          </OverlapGroup1>
        </DownloadFont>
        <TextStyles>
          <Headings>
            <Title>{title}</Title>
            <HeadingH2>{headingH2}</HeadingH2>
            <HeadingH3>{headingH3}</HeadingH3>
            <HeadingH4>{headingH4}</HeadingH4>
            <HeadingH5>{headingH5}</HeadingH5>
            <HeadingH6>{headingH6}</HeadingH6>
          </Headings>
          <ContentStyles>
            <Body01>{body01}</Body01>
            <ApparentlyWeHadRe>{apparentlyWeHadRe1}</ApparentlyWeHadRe>
            <Body02>{body02}</Body02>
            <ApparentlyWeHadRe1>{apparentlyWeHadRe2}</ApparentlyWeHadRe1>
            <LabelContainer>
              <Label1>
                <Label11>{label1}</Label11>
                <ApparentlyWeHadReached>{apparentlyWeHadReached1}</ApparentlyWeHadReached>
              </Label1>
              <Label2>
                <Label11>{label2}</Label11>
                <ApparentlyWeHadReached1>{apparentlyWeHadReached2}</ApparentlyWeHadReached1>
              </Label2>
            </LabelContainer>
          </ContentStyles>
        </TextStyles>
        <ColorPallette>{colorPallette}</ColorPallette>
        <Group1987>
          <Color></Color>
          <Color1></Color1>
          <ColorContainer>
            <Color2></Color2>
            <Color3></Color3>
          </ColorContainer>
          <Color4></Color4>
          <Color5></Color5>
          <Color6></Color6>
        </Group1987>
        <Button>
          <ButtonHoverStates>{buttonHoverStates}</ButtonHoverStates>
          <ButtonPrimaryHoverContainer>
            <ButtonPrimaryHover1>
              <ViewOurWork>{viewOurWork1}</ViewOurWork>
            </ButtonPrimaryHover1>
            <ButtonPrimaryHover2>
              <ViewOurWork1>{viewOurWork2}</ViewOurWork1>
            </ButtonPrimaryHover2>
          </ButtonPrimaryHoverContainer>
          <ButtonPrimaryHoverContainer1>
            <ButtonPrimaryHover />
            <ButtonPrimaryHover className={buttonPrimaryHoverProps.className} />
          </ButtonPrimaryHoverContainer1>
        </Button>
      </div>
    </div>
  );
}

const StyleGuideSection = styled.div`
  min-height: 44px;
  margin-left: 160px;
  font-family: var(--font-family-poppins);
  font-weight: 400;
  color: var(--steel-gray);
  font-size: var(--font-size-36px);
  letter-spacing: 0;
  line-height: 44px;
  white-space: nowrap;
`;

const Line53 = styled.img`
  width: 1600px;
  height: 1px;
  margin-top: 40px;
`;

const DownloadFont = styled.div`
  align-self: center;
  margin-top: 96px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1284px;
`;

const OverlapGroup1 = styled.div`
  height: 211px;
  display: flex;
  padding: 67.4px 74px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1280px;
  background-color: #eef4fa;
`;

const Icon = styled.div`
  height: 51px;
  margin-bottom: 2.62px;
  display: flex;
  padding: 9px 14px;
  align-items: flex-start;
  min-width: 51px;
  background-color: #503ae7;
  border-radius: 25.5px;
`;

const Arrow5 = styled.img`
  width: 22px;
  height: 30px;
`;

const DownloadTheFontFamily = styled.div`
  ${Heading4}
  min-height: 44px;
  margin-left: 25px;
  margin-bottom: 5.62px;
  min-width: 508px;
  font-weight: 500;
  color: #101118;
  line-height: 44px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  height: 53px;
  margin-left: 214px;
  display: flex;
  padding: 10.1px 16.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 69px;
  background-image: url(/img/group@2x.svg);
  background-size: 100% 100%;
`;

const Aa = styled.div`
  ${PoppinsSemiBoldWhite24px}
  width: 34px;
  min-height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const PoppinsFontFamily = styled.div`
  min-height: 36px;
  margin-left: 20px;
  margin-bottom: 9.62px;
  min-width: 245px;
  font-family: var(--font-family-poppins);
  font-weight: 600;
  color: var(--steel-gray);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: 36px;
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
`;

const TextStyles = styled.div`
  height: 454px;
  align-self: center;
  margin-top: 96px;
  margin-right: 285px;
  display: flex;
  align-items: flex-start;
  min-width: 995px;
`;

const Headings = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 454px;
`;

const Title = styled.h1`
  ${Heading1}
  min-height: 74px;
  font-weight: 600;
  color: var(--black);
  line-height: 74px;
  white-space: nowrap;
`;

const HeadingH2 = styled.div`
  ${Heading2}
  min-height: 64px;
  margin-top: 24px;
  font-weight: 600;
  color: var(--black);
  line-height: 64px;
  white-space: nowrap;
`;

const HeadingH3 = styled.div`
  ${Heading3}
  min-height: 56px;
  margin-top: 24px;
  font-weight: 600;
  color: var(--black);
  line-height: 56px;
  white-space: nowrap;
`;

const HeadingH4 = styled.div`
  ${Heading4}
  min-height: 56px;
  margin-top: 24px;
  font-weight: 500;
  color: var(--black);
  line-height: 56px;
  white-space: nowrap;
`;

const HeadingH5 = styled.div`
  ${Heading5}
  min-height: 48px;
  margin-top: 24px;
  font-weight: 500;
  color: var(--black);
  line-height: 48px;
  white-space: nowrap;
`;

const HeadingH6 = styled.div`
  ${Heading6}
  min-height: 36px;
  margin-top: 24px;
  font-weight: 500;
  color: var(--black);
  line-height: 36px;
  white-space: nowrap;
`;

const ContentStyles = styled.div`
  width: 603px;
  margin-left: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 396px;
`;

const Body01 = styled.div`
  ${GilroyBoldSteelGray24px}
  min-height: 36px;
  opacity: 0.5;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

const ApparentlyWeHadRe = styled.p`
  ${Body1}
  width: 591px;
  min-height: 84px;
  margin-top: 12px;
  font-weight: 400;
  color: var(--black);
  line-height: 28px;
`;

const Body02 = styled.div`
  ${GilroyBoldSteelGray24px}
  min-height: 36px;
  margin-top: 32px;
  opacity: 0.5;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

const ApparentlyWeHadRe1 = styled.p`
  ${Label2}
  width: 595px;
  min-height: 84px;
  margin-top: 12px;
  font-weight: 500;
  color: var(--black);
  line-height: 28px;
`;

const LabelContainer = styled.div`
  height: 68px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 514px;
`;

const Label1 = styled.div`
  width: 257px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 68px;
`;

const Label11 = styled.div`
  ${Body1}
  min-height: 28px;
  opacity: 0.5;
  font-weight: 400;
  color: var(--steel-gray);
  line-height: 28px;
  white-space: nowrap;
`;

const ApparentlyWeHadReached = styled.div`
  ${Label01}
  min-height: 32px;
  margin-top: 8px;
  font-weight: 500;
  color: var(--black);
  line-height: 32px;
  white-space: nowrap;
`;

const Label2 = styled.div`
  width: 229px;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 64px;
`;

const ApparentlyWeHadReached1 = styled.div`
  ${Label2}
  min-height: 28px;
  margin-top: 8px;
  font-weight: 500;
  color: var(--black);
  line-height: 28px;
  white-space: nowrap;
`;

const ColorPallette = styled.div`
  ${PoppinsNormalSteelGray32px}
  min-height: 38px;
  margin-top: 97px;
  margin-left: 162px;
  letter-spacing: 0;
  line-height: 38.4px;
  white-space: nowrap;
`;

const Group1987 = styled.div`
  align-self: center;
  margin-top: 32px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 1277px;
`;

const Color = styled.div`
  width: 183px;
  height: 100px;
  background-color: var(--royal-blue);
`;

const Color1 = styled.div`
  width: 183px;
  height: 100px;
  background-color: var(--dark-blue);
`;

const ColorContainer = styled.div`
  width: 362px;
  height: 100px;
  position: relative;
`;

const Color2 = styled.div`
  position: absolute;
  width: 182px;
  height: 100px;
  top: 0;
  left: 180px;
  background-color: var(--yellow);
`;

const Color3 = styled.div`
  position: absolute;
  width: 183px;
  height: 100px;
  top: 0;
  left: 0;
  background-color: var(--grey);
`;

const Color4 = styled.div`
  width: 183px;
  height: 100px;
  background-color: var(--tint-blue);
`;

const Color5 = styled.div`
  width: 183px;
  height: 100px;
  background-color: var(--accent);
`;

const Color6 = styled.div`
  width: 183px;
  height: 100px;
  background-color: var(--goldenrod-2);
`;

const Button = styled.div`
  width: 494px;
  margin-top: 96px;
  margin-left: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 242px;
`;

const ButtonHoverStates = styled.div`
  ${PoppinsNormalSteelGray32px}
  min-height: 38px;
  letter-spacing: 0;
  line-height: 38.4px;
  white-space: nowrap;
`;

const ButtonPrimaryHoverContainer = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: flex-start;
  min-width: 492px;
`;

const ButtonPrimaryHover1 = styled.div`
  height: 64px;
  display: flex;
  padding: 0 48px;
  align-items: center;
  min-width: 222px;
  background-color: var(--yellow);
  border-radius: 40px;
`;

const ViewOurWork = styled.div`
  ${Label01}
  min-height: 32px;
  min-width: 126px;
  font-weight: 500;
  color: #1b1c2a;
  line-height: 32px;
  white-space: nowrap;
`;

const ButtonPrimaryHover2 = styled.div`
  height: 64px;
  margin-left: 48px;
  display: flex;
  padding: 0 48px;
  align-items: center;
  min-width: 222px;
  background-color: #fde4a6;
  border-radius: 40px;
`;

const ViewOurWork1 = styled.div`
  ${Label01}
  min-height: 32px;
  min-width: 126px;
  font-weight: 500;
  color: var(--mirage);
  line-height: 32px;
  white-space: nowrap;
`;

const ButtonPrimaryHoverContainer1 = styled.div`
  height: 64px;
  position: relative;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  min-width: 492px;
`;

export default Promotion;
