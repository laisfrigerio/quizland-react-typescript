import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Answers } from '@components/Question/Answers';
import { AnswerState, Question } from 'quizland-core';

const theme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
};

const renderWithTheme = (children: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme as DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};

describe('Answers', () => {
  let answerState: Map<string, AnswerState>;
  let currentQuestion: Question;
  let options: any[];
  let selectedIds: number[];
  let setSelectedIds: jest.Mock;

  beforeEach(() => {
    answerState = new Map();
    options = [
      { id: 1, content: 'Option 1' },
      { id: 2, content: 'Option 2' },
    ];
    currentQuestion = { 
      id: '1', 
      content: 'Sample Question', 
      options: [],
      correctAnswerIds: [2],
      hasToShowAnswerDetails: false,
      typeAnswer: 'one-correct',
    } as Question;
    selectedIds = [];
    setSelectedIds = jest.fn();
  });

  it('should render the component', () => {
    renderWithTheme(
      <Answers
        answerState={answerState}
        currentQuestion={currentQuestion}
        options={options}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    );
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('should call setSelectedIds with the correct value when an option is selected', () => {
    renderWithTheme(
      <Answers
        answerState={answerState}
        currentQuestion={currentQuestion}
        options={options}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    );
    fireEvent.click(screen.getByLabelText('Option 1'));
    expect(setSelectedIds).toHaveBeenCalledWith([1]);
  });

  it('should mark the correct option as selected', () => {
    selectedIds = [1];
    renderWithTheme(
      <Answers
        answerState={answerState}
        currentQuestion={currentQuestion}
        options={options}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    );
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
  });

  it('should mark the correct option as selected based on answerState', () => {
    answerState.set(currentQuestion.id, { selectedIds: [2] } as AnswerState);
    renderWithTheme(
      <Answers
        answerState={answerState}
        currentQuestion={currentQuestion}
        options={options}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    );
    expect(screen.getByLabelText('Option 1')).not.toBeChecked();
    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });
});
