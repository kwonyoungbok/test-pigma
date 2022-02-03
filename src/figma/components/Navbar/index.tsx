import React , {useCallback} from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Label2, Border2pxZircon } from "../../styledMixins";

type MenuItem = "Home" | "About-Us" | "Features" | "Pricing" | "FAQ" | "Blog"


interface Props {
    className?: string
    onClick?:(m:MenuItem)=>void
}

function Navbar(props:Props) {
  const { className } = props;

  const onClick = useCallback((e:React.MouseEvent<HTMLElement>,m:MenuItem)=>{
      e.stopPropagation()
      props.onClick?.(m)
  },[])

  return (
    <Navbar1 className={`navbar ${className || ""}`}>
      <FinsweetWhiteLogo1 className="finsweet-white-logo-1"
                          src="/img/finsweet-white-logo-1@2x.svg"
      />
      <Place className="nav-place"
             onClick={(e)=>onClick(e,'Home')}>
          Home
      </Place>
      <AboutUs className="nav-about-us"
               onClick={(e)=>onClick(e,'About-Us')}>
          About us
      </AboutUs>
      <Features className="nav-features"
                onClick={(e)=>onClick(e,'Features')}>
          Features
      </Features>
      <Pricing className="nav-pricing"
               onClick={(e)=>onClick(e,'Pricing')}>
          Pricing
      </Pricing>
      <FAQ className="nav-faq"
           onClick={(e)=>onClick(e,'FAQ')}>
          FAQ
      </FAQ>
      <Blog className="nav-blog"
            onClick={(e)=>onClick(e,'Blog')}>
          Blog
      </Blog>
        <ContactUsButton>
            <ContactUs className="nav-contact-us">Contact us</ContactUs>
        </ContactUsButton>
    </Navbar1>
  );
}

const Navbar1 = styled.div`
  ${Label2};
  position: relative;
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


const MenuItemCss = css`
 &:hover {
   color: white;
 }
  cursor: pointer;
`


const Place = styled.div`
  ${MenuItemCss};
  width: 48px;
  min-height: 30px;
  margin-left: 452px;
  margin-top: 1.69px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
  white-space: nowrap;
`;

const AboutUs = styled.div`
  ${MenuItemCss};
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
  ${MenuItemCss};
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
  ${MenuItemCss};
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
  ${MenuItemCss};
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
  ${MenuItemCss};
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
  ${Border2pxZircon};
  height: 60px;
  margin-left: 48px;
  display: flex;
  padding: 14px 46px;
  align-items: flex-start;
  min-width: 185px;
  border-radius: 41px;
`;

const ContactUs = styled.div`
  ${Label2};
  min-height: 28px;
  font-weight: 500;
  color: var(--french-gray);
  line-height: 28px;
  white-space: nowrap;

  &:hover {
    color: white;
  }
`;

const ContactUsButton =  styled.button`
  ${Border2pxZircon};
  height: 60px;
  box-shadow:none;
  margin-left: 48px;
  display: flex;
  padding: 14px 46px;
  align-items: flex-start;
  min-width: 185px;
  border-radius: 41px;
  background-color:transparent;
  cursor: pointer;

  &:active{
    box-shadow: 1px 1px 0 rgb(0,0,0,0.5); 
    position: relative; 
    top:2px;
  }
`

export default Navbar;
