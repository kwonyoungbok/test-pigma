import styled from "styled-components";
import {ValignTextBottom, InterNormalGraniteGray12px, InterBoldBlack24px} from './InputKitGlobal'


export const CheckEmpty = styled.div`
  width: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 39px;
`;

export const CheckEmpty1 = styled.div`
  ${ValignTextBottom};
  height: 15px;
  letter-spacing: 0;
`;

export const WithTextEmpty1 = styled.div`
  ${ValignTextBottom};
  ${InterNormalGraniteGray12px};
  height: 15px;
  letter-spacing: 0;
`;

export const CheckEmpty2 = styled.input.attrs(props => ({
  type: "checkbox",
  size: props.size || "48px",
}))`
    display: none;
    // width: ${props => props.size};
    // height: ${props => props.size};
    // background:url("/public/img/check---empty-12@2x.png") no-repeat;
    // background-position: 5px center;
    // background-size: 50%;
`;

// export const CheckEmpty2 = styled.input`
//   width: 16px;
//   height: 16px;
//   margin-top: 8px;
// `;

export const CheckFilled1 = styled.div`
  width: 80px;
  position: relative;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 39px;
`;

export const WithTextContainer = styled.div`
  height: 41px;
  align-self: center;
  margin-top: 32px;
  margin-right: 61px;
  display: flex;
  align-items: flex-start;
  min-width: 243px;
`;

export const WithTextEmpty2 = styled.div`
  width: 103px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 41px;
`;

export const WithTextFilled1 = styled.div`
  width: 97px;
  position: relative;
  margin-left: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 41px;
`;

export const Example = styled.div`
  ${InterBoldBlack24px};
  min-height: 29px;
  margin-top: 32px;
  margin-left: 40px;
  letter-spacing: 0;
`;

export const ChecklistVerticalAutoLayout = styled.div`
  width: 62px;
  position: relative;
  margin-top: 32px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 120px;
`;

export const ChecklistHorizontalAutoLayout = styled.div`
  height: 18px;
  position: relative;
  align-self: center;
  margin-top: 32px;
  margin-right: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 290px;
`;