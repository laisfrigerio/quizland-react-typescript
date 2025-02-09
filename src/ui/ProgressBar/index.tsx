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
  background-color: ${({ theme }) => theme.colors.progressBarBg};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.colors.progressBarBoxShadow};
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  height: auto;
  margin-bottom: 24px;
  padding: 8px;
  width: 100%;
`;

const TimerProgressContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.progressBarTimerBg};
  border-radius: 8px;
  height: 10px;
  position: relative;
  width: 100%;

  &::after {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 8px;
    content: "";
    height: inherit;
    position: absolute;
    width: 60%;
  }
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
