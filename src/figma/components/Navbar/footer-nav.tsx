import styled, {css} from "styled-components";
import React, {useCallback} from "react";
import {Label2 } from "../../styledMixins";
import {MenuItem} from '../Navbar/menu'
import { useNavigate } from 'react-router-dom';

export interface Props {
    copyrightString?: string
    onClick?:(m:MenuItem)=>void
    autoRoute?:boolean
}

function FooterNav(props:Props){
    const navigate = useNavigate();
    const copyrightString = props?.copyrightString ||  "Copyright 2021, Finsweet.com"
    const onClick = useCallback((e:React.MouseEvent<HTMLElement>,m:MenuItem)=>{
        e.stopPropagation()
        props.onClick?.(m)
        navigate("/"+ m)
    },[])
    return (
        <OverlapGroup>
              <Copyright2021Finsweetcom className="copyright-2021-finsweetcom">
                  {copyrightString}
              </Copyright2021Finsweetcom>
            <Place className="footer-place"
                   onClick={(e)=>onClick(e,'home')}>
                Home
            </Place>

            <AboutUs className="footer-about-us"
                     onClick={(e)=>onClick(e,'About-Us')}>
                About us
            </AboutUs>
            <Features className="footer-features"
                      onClick={(e)=>onClick(e,'features')}>
                Features
            </Features>
            <Pricing className="footer-pricing"
                     onClick={(e)=>onClick(e,'pricing')}>
                Pricing
            </Pricing>
            <FAQ className="footer-faq"
                 onClick={(e)=>onClick(e,'FAQ')}>
                FAQ
            </FAQ>
            <Blog className="footer-blog"  onClick={(e)=>onClick(e,'blog')}>
                Blog
            </Blog>
        </OverlapGroup>
    )
}

export default FooterNav;

const OverlapGroup = styled.div`
    ${Label2};
    height: 92px;
    display: flex;
    padding: 0 159px;
    justify-content: flex-end;
    align-items: center;
    min-width: 1600px;
    background-color: var(--white);
`;


const Copyright2021Finsweetcom = styled.div`
  min-height: 28px;
  min-width: 238px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const MenuItemCss = css`
 &:hover {
   font-weight: 700;
 }
  cursor: pointer;
`

const Place = styled.div`
  ${MenuItemCss};
  min-height: 28px;
  margin-left: 570px;
  min-width: 48px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const AboutUs = styled.div`
  ${MenuItemCss};
  min-height: 28px;
  margin-left: 32px;
  min-width: 72px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Features = styled.div`
  ${MenuItemCss};
  min-height: 28px;
  margin-left: 32px;
  min-width: 70px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Pricing = styled.div`
  ${MenuItemCss};
  min-height: 28px;
  margin-left: 32px;
  min-width: 55px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const FAQ = styled.div`
  ${MenuItemCss};
  min-height: 28px;
  margin-left: 32px;
  min-width: 32px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;

const Blog = styled.div`
  ${MenuItemCss};
  min-height: 28px;
  margin-left: 32px;
  min-width: 36px;
  font-weight: 500;
  color: var(--dark-blue);
  line-height: 28px;
  white-space: nowrap;
`;
