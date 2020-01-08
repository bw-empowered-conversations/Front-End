import React from "react";
import { Link } from "react-router-dom";
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

/*const  DDD = styled.div`
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
   
`*/
const validate = ({ name, phone, email }) => {
	const errors = {};

	// validate name
	if (!name) {
		 errors.name = 'Please enter your name';
	} else if (name.length < 2) {
		errors.name = 'Your first name must have 2 characters or more';
    }

	// validate phone #
	if (!phone) {
		 errors.phone = 'Please enter a valid phone #';
	} else if (!phone.includes('-')) {
		errors.phone = 'Phone # must include dashes';
    }
    
    //validate email
    if(!email) {
        errors.email = 'Please enter a valid email address'
    }else if (!email.includes('@')) {
        errors.email = 'Invalid email'
    }
	return errors;
};

const UserProfile = (props) => {
    return (
        <WrapBackDiv>
            <Header />
            <Modal>
                {" "}
                User Profile
                <SubTextStyle>Give Us A Few More Details</SubTextStyle>
             <Formik 
                initialValues={{
                    name: '',
                    phone: '',
                    email: ''
                }}  

                onSubmit={(values) => {
                    console.log('Submitted Form', values);
                    axiosWithAuth()
                        .post('/user/details', values)
                        .then(res => {
                            console.log(res)
                            localStorage.setItem('token', res.data.token);
                            props.history.push('/welcome');
                            
                        })
                        .catch(err => {
                            console.log('Data returned an error', err)
                        })
                }}
                validate={validate}>
               {() => {
						return (
							<Form className='form-container'>
									<Label htmlFor='name'>Name:</Label>
									<Field name='name' type='text' placeholder='John Doe' />
									<ErrorMessage name='name' component='div' className='red' />
							
									<Label htmlFor='phone'>Phone #:</Label>
									<Field name='phone' type='text' placeholder='555-123-4567' />
                                    <ErrorMessage name='phone' component='div' className='red' />
                                    
									<Label htmlFor='email'>Email:</Label>
									<Field name='email' type='text' placeholder='name@email.com' />
									<ErrorMessage name='email' component='div' className='red' />
							

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

export default UserProfile;

