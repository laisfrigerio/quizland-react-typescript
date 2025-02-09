import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { QuizManager } from 'quizland-core/lib/quiz-manager';

import { Button } from "@ui/Button";

interface IQuestionButtonContainer {
  manager: QuizManager;
  selectedIds: number[];
  setSelectedIds: Function;
}

interface IFinishButton {
  isLastQuestion: boolean;
  handleClickButton: MouseEventHandler<HTMLButtonElement>;
}

interface IPreviousButton {
  currentQuestionIndex: number;
  handleClickButton: MouseEventHandler<HTMLButtonElement>;
}

interface ISkipOrNextButton {
  isLastQuestion: boolean;
  displayButtonLabel: () => string;
  handleClickButton: MouseEventHandler<HTMLButtonElement>;
}

const Container = styled.section`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

function PreviousButton({ currentQuestionIndex, handleClickButton }: IPreviousButton) {
  if (currentQuestionIndex === 0) {
    return null;
  }

  return (
    <Button
      onClick={handleClickButton}
      className='primary-invert'
      label='Previous' />
  );
}

function FinishButton({ isLastQuestion, handleClickButton }: IFinishButton) {
  if (isLastQuestion) {
    return (
      <Button
        onClick={handleClickButton}
        className='secondary'
        label='Finish' />
    );
  }

  return null;
}

function SkipOrNextButton({ isLastQuestion, displayButtonLabel, handleClickButton }: ISkipOrNextButton) {
  if (isLastQuestion) {
    return null;
  }

  return (
    <Button
      onClick={handleClickButton}
      className='primary'
      label={displayButtonLabel()}
    />
  );
}

function QuestionButtonContainer({ manager, selectedIds, setSelectedIds }: IQuestionButtonContainer) {
  const navigate = useNavigate();

  const hasSelectedIds = selectedIds.length > 0;
  const lastQuestionIndex = manager.getConfig().questions.length - 1;
  const isLastQuestion = manager.getCurrentQuestionIndex() === lastQuestionIndex;

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

  const handlePreviousClickButton = () => {
    manager.goToPreviousQuestion();
    setSelectedIds([]);
  };

  const handleFinishClickButton = () => {
    manager.checkAnswer(selectedIds);
    navigate('/result');
  };

  const displayButtonLabel = () => {
    return hasSelectedIds
            ? 'Next question'
            : 'Skip question';
  };

  return (
    <Container>
      <PreviousButton
        currentQuestionIndex={manager.getCurrentQuestionIndex()}
        handleClickButton={handlePreviousClickButton}
      />
      <FinishButton
        isLastQuestion={isLastQuestion}
        handleClickButton={handleFinishClickButton}
      />
      <SkipOrNextButton
        isLastQuestion={isLastQuestion}
        displayButtonLabel={displayButtonLabel}
        handleClickButton={handleClickButton}
      />
    </Container>
  );
};

export { QuestionButtonContainer };
