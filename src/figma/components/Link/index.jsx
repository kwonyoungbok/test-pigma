import React from "react";
import styled from "styled-components";
import { Label2 } from "../../styledMixins";


function Link(props) {
  const { className } = props;

  return (
    <Link1 className={`link-2 ${className || ""}`}>
      <ProjectTags className="project-tags-2">Read case study</ProjectTags>
      <Arrow3 className="arrow-3-2" src="/img/arrow-3@2x.svg" />
    </Link1>
  );
}

const Link1 = styled.div`
  height: 24px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 176px;

  &.link-2.link-3 {
    margin-top: 30px;
  }

  &.link-2.link-5 {
    margin-top: 30px;
  }
`;

const ProjectTags = styled.div`
  ${Label2}
  min-height: 24px;
  min-width: 134px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 24px;
  white-space: nowrap;
`;

const Arrow3 = styled.img`
  width: 25px;
  height: 15px;
  margin-left: 16px;
  margin-bottom: 1.27px;
`;

export default Link;
