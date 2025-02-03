import styled from 'styled-components';

import { RadioButton } from '@ui/RadioButton';

interface IAnswers {
  options: any[];
  selectedIds: number[];
  setSelectedIds: Function;
}

const AnswersContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

function Answers ({ options, selectedIds, setSelectedIds }: IAnswers) {
  const handleRadioButtonSelect = (event: any) => {
    setSelectedIds([Number(event.target.value)])
  }

  return (
    <AnswersContainer>
      {options.map((option: any) => {
        return (
          <RadioButton 
            onChange={handleRadioButtonSelect}
            key={option.id}
            label={option.content}
            id={option.id}
            checked={selectedIds.includes(option.id)} 
          />
        )})}
    </AnswersContainer>
  );
}

export { Answers };
