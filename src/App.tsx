import React from 'react'
// @ts-ignore
import { Routes, Route } from "react-router-dom";

import Pricing from "./pages/Pricing";
import Home from './pages/Home'
import Features from './pages/Features'

function App() {
  return (
    <div className="App">

        {/*<Home {...homeData} />*/}
        <Features {...featuresData}/>
        {/*<Pricing {...pricingData} />*/}
        {/*<Home {...homeData} />*/}
        {/*<Features {...featuresData}/>*/}
        {/*<Pricing {...pricingData} />*/}

        {/*<Routes>*/}
        {/*    <Route path="/pricing">*/}
        {/*        <Pricing {...pricingData} />*/}
        {/*    </Route>*/}

        {/*    <Route path="/home">*/}
        {/*        <Home {...homeData} />*/}
        {/*    </Route>*/}

        {/*    /!*<Route path="/features">*!/*/}
        {/*    /!*    <Features {...featuresData} />*!/*/}
        {/*    /!*</Route>*!/*/}

        {/*</Routes>*/}
    </div>
  );
}

export default App;

const qn21Data = {
    spanText1: "02",
    spanText2: "What is your class naming convention ?",
};

const qn22Data = {
    spanText1: "03",
    spanText2: "How do we communicate ?",
    className: "qn3",
};

const qn23Data = {
    spanText1: "04",
    spanText2: "I have a bigger project. Can you handle it ?",
    className: "qn4",
};

const qn24Data = {
    spanText1: "05",
    spanText2: "What is your class naming convention ?",
    className: "qn5",
};

const footer1Data = {
    spanText8: "Copyright 2021, Finsweet.com",
};

const pricingData = {
    spanText1: "Our Pricing Plans",
    spanText2: "When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.",
    spanText3: "$299",
    spanText4: "Per Design",
    spanText5: "Landing Page",
    spanText6: "When you’re ready to go beyond prototyping in Figma,",
    pointer1: "/img/pointer-14@2x.png",
    pointer2: "/img/pointer-14@2x.png",
    pointer3: "/img/pointer-14@2x.png",
    pointer4: "/img/pointer-16@2x.png",
    pointer5: "/img/pointer-16@2x.png",
    spanText7: "All limited links",
    spanText8: "Own analytics platform",
    spanText9: "Chat support",
    spanText10: "Optimize hashtags",
    spanText11: "Unlimited users",
    spanText12: "Get started",
    overlapGroup4: "/img/mask-group-1@2x.png",
    spanText13: "$399",
    spanText14: "Multi Design",
    spanText15: "Website Page",
    spanText16: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    pointer6: "/img/pointer-14@2x.png",
    pointer7: "/img/pointer-14@2x.png",
    pointer8: "/img/pointer-14@2x.png",
    pointer9: "/img/pointer-14@2x.png",
    pointer10: "/img/pointer-14@2x.png",
    spanText17: "All limited links",
    spanText18: "Own analytics platform",
    spanText19: "Chat support",
    spanText20: "Optimize hashtags",
    spanText21: "Unlimited users",
    spanText22: "Get started",
    spanText23: "$499 +",
    spanText24: "Per Design",
    spanText25: "Complex Project",
    spanText26: "When you’re ready to go beyond prototyping in Figma,",
    pointer11: "/img/pointer-14@2x.png",
    pointer12: "/img/pointer-14@2x.png",
    pointer13: "/img/pointer-14@2x.png",
    pointer14: "/img/pointer-14@2x.png",
    pointer15: "/img/pointer-14@2x.png",
    pointer16: "/img/pointer-14@2x.png",
    spanText27: "All limited links",
    spanText28: "Own analytics platform",
    spanText29: "Chat support",
    spanText30: "Optimize hashtags",
    spanText31: "Unlimited users",
    spanText32: "Assist and Help",
    spanText33: "Contact us",
    spanText34: "Frequently asked questions",
    spanText35: "Contact us For More Info",
    spanText36: "01",
    spanText37: "How much time does it take ?",
    x1844: "/img/-@2x.png",
    spanText38: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    line: "/img/line-1@2x.png",
    qn21Props: qn21Data,
    qn22Props: qn22Data,
    qn23Props: qn23Data,
    qn24Props: qn24Data,
    footerProps: footer1Data,
};

const list2Data = {
    className: "list-4",
};

const list3Data = {
    className: "list-5",
};

const listGroup1Data = {
    list1Props: list2Data,
    list2Props: list3Data,
};

const footer2Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-1",
};

const privacyPolicyData = {
    spanText1: "Privacy Policy",
    spanText2: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your",
    spanText3: "Lorem ipsum dolor.",
    spanText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    spanText5: "Excepteur sint occaecat",
    spanText6: " cupidatat non proident.",
    spanText7: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ",
    spanText10: "cupidatat",
    spanText11: " non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    spanText12: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    listGroupProps: listGroup1Data,
    footerProps: footer2Data,
};

const placeHolder1Data = {
    spanText1: "Name",
    spanText2: "Enter your name",
};

const placeHolder2Data = {
    spanText1: "Subject",
    spanText2: "Provide context",
    className: "place-holder-2",
};

const placeHolder3Data = {
    spanText1: "Email",
    spanText2: "Enter your Emial",
    className: "place-holder-3",
};

const placeHolder4Data = {
    spanText1: "Subject",
    spanText2: "Select Subject",
    className: "place-holder-4",
};

const footer3Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-2",
};

const contactUsData = {
    spanText1: "Contact Us",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    spanText3: "Message",
    spanText4: "Write your  question here",
    spanText5: "Send Messege",
    placeHolder1Props: placeHolder1Data,
    placeHolder2Props: placeHolder2Data,
    placeHolder3Props: placeHolder3Data,
    placeHolder4Props: placeHolder4Data,
    footerProps: footer3Data,
};

const blogCard11Data = {
    httpsWwwPexelsComPhotoPhotoOfPeople: "/img/https---www-pexels-com-photo-photo-of-people-using-laptops-31828-1@2x.png",
};

const blogCard12Data = {
    httpsWwwPexelsComPhotoPhotoOfPeople: "/img/https---www-pexels-com-photo-top-view-photo-of-people-having-a-m-1@2x.png",
    className: "blog-card-4",
};

const blogCard13Data = {
    httpsWwwPexelsComPhotoPhotoOfPeople: "/img/https---www-pexels-com-photo-side-view-photo-of-smiling-woman-in-1@2x.png",
    className: "blog-card-2",
};

const blogCard14Data = {
    httpsWwwPexelsComPhotoPhotoOfPeople: "/img/https---www-pexels-com-photo-man-wearing-red-crew-neck-shirt-112-1@2x.png",
    className: "blog-card-5",
};

const blogCard15Data = {
    httpsWwwPexelsComPhotoPhotoOfPeople: "/img/https---www-pexels-com-photo-top-view-photo-of-person-holding-ea-1@2x.png",
};

const blogCard16Data = {
    httpsWwwPexelsComPhotoPhotoOfPeople: "/img/https---www-pexels-com-photo-group-of-person-sitting-indoors-318-1@2x.png",
    className: "blog-card-6",
};

const footer4Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-3",
};

const blogPageData = {
    httpsWwwPexelsComPhotoPeopleWorking: "/img/https---www-pexels-com-photo-people-working-in-front-of-computer-2@2x.png",
    spanText1: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.",
    spanText2: "Read more",
    spanText3: "Our Blog",
    blogCard11Props: blogCard11Data,
    blogCard12Props: blogCard12Data,
    blogCard13Props: blogCard13Data,
    blogCard14Props: blogCard14Data,
    blogCard15Props: blogCard15Data,
    blogCard16Props: blogCard16Data,
    footerProps: footer4Data,
};

const card1Data = {
    spanText1: "Planning",
};

const card2Data = {
    spanText1: "Conception",
    className: "card-2",
};

const card3Data = {
    spanText1: "Design",
    className: "card-3",
};

const card4Data = {
    spanText1: "Development",
    className: "card-4",
};

const logoSection1Data = {
    spanText2: "Finsweet Users",
};

const footer5Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-4",
};

const aboutUsData = {
    spanText1: "About us",
    spanText2: "Our designs solve problems",
    spanText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    httpsWwwPexelsComPhotoGroupOfPeople: "/img/https---www-pexels-com-photo-group-of-people-sitting-indoors-318-1@2x.png",
    spanText4: "Who we are",
    spanText5: "Goal focussed",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    spanText7: "Continuous improvement",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    httpsWwwPexelsComPhotoManInBlueJack: "/img/https---www-pexels-com-photo-man-in-blue-jacket-looking-at-white-1@2x.png",
    spanText9: "The process we follow",
    spanText10: "Our Mission",
    spanText11: "Inspire, Innovate, Share",
    spanText12: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    httpsWwwPexelsComPhotoAManStandingI: "/img/https---www-pexels-com-photo-a-man-standing-in-an-office-7792811-1@2x.png",
    httpsWwwPexelsComPhotoPhotoOfWomenA: "/img/https---www-pexels-com-photo-photo-of-women-at-the-meeting-38107-1@2x.png",
    spanText13: "Our Vision",
    spanText14: "Laser focus",
    spanText15: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    spanText16: "The benefits of working with us",
    icon1: "/img/icon-6@2x.png",
    spanText17: "Customize with ease",
    spanText18: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon2: "/img/icon-5@2x.png",
    spanText19: "Perfectly Responsive",
    spanText20: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon3: "/img/icon-8@2x.png",
    spanText21: "Friendly Support",
    spanText22: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    spanText23: "Meet our team",
    httpsWwwPexelsComPhotoManInBlackSui: "/img/https---www-pexels-com-photo-man-in-black-suit-holding-a-calling-1@2x.png",
    spanText24: "John Smith",
    spanText25: "CEO",
    ellipse228: "/img/ellipse-228-1@2x.png",
    socials: "/img/socials-1@2x.png",
    httpsWwwPexelsComPhotoSeriousMan376: "/img/https---www-pexels-com-photo-serious-man-3760373--1@2x.png",
    spanText26: "Simon Adams",
    spanText27: "CTO",
    httpsWwwPexelsComPhotoManInWhiteShi: "/img/https---www-pexels-com-photo-man-in-white-shirt-wearing-blue-buc-1@2x.png",
    spanText28: "Paul Jones",
    spanText29: "Design Lead",
    httpsWwwPexelsComPhotoTransgenderMo: "/img/https---www-pexels-com-photo-transgender-model-touching-forehead-1@2x.png",
    spanText30: "Sara Hardin",
    spanText31: "Project Manager",
    card1Props: card1Data,
    card2Props: card2Data,
    card3Props: card3Data,
    card4Props: card4Data,
    logoSectionProps: logoSection1Data,
    footerProps: footer5Data,
};

const navbar6Data = {
    className: "navbar-5",
};

const logoSection2Data = {
    spanText2: "Figma Users",
    className: "logo-section-1",
};

const headerRight1Data = {
    spanText1: "Free Revision Rounds",
    spanText2: "Get free Revisions and one week of free maintenance",
};

const headerRight2Data = {
    spanText1: "24/7 Support",
    spanText2: "Working with us, you will be getting 24/7 priority support",
    className: "header-left-2",
};

const faqHeading1Data = {
    spanText1: "Frequently asked question",
};

const fAQ1Data = {
    spanText2: "How much time does it take ?",
    spanText3: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
};

const fAQ21Data = {
    spanText1: "02",
    spanText2: "What is your class naming convention ?",
};

const fAQ22Data = {
    spanText1: "03",
    spanText2: "How do we communicate ?",
    className: "faq-8",
};

const footer6Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-5",
};

const featuresData = {
    spanText1: "All the features you need",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    spanText3: "View Pricing",
    featureHeroIllustration: "/img/feature-hero-illustration@1x.png",
    spanText4: "The benefits of working with our team",
    icon1: "/img/icon-6@2x.png",
    spanText5: "Customize with ease",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon2: "/img/icon-5@2x.png",
    spanText7: "Perfectly Responsive",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon3: "/img/icon-8@2x.png",
    spanText9: "Friendly Support",
    spanText10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    spanText11: "Use Client-first",
    spanText12: <>Top agencies and freelancers around the world use <br />Client-first</>,
    spanText13: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    httpsWwwPexelsComPhotoManExplaining: "/img/https---www-pexels-com-photo-man-explaining-problems-to-faceless-1@2x.png",
    httpsWwwPexelsComPhotoPhotoOfManHol: "/img/https---www-pexels-com-photo-photo-of-man-holding-a-book-927022--1@2x.png",
    httpsWwwPexelsComPhotoAManWorkingIn: "/img/https---www-pexels-com-photo-a-man-working-in-a-call-center-8867-1@2x.png",
    httpsWwwPexelsComPhotoPersonUsingMa: "/img/https---www-pexels-com-photo-person-using-macbook-pro-3861964--1@2x.png",
    spanText14: "Quick Delivery",
    spanText15: "Guranteed 1 week delivery for standard five pager website",
    spanText16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    line1: "/img/line-9@2x.png",
    line2: "/img/line-9@2x.png",
    line3: "/img/line-9@2x.png",
    spanText17: "04",
    spanText18: "I have a bigger project. Can you handel it ?",
    x758900: "/img/-@2x.png",
    line4: "/img/line-9@2x.png",
    spanText19: "05",
    spanText20: "What is your class naming convention ?",
    x758895: "/img/-@2x.png",
    navbarProps: navbar6Data,
    logoSectionProps: logoSection2Data,
    headerRight1Props: headerRight1Data,
    headerRight2Props: headerRight2Data,
    faqHeadingProps: faqHeading1Data,
    fAQProps: fAQ1Data,
    fAQ21Props: fAQ21Data,
    fAQ22Props: fAQ22Data,
    footerProps: footer6Data,
};

const image1Data = {
    cover: "/img/cover-2@2x.png",
};

const image2Data = {
    cover: "/img/cover-4@2x.png",
};

const image3Data = {
    cover: "/img/cover-6@2x.png",
};

const link2Data = {
    className: "link-3",
};

const image4Data = {
    cover: "/img/cover-8@2x.png",
};

const image5Data = {
    cover: "/img/cover-10@2x.png",
};

const image6Data = {
    cover: "/img/cover-12@2x.png",
};

const link4Data = {
    className: "link-5",
};

const footer7Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-6",
};

const workData = {
    spanText1: "What we created",
    spanText2: "Our Work Portfolio",
    spanText3: "We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.",
    socialMediaIcon: "/img/social-media-icon-8@2x.png",
    spanText4: "All",
    spanText5: "UI Design",
    spanText6: "Webflow Design",
    spanText7: "Figma Design",
    spanText8: "Template 1",
    spanText9: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    spanText10: "View Portfolio",
    arrow31: "/img/arrow-3-6@2x.png",
    spanText11: "Template 3",
    spanText12: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    spanText13: "Template 5",
    spanText14: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    spanText15: "Template 2",
    spanText16: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    spanText17: "View Portfolio",
    arrow32: "/img/arrow-3-6@2x.png",
    spanText18: "Template 4",
    spanText19: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    spanText20: "Template 6",
    spanText21: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    spanText22: "Let's build something great together",
    spanText23: "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.",
    image1Props: image1Data,
    image2Props: image2Data,
    image3Props: image3Data,
    link1Props: link2Data,
    image4Props: image4Data,
    image5Props: image5Data,
    image6Props: image6Data,
    link2Props: link4Data,
    footerProps: footer7Data,
};

const footer8Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-7",
};

const readCaseStudiesData = {
    spanText1: "Web design and development",
    spanText2: "Finsweet Design case studies",
    spanText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    mainImage: "/img/cover-14@2x.png",
    spanText4: "Client",
    spanText5: "facebook.com",
    spanText6: "Service",
    spanText7: "Product Design",
    spanText8: "Deliverable",
    spanText9: "UI Screens, UX Flow & Prototype",
    line46: "/img/line-46-1@2x.png",
    spanText10: "About the project",
    spanText11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    group2508: "/img/cover-13@2x.png",
    spanText12: "How we do it",
    spanText13: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    line47: "/img/line-48-1@2x.png",
    spanText14: "Keywords",
    spanText15: "Design",
    spanText16: "UI/UX",
    spanText17: "Wireframing",
    spanText18: "Branding",
    spanText19: "Development",
    spanText20: "webflow",
    line48: "/img/line-48-1@2x.png",
    spanText21: "Let's build something great together",
    spanText22: "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.",
    footerProps: footer8Data,
};

const heading2Data = {
    className: "blog-heading",
};

const list5Data = {
    className: "list-7",
};

const list6Data = {
    className: "list-8",
};

const listGroup2Data = {
    className: "list-group-1",
    list1Props: list5Data,
    list2Props: list6Data,
};

const footer9Data = {
    spanText8: "Copyright 2021, Finsweet.com",
    className: "footer-8",
};

const readBlogData = {
    httpsWwwPexelsComPhotoPeopleWorking: "/img/https---www-pexels-com-photo-people-working-in-front-of-computer-2@2x.png",
    spanText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    spanText3: "Excepteur sint occaecat",
    spanText4: " cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    spanText5: "Ut enim ad minim veniam, quis nostrud.",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ",
    spanText7: "cupidatat non",
    spanText8: " proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    spanText9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    spanText10: "exercitation ullamco",
    spanText11: " laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    httpsWwwPexelsComPhotoPhotoOfPeople: "/img/https---www-pexels-com-photo-photo-of-people-near-wooden-table-3@1x.png",
    spanText12: "Ut enim ad minim veniam, quis nostrud.",
    spanText13: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    spanText14: "exercitation ullamco",
    spanText15: " laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    headingProps: heading2Data,
    listGroupProps: listGroup2Data,
    footerProps: footer9Data,
};

const navbar10Data = {
    className: "navbar-9",
};

const card22Data = {
    spanText1: "01",
    spanText2: "Strategy",
};

const card23Data = {
    spanText1: "03",
    spanText2: "Design",
    className: "card-8",
};

const card24Data = {
    spanText1: "02",
    spanText2: "Wireframing",
    className: "card-9",
};

const card25Data = {
    spanText1: "04",
    spanText2: "Development",
    className: "card-10",
};

const viewMoreButton1Data = {
    spanText: "View More",
};

const faqHeading2Data = {
    spanText1: "Frequently asked questions",
};

const fAQ3Data = {
    spanText2: "How much time does it take?",
    spanText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    className: "qn-1-expand-1",
};

const fAQ23Data = {
    spanText1: "02",
    spanText2: "What is your class naming convention?",
    className: "qn2-1",
};

const fAQ24Data = {
    spanText1: "03",
    spanText2: "How do you communicate?",
    className: "qn3-1",
};

const viewMoreButton2Data = {
    spanText: "Read More",
    className: "readmore-button-1",
};

const blogCard122Data = {
    httpsWwwPexelsComPhotoArabicBusines: "/img/https---www-pexels-com-photo-arabic-businessman-standing-on-stre-1@2x.png",
    viewMoreButtonProps: viewMoreButton2Data,
};

const viewMoreButton3Data = {
    spanText: "Read More",
    className: "readmore-button-2",
};

const blogCard123Data = {
    httpsWwwPexelsComPhotoArabicBusines: "/img/https---www-pexels-com-photo-apple-monitors-326518--1@2x.png",
    className: "blog-card-3-1",
    viewMoreButtonProps: viewMoreButton3Data,
};

const footer10Data = {
    spanText8: "Copyright 2022, Finsweet.com",
    className: "footer-9",
};

const homeData = {
    illustration1: "/img/illustration-1@2x.png",
    spanText1: "Building stellar websites for early startups",
    spanText2: "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.",
    spanText3: "View our work",
    spanText4: "View Pricing",
    arrow11: "/img/arrow-1-10@2x.png",
    illustration2: "/img/illustration@1x.png",
    spanText5: "Building stellar websites for early startups",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    spanText7: "View our work",
    spanText8: "View Pricing",
    arrow12: "/img/arrow-1-10@2x.png",
    spanText9: "How we work",
    spanText10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText11: "Get in touch with us",
    arrow21: "/img/arrow-2-5@2x.png",
    spanText12: "View our projects",
    overlapGroup6: "/img/card-1@2x.png",
    spanText13: "Read Case Studies",
    arrow22: "/img/arrow-2-4@2x.png",
    rectangle1316: "/img/rectangle-1316-1@2x.png",
    spanText14: "Workhub office Webflow Webflow Design",
    spanText15: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam",
    spanText16: "View project",
    arrow23: "/img/arrow-2-4@2x.png",
    overlapGroup: "/img/rectangle-1313-1@2x.png",
    rectangle1317: "/img/rectangle-1317-1@2x.png",
    spanText17: <>Unisaas Website <br />Design</>,
    spanText18: "View portfolio",
    arrow24: "/img/arrow-2-4@2x.png",
    card: "/img/card-2@2x.png",
    spanText19: "Features",
    spanText20: "Design that solves problems, one product at a time",
    icon1: "/img/icon-8@2x.png",
    spanText21: "Uses Client First",
    spanText22: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon2: "/img/icon-12@2x.png",
    spanText23: "24/7 Support",
    spanText24: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon3: "/img/icon-9@2x.png",
    spanText25: "Two Free Revision Round",
    spanText26: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon4: "/img/icon-10@2x.png",
    spanText27: "Quick Delivery",
    spanText28: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon5: "/img/icon-7@2x.png",
    spanText29: "Template Customization",
    spanText30: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    icon6: "/img/icon-11@2x.png",
    spanText31: "Hands-on approach",
    spanText32: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    spanText33: "What our clients say about us",
    spanText34: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.",
    spanText35: `"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."`,
    maskGroup: "/img/mask-group-2@2x.png",
    spanText36: "Jenny Wilson",
    spanText37: "Vice President",
    arrow1: "/img/pointer-18@2x.png",
    x7061034: "/img/-@2x.png",
    arrow3: "/img/pointer-17@2x.png",
    x7061030: "/img/-@2x.png",
    line1: "/img/line-9@2x.png",
    line2: "/img/line-9@2x.png",
    line3: "/img/line-9@2x.png",
    spanText38: "04",
    spanText39: "I have a bigger project. Can you handle it?",
    x706771: "/img/-@2x.png",
    line4: "/img/line-9@2x.png",
    spanText40: "05",
    spanText41: "What is your class naming convention?",
    x706766: "/img/-@2x.png",
    httpsWwwPexelsComPhotoWomanWritingO: "/img/https---www-pexels-com-photo-woman-writing-on-paper-3228878--1@2x.png",
    spanText42: "Building stellar websites for early startups",
    spanText43: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    spanText44: "Send inquiry",
    spanText45: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    spanText46: "Your Name",
    spanText47: "Email",
    spanText48: "Paste your Figma design URL",
    spanText49: "Send an Inquiry",
    spanText50: "Get in touch with us",
    arrow25: "/img/arrow-1-10@2x.png",
    spanText51: "Our blog",
    httpsWwwPexelsComPhotoWomanInWhiteS: "/img/https---www-pexels-com-photo-woman-in-white-sleeveless-shirt-usi-1@2x.png",
    spanText52: "19 Jan 2022",
    spanText53: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    spanText54: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    spanText55: "Read More",
    arrow13: "/img/arrow-1-9@2x.png",
    navbarProps: navbar10Data,
    card21Props: card22Data,
    card22Props: card23Data,
    card23Props: card24Data,
    card24Props: card25Data,
    viewMoreButtonProps: viewMoreButton1Data,
    faqHeadingProps: faqHeading2Data,
    fAQProps: fAQ3Data,
    fAQ21Props: fAQ23Data,
    fAQ22Props: fAQ24Data,
    blogCard121Props: blogCard122Data,
    blogCard122Props: blogCard123Data,
    footerProps: footer10Data,
};

const buttonPrimaryHover2Data = {
    className: "button-primary-hover-3",
};

const promotionData = {
    spanText1: "Style Guide section",
    line53: "/img/line-53-1@2x.png",
    icon: "/img/icon-13@2x.png",
    spanText2: "Download the Font family 👉",
    overlapGroup: "/img/group-1@2x.png",
    spanText3: "Aa",
    spanText4: "Poppins Font Family",
    spanText5: "Heading H1",
    spanText6: "Heading H2",
    spanText7: "Heading H3",
    spanText8: "Heading H4",
    spanText9: "Heading H5",
    spanText10: "Heading H6",
    spanText11: "Body 01",
    spanText12: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectato",
    spanText13: "Body 02",
    spanText14: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectato",
    spanText15: "Label 1",
    spanText16: "Apparently we had reached",
    spanText17: "Label 2",
    spanText18: "Apparently we had reached",
    spanText19: "Color pallette",
    group1987: "/img/group-1987-1@2x.png",
    spanText20: "Button Hover states",
    spanText21: "View our work",
    spanText22: "View our work",
    buttonPrimaryHoverProps: buttonPrimaryHover2Data,
};

