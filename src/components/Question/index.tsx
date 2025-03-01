import { useState } from 'react';
import styled from 'styled-components';
import { QuizManager } from 'quizland-core/lib/quiz-manager';

import { Form } from '@components/Question/Form';

import { ProgressBar } from '@ui/ProgressBar';

const QuestionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
`;

interface IQuestionWrapper {
  manager: QuizManager;
}

function Question({ manager }: IQuestionWrapper) {
  const [selectedIds, setSelectedIds] = useState([]);
  const totalQuestions = manager.getConfig().questions.length;
  const currentQuestionCounter = manager.getCurrentQuestionIndex() + 1;
  
  return (
    <QuestionContainer>
      <ProgressBar
        counter={{currentCounter: currentQuestionCounter, totalCounter: totalQuestions}}
      />
      <Form
        manager={manager}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    </QuestionContainer>
  )
};

export { Question };
