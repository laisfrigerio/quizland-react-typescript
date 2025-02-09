import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { QuizManager } from 'quizland-core/lib/quiz-manager';

import { useQuiz } from '@context/QuizManagement';
import { Button } from '@ui/Button';

const ResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.themeText};
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

const ResultDetails = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
`;

const ResultItem = styled.p`
  margin: 8px 0;
`;

function QuizResultScreen() {
  const { manager } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!manager) {
      navigate('/');
    }
  }, [manager, navigate]);
  
  if (!manager) {
    return null;
  }

  const quizTitle = manager.getConfig().title;
  const totalQuestions = manager.getConfig().questions.length; 
  const correctAnswers = manager.getScore();
  const incorrectAnswers = totalQuestions - correctAnswers;

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <ResultContainer>
      <Title>Resultado do Quiz</Title>
      <ResultDetails>
        <ResultItem><strong>Questionário:</strong> {quizTitle}</ResultItem>
        <ResultItem><strong>Total de Perguntas:</strong> {totalQuestions}</ResultItem>
        <ResultItem><strong>Acertos:</strong> {correctAnswers}</ResultItem>
        <ResultItem><strong>Erros:</strong> {incorrectAnswers}</ResultItem>
      </ResultDetails>
      <Button
        label="Iniciar Novo Quiz"
        className="secondary"
        onClick={handleStartQuiz}
      />
    </ResultContainer>
  );
}

export { QuizResultScreen };
