import React from "react";
import { Route, Link } from "react-router-dom";
import Background from "../images/backhandsblur.jpg";
import styled from "styled-components";
import {useForm} from "react-hook-form";

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

const ButtonSpan = styled.button`
    text-decoration: none;
    border: none;
    border-radius: 4px; 
    font-size: 1.8rem;
    text-align: center;
    padding: 1.2rem 2rem;
    display: flex;
    align-items:center;
    font-weight: 500;
    background: #330272;
    color: #fff;
    width: 9.3rem;
    margin: 1.5rem auto;
    justify-content:center;
    
`


const NewSignUp = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit= data => {
        console.log(data)
    }
  return (
    <>
      <WrapBackDiv>
        <Modal>
          {" "}
          Join the Conversation
          <SubTextStyle>Creat an Account</SubTextStyle>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="firstname">First Name</Label>
            <Input
                type="text"
                id='firstname'
                label="firstname" 
                name="firstname" 
                ref={register({required: true, minLength: 2})}  
            />
            {errors.firstname && errors.firstname.type === 'required' && <p>This is requried</p>}
            {errors.firstname && errors.firstname.type === 'minLength' && <p>This field requires minimum length of 2</p>}
        
            <Label htmlFor="lastname">Last Name</Label>
            <Input label="lastname" name="lastname"  />
            <Label htmlFor="email">Email</Label>
            <Input name="email" />
            <Label htmlFor="password">Password</Label>
            <Input name="password"  />
            <Label htmlFor="confirm">Confirm</Label>
            <Input name="confirm"  />
            <ButtonSpan>Continue</ButtonSpan>
          </FormStyle>
          
        </Modal>
      </WrapBackDiv>
    </>
  );
};

export default NewSignUp;
