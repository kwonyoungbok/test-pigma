import React from "react";
import List from "../List";
import styled from "styled-components";


function ListGroup(props) {
  const { className, list1Props, list2Props } = props;

  return (
    <ListGroup1 className={`list-group ${className || ""}`}>
      <List />
      <List className={list1Props.className} />
      <List className={list2Props.className} />
    </ListGroup1>
  );
}

const ListGroup1 = styled.div`
  width: 599px;
  position: relative;
  margin-top: 24px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 108px;

  &.list-group.list-group-1 {
    margin-left: 3px;
  }
`;

export default ListGroup;
