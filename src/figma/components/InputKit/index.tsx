import React from 'react'
import {InterNormalGraniteGray12px, ValignTextBottom} from './InputKitGlobal'
import styled from "styled-components";

export interface Props {
    checked?:boolean
}

// https://carpediem9911.tistory.com/27
function InputKit(props:Props){
    const [checked,setChecked] = React.useState<boolean>(false)
    const onClick = (e:any)=>{
        e.stopPropagation();
        setChecked(!checked)
    }
    const className = ''
 return (
     <CheckBoxContainer className={className} onClick={onClick}>
         <HiddenCheckBox type={'checkbox'} checked={checked} />
         <StyledCheckBox checked={checked } />
     </CheckBoxContainer>
 )
}

const CheckBoxContainer = styled.div`
  display: inline-block; 
  vertical-align: middle;
`;

const Icon = styled.svg` 
  fill: none; 
  stroke: white; 
  stroke-width: 2px; 
`;

const StyledCheckBox = styled.div` 
  display: inline-block; 
  width: 20px; 
  height: 20px;
  background-repeat: no-repeat;
  background-image: ${(props:Props) => props.checked ? ('url(/img/check---empty-10@2x.png)') : 'url(/img/check---empty-12@2x.png)'};
  border-radius: 4px 4px; 
  //border: 1px solid black;
  transition: all 150ms;
`;

const HiddenCheckBox = styled.input` 
  border: 0; 
  clip: rect(0 0 0 0); 
  clippath: inset(50%); 
  height: 1px; 
  margin: -1px; 
  overflow: hidden; 
  padding: 0; 
  position: absolute; 
  white-space: nowrap; 
  width: 1px; 
`;


// const CheckContainer = styled.div`
//   ${InterNormalGraniteGray12px};
//   height: 39px;
//   margin-top: 32px;
//   margin-left: 40px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 196px;
// `;

// const CheckEmpty = styled.div`
//   width: 86px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   min-height: 39px;
// `;
//
// const CheckEmpty1 = styled.div`
//   ${ValignTextBottom}
//   height: 15px;
//   letter-spacing: 0;
// `;

export default InputKit

