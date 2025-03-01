import styled from 'styled-components';
import { FaCheck, FaTimes } from 'react-icons/fa';

import { AnswerState, Question } from 'quizland-core';
import { QuizManager } from 'quizland-core/lib/quiz-manager';

import { OptionList } from '@components/Result/Option';
import { Accordion } from '@ui/Accordion';

interface IAccordionList {
  manager: QuizManager;
}

const QuestionLabelContainer = styled.p`
  margin-bottom: 16px;
`;

function AccordionList({ manager }: IAccordionList) {
  const transformQuestionsToIndexedObject = (questions: Question[]) => {
    return questions.reduce((acc: { [key: string]: Question }, question) => {
      acc[question.id] = question;
      return acc;
    }, {});
  }

  const answerStateQuestionIds = Array.from(manager.getAnswerState().keys());
  const indexedQuestions = transformQuestionsToIndexedObject(manager.getConfig().questions);

  return (
    <>
      {answerStateQuestionIds.map((questionId, index) => {
        const answerQuestion = indexedQuestions[questionId];

        const answerState: AnswerState | undefined = manager.getAnswerState().get(questionId);
        const { options } = answerQuestion;
        
        return (
          <Accordion
            key={questionId}
            title={`Pergunta ${index + 1}`}
            icon={answerState?.isCorrect ? <FaCheck color="green" /> : <FaTimes color="red" />}
          >
            <QuestionLabelContainer>{answerQuestion.content}</QuestionLabelContainer>
            <OptionList
              answerState={answerState}
              answerQuestion={answerQuestion}
              options={options}
            />
          </Accordion>
        )
      })}
    </>
  );
}

export { AccordionList };
