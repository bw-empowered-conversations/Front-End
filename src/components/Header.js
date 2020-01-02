import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const WrapperDiv = styled.header`
    display: flex;
    background-color: #330272;
    justify-content:space-between;
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    padding: 1rem 2.4rem;
    align-items: center;
`

const ButtonSpan = styled.span`
    border: 1px solid #fff;
    border-radius: 4px; 
    font-size: 1.8rem;
    text-align: center;
    padding: 1.2rem 2rem;
    display: flex;
    align-items:center;
    font-weight: 500;
`



export default function Header() {

    return (
    <WrapperDiv>
       <Link to ='/'>Empowered Conversations</Link>
      <Link to='/'><ButtonSpan>Sign Up</ButtonSpan></Link>
    </WrapperDiv>
      
    );
  }