import React from "react";
import { Route, Link } from "react-router-dom";
import Background from "../images/backhandsblur.jpg";
import Header from "./Header";
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


const NewSignUp2 = () => {
    const { register, handleSubmit, errors, watch } = useForm()
    const onSubmit = data => {
        console.log(data)
        window.location.href = 'legal'
    }
    return (
        <>
            <WrapBackDiv>
                <Header />
                <Modal>
                    {" "}
                    Join the Conversation
          <SubTextStyle>Creat an Account</SubTextStyle>
                    <FormStyle onSubmit={handleSubmit(onSubmit)}>
                        <Label htmlFor="emergency">Emergency Contact</Label>
                        <Input
                            type="text"
                            id='emergency'
                            label="emergency"
                            name="emergency"
                            ref={register({ required: true, minLength: 2 })}
                        />
                        {errors.emergency && errors.emergency.type === 'required' && <p className='red'>Emergency Contact is requried</p>}
                        {errors.emergency && errors.emergency.type === 'minLength' && <p className='red'>This field requires minimum length of 2</p>}

                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            type="tel"
                            id='phone'
                            label="phone"
                            name="phone"
                            ref={register({ required: true, minLength: 10, pattern:  { value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/, message:'invalid'}
                            })}
                        />
                        {errors.phone && errors.phone.type === 'required' && <p className='red'>Phone Number is requried</p>}
                        {errors.phone && errors.phone.type === 'minLength' && <p className='red'>This field requires minimum length of 7</p>}
                        {errors.phone && errors.phone.type === 'pattern' && <p className='red'>Follow this format 530-654-8978</p>}

                        

                        <ButtonSpan>Continue</ButtonSpan>
                    </FormStyle>
               <Link to='/newsignup'><p className='link-purple'> Back </p></Link> 

                </Modal>
            </WrapBackDiv>
        </>
    );
};

export default NewSignUp2;
