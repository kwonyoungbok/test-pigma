import React from "react";
import styled from "styled-components";
import { Body1, Heading3 } from "../../styledMixins";


function LogoSection(props) {
  const { figmaUsers, className } = props;

  return (
    <LogoSection1 className={`logo-section ${className || ""}`}>
      <LogoNumber className="logo-number">
        <Text1 className="text-1">100.000+</Text1>
        <FigmaUsers className="figma-users">{figmaUsers}</FigmaUsers>
      </LogoNumber>
      <LogoWrapper className="logo-wrapper" src="/img/logo-wrapper@1x.svg" />
    </LogoSection1>
  );
}

const LogoSection1 = styled.div`
  height: 84px;
  margin-top: 96px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  min-width: 1280px;

  &.logo-section.logo-section-1 {
    margin-top: 48px;
    margin-right: 2px;
    margin-left: unset;
  }
`;

const LogoNumber = styled.div`
  width: 178px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 84px;
`;

const Text1 = styled.div`
  ${Heading3}
  min-height: 56px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const FigmaUsers = styled.div`
  ${Body1}
  min-height: 28px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const LogoWrapper = styled.img`
  width: 1015px;
  height: 32px;
  margin-left: 87px;
  margin-top: 4px;
`;

export default LogoSection;
