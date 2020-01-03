import React, { useState } from "react";
import Header2 from "./Header2";
import styled from 'styled-components';
import ModalConversation from './ModalConversation';
import NewConversation from './NewConversation'
import PendingConversation from './PendingConversation'
import InvitationConversation from './InvitationConversation'
import OngoingConversationWrap from './OngoingConversationWrap'

const StyledWrapDiv = styled.div`
    display: flex;
    border: 1px solid grey;
  
    
    
`
const StyledWrapSideDiv = styled.div`
    border: 1px solid grey;  
    height: 100vh;
    width: 25%;
    

    .h2side {
        background:#f2f2f2;
        color: #595959;
        font-size: 1.8rem;
        padding: 1.2rem 0rem 1.2rem 2.4rem;
        text-align: left;
        font-weight: 500;
    }
    .border {
        border-bottom: 1px solid #BDBDBD;
        text-align: left;
        padding-left: 2.4rem;
    }

    .pName {
        font-size: 1.8rem;
        color:#333333;
    }
    .pTopic {
        font-size: 1.5rem;
        color: #595959
    }
`




const StyledMainContentDiv = styled.div`
      width: 75%;
      align-self: center;
      flex-direction:column;
      height: 20vh;
      justify-content: space-around;
      display:flex;
      align-items:center;

      .pTop {
          font-size: 2.2rem;
      }
      .pBottom {
          font-size: 1.8rem;
      }

`
const ButtonSpan = styled.button`
    border: 1px solid #4E09A6;
    color: #4E09A6;
    border-radius: 4px; 
    font-size: 1.8rem;
    padding: 1.2rem 2rem;
    font-weight: 500;
    width: 19.2rem;
    text-align:center;
`


const SearchConversations = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="emergency-container">
            <Header2 />
            <StyledWrapDiv>
                <StyledWrapSideDiv>
                    <h2 className='h2side'>Search conversations</h2>
                    <div className='border'>
                        <p className='pName'>hello</p>
                        <p className='pTopic'>hello</p>
                    </div>
                    <div className='border'>
                        <p className='pName'>hello</p>
                        <p className='pTopic'>hello</p>
                    </div>
                    <div className='border'>
                        <p className='pName'>hello</p>
                        <p className='pTopic'>hello</p>
                    </div>
                    <div className='border'>
                        <p className='pName'>hello</p>
                        <p className='pTopic'>hello</p>
                    </div>


                </StyledWrapSideDiv>
                <NewConversation setShow={setShow} show={show}/>
             
                <ModalConversation setShow={setShow} show={show}>

                </ModalConversation>

            </StyledWrapDiv>
        </div>
    );
}

export default SearchConversations