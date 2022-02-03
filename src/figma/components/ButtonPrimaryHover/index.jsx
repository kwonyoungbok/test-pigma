import React from "react";
import styled from "styled-components";
import { Label01 } from "../../styledMixins";


function ButtonPrimaryHover(props) {
  const { className } = props;

  return (
    <ButtonPrimaryHover1 className={`button-primary-hover-2 ${className || ""}`}>
      <ViewOurWork className="view-our-work-2">View our work</ViewOurWork>
    </ButtonPrimaryHover1>
  );
}

const ButtonPrimaryHover1 = styled.div`
  height: 64px;
  display: flex;
  padding: 0 48px;
  align-items: center;
  min-width: 222px;
  background-color: var(--dark-blue);
  border-radius: 40px;

  &.button-primary-hover-2.button-primary-hover-3 {
    margin-left: 48px;
    background-color: #535460;
  }
`;

const ViewOurWork = styled.div`
  ${Label01}
  min-height: 32px;
  min-width: 126px;
  font-weight: 500;
  color: var(--white);
  line-height: 32px;
  white-space: nowrap;
`;

export default ButtonPrimaryHover;
