import React from "react";
import styled from "styled-components";
import { ManropeSemiBoldMirage18px } from "../../styledMixins";


function Frame3(props) {
  const { children } = props;

  return (
    <Button>
      <GetStarted>{children}</GetStarted>
    </Button>
  );
}

const Button = styled.button`
  border: none;
  cursor: pointer;
  height: 64px;
  margin-top: 39px;
  display: flex;
  padding: 0 150px;
  align-items: center;
  min-width: 432px;
  background-color: var(--goldenrod);
  border-radius: 41px;
`;

const GetStarted = styled.div`
  ${ManropeSemiBoldMirage18px};
  min-height: 32px;
  min-width: 132px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

export default Frame3;
