import React from "react";
import styled from "styled-components";
import { Heading6 } from "../../styledMixins";


function Qn2(props) {
  const { number, whatIsYourClassNamingConvention, className } = props;

  return (
    <Qn21 className={`qn2 ${className || ""}`}>
      <FlexRow className="flex-row-4">
        <Number className="number-1">{number}</Number>
        <WhatIsYourClassNamingConvention className="what-is-your-class-naming-convention">
          {whatIsYourClassNamingConvention}
        </WhatIsYourClassNamingConvention>
        <X174548 className="x-1" src="/img/-@2x.svg" />
      </FlexRow>
      <Line43 className="line-43" src="/img/line-44@1x.svg" />
    </Qn21>
  );
}

const Qn21 = styled.div`
  width: 847px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 68px;

  &.qn2.qn5 {
    margin-left: 1px;
  }
`;

const FlexRow = styled.div`
  ${Heading6}
  height: 36px;
  margin-right: 10.96px;
  display: flex;
  align-items: center;
  min-width: 786px;
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
  margin-left: 54px;
  min-width: 482px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const X174548 = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 202px;
  margin-top: 1.72px;
`;

const Line43 = styled.img`
  width: 843px;
  height: 1px;
  margin-top: 32px;
  margin-right: 4px;
`;

const HowDoWeCommunicate = styled.div`
  .qn2.qn3 & {
    min-width: 328px;
  }
`;

const X174555 = styled.img`
  .qn2.qn3 & {
    margin-left: 356px;
  }
`;

const Number1 = styled.div`
  .qn2.qn4 & {
    min-width: 31px;
  }
`;

const IHaveABiggerProj = styled.div`
  .qn2.qn4 & {
    margin-left: 53px;
    min-width: 518px;
  }
`;

const X174562 = styled.img`
  .qn2.qn4 & {
    margin-left: 166px;
  }
`;

const FlexRow1 = styled.div`
  ${Heading6}

  .qn2.qn5  & {
    margin-right: 12.96px;
  }
`;

const Number2 = styled.div`
  .qn2.qn5 & {
    min-width: 31px;
  }
`;

const WhatIsYourClassNamingConvention1 = styled.div`
  .qn2.qn5 & {
    margin-left: 53px;
  }
`;

export default Qn2;
