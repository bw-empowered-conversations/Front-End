import React from "react";
import styled from 'styled-components';
import OngoingConversationGrey from './OngoingConversationGrey'
import OngoingConversationBlue from './OngoingConversationBlue'


const WrapDiv = styled.div`
display:flex;
flex-direction: column-reverse;
margin:0 auto;
height:90vh;   
`

const ComposeBar = styled.div`
  border: 1px solid #BDBDBD;
  border-radius: 50px;
  color: #828282;
  text-align: left;
  padding: 30px;
  font-size: 1.5rem;
  margin: 20px 0;
`

const OngoingConversationWrap = () => {

  return (

    <WrapDiv>
      <ComposeBar>Compose Message</ComposeBar>
      <OngoingConversationGrey/>
      <OngoingConversationBlue/>
    </WrapDiv>


  );
}

export default OngoingConversationWrap