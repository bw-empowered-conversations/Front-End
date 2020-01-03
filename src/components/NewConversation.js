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
    border: 1px solid #4E09A6;
    color: #4E09A6;
    background:none;
    border-radius: 4px; 
    font-size: 1.8rem;
    padding: 1.2rem 2rem;
    font-weight: 500;
    width: 19.2rem;
    text-align:center;
`


const NewConversation = (props) => {

  return (
    <StyledMainContentDiv>
      <p className='pTop'>You don't have a conversation selected</p>
      <p className='pBottom'>Choose one from your existing conversations, or start a new one.</p>
      <ButtonSpan onClick={() => props.setShow(true)}> New Conversation</ButtonSpan>
    </StyledMainContentDiv>

  );
}

export default NewConversation


// onClick = {() => setShow(true)}