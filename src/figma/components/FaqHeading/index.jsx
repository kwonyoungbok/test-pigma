import React from "react";
import styled from "styled-components";
import { Label01, Heading3 } from "../../styledMixins";


function FaqHeading(props) {
  const { frequentlyAskedQuestion } = props;

  return (
    <FaqHeading1>
      <FrequentlyAskedQuestion>{frequentlyAskedQuestion}</FrequentlyAskedQuestion>
      <ContactUsForMoreInfo>Contact us for more info</ContactUsForMoreInfo>
    </FaqHeading1>
  );
}

const FaqHeading1 = styled.div`
  width: 332px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
`;

const FrequentlyAskedQuestion = styled.div`
  ${Heading3}
  width: 328px;
  min-height: 112px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
`;

const ContactUsForMoreInfo = styled.div`
  ${Label01}
  min-height: 32px;
  margin-top: 16px;
  min-width: 220px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--royal-blue);
  text-align: center;
  line-height: 32px;
  white-space: nowrap;
`;

const FaqHeading2 = styled.div`
  width: 332px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
`;

const FrequentlyAskedQuestions = styled.div`
  ${Heading3}
  width: 328px;
  min-height: 112px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
`;

const ContactUsForMoreInfo1 = styled.div`
  ${Label01}
  min-height: 32px;
  margin-top: 16px;
  min-width: 220px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--royal-blue);
  text-align: center;
  line-height: 32px;
  white-space: nowrap;
`;

export default FaqHeading;
