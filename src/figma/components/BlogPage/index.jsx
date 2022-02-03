import React from "react";
import Navbar from "../Navbar";
import Heading from "../Heading";
import BlogCard1 from "../BlogCard1";
import Footer from "../Footer";
import styled from "styled-components";
import { Heading2, Body1 } from "../../styledMixins";
import "./BlogPage.css";

function BlogPage(props) {
  const {
    httpsWwwPexelsComPhotoPeopleWorking,
    apparentlyWeHadRe,
    readMore,
    ourBlog,
    blogCard11Props,
    blogCard12Props,
    blogCard13Props,
    blogCard14Props,
    blogCard15Props,
    blogCard16Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="blog-page screen">
        <Navbar />
        <FeaturedBlog>
          <Heading />
          <HttpswwwpexelscomphotopeopleWorking src={httpsWwwPexelsComPhotoPeopleWorking} />
          <ApparentlyWeHadRe>{apparentlyWeHadRe}</ApparentlyWeHadRe>
          <ReadMore>{readMore}</ReadMore>
        </FeaturedBlog>
        <OurBlog>
          <BlogCardContainer>
            <BlogCard1 httpsWwwPexelsComPhotoPhotoOfPeople={blogCard11Props.httpsWwwPexelsComPhotoPhotoOfPeople} />
            <BlogCard1
              httpsWwwPexelsComPhotoPhotoOfPeople={blogCard12Props.httpsWwwPexelsComPhotoPhotoOfPeople}
              className={blogCard12Props.className}
            />
          </BlogCardContainer>
          <BlogContainer>
            <OurBlog1>{ourBlog}</OurBlog1>
            <BlogCard1
              httpsWwwPexelsComPhotoPhotoOfPeople={blogCard13Props.httpsWwwPexelsComPhotoPhotoOfPeople}
              className={blogCard13Props.className}
            />
            <BlogCard1
              httpsWwwPexelsComPhotoPhotoOfPeople={blogCard14Props.httpsWwwPexelsComPhotoPhotoOfPeople}
              className={blogCard14Props.className}
            />
          </BlogContainer>
          <BlogCardContainer1>
            <BlogCard1 httpsWwwPexelsComPhotoPhotoOfPeople={blogCard15Props.httpsWwwPexelsComPhotoPhotoOfPeople} />
            <BlogCard1
              httpsWwwPexelsComPhotoPhotoOfPeople={blogCard16Props.httpsWwwPexelsComPhotoPhotoOfPeople}
              className={blogCard16Props.className}
            />
          </BlogCardContainer1>
        </OurBlog>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const FeaturedBlog = styled.div`
  width: 1284px;
  position: relative;
  margin-top: 128px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 857px;
`;

const HttpswwwpexelscomphotopeopleWorking = styled.img`
  width: 1280px;
  height: 477px;
  margin-top: 32px;
  margin-right: 4px;
  object-fit: cover;
`;

const ApparentlyWeHadRe = styled.p`
  ${Body1}
  width: 831px;
  min-height: 84px;
  margin-top: 48px;
  margin-right: 3px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
`;

const ReadMore = styled.div`
  ${Body1}
  min-height: 28px;
  margin-top: 16px;
  margin-right: 3px;
  min-width: 89px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--royal-blue);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const OurBlog = styled.div`
  height: 1362px;
  margin-top: 128px;
  margin-left: 2px;
  display: flex;
  align-items: flex-end;
  min-width: 1280px;
`;

const BlogCardContainer = styled.div`
  width: 411px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1250px;
`;

const BlogContainer = styled.div`
  width: 411px;
  position: relative;
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1362px;
`;

const OurBlog1 = styled.div`
  ${Heading2}
  min-height: 64px;
  margin-right: 7px;
  min-width: 208px;
  font-weight: 600;
  color: var(--dark-blue);
  line-height: 64px;
  white-space: nowrap;
`;

const BlogCardContainer1 = styled.div`
  width: 411px;
  position: relative;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1250px;
`;

export default BlogPage;
