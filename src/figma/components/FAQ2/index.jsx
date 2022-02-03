import React from "react";
import styled from "styled-components";
import { Heading6 } from "../../styledMixins";


function FAQ2(props) {
  const { number, whatIsYourClassNamingConvention, className } = props;

  return (
    <FAQ className={`faq-7 ${className || ""}`}>
      <Number className="number-5">{number}</Number>
      <WhatIsYourClassNamingConvention className="what-is-your-class-naming-convention-2">
        {whatIsYourClassNamingConvention}
      </WhatIsYourClassNamingConvention>
      <X758910 className="x-5" src="/img/-@2x.svg" />
    </FAQ>
  );
}

const FAQ = styled.div`
  ${Heading6}
  height: 36px;
  margin-top: 31px;
  margin-right: -0.69px;
  display: flex;
  align-items: center;
  min-width: 820px;
`;

const Number = styled.div`
  min-height: 36px;
  min-width: 30px;
  font-weight: 500;
  color: var(--royal-blue);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const WhatIsYourClassNamingConvention = styled.div`
  min-height: 36px;
  margin-left: 53px;
  min-width: 482px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const X758910 = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 235px;
`;

const HowDoWeCommunicate = styled.div`
  .faq-7.faq-8 & {
    margin-left: 55px;
    min-width: 328px;
  }
`;

const X758905 = styled.img`
  .faq-7.faq-8 & {
    margin-left: 387px;
  }
`;

const WhatIsYourClassNamingConvention1 = styled.div`
  .faq-7.qn2-1 & {
    min-width: 476px;
  }
`;

const X706781 = styled.img`
  .faq-7.qn2-1 & {
    margin-left: 241px;
  }
`;

const HowDoYouCommunicate = styled.div`
  .faq-7.qn3-1 & {
    margin-left: 55px;
    min-width: 332px;
  }
`;

const X706776 = styled.img`
  .faq-7.qn3-1 & {
    margin-left: 383px;
  }
`;

export default FAQ2;
