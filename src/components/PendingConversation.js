import React, { useState } from "react";
import styled from 'styled-components';

const StyledMainContentDiv = styled.div`
      width: 75%;
      align-self: center;
      flex-direction:column;
      height: 20vh;
      justify-content: space-around;
      display:flex;
      align-items:center;

      .pTop {
          font-size: 2.2rem;
      }
      .pBottom {
          font-size: 1.8rem;
      }

`
const ButtonSpan = styled.button`
    border: 1px solid #EB5757;
    color: #EB5757;
    background:none;
    border-radius: 4px; 
    font-size: 1.8rem;
    padding: 1.2rem 2rem;
    font-weight: 500;
    width: 19.2rem;
    text-align:center;
`


const PendingConversation = () => {

  return (
    <StyledMainContentDiv>
      <p className='pTop'>Pending Conversation</p>
      <p className='pBottom'>We'll ping you when your request is accepted.</p>
      <ButtonSpan> Cancel Request</ButtonSpan>
    </StyledMainContentDiv>

  );
}

export default PendingConversation