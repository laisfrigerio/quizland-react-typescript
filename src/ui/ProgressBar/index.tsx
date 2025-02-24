import styled from 'styled-components';

interface ICounter {
  currentCounter: number;
  totalCounter: number;
};

interface IProgressBar {
  counter: ICounter;
  timer?: string;
};

const MAX_PROGRESS = 99;

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

const TimerProgressContainer = styled.div<{ progress: number }>`
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
    width: ${({ progress }) => progress}%;
  }
`;

function ProgressBar({ counter, timer }: IProgressBar) {
  const progress = () => {
    if (counter.currentCounter === counter.totalCounter) {
      return MAX_PROGRESS;
    }
    return (counter.currentCounter / counter.totalCounter) * 100;
  };

  return (
    <ProgressBarContainer>
      <div className='timer-counter'>{counter.currentCounter}/{counter.totalCounter}</div>
      <TimerProgressContainer data-testid='progress-bar' progress={progress()} />
      {timer && <div className='timer-timer'>
        <span className='timer-clock'></span>
        {timer}
      </div>}
    </ProgressBarContainer>
  );
};

export { MAX_PROGRESS, ProgressBar };
