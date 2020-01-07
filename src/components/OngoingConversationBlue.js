import React from 'react';
import styled from 'styled-components';

const OuterWrapDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
`;

const WrapDiv = styled.div`
  width: 40%;
  background: #2f80ed;
  border-radius: 20px;
  padding: 15px;
  .pBottom {
    font-size: 1.8rem;
    color: #fff;
  }
`;

const OngoingConversationBlue = () => {
  return (
    <OuterWrapDiv>
      <WrapDiv>
        <p className="pBottom">
          “Hey Heather, I was wondering if you’re in the right headspace to talk
          about what happened... There are some things I’d like to get off my
          chest.”
        </p>
      </WrapDiv>
    </OuterWrapDiv>
  );
};

export default OngoingConversationBlue;
