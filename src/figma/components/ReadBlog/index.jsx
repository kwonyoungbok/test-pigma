import React from "react";
import Navbar from "../Navbar";
import Heading from "../Heading";
import ListGroup from "../ListGroup";
import Footer from "../Footer";
import styled from "styled-components";
import { Body1, Heading3 } from "../../styledMixins";
import "./ReadBlog.css";

function ReadBlog(props) {
  const {
    httpsWwwPexelsComPhotoPeopleWorking,
    loremIpsumDolorSi,
    spanText1,
    spanText2,
    spanText3,
    utEnimAdMinimVeniamQuisNostrud1,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    httpsWwwPexelsComPhotoPhotoOfPeople,
    utEnimAdMinimVeniamQuisNostrud2,
    spanText10,
    spanText11,
    spanText12,
    headingProps,
    listGroupProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="read-blog screen">
        <Navbar />
        <Heading className={headingProps.className} />
        <HttpswwwpexelscomphotopeopleWorking src={httpsWwwPexelsComPhotoPeopleWorking} />
        <BlogBody>
          <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
          <LoremIpsumDolorSi1>
            <Span02>{spanText1}</Span02>
            <Span12>{spanText2}</Span12>
            <Span02>{spanText3}</Span02>
          </LoremIpsumDolorSi1>
          <UtEnimAdMinimVeniamQuisNostrud>{utEnimAdMinimVeniamQuisNostrud1}</UtEnimAdMinimVeniamQuisNostrud>
          <LoremIpsumDolorSi1>
            <Span02>{spanText4}</Span02>
            <Span12>{spanText5}</Span12>
            <Span02>{spanText6}</Span02>
          </LoremIpsumDolorSi1>
          <ListGroup
            className={listGroupProps.className}
            list1Props={listGroupProps.list1Props}
            list2Props={listGroupProps.list2Props}
          />
          <LoremIpsumDolorSi2>
            <Span02>{spanText7}</Span02>
            <Span12>{spanText8}</Span12>
            <Span02>{spanText9}</Span02>
          </LoremIpsumDolorSi2>
          <HttpswwwpexelscomphotophotoOfPeople src={httpsWwwPexelsComPhotoPhotoOfPeople} />
          <UtEnimAdMinimVeniamQuisNostrud1>{utEnimAdMinimVeniamQuisNostrud2}</UtEnimAdMinimVeniamQuisNostrud1>
          <LoremIpsumDolorSi1>
            <Span02>{spanText10}</Span02>
            <Span12>{spanText11}</Span12>
            <Span02>{spanText12}</Span02>
          </LoremIpsumDolorSi1>
        </BlogBody>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const HttpswwwpexelscomphotopeopleWorking = styled.img`
  width: 1280px;
  height: 477px;
  margin-top: 48px;
  object-fit: cover;
`;

const BlogBody = styled.div`
  width: 856px;
  position: relative;
  margin-top: 48px;
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1811px;
`;

const LoremIpsumDolorSi = styled.div`
  ${Heading3}
  width: 842px;
  min-height: 112px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
`;

const LoremIpsumDolorSi1 = styled.p`
  ${Body1}
  width: 842px;
  min-height: 224px;
  margin-top: 32px;
  opacity: 0.7;
  font-weight: 400;
  color: transparent;
  line-height: 28px;
`;

const Span02 = styled.span`
  ${Body1}
  color: var(--dark-blue);
`;

const Span12 = styled.span`
  ${Body1}
  color: var(--royal-blue);
`;

const UtEnimAdMinimVeniamQuisNostrud = styled.div`
  ${Heading3}
  min-height: 56px;
  margin-top: 40px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi2 = styled.p`
  ${Body1}
  width: 842px;
  min-height: 224px;
  margin-top: 24px;
  opacity: 0.7;
  font-weight: 400;
  color: transparent;
  line-height: 28px;
`;

const HttpswwwpexelscomphotophotoOfPeople = styled.img`
  width: 841px;
  height: 311px;
  margin-top: 32px;
  margin-left: 1px;
  object-fit: cover;
`;

const UtEnimAdMinimVeniamQuisNostrud1 = styled.div`
  ${Heading3}
  min-height: 56px;
  margin-top: 56px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 56px;
  white-space: nowrap;
`;

export default ReadBlog;
