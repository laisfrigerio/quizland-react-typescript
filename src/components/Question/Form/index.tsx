import styled from 'styled-components';
import { QuizManager } from 'quizland-core/lib/quiz-manager';

import { Answers } from '@components/Question/Answers';
import { QuestionButtonContainer } from '@components/Question/Button';
import { Title } from '@components/Question/Title';

interface IQuestionForm {
  selectedIds: number[];
  setSelectedIds: Function;
  manager: QuizManager;
}

const FormContainer = styled.form`
  width: 100%;
`;

function Form({ manager, selectedIds, setSelectedIds }: IQuestionForm) {
  const currentQuestion = manager.getCurrentQuestion();
  const title = currentQuestion.content;
  const { options } = currentQuestion;

  return (
    <FormContainer>
      <Title questionNumber={manager.getCurrentQuestionIndex() + 1} title={title} />
      <Answers
        options={options}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      <QuestionButtonContainer
        manager={manager}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    </FormContainer>
  );
};

export { Form };

