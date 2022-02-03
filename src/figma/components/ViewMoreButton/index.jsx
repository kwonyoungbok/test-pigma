import React from "react";
import styled from "styled-components";
import { Label2 } from "../../styledMixins";


function ViewMoreButton(props) {
  const { viewMore, className } = props;

  return (
    <ViewMoreButton1 className={`view-more-button ${className || ""}`}>
      <ViewMore className="view-more">{viewMore}</ViewMore>
      <Arrow1 className="arrow-1-4" src="/img/arrow-1@2x.svg" />
    </ViewMoreButton1>
  );
}

const ViewMoreButton1 = styled.div`
  height: 28px;
  margin-left: 690px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  min-width: 125px;

  &.view-more-button.readmore-button-1 {
    margin-top: 32px;
    margin-left: unset;
  }

  &.view-more-button.readmore-button-2 {
    margin-top: 32px;
    margin-left: unset;
  }
`;

const ViewMore = styled.div`
  ${Label2}
  min-height: 28px;
  min-width: 83px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Arrow1 = styled.img`
  width: 25px;
  height: 11px;
  margin-left: 16px;
  margin-bottom: 0.95px;
`;

const ReadMore = styled.div`
  ${Label2}

  .view-more-button.readmore-button-1  & {
    min-width: 87px;
  }
`;

const Arrow11 = styled.img`
  .view-more-button.readmore-button-1 & {
    margin-left: 12px;
  }
`;

const ReadMore1 = styled.div`
  ${Label2}

  .view-more-button.readmore-button-2  & {
    min-width: 87px;
  }
`;

const Arrow12 = styled.img`
  .view-more-button.readmore-button-2 & {
    margin-left: 12px;
  }
`;

export default ViewMoreButton;
