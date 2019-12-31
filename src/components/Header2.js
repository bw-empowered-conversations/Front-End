import React from "react";
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'


const WrapperDiv = styled.header`
    display: flex;
    background-color: #330272;
    justify-content:space-between;
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    padding: 1rem 2.4rem;
    align-items: center;
`

const ButtonSpan = styled.span`
    font-size: 1.8rem;
    text-align: center;
    padding: .5rem 2rem;
    display: flex;
    align-items:center;
    font-weight: 500;    
`
const StyledDivSubWrap = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
`


export default function Header() {
    return (
    <WrapperDiv>
        <StyledDivSubWrap>
       <Link>Conversations</Link>
       <Link>Forums</Link>
       <Link>Profile</Link>
       </StyledDivSubWrap>
     <ButtonSpan>New Conversation</ButtonSpan>
    </WrapperDiv>
      
    );
  }