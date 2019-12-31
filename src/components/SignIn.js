import React, { usestate, useState } from "react";
import { Route, Link } from "react-router-dom";
import Background from "../images/backhandsblur.jpg";
import BackColorHands from '../images/Welcome-Background.jpg'
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const WrapBackDiv = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Modal = styled.div`
  width: 70%;
  
  background-image: url(${BackColorHands });
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: white 1px solid;
  margin: auto;
  font-size: 3.5rem;
  
  padding: 4rem 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .link-purple {
      color:#330272;
      font-size: 1.5rem;
  }
  .p-size {
    font-size:1.5rem;
    color: #828282
  }
  .margin-bottom {
    margin-bottom: 8.5rem;
  }
`;
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 1.5rem auto .1rem auto;
  font-size: 1.5rem;
  text-align: left;
   .red {
       color: red;
   }
`;
const SubTextStyle = styled.div`
  font-size: 1.8rem;
  padding: 1rem 0rem 2.2rem 0rem;
  color: #828282;
`;

const Input = styled.input`
padding: 1rem 0rem;
border: 1px solid #333333;
border-radius: 4px;
font-size:1.8rem;
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
    margin: 2.4rem auto 1.5rem auto;
    justify-content:center;
    
`

const  DDD = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0rem auto;
    width: 100%;
`

const  FFF = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    
    
    .margin-right {
        margin-right:5%;
    }

    .margin-left {
        margin-left:5%;
    }
   
`


const SignIn = () => {
    const { register, handleSubmit, errors, watch } = useForm()

    const [] = useState();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <>
            <WrapBackDiv>
                <Modal>
                    {" "}
                    Welcome Back
          <SubTextStyle>Sign in with your email address </SubTextStyle>
                    <FormStyle onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="email">Email</Label>
                        <Input name="email"
                            type="email"
                            id='email'
                            label="email"
                            name="email"
                            ref={register({ required: true, minLength: 2 })}
                        />
                        {errors.email && errors.email.type === 'required' && <p className='red'>Email is requried</p>}
                        {errors.email && errors.email.type === 'minLength' && <p className='red'>This field requires minimum length of 2</p>}

                        <Label className='margin-right' htmlFor="password">Password</Label>
                        <Input className='margin-right' 
                            name="password" 
                            type="password"
                            id='password'
                            label="password"
                            ref={register({ 
                                required: 'You must specify a password', 
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                             })}
                        />
                        {errors.password && <p className='red'>{errors.password.message}</p>}

                        

                        <ButtonSpan>Continue</ButtonSpan>
                    </FormStyle>
                 <p className='p-size'> If you don't have an account, </p>
                 <p className='p-size margin-bottom'>  you can <span className='link-purple'><Link to='/newsignup'>create one</Link></span></p>

                </Modal>
            </WrapBackDiv>
        </>
    );
};



export default SignIn