import styled from 'styled-components';

interface ICounter {
  currentCounter: number;
  totalCounter: number;
};

interface IProgressBar {
  counter: ICounter;
  timer?: string;
};

const ProgressBarContainer = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray150};
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  height: auto;
  padding: 8px;
  width: 100%;
`;

const TimerProgressContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray300};
  border-radius: 4px;
  height: 10px;
  width: 100%;
`;

function ProgressBar({ counter, timer }: IProgressBar) {
  return (
    <ProgressBarContainer>
      <div className='timer-counter'>{counter.currentCounter}/{counter.totalCounter}</div>
      <TimerProgressContainer />
      {timer && <div className='timer-timer'>
        <span className='timer-clock'></span>
        {timer}
      </div>}
    </ProgressBarContainer>
  );
};

export { ProgressBar };
