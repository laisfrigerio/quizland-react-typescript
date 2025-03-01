import styled from 'styled-components';
import { AnswerState, Option, Question } from 'quizland-core';

interface IResultBadge {
  label: string;
  className?: string;
}

interface IOptionItem {
  option: Option;
  className: string;
  children: React.ReactNode;
}

interface IOptionList {
  answerState: AnswerState | undefined;
  answerQuestion: Question;
  options: Option[];
}

interface IOptionItemClassName {
  isCorrectAndSelected: boolean;
  isOptionIncorrect: boolean;
  isOptionCorrectNotSelected: boolean;
}

const ResultBadgeContainer = styled.span`
  color; #fff;
  width: fit-content;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;

  &.correct {
    background-color: ${({ theme }) => theme.colors.result.correctBadgeBg};
    color: ${({ theme }) => theme.colors.result.correctOptionText};
  }

  &.incorrect {
    background-color:  ${({ theme }) => theme.colors.result.incorrectBadgeBg};
    color: ${({ theme }) => theme.colors.result.incorrectBadgeText};
  }

  &.correct-not-selected {
    background-color: ${({ theme }) => theme.colors.result.correctNotSelectedBadgeBg};
    color: ${({ theme }) => theme.colors.result.correctNotSelectedBadgeText};
`;

const OptionLabelContainer = styled.span`
  margin-top: 6px;
`;

const OptionListContainer = styled.ul`
  list-style: none;
`;

const OptionItemContainer = styled.li`  
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding: 10px 16px;

  &.correct-green-bg {
    background-color: ${({ theme }) => theme.colors.result.correctOptionBg};
    border: 1px solid ${({ theme }) => theme.colors.result.correctOptionBorder};
  }

  &.incorrect-red-bg {
    background-color: ${({ theme }) => theme.colors.result.incorrectOptionBg};
    border: 1px solid ${({ theme }) => theme.colors.result.incorrectOptionBorder};
  }

  &.correct-not-selected-orange-bg {
    background-color: ${({ theme }) => theme.colors.result.correctNotSelectedOptionBg};
    border: 1px solid ${({ theme }) => theme.colors.result.correctNotSelectedOptionBorder};
    color: ${({ theme }) => theme.colors.result.correctNotSelectedOptionText};
  }

  &.option-answer {
    background: ${({ theme }) => theme.colors.result.defaultOptionBg};
    border: 1px solid ${({ theme }) => theme.colors.result.defaultOptionBorder};
  }
`;

function ResultBadge({ label, ...props }: IResultBadge) {
  return (
    <ResultBadgeContainer {...props}>
      {label}
    </ResultBadgeContainer>
  );
}

function OptionLabel({ label, ...props }: IResultBadge) {
  return (
    <OptionLabelContainer {...props}>
      {label}
    </OptionLabelContainer>
  );
}

function OptionItem({ option, children, ...props }: IOptionItem) {
  return (
    <OptionItemContainer key={option.id} {...props}>
      {children}
    </OptionItemContainer>
  );
}

function OptionList({ answerState, answerQuestion, options }: IOptionList) {
  const getOptionItemClassName = ({ isCorrectAndSelected, isOptionIncorrect, isOptionCorrectNotSelected }: IOptionItemClassName) => {
    if (isCorrectAndSelected) {
      return 'correct-green-bg';
    }

    if (isOptionIncorrect) {
      return 'incorrect-red-bg';
    }

    if (isOptionCorrectNotSelected) {
      return 'correct-not-selected-orange-bg';
    }

    return 'option-answer';
  };

  const getOptionProps = (option: Option) => {
    const isOptionSelected = answerState?.selectedIds.includes(option.id);
    const isOptionCorrect = answerQuestion.correctAnswerIds.includes(option.id);
    const isCorrectAndSelected = (answerState?.isCorrect && isOptionSelected) || false;
    const isOptionIncorrect = !answerState?.isCorrect && isOptionSelected  || false;
    const isOptionCorrectNotSelected = !answerState?.isCorrect && isOptionCorrect;

    const optionItemClassName = getOptionItemClassName({
      isCorrectAndSelected,
      isOptionIncorrect,
      isOptionCorrectNotSelected
    });

    return {
      isOptionSelected,
      isOptionCorrect,
      isCorrectAndSelected,
      isOptionIncorrect,
      isOptionCorrectNotSelected,
      optionItemClassName
    }
  }

  return (
    <OptionListContainer>
      {options.map((option: Option) => {
        const {
          isCorrectAndSelected,
          isOptionIncorrect,
          isOptionCorrectNotSelected,
          optionItemClassName
        } = getOptionProps(option);

        return (
          <OptionItem
            className={optionItemClassName}
            option={option}
          >
            {isCorrectAndSelected && (
              <ResultBadge className='correct' label='Correta' />
            )}

            {isOptionIncorrect && (
              <ResultBadge className='incorrect' label='Incorreta' />
            )}

            {isOptionCorrectNotSelected && (
              <ResultBadge className='correct-not-selected' label='Correta não selecionada' />
            )}

            <OptionLabel label={option.content} />
          </OptionItem>
        );
      })}
    </OptionListContainer>
  );
}

export {
  ResultBadge,
  OptionLabel,
  OptionList,
  OptionItem
};
