import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { QuestionButtonContainer } from '@components/Question/Button';
import { QuizManager } from 'quizland-core/lib/quiz-manager';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

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

describe('QuestionButtonContainer', () => {
  let mockManager: QuizManager;
  let setSelectedIds: jest.Mock;

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    mockManager = {
      checkAnswer: jest.fn(),
      goToNextQuestion: jest.fn(),
      goToPreviousQuestion: jest.fn(),
      getCurrentQuestionIndex: jest.fn().mockReturnValue(0),
      getConfig: jest.fn().mockReturnValue({ questions: [1, 2] })
    } as unknown as QuizManager;
    setSelectedIds = jest.fn();
  });

  it('should render the component', () => {
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.getByText('Skip question')).toBeInTheDocument();
  });

  it('should display "Next question" when there are selectedIds', () => {
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[1]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.getByText('Next question')).toBeInTheDocument();
  });

  it('should not display "Skip question" when there are selectedIds', () => {
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[1]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.queryByText('Skip question')).not.toBeInTheDocument();
  });

  it('should call handleNextQuestion when "Next question" button is clicked', () => {
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[1]} setSelectedIds={setSelectedIds} />
    );
    fireEvent.click(screen.getByText('Next question'));
    expect(mockManager.checkAnswer).toHaveBeenCalledWith([1]);
    expect(mockManager.goToNextQuestion).toHaveBeenCalled();
    expect(setSelectedIds).toHaveBeenCalledWith([]);
  });

  it('should call handleSkipQuestion when "Skip question" button is clicked', () => {
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    fireEvent.click(screen.getByText('Skip question'));
    expect(mockManager.goToNextQuestion).toHaveBeenCalled();
    expect(setSelectedIds).toHaveBeenCalledWith([]);
  });

  it('should not render "Previous" button when first questiom', () => {
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
  });

  it('should render "Previous" button when not first question', () => {
    mockManager.getCurrentQuestionIndex = jest.fn().mockReturnValue(1);
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.getByText('Previous')).toBeInTheDocument();
  });

  it('should render "Previous" button when last question', () => {
    mockManager.getCurrentQuestionIndex = jest.fn().mockReturnValue(2);
    mockManager.getConfig = jest.fn().mockReturnValue({ questions: [1, 2, 3] });

    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.getByText('Previous')).toBeInTheDocument();
  });

  it('should call handlePreviousClickButton when "Previous" button is clicked', () => {
    mockManager.getCurrentQuestionIndex = jest.fn().mockReturnValue(1);
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    fireEvent.click(screen.getByText('Previous'));
    expect(mockManager.goToPreviousQuestion).toHaveBeenCalled();
    expect(setSelectedIds).toHaveBeenCalledWith([]);
  });

  it('should not display "Skip question" when last question', () => {
    mockManager.getCurrentQuestionIndex = jest.fn().mockReturnValue(1);
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.queryByText('Skip question')).not.toBeInTheDocument();
  });

  it('should not display "Next question" when last question', () => {
    mockManager.getCurrentQuestionIndex = jest.fn().mockReturnValue(1);
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.queryByText('Next question')).not.toBeInTheDocument();
  });

  it('should render "Finish" button when last question', () => {
    mockManager.getCurrentQuestionIndex = jest.fn().mockReturnValue(2);
    mockManager.getConfig = jest.fn().mockReturnValue({ questions: [1, 2, 3] });
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[1]} setSelectedIds={setSelectedIds} />
    );
    expect(screen.getByText('Finish')).toBeInTheDocument();
  });

  it('should navigate to "/result" when "Finish" button is clicked', () => {
    const navigate = useNavigate();
    mockManager.getCurrentQuestionIndex = jest.fn().mockReturnValue(2);
    mockManager.getConfig = jest.fn().mockReturnValue({ questions: [1, 2, 3] });
    mockManager.checkAnswer = jest.fn();
    
    renderWithTheme(
      <QuestionButtonContainer manager={mockManager} selectedIds={[1]} setSelectedIds={setSelectedIds} />
    );

    const finishButton = screen.getByText('Finish');
    fireEvent.click(finishButton);

    expect(mockManager.checkAnswer).toHaveBeenCalledWith([1]);
    expect(navigate).toHaveBeenCalledWith('/result');
  });
});
