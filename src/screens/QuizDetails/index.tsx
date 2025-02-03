import { useState } from 'react';
import { QuizLand, QuizConfigDTO } from 'quizland-core';

import { Quiz } from '@components/Quiz';
import { Question } from '@components/Question';

function QuizDetailsScreen() {
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
        "content": "Which of the following are the advantages of using the AWS Cloud? (Select TWO)",
        "options": [
          { "id": 1, "content": "Limited scaling" },
          { "id": 2, "content": "AWS is responsible for security in the cloud" },
          { "id": 3, "content": "Increase speed and agility"},
          { "id": 4, "content": "Trade operational expense for capital expense" },
          { "id": 5, "content": "Stop guessing about capacity"}
        ],
        "correctAnswerIds": [3,5]
      }
    ],
    "tryAgain": false,
    "showTimer": true,
    "showScore": false,
    "level": "easy"
  };

  const [manager, _] = useState(QuizLand(mockData));

  return (
    <Quiz>
      <Question manager={manager} />
    </Quiz>
  )
}

export { QuizDetailsScreen };
