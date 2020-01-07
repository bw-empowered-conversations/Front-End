import React from "react";
import styled from "styled-components";
import ContactModalConversation from './ContactModalConversation'


const Modal = styled.div`
  width: 55%;
  border: grey 1px solid;
  margin: auto;
  font-size: 3.5rem;
  background: white;
  padding: 0 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
 
  

  .link-purple {
    color: #330272;
    font-size: 1.5rem;
  }
  .display-block {
  display: block;
}

.display-none {
  display: none;
}



.cursorP {
  cursor: pointer;
}
`;

const StyledHeaderP = styled.p`
padding: 1.2rem 0 1.2rem 20px;
  text-align: left;
  background: #330272;
  color: white; 
  font-size:2rem;
`
const StyledSubHeaderP = styled.p`
padding: 1.2rem 0 1.2rem 20px;
  text-align: left;
  background: #f2f2f2;
  color: #595959; 
  font-size:1.8rem;
`
/* const StyledNamesP = styled.p`
padding: 1.2rem 0 1.2rem 20px;
  text-align: left;
  border-bottom: 1px solid #bdbdbd;
  color: #333333; 
  font-size:1.8rem;
` */


const ModalConversation = (props) => {
  if (props.show === true) {
    return (
      <Modal>
        <StyledHeaderP className='headerM' ><span className='cursorP' onClick={() => props.setShow(false)}>X</span></StyledHeaderP>
        <StyledSubHeaderP >Search for people </StyledSubHeaderP>
        <ContactModalConversation setShow={props.setShow}/>
      </Modal>)
  } else {
    return null;
  }
}




export default ModalConversation;
