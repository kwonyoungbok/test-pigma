import React from "react";
import styled from "styled-components";
import { Heading6, Body1 } from "../../styledMixins";


function Card(props) {
  const { heading, className } = props;

  return (
    <Card1 className={`card-2 ${className || ""}`}>
      <LineAndIcon className="line-and-icon">
        <Circle className="circle"></Circle>
        <LineIndicator className="line-indicator" src="/img/line-indicator@2x.svg" />
      </LineAndIcon>
      <Heading className="heading-1">{heading}</Heading>
      <Description className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Description>
    </Card1>
  );
}

const Card1 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 156px;

  &.card-2.card-3 {
    margin-left: 28px;
  }

  &.card-2.card-4 {
    margin-left: 28px;
  }

  &.card-2.card-5 {
    margin-left: 28px;
  }
`;

const LineAndIcon = styled.div`
  display: flex;
  align-items: center;
  min-width: 272px;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--royal-blue);
  border-radius: 12px;
`;

const LineIndicator = styled.img`
  width: 224px;
  height: 2px;
  margin-left: 24px;
  margin-bottom: 0.27px;
`;

const Heading = styled.div`
  ${Heading6}
  min-height: 36px;
  margin-top: 32px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
  white-space: nowrap;
`;

const Description = styled.p`
  ${Body1}
  width: 272px;
  min-height: 56px;
  margin-top: 8px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

export default Card;
