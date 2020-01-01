import React from "react";
import styled from "styled-components";

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
    color: #330272;
    font-size: 1.5rem;
  }
  .display-block {
  display: block;
}

.display-none {
  display: none;
}
`;

const ModalCon = (props) => {
 
 

  if (props.show === true ) {
  return <Modal>HI
    <p  onClick={() => props.setShow(false)}>tco</p>
  </Modal>
} else {
  return null;
}
}




export default ModalCon;
