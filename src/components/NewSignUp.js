import React from "react";
import { Route, Link } from "react-router-dom";
import Background from "../images/backhandsblur.jpg";
import styled from "styled-components";

const WrapBackDiv = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Modal = styled.div`
    width: 80%; 
    border: white 1px solid;
    margin:  auto;
`

const NewSignUp = () => {
  return (
    <>
      <WrapBackDiv>
         <Modal> Hello from new signup</Modal>
    </WrapBackDiv>
    </>
  );
};

export default NewSignUp;
