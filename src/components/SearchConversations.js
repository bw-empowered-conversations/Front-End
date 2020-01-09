import React, { useState, useEffect } from "react";
import Header2 from "./Header2";
import styled from 'styled-components';
import ModalConversation from './ModalConversation';
import NewConversation from './NewConversation'
import ModalConversationTopic from './ModalConversationTopic'
import axios from 'axios'
import Names from './NamesSideBar'


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

const SearchConversations = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState([])
    const [showNew, setShowNew] = useState(false)

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/`)
            .then(response => {
                console.log(response.data.results);
                setName(response.data.results)
            })
            .catch(error => {
                console.log("Sorry you suck", error);
            });
    }, []);


    return (
        <div className="emergency-container">
            <Header2 />
            <StyledWrapDiv>
                <StyledWrapSideDiv>
                    <h2 className='h2side'>Search conversations</h2>

                    {name.map(nam => {
                        return (
                            <Names
                                key={nam.id}
                                firstName={nam.name}
                                gender={nam.gender}
                            />
                        )
                    })}

                </StyledWrapSideDiv>
                <NewConversation setShow={setShow} show={show} />

                <ModalConversation setShow={setShow} show={show} setShowNew={setShowNew} showNew={showNew} />

                <ModalConversationTopic setShow={setShow} show={show} setShowNew={setShowNew} showNew={showNew} />

            </StyledWrapDiv>
        </div>
    );
}

export default SearchConversations