import React from "react";
import styled from "styled-components";
import { Label2, Border2pxZircon } from "../../styledMixins";


function Navbar(props) {
  const { className } = props;

  return (
    <Navbar1 className={`navbar ${className || ""}`}>
      <FinsweetWhiteLogo1 className="finsweet-white-logo-1" src="/img/finsweet-white-logo-1@2x.svg" />
      <Place className="place">Home</Place>
      <AboutUs className="about-us">About us</AboutUs>
      <Features className="features">Features</Features>
      <Pricing className="pricing-1">Pricing</Pricing>
      <FAQ className="faq-1">FAQ</FAQ>
      <Blog className="blog">Blog</Blog>
      <OverlapGroup className="overlap-group-1">
        <ContactUs className="contact-us-1">Contact us</ContactUs>
      </OverlapGroup>
    </Navbar1>
  );
}

const Navbar1 = styled.div`
  ${Label2}
  height: 92px;
  display: flex;
  padding: 0 160px;
  align-items: center;
  min-width: 1600px;
  background-color: var(--tint-blue);

  &.navbar.navbar-2 {
    position: absolute;
    top: 0;
    left: 0;
  }

  &.navbar.navbar-3 {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const FinsweetWhiteLogo1 = styled.img`
  width: 122px;
  height: 28px;
`;

const Place = styled.div`
  width: 48px;
  min-height: 30px;
  margin-left: 452px;
  margin-top: 1.69px;
  font-weight: 500;
  color: var(--white);
  line-height: 28px;
  white-space: nowrap;
`;

const AboutUs = styled.div`
  width: 72px;
  min-height: 30px;
  margin-left: 32px;
  margin-top: 2px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
  white-space: nowrap;
`;

const Features = styled.div`
  width: 70px;
  min-height: 30px;
  margin-left: 32px;
  margin-top: 2px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
  white-space: nowrap;
`;

const Pricing = styled.div`
  width: 55px;
  min-height: 30px;
  margin-left: 32px;
  margin-top: 2px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
  white-space: nowrap;
`;

const FAQ = styled.div`
  width: 32px;
  min-height: 30px;
  margin-left: 32px;
  margin-top: 2px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
  white-space: nowrap;
`;

const Blog = styled.div`
  width: 36px;
  min-height: 30px;
  margin-left: 32px;
  margin-top: 2px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  ${Border2pxZircon}
  height: 60px;
  margin-left: 48px;
  display: flex;
  padding: 14px 46px;
  align-items: flex-start;
  min-width: 185px;
  border-radius: 41px;
`;

const ContactUs = styled.div`
  ${Label2}
  min-height: 28px;
  font-weight: 500;
  color: var(--white);
  line-height: 28px;
  white-space: nowrap;
`;

export default Navbar;
