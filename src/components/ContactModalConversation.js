import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const StyledNamesP = styled.p`
padding: 1.2rem 0 1.2rem 20px;
  text-align: left;
  border-bottom: 1px solid #bdbdbd;
  color: #333333; 
  font-size:1.8rem;
`


const ContactModalConversation = (props) => {
    return (
        <>
          <StyledNamesP onClick={() => props.setShow(false)}>Bob Sapp</StyledNamesP>
        </>
    )
  }
  

  export default ContactModalConversation
