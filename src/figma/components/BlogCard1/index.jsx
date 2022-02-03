import React from "react";
import styled from "styled-components";
import { Heading6, Label2, Body1 } from "../../styledMixins";


function BlogCard1(props) {
  const { httpsWwwPexelsComPhotoPhotoOfPeople, className } = props;

  return (
    <BlogCard11 className={`blog-card-1 ${className || ""}`}>
      <HttpswwwpexelscomphotophotoOfPeople
        className="httpswwwpexelscompho-1"
        src={httpsWwwPexelsComPhotoPhotoOfPeople}
      />
      <Address className="address">27 Jan 2021</Address>
      <HowOneWebflowUser className="how-one-webflow-user">
        How one Webflow user grew his single person consultancy from $0-100K in 14 months
      </HowOneWebflowUser>
      <SeeHowPivotingTo className="see-how-pivoting-to">
        See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
      </SeeHowPivotingTo>
      <ReadMoreButton className="read-more-button">
        <ReadMore className="read-more-1">Read More</ReadMore>
        <Arrow1 className="arrow-1" src="/img/arrow-1@2x.svg" />
      </ReadMoreButton>
    </BlogCard11>
  );
}

const BlogCard11 = styled.div`
  width: 411px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 593px;

  &.blog-card-1.blog-card-4 {
    margin-top: 64px;
  }

  &.blog-card-1.blog-card-2 {
    margin-top: 48px;
  }

  &.blog-card-1.blog-card-5 {
    margin-top: 64px;
  }

  &.blog-card-1.blog-card-6 {
    margin-top: 64px;
  }
`;

const HttpswwwpexelscomphotophotoOfPeople = styled.img`
  width: 405px;
  height: 285px;
  object-fit: cover;
`;

const Address = styled.div`
  ${Label2}
  min-height: 28px;
  margin-top: 32px;
  margin-left: 1px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const HowOneWebflowUser = styled.div`
  ${Heading6}
  width: 404px;
  min-height: 108px;
  margin-top: 16px;
  margin-left: 1px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
`;

const SeeHowPivotingTo = styled.p`
  ${Body1}
  width: 404px;
  min-height: 56px;
  margin-top: 16px;
  margin-left: 1px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

const ReadMoreButton = styled.div`
  height: 28px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 125px;
`;

const ReadMore = styled.div`
  ${Label2}
  min-height: 28px;
  min-width: 87px;
  font-weight: 500;
  color: var(--tint-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Arrow1 = styled.img`
  width: 25px;
  height: 11px;
  margin-left: 12px;
  margin-bottom: 0.95px;
`;

const Address1 = styled.div`
  ${Label2}

  .blog-card-1.blog-card-6  & {
    margin-left: unset;
  }
`;

export default BlogCard1;
