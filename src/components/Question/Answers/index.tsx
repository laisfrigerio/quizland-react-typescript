import styled from 'styled-components';
import { AnswerState, Question } from 'quizland-core';

import { RadioButton } from '@ui/RadioButton';

interface IAnswers {
  answerState: Map<string, AnswerState>;
  currentQuestion: Question
  options: any[];
  selectedIds: number[];
  setSelectedIds: Function;
}

const AnswersContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

function Answers ({ answerState, currentQuestion, options, selectedIds, setSelectedIds }: IAnswers) {
  const handleRadioButtonSelect = (event: any) => {
    setSelectedIds([Number(event.target.value)])
  }

  const noOptionSelected = () => selectedIds.length === 0;

  const isOptionSelected = (optionId: number) => selectedIds.includes(optionId);

  const isAnswerStateOptionSelected = (currentQuestion: AnswerState, optionId: number) => {
    return currentQuestion?.selectedIds.includes(optionId);
  }

  const isAnswerChecked = (optionId: number) => {
    const answerForCurrentQuestion = answerState.get(currentQuestion.id);
    let isAnswerSelected = isOptionSelected(optionId);

    if (!answerForCurrentQuestion) {
      return isAnswerSelected;
    }

    if (noOptionSelected() && isAnswerStateOptionSelected(answerForCurrentQuestion, optionId)) {
      return true;
    }

    return isAnswerSelected;
  }

  return (
    <AnswersContainer>
      {options.map((option: any) => {
        return (
          <RadioButton 
            onChange={handleRadioButtonSelect}
            key={option.id}
            label={option.content}
            id={option.id}
            checked={isAnswerChecked(option.id)}
          />
        )})}
    </AnswersContainer>
  );
}

export { Answers };
