import React from "react";
import styled from "styled-components";


const Modal = styled.div`
  width: 540px;
  border: #C4C4C4 1px solid;
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
  padding: 0 0 6rem 0px;
  align-items: left;
  border-radius: 5px;

  .link-purple {
    color: #330272;
    font-size: 1.5rem;
  }

  .cursorP {
    cursor: pointer;
  }

  

  .pIntro {
    font-size: 1.8rem;
    color: #595959;
    text-align:left;
    margin-bottom: 10px; 
   
  }

  .textArea {
      width: 343px;
      height: 288px;
      border-radius: 2px;
      font-family: inherit;
      font-size: 1.5rem;
      color: #C4C4C4;
  }
`;

const StyledHeaderP = styled.p`
  padding: 1.2rem 0 1.2rem 20px;
  text-align: left;
  background: #330272;
  color: white;
  font-size: 2rem;
`;

const StyledTopicP = styled.p`
  padding: 1.2rem 0 0rem 0;
  color: #333333;
  font-size: 1.8rem;
  text-align:left;
  
  
`;

const ButtonSpan = styled.button`
  border: 1px solid #4e09a6;
  background: white;
  color: #4e09a6;
  border-radius: 4px;
  font-size: 1.5rem;
  padding: 1.2rem 0rem;
  margin: 2rem 0;
  font-weight: 500;
  width: 12.4rem;
  text-align: center;
`;


const WrapFlex = styled.div`
    margin: 0 auto;
    width: 343px;
    display:flex;
    flex-direction:column; 
    
    
`

const SelectDrop = styled.select`
    font-size: 1.8rem;
    border-radius: 2px;
    width: 343px;
    margin: 0 0 2.5rem 0;
    padding: 10px 0;
    `
const WrapAgain = styled.div`
        width: 100%;
    `
const ModalConversationTopic = props => {
  if (props.showNew === true) {
    return (
      <Modal>

        <StyledHeaderP className="headerM">
          <span className="cursorP" onClick={() => props.setShowNew(false)}>
            X
        </span>
        </StyledHeaderP>
        <WrapAgain>
          <WrapFlex >
            <StyledTopicP>I need to talk to Heather about...</StyledTopicP>

            <form action="">
              <SelectDrop name="topics">
                <option value="ADHD">ADHD</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Autism">Autism</option>
                <option value="Chronic Pain">Bipolar</option>
                <option value="Depression">Depression</option>
                <option value="Eating Disorders">Eating Disorders</option>
                <option value="Grief/Loss">Grief/Loss</option>
                <option value="LGBT Isssues">LGBT Isssues</option>
                <option value="Mental Health">Mental Health</option>
                <option value="PTSD">PTSD</option>
                <option value="Sexual Assault">Sexual Assault</option>
                <option value="STIs">STIs</option>
                <option value="Substance Abuse">Substance Abuse</option>
              </SelectDrop>
              <p className="pIntro">Introduction (optional)</p>
              <div>
                <textarea className="textArea" name="message" >
                  Provide a brief introduction to the conversation
          </textarea>
              </div>
              <ButtonSpan>Send Request</ButtonSpan>
            </form>

          </WrapFlex>
        </WrapAgain>
      </Modal>
    );
  } else {
    return null;
  }
};

export default ModalConversationTopic;
