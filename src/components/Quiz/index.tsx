import React from 'react';
import styled from 'styled-components';

interface IQuiz {
  children: React.ReactElement;
};

const QuizContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: auto;
  margin: 0 auto;
  max-width: 768px;
  padding: 24px 8px 8px;
  width: 100%;
`;

function Quiz({ children }: IQuiz) {
  return (
    <QuizContainer>{children}</QuizContainer>
  );
}

export { Quiz };
