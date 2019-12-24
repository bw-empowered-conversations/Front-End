import React from "react";
import { Route, Link } from "react-router-dom";
import Background from "../images/backhandsblur.jpg";
import styled from "styled-components";
import { useForm } from 'react-hook-form'

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
    font-size: 3.5rem;
    background: white; 
`
const FormStyle = styled.form`
    display: flex;
    flex-direction:column;
    width: 70%;

`


const NewSignUp = () => {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <WrapBackDiv>
         <Modal> Join the Conversation
             <FormStyle >
                <label htmlFor="name">Name</label>
                <input label='name'name="name" ref={register} />
                <label htmlFor="email">Email</label>
                <input name="email" ref={register} />
                <label htmlFor="password">Password</label>
                <input name="password" ref={register} />
                <label htmlFor="confirm">Confirm</label>
                <input name="confirm" ref={register} />
             </FormStyle>
         </Modal>

    </WrapBackDiv>
    </>
  );
};

export default NewSignUp;
