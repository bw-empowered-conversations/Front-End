import React from 'react';
import styled from 'styled-components';

const StyledBorderDiv = styled.div`
    border-bottom: 1px solid #bdbdbd;
    text-align: left;
    padding-left: 2.4rem;

  .pName {
    font-size: 1.8rem;
    color: #333333;
  }
  .pTopic {
    font-size: 1.5rem;
    color: #595959;
  }
`;

const Names = props => {
  return (
    <StyledBorderDiv >
    <p className="pName">{props.firstName}</p>
    <p className="pTopic">{props.gender}</p>
    </StyledBorderDiv>
  );
};

export default Names