import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled, { useTheme} from 'styled-components';

import { AccordionList } from '@components/Result/Accordion';
import { useQuiz } from '@context/QuizManagement';
import { Button } from '@ui/Button';
import { Question } from 'quizland-core';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.themeText};
  max-width: 768px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

const ChartContainer = styled.div`
  width: 100%;
  max-width: 768px; 
  margin: 30px auto;
  height: 250px;
`;

function QuizResultScreen() {
  const { manager } = useQuiz();
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!manager) {
      navigate('/');
    }
  }, [manager, navigate]);
  
  if (!manager) {
    return null;
  }

  const totalQuestions = manager.getConfig().questions.length; 
  const correctAnswers = manager.getScore();
  const incorrectAnswers = totalQuestions - correctAnswers;

  const data = {
    labels: ['Acertos', 'Erros'],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        borderWidth: 0,
        backgroundColor: [
          theme.colors.secondaryColor,
          '#ec8e97',
        ]
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  function transformQuestionsToIndexedObject(questions: Question[]) {
    return questions.reduce((acc: { [key: string]: Question }, question) => {
      acc[question.id] = question;
      return acc;
    }, {});
  }

  const answerStateQuestionIds = Array.from(manager.getAnswerState().keys());
  const indexedQuestions = transformQuestionsToIndexedObject(manager.getConfig().questions);

  console.log('AnswerStatse', answerStateQuestionIds);

  return (
    <ResultContainer>
      <Title>Resultado</Title>
      <ChartContainer>
        <Doughnut data={data} options={options} />
      </ChartContainer>

      <AccordionList
        manager={manager}
      />

      <Button
        label="Iniciar Novo Quiz"
        className="secondary"
        onClick={handleStartQuiz}
      />
    </ResultContainer>
  );
}

export { QuizResultScreen };
