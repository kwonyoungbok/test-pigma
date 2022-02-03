import React from "react";
import Navbar from "../Navbar";
import PlaceHolder from "../PlaceHolder";
import Footer from "../Footer";
import styled from "styled-components";
import { Heading2, ManropeSemiBoldZircon18px, Label01, Border1pxBlack2, Body1 } from "../../styledMixins";
import "./ContactUs.css";

function ContactUs(props) {
  const {
    contactUs,
    loremIpsumDolorSi,
    message,
    writeYourQuestionHere,
    sendMessege,
    placeHolder1Props,
    placeHolder2Props,
    placeHolder3Props,
    placeHolder4Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us screen">
        <Navbar />
        <ContactUsHeading>
          <ContactUs1>{contactUs}</ContactUs1>
          <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
        </ContactUsHeading>
        <Form>
          <FlexRow>
            <PlaceHolderContainer>
              <PlaceHolder place={placeHolder1Props.place} enterYourName={placeHolder1Props.enterYourName} />
              <PlaceHolder
                place={placeHolder2Props.place}
                enterYourName={placeHolder2Props.enterYourName}
                className={placeHolder2Props.className}
              />
            </PlaceHolderContainer>
            <PlaceHolderContainer1>
              <PlaceHolder
                place={placeHolder3Props.place}
                enterYourName={placeHolder3Props.enterYourName}
                className={placeHolder3Props.className}
              />
              <PlaceHolder
                place={placeHolder4Props.place}
                enterYourName={placeHolder4Props.enterYourName}
                className={placeHolder4Props.className}
              />
            </PlaceHolderContainer1>
          </FlexRow>
          <PlaceHolder1>
            <Message>{message}</Message>
            <Input>
              <WriteYourQuestionHere>{writeYourQuestionHere}</WriteYourQuestionHere>
            </Input>
          </PlaceHolder1>
          <Button>
            <SendMessege>{sendMessege}</SendMessege>
          </Button>
        </Form>
        <Footer copyright2021FinsweetCom={footerProps.copyright2021FinsweetCom} className={footerProps.className} />
      </div>
    </div>
  );
}

const ContactUsHeading = styled.div`
  width: 566px;
  margin-top: 128px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 136px;
`;

const ContactUs1 = styled.div`
  ${Heading2}
  min-height: 64px;
  margin-left: 21px;
  min-width: 269px;
  font-weight: 600;
  color: var(--dark-blue);
  text-align: center;
  line-height: 64px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi = styled.p`
  ${Body1}
  width: 562px;
  min-height: 56px;
  margin-top: 16px;
  margin-right: 4px;
  opacity: 0.7;
  font-weight: 400;
  color: var(--dark-blue);
  text-align: center;
  line-height: 28px;
`;

const Form = styled.div`
  width: 1061px;
  margin-top: 64px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 55px 0;
  align-items: center;
  min-height: 640px;
  background-color: var(--grey);
  border-radius: 12px;
`;

const FlexRow = styled.div`
  height: 228px;
  margin-left: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 910px;
`;

const PlaceHolderContainer = styled.div`
  width: 440px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 228px;
`;

const PlaceHolderContainer1 = styled.div`
  width: 440px;
  position: relative;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 228px;
`;

const PlaceHolder1 = styled.div`
  width: 910px;
  margin-top: 16px;
  margin-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 176px;
`;

const Message = styled.div`
  ${Label01}
  min-height: 32px;
  font-weight: 500;
  color: var(--black);
  line-height: 32px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxBlack2}
  height: 138px;
  margin-top: 6px;
  display: flex;
  padding: 18px 32px;
  align-items: flex-start;
  min-width: 908px;
  border-radius: 8px;
`;

const WriteYourQuestionHere = styled.p`
  ${Body1}
  min-height: 28px;
  font-weight: 400;
  color: var(--black);
  line-height: 28px;
  white-space: nowrap;
`;

const Button = styled.div`
  height: 64px;
  align-self: flex-start;
  margin-top: 32px;
  margin-left: 74px;
  display: flex;
  padding: 0 64px;
  align-items: center;
  min-width: 254px;
  background-color: var(--dark-blue);
  border-radius: 41px;
`;

const SendMessege = styled.div`
  ${ManropeSemiBoldZircon18px}
  min-height: 32px;
  min-width: 126px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

export default ContactUs;
