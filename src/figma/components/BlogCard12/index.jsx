import React from "react";
import ViewMoreButton from "../ViewMoreButton";
import styled from "styled-components";
import { Heading6, Label2, Body1 } from "../../styledMixins";


function BlogCard12(props) {
  const { httpsWwwPexelsComPhotoArabicBusines, className, viewMoreButtonProps } = props;

  return (
    <BlogCard1 className={`blog-card-1-1 ${className || ""}`}>
      <HttpswwwpexelscomphotoarabicBusines
        className="httpswwwpexelscompho-18"
        src={httpsWwwPexelsComPhotoArabicBusines}
      />
      <Address className="address-2">19 Jan 2022</Address>
      <HowOneWebflowUser className="how-one-webflow-user-2">
        How one Webflow user grew his single person consultancy from $0-100K in 14 months
      </HowOneWebflowUser>
      <SeeHowPivotingTo className="see-how-pivoting-to-2">
        See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
      </SeeHowPivotingTo>
      <ViewMoreButton viewMore={viewMoreButtonProps.viewMore} className={viewMoreButtonProps.className} />
    </BlogCard1>
  );
}

const BlogCard1 = styled.div`
  width: 411px;
  position: relative;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 609px;

  &.blog-card-1-1.blog-card-3-1 {
    margin-left: 26px;
    margin-top: unset;
  }
`;

const HttpswwwpexelscomphotoarabicBusines = styled.img`
  width: 405px;
  height: 285px;
  object-fit: cover;
`;

const Address = styled.div`
  ${Label2}
  min-height: 28px;
  margin-top: 40px;
  opacity: 0.7;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const HowOneWebflowUser = styled.div`
  ${Heading6}
  width: 405px;
  min-height: 108px;
  margin-top: 16px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 36px;
`;

const SeeHowPivotingTo = styled.p`
  ${Body1}
  width: 405px;
  min-height: 56px;
  margin-top: 16px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  line-height: 28px;
`;

export default BlogCard12;
