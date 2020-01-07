import React from "react";
import styled from 'styled-components';

const StyledMainContentDiv = styled.div`
      width: 75%;
      align-self: center;
      flex-direction:column;
      height: 30vh;
      justify-content: space-around;
      display:flex;
      align-items:center;
      align-self: center;
      flex-wrap: wrap;
`

const WrapDiv = styled.div`
width: 50%;
      .pTop {
          font-size: 2.2rem;
          padding-bottom: 1.5rem;
      }
      .pBottom {
          font-size: 1.8rem;
          padding-bottom: 1.5rem;
          color: #595959
      }
`

const ButtonSpanRed = styled.button`
    border: 1px solid #EB5757;
    color: #EB5757;
    background:none;
    border-radius: 4px; 
    font-size: 1.8rem;
    padding: 1.4rem 2rem;
    font-weight: 500;
    width: 12.2rem;
    text-align:center;
    margin-left: 10px;
`

const ButtonSpanGreen = styled.button`
    border: 1px solid #27AE60;
    color: #27AE60;
    background:none;
    border-radius: 4px; 
    font-size: 1.8rem;
    padding: 1.4rem 0;;
    font-weight: 500;
    width: 17.6rem;
    text-align:center;
`


const InvitationConversation = () => {

  return (
    <StyledMainContentDiv>
      <WrapDiv>
      <p className='pTop'>Invitation from Mike Waters</p>
      <p className='pBottom'>“Hey Heather, I was wondering if you’re in the right headspace to talk about what happened... There are some things I’d like to get off my chest.”</p>
      <ButtonSpanGreen>Accept Request</ButtonSpanGreen>
      <ButtonSpanRed> Not Now</ButtonSpanRed>
      </WrapDiv>
    </StyledMainContentDiv>

  );
}

export default InvitationConversation