import React from "react";
import { Route, Link } from "react-router-dom";
import Background from "../images/backhandsblur.jpg";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const WrapBackDiv = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Modal = styled.div`
  width: 70%;
  border: white 1px solid;
  margin: auto;
  font-size: 3.5rem;
  background: white;
  padding: 20px 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 1.5rem auto;
  font-size: 1.5rem;
  text-align: left;
`;
const SubTextStyle = styled.div`
  font-size: 1.8rem;
  color: #828282;
`;

const Input = styled.input`
padding: 1rem 0rem;
border: 1px solid #333333;
border-radius: 4px;
`
const Label = styled.label`
margin: 1rem 0;
`

const NewSignUp = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <WrapBackDiv>
        <Modal>
          {" "}
          Join the Conversation
          <SubTextStyle>Creat an Account</SubTextStyle>
          <FormStyle>
            <Label htmlFor="firstname">First Name</Label>
            <Input label="firstname" name="firstname" ref={register} />
            <Label htmlFor="lastname">Last Name</Label>
            <Input label="lastname" name="lastname" ref={register} />
            <Label htmlFor="email">Email</Label>
            <Input name="email" ref={register} />
            <Label htmlFor="password">Password</Label>
            <Input name="password" ref={register} />
            <Label htmlFor="confirm">Confirm</Label>
            <Input name="confirm" ref={register} />
          </FormStyle>
        </Modal>
      </WrapBackDiv>
    </>
  );
};

export default NewSignUp;
