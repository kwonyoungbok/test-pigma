import React from "react";
import styled from "styled-components";
import { Body1 } from "../../styledMixins";


function List2() {
  return (
    <List>
      <List1>
        <Point></Point>
        <LoremIpsumDolorSi>Lorem ipsum dolor sit amet, consectetur adipiscing elit</LoremIpsumDolorSi>
      </List1>
      <List3>
        <Point></Point>
        <QuisNostrudExercit>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</QuisNostrudExercit>
      </List3>
      <List4>
        <Point1></Point1>
        <DuisAuteIrureDolo>Duis aute irure dolor in reprehenderit in voluptate velit esse</DuisAuteIrureDolo>
      </List4>
      <List5>
        <Point1></Point1>
        <ExcepteurSintOccae>Excepteur sint occaecat cupidatat non proident, sunt in culpa</ExcepteurSintOccae>
      </List5>
    </List>
  );
}

const List = styled.div`
  width: 534px;
  margin-top: 24px;
  margin-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
`;

const List1 = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  min-width: 475px;
`;

const Point = styled.div`
  width: 5px;
  height: 5px;
  margin-top: 5px;
  background-color: var(--dark-blue);
  border-radius: 2.5px;
`;

const LoremIpsumDolorSi = styled.p`
  ${Body1}
  width: 451px;
  min-height: 28px;
  margin-left: 17px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 28px;
  white-space: nowrap;
`;

const List3 = styled.div`
  height: 28px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  min-width: 511px;
`;

const QuisNostrudExercit = styled.p`
  ${Body1}
  width: 487px;
  min-height: 28px;
  margin-left: 17px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 28px;
  white-space: nowrap;
`;

const List4 = styled.div`
  height: 28px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  min-width: 498px;
`;

const Point1 = styled.div`
  width: 5px;
  height: 5px;
  margin-top: 3px;
  background-color: var(--dark-blue);
  border-radius: 2.5px;
`;

const DuisAuteIrureDolo = styled.p`
  ${Body1}
  width: 474px;
  min-height: 28px;
  margin-left: 17px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 28px;
  white-space: nowrap;
`;

const List5 = styled.div`
  height: 28px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  min-width: 536px;
`;

const ExcepteurSintOccae = styled.p`
  ${Body1}
  width: 513px;
  min-height: 28px;
  margin-left: 17px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 28px;
  white-space: nowrap;
`;

export default List2;
