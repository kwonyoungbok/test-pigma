import React from "react";
import styled from "styled-components";
import { Heading6, Label01 } from "../../styledMixins";


function FAQ(props) {
  const { howMuchTimeDoesItTake, apparentlyWeHadRe, className } = props;

  return (
    <FAQ1 className={`faq-6 ${className || ""}`}>
      <Number className="number-4">01</Number>
      <FlexCol className="flex-col-4">
        <HowMuchTimeDoesItTake className="how-much-time-does-it-take-1">{howMuchTimeDoesItTake}</HowMuchTimeDoesItTake>
        <ApparentlyWeHadRe className="apparently-we-had-re-3">{apparentlyWeHadRe}</ApparentlyWeHadRe>
      </FlexCol>
      <X758916 className="x-4" src="/img/-@2x.svg" />
    </FAQ1>
  );
}

const FAQ1 = styled.div`
  height: 114px;
  margin-right: -6px;
  display: flex;
  align-items: flex-start;
  min-width: 825px;
`;

const Number = styled.div`
  ${Heading6}
  min-height: 36px;
  min-width: 24px;
  font-weight: 500;
  color: var(--royal-blue);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const FlexCol = styled.div`
  width: 624px;
  margin-left: 59px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 114px;
`;

const HowMuchTimeDoesItTake = styled.div`
  ${Heading6}
  min-height: 36px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const ApparentlyWeHadRe = styled.div`
  ${Label01}
  width: 624px;
  min-height: 62px;
  margin-top: 16px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 32px;
`;

const X758916 = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 94px;
  margin-top: 11px;
`;

export default FAQ;
