import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Header from "./Header";
import Background from "../images/backhandsblur.jpg";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './style.css';
import styled from "styled-components";

const WrapBackDiv = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Modal = styled.div`
  width: 65%;
  border: white 1px solid;
  margin: auto;
  font-size: 3.5rem;
  background: white;
  padding: 4rem 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .link-purple {
      color:#330272;
      font-size: 1.5rem;
  }
`;

const SubTextStyle = styled.div`
  font-size: 1.8rem;
  color: #828282;
`;

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
    cursor: pointer;
    
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
const validate = ({ username, password }) => {
	const errors = {};

	// validate name
	if (!username) {
		errors.username = 'Please enter your username';
	} else if (username.length < 7) {
		errors.username = 'Your first name must have 7 characters or more';
    }

	// validate password
	if (!password) {
		errors.password = 'Please enter a password';
	} else if (password.length < 5) {
		errors.password = 'Your password must have five characters or more';
	}
	return errors;
};

const NewSignUp = (props) => {
    return (
        <WrapBackDiv>
            <Header />
            <Modal>
                {" "}
                Join the Conversation
                <SubTextStyle>Create an Account</SubTextStyle>
             <Formik 
                initialValues={{
                    username: '',
                    password: ''
                }}  

                onSubmit={(values, tools) => {
                    axiosWithAuth()
                        .post('/auth/register', values)
                        .then(res => {
                            localStorage.setItem('token', res.data.token);
                            props.history.push('/welcome');
                            tools.resetForm();
                        })
                        .catch(err => {
                            console.log('Data returned an error', err)
                        })
                }}
                validate={validate}>
               {() => {
						return (
							<Form className='form-container'>
									<Label htmlFor='username'>Username:</Label>
									<Field name='username' type='text' placeholder='name@email' />
									<ErrorMessage name='email' component='div' className='error' />
							
									<Label htmlFor='password'>Password:</Label>
									<Field name='password' type='password' placeholder='password' />
									<ErrorMessage name='password' component='div' className='error' />
							

								<ButtonSpan type='submit'>Continue</ButtonSpan>
							</Form>
						);
					}}
            </Formik>
            <Link to='/'><p className='link-purple'>I already have an Account</p></Link>
            </Modal>
        </WrapBackDiv>
    
    );
};

export default NewSignUp;

