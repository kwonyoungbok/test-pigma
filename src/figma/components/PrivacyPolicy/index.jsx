import React from "react";
import Navbar from "../Navbar";
import ListGroup from "../ListGroup";
import Footer from "../Footer";
import styled from "styled-components";
import { Heading2, Heading3, Label2, Body1 } from "../../styledMixins";
import "./PrivacyPolicy.css";

function PrivacyPolicy(props) {
  const {
    privacyPolicy,
    whenYoureReadyTo,
    loremIpsumDolor,
    spanText1,
    spanText2,
    spanText3,
    suntInCulpaQuiOf,
    loremIpsumDolorSi1,
    spanText4,
    spanText5,
    spanText6,
    loremIpsumDolorSi2,
    listGroupProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="privacy-policy screen">
        <Navbar />
        <PrivacyPolicyHeading>
          <PrivacyPolicy1>{privacyPolicy}</PrivacyPolicy1>
          <WhenYoureReadyTo>{whenYoureReadyTo}</WhenYoureReadyTo>
        </PrivacyPolicyHeading>
        <Title>
          <LoremIpsumDolor>{loremIpsumDolor}</LoremIpsumDolor>
          <LoremIpsumDolorSi>
            <Span0>{spanText1}</Span0>
            <Span1>{spanText2}</Span1>
            <Span0>{spanText3}</Span0>
          </LoremIpsumDolorSi>
          <SuntInCulpaQuiOf>{suntInCulpaQuiOf}</SuntInCulpaQuiOf>
          <LoremIpsumDolorSi1>{loremIpsumDolorSi1}</LoremIpsumDolorSi1>
          <LoremIpsumDolorSi2>
            <Span0>{spanText4}</Span0>
            <Span1>{spanText5}</Span1>
            <Span0>{spanText6}</Span0>
          </LoremIpsumDolorSi2>
          <ListGroup list1Props={listGroupProps.list1Props} list2Props={listGroupProps.list2Props} />
          <LoremIpsumDolorSi3>{loremIpsumDolorSi2}</LoremIpsumDolorSi3>
        </Title>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const PrivacyPolicyHeading = styled.div`
  width: 566px;
  margin-top: 128px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 136px;
`;

const PrivacyPolicy1 = styled.div`
  ${Heading2}
  min-height: 64px;
  margin-right: 4px;
  min-width: 338px;
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

const Title = styled.div`
  width: 854px;
  position: relative;
  margin-top: 64px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 892px;
`;

const LoremIpsumDolor = styled.div`
  ${Heading3}
  min-height: 56px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi = styled.p`
  ${Body1}
  width: 842px;
  min-height: 112px;
  margin-top: 32px;
  opacity: 0.7;
  font-weight: 400;
  color: transparent;
  line-height: 28px;
`;

const Span0 = styled.span`
  ${Body1}
  color: var(--dark-blue);
`;

const Span1 = styled.span`
  ${Body1}
  color: var(--royal-blue);
`;

const SuntInCulpaQuiOf = styled.p`
  ${Body1}
  width: 842px;
  min-height: 112px;
  margin-top: 24px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const LoremIpsumDolorSi1 = styled.div`
  ${Heading3}
  width: 832px;
  min-height: 112px;
  margin-top: 40px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
`;

const LoremIpsumDolorSi2 = styled.p`
  ${Body1}
  width: 842px;
  min-height: 168px;
  margin-top: 32px;
  opacity: 0.7;
  font-weight: 400;
  color: transparent;
  line-height: 28px;
`;

const LoremIpsumDolorSi3 = styled.p`
  ${Body1}
  width: 842px;
  min-height: 56px;
  margin-top: 16px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

export default PrivacyPolicy;
