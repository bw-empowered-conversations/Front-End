import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import Background from "../images/backhandsblur.jpg";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

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


const NewSignUp = () => {
    

    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useState(false);

     const login = e => {
        e.preventDefault();
        setIsLoading(true)
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected') 
             })
            .catch(err => console.log('Data returned an error', err))
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

   
    return (
       <form>
        
       </form>
    );
};

export default NewSignUp;
