import { useEffect, useState } from 'react';
import { QuizLand, QuizConfigDTO, QuizMode, QuizLevel } from 'quizland-core';

import { useQuiz } from '@context/QuizManagement';
import { Quiz } from '@components/Quiz';
import { Question } from '@components/Question';

import QuizData from '@data/quiz-1.json';

function QuizDetailsScreen() {
  const { manager, setManager } = useQuiz();

  const mockData: QuizConfigDTO = {
    ...QuizData,
    mode: QuizData.mode as QuizMode,
    level: QuizData.level as QuizLevel,
  };

  useEffect(() => {
    setManager(QuizLand(mockData));
  }, [setManager]);

  if (!manager) {
    return null;
  }

  return (
    <Quiz>
      <Question manager={manager} />
    </Quiz>
  )
}

export { QuizDetailsScreen };
