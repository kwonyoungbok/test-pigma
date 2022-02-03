import React from "react";
import styled from "styled-components";


function Image(props) {
  const { cover, className } = props;

  return (
    <Image1 className={`image ${className || ""}`}>
      <Cover className="cover" src={cover} />
    </Image1>
  );
}

const Image1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 623px;
  background-image: url(/img/cover@1x.svg);
  background-size: 100% 100%;

  &.image.image-1 {
    background-image: url(/img/cover-1@1x.svg);
  }

  &.image.image-2 {
    background-image: url(/img/cover-2@1x.svg);
  }

  &.image.image-3 {
    background-image: url(/img/cover-3@1x.svg);
  }

  &.image.image-4 {
    background-image: url(/img/cover-4@1x.svg);
  }

  &.image.image-5 {
    background-image: url(/img/cover-5@1x.svg);
  }
`;

const Cover = styled.img`
  width: 623px;
  height: 380px;
`;

export default Image;
