import React from "react";
import styled from "styled-components";
import { Label01, Body1, Heading5 } from "../../styledMixins";


function Card2(props) {
  const { number, strategy, className } = props;

  return (
    <Card className={`card-7 ${className || ""}`}>
      <OverlapGroup className="overlap-group-14">
        <Number className="number-8">{number}</Number>
      </OverlapGroup>
      <Strategy className="strategy">{strategy}</Strategy>
      <EuismodFaucibusTur className="euismod-faucibus-tur-7">
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
      </EuismodFaucibusTur>
    </Card>
  );
}

const Card = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 178px;

  &.card-7.card-8 {
    margin-top: 48px;
  }

  &.card-7.card-10 {
    margin-top: 48px;
  }
`;

const OverlapGroup = styled.div`
  height: 50px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 50px;
  background-color: var(--royal-blue);
  border-radius: 8px;
  background-image: url(/img/mask-group-2@2x.svg);
  background-size: 100% 100%;
`;

const Number = styled.div`
  ${Label01}
  min-height: 32px;
  min-width: 17px;
  font-weight: 500;
  color: var(--white);
  line-height: 32px;
  white-space: nowrap;
`;

const Strategy = styled.div`
  ${Heading5}
  min-height: 48px;
  margin-top: 16px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 48px;
  white-space: nowrap;
`;

const EuismodFaucibusTur = styled.p`
  ${Body1}
  width: 303px;
  min-height: 56px;
  margin-top: 8px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const OverlapGroup1 = styled.div`
  .card-7.card-8 & {
    padding: 0 12px;
    justify-content: flex-end;
    background-image: url(/img/mask-group-3@2x.svg);
  }
`;

const Number1 = styled.div`
  ${Label01}

  .card-7.card-8  & {
    min-width: 23px;
  }
`;

const OverlapGroup2 = styled.div`
  .card-7.card-9 & {
    padding: 0 13px;
    justify-content: flex-end;
    background-image: url(/img/mask-group-4@2x.svg);
  }
`;

const Number2 = styled.div`
  ${Label01}

  .card-7.card-9  & {
    min-width: 22px;
  }
`;

const OverlapGroup3 = styled.div`
  .card-7.card-10 & {
    padding: 0 11px;
    justify-content: flex-end;
    background-image: url(/img/mask-group-5@2x.svg);
  }
`;

const Number3 = styled.div`
  ${Label01}

  .card-7.card-10  & {
    min-width: 24px;
  }
`;

export default Card2;
