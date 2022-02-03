import React from "react";
import styled from "styled-components";
import { Label01, Border1pxBlack2, Body1 } from "../../styledMixins";


function PlaceHolder(props) {
  const { place, enterYourName, className } = props;

  return (
    <PlaceHolder1 className={`place-holder-1 ${className || ""}`}>
      <Place className="place-2">{place}</Place>
      <Input className="input-1">
        <EnterYourName className="enter-your-name">{enterYourName}</EnterYourName>
      </Input>
    </PlaceHolder1>
  );
}

const PlaceHolder1 = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 102px;

  &.place-holder-1.place-holder-2 {
    margin-top: 24px;
  }

  &.place-holder-1.place-holder-4 {
    margin-top: 24px;
  }
`;

const Place = styled.div`
  ${Label01}
  min-height: 32px;
  font-weight: 500;
  color: var(--black);
  line-height: 32px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxBlack2}
  height: 64px;
  margin-top: 6px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 438px;
  border-radius: 8px;
`;

const EnterYourName = styled.div`
  ${Body1}
  min-height: 28px;
  min-width: 132px;
  font-weight: 400;
  color: var(--black);
  line-height: 28px;
  white-space: nowrap;
`;

const ProvideContext = styled.div`
  ${Body1}

  .place-holder-1.place-holder-2  & {
    min-width: 123px;
  }
`;

const EnterYourEmial = styled.div`
  ${Body1}

  .place-holder-1.place-holder-3  & {
    min-width: 128px;
  }
`;

const SelectSubject = styled.div`
  ${Body1}

  .place-holder-1.place-holder-4  & {
    min-width: 113px;
  }
`;

export default PlaceHolder;
