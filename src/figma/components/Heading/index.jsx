import React from "react";
import styled from "styled-components";
import { Heading2, Label2 } from "../../styledMixins";


function Heading(props) {
  const { className } = props;

  return (
    <Heading1 className={`heading ${className || ""}`}>
      <AUXCaseStudyOnC className="a-ux-case-study-on-c">
        A UX Case Study on Creating a Studious Environment for Students
      </AUXCaseStudyOnC>
      <DateAuthorName className="date-author-name">
        <Name className="name">Andrew Jonson</Name>
        <PostedOn27thJanuary2021 className="posted-on-27th-january-2021">
          Posted on 27th January 2021
        </PostedOn27thJanuary2021>
      </DateAuthorName>
    </Heading1>
  );
}

const Heading1 = styled.div`
  width: 951px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 172px;

  &.heading.blog-heading {
    margin-top: 128px;
    margin-left: 3px;
    margin-right: unset;
  }
`;

const AUXCaseStudyOnC = styled.div`
  ${Heading2}
  width: 949px;
  min-height: 128px;
  margin-right: 2px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
`;

const DateAuthorName = styled.div`
  ${Label2}
  height: 28px;
  margin-top: 16px;
  margin-right: 108px;
  display: flex;
  align-items: flex-start;
  min-width: 363px;
`;

const Name = styled.div`
  min-height: 28px;
  min-width: 125px;
  opacity: 0.87;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const PostedOn27thJanuary2021 = styled.p`
  min-height: 28px;
  margin-left: 6px;
  min-width: 228px;
  font-weight: 500;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

export default Heading;
