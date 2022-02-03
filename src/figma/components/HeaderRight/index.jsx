import React from "react";
import styled from "styled-components";
import { Label01, Body1, Heading3 } from "../../styledMixins";


function HeaderRight(props) {
  const { freeRevisionRounds, getFreeRevisionsA, className } = props;

  return (
    <HeaderRight1 className={`header-right-1 ${className || ""}`}>
      <FreeRevisionRounds className="free-revision-rounds">{freeRevisionRounds}</FreeRevisionRounds>
      <GetFreeRevisionsA className="get-free-revisions-a">{getFreeRevisionsA}</GetFreeRevisionsA>
      <LoremIpsumDolorSi className="lorem-ipsum-dolor-si-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </LoremIpsumDolorSi>
    </HeaderRight1>
  );
}

const HeaderRight1 = styled.div`
  width: 630px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 260px;

  &.header-right-1.header-left-2 {
    margin-left: unset;
  }
`;

const FreeRevisionRounds = styled.div`
  ${Label01}
  min-height: 32px;
  margin-left: 2px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--black);
  line-height: 32px;
  white-space: nowrap;
`;

const GetFreeRevisionsA = styled.div`
  ${Heading3}
  width: 624px;
  min-height: 112px;
  margin-top: 16px;
  font-weight: 600;
  color: var(--steel-gray);
  line-height: 56px;
`;

const LoremIpsumDolorSi = styled.p`
  ${Body1}
  width: 622px;
  min-height: 84px;
  margin-top: 16px;
  opacity: 0.6;
  font-weight: 400;
  color: var(--steel-gray);
  line-height: 28px;
`;

export default HeaderRight;
