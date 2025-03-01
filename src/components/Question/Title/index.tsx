import styled from 'styled-components';

interface IQuestionTitle {
  questionNumber: number;
  title: string;
};

const QuestionNumber = styled.span`
  font-weight: 600;
  margin-top: 12px
`;

const QuestionTitle = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
  margin-top: 12px
`;

function Title({ questionNumber, title }: IQuestionTitle) {
  return (
    <>
      <QuestionNumber>Question #{questionNumber}:</QuestionNumber>
      <QuestionTitle>{title}</QuestionTitle>
    </>
  );
};

export { Title };
