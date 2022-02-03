import React from "react";
import styled from "styled-components";
import { ManropeSemiBoldMirage18px } from "../../styledMixins";


function Button() {
  return (
    <Button1>
      <ContactUs>Contact Us</ContactUs>
    </Button1>
  );
}

const Button1 = styled.div`
  height: 64px;
  margin-top: 40px;
  display: flex;
  padding: 0 66px;
  align-items: center;
  min-width: 230px;
  background-color: var(--goldenrod);
  border-radius: 41px;
`;

const ContactUs = styled.div`
  ${ManropeSemiBoldMirage18px}
  min-height: 32px;
  min-width: 97px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Button2 = styled.div`
  height: 64px;
  margin-top: 40px;
  display: flex;
  padding: 0 66px;
  align-items: center;
  min-width: 230px;
  background-color: var(--goldenrod);
  border-radius: 41px;
`;

const ContactUs1 = styled.div`
  ${ManropeSemiBoldMirage18px}
  min-height: 32px;
  min-width: 97px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

export default Button;
