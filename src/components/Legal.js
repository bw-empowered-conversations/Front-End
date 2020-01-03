import React from "react";
import Header from "./Header";
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

const ModalLegal = styled.div`
  width: 50%;
  background: white;
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
const FormStyleLegal = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1.5rem auto .1rem auto;
  font-size: 1.5rem;
  justify-content: center;
  align-items:center;
  text-align: center;
   .red {
       color: red;
   }
`;

const LegalText = styled.div`
  font-size: 1.8rem;
  padding: 1rem 0rem 2.2rem 0rem;
  color: #828282;
  text-align: left;
`;

const Input = styled.input`
padding: 1rem 0rem;
border: 1px solid #333333;
border-radius: 4px;
font-size:1.8rem;

`
const Label = styled.label`
margin: 0rem 1rem;
`

const ButtonSpanLegal = styled.button`
    text-decoration: none;
    border: none;
    border-radius: 4px; 
    font-size: 1.5rem;
    text-align: center;
    padding: 1.2rem 0rem;
    display: flex;
    flex-wrap: nowrap;
    align-items:center;
    font-weight: 500;
    background: #330272;
    color: #fff;
    width: 14.6rem;
    margin: 2.4rem auto 1.5rem auto;
    justify-content:center;
    
    &:disabled {
    opacity: 0.2
  }
    
`

const GGG = styled.div`
    display: flex;
    flex-direction: row-reverse;
        
`

const Legal = () => {
    const { register, handleSubmit, errors, formState } = useForm({ mode: 'onChange'})
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <>
            <WrapBackDiv>
                <Header />
                <ModalLegal>
                    {" "}
                    Legal Disclaimer
                    <FormStyleLegal onSubmit={handleSubmit(onSubmit)}>
                    <LegalText>All the information on this website - empoweredconversations.com - is published in good faith and for general information purpose only. Empowered Conversations does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Empowered Conversations), is strictly at your own risk. Empowered Conversations will not be liable for any losses and/or damages in connection with the use of our website. Our Disclaimer was generated with the help of the Disclaimer Generator and the Disclaimer Generator.
          
          From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
          
         
        </LegalText>
                        <GGG>
                        <Label htmlFor="checkbox">I Agree</Label>
                        <Input name="checkbox"
                            type="checkbox"
                            id='checkbox'
                            label="checkbox"

                            ref={register({ required: true })}
                        />
                        {errors.checkbox && errors.checkbox.type === 'required' && <p className='red'>Requried</p>}
                        </GGG>

                        <ButtonSpanLegal disabled={!formState.dirty || (formState.dirty && !formState.isValid)}
                        type="submit">Start Connecting</ButtonSpanLegal>
                    </FormStyleLegal>
                

                </ModalLegal>
            </WrapBackDiv>
        </>
    );
};



export default Legal



