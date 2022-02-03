import React from "react";
import styled from "styled-components";
import { Body1 } from "../../styledMixins";


function List(props) {
  const { className } = props;

  return (
    <List1 className={`list-3 ${className || ""}`}>
      <Ellipse224 className="ellipse-224"></Ellipse224>
      <LoremIpsumDolorSi className="lorem-ipsum-dolor-si-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </LoremIpsumDolorSi>
    </List1>
  );
}

const List1 = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  min-width: 601px;

  &.list-3.list-4 {
    margin-top: 12px;
  }

  &.list-3.list-5 {
    margin-top: 12px;
  }

  &.list-3.list-7 {
    margin-top: 12px;
  }

  &.list-3.list-8 {
    margin-top: 12px;
  }
`;

const Ellipse224 = styled.div`
  width: 5px;
  height: 5px;
  margin-top: 1px;
  background-color: var(--dark-blue);
  border-radius: 2.5px;
`;

const LoremIpsumDolorSi = styled.p`
  ${Body1}
  width: 587px;
  min-height: 28px;
  margin-left: 7px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: justify;
  line-height: 28px;
  white-space: nowrap;
`;

export default List;
