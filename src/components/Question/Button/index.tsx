import styled from 'styled-components';
import { QuizManager } from 'quizland-core/lib/quiz-manager';

import { Button } from "@ui/Button";

interface IQuestionButtonContainer {
  manager: QuizManager;
  selectedIds: number[];
  setSelectedIds: Function;
}

const Container = styled.section`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

function QuestionButtonContainer({ manager, selectedIds, setSelectedIds }: IQuestionButtonContainer) {
  const hasSelectedIds = selectedIds.length > 0;

  const handleNextQuestion = () => {
    manager.checkAnswer(selectedIds);
    manager.goToNextQuestion();
    setSelectedIds([]);
  }

  const handleSkipQueastion = () => {
    manager.goToNextQuestion();
    setSelectedIds([]);
  };

  const handleClickButton = () => {
    return hasSelectedIds
            ? handleNextQuestion()
            : handleSkipQueastion();
  };

  const displayButtonLabel = () => {
    return hasSelectedIds
            ? 'Next question'
            : 'Skip question';
  };

  return (
    <Container>
      <Button
        onClick={handleClickButton}
        className='primary'
        label={displayButtonLabel()}
      />
    </Container>
  );
};

export { QuestionButtonContainer };
