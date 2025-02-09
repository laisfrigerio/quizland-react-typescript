import { useEffect, useState } from 'react';
import { QuizLand, QuizConfigDTO } from 'quizland-core';

import { useQuiz } from '@context/QuizManagement';
import { Quiz } from '@components/Quiz';
import { Question } from '@components/Question';

function QuizDetailsScreen({ onNavigateToResult }: any) {
  const { manager, setManager } = useQuiz();

  const mockData: QuizConfigDTO = {
    "title": "General Knowledge Quiz",
    "category": "General",
    "mode": "training",
    "questions": [
      {
        "content": "Which AWS service would you choose for a data processing project that needs a schemaless database??",
        "options": [
          { "id": 1, "content": "Amazon Redshift" },
          { "id": 2, "content": "Amazon Aurora" },
          { "id": 3, "content": "Amazon RDS" },
          { "id": 4, "content": "Amazon DynamoDb" }
        ],
        "correctAnswerIds": [4]
      },
      {
        "content": "What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?",
        "options": [
          { "id": 1, "content": "Read Replica reduces database usage costs" },
          { "id": 2, "content": "Read Replica improves database scalability" },
          { "id": 3, "content": "Read Replica protects the database from a regional failure" },
          { "id": 4, "content": "Read Replica enhances database availability" }
        ],
        "correctAnswerIds": [2]
      },
      {
        "content": "A growing start-up has trouble identifying and protecting sensitive data at scale. Which AWS fully managed service can assist with this task?",
        "options": [
          { "id": 1, "content": "AWS Key Management Service (AWS KMS)" },
          { "id": 2, "content": "Amazon Macie " },
          { "id": 3, "content": "AWS Secrets Manager"},
          { "id": 4, "content": "AWS Artifact" },
        ],
        "correctAnswerIds": [2]
      }
    ],
    "tryAgain": false,
    "showTimer": true,
    "showScore": false,
    "level": "easy"
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
