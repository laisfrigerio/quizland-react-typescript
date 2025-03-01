import styled from 'styled-components';
import { QuizManager } from 'quizland-core/lib/quiz-manager';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IQuizManagementContext {
  manager: QuizManager | null;
  setManager: React.Dispatch<React.SetStateAction<QuizManager | null>>;
}

interface IQuizManagementProvider {
  children: ReactNode;
}

const ContextContainer = styled.div`
  margin-top: 80px;
`;

const QuizManagementContext = createContext<IQuizManagementContext | undefined>(undefined);

export const QuizManagementProvider = ({ children }: IQuizManagementProvider) => {
  const [manager, setManager] = useState<QuizManager | null>(null);

  return (
    <QuizManagementContext.Provider value={{ manager, setManager }}>
      <ContextContainer>
        {children}
      </ContextContainer>
    </QuizManagementContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizManagementContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizManagementProvider');
  }
  return context;
};
