import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { MAX_PROGRESS, ProgressBar } from '@ui/ProgressBar';

const theme = {
  colors: {
    progressBarBg: '#f3f3f3',
    progressBarBoxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    progressBarTimerBg: '#e0e0e0',
    secondaryColor: '#4caf50',
  },
};

const renderWithTheme = (children: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme as DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};

describe('ProgressBar', () => {
  it('should render the component', () => {
    const counter = { currentCounter: 1, totalCounter: 10 };
    renderWithTheme(<ProgressBar counter={counter} />);
    expect(screen.getByText('1/10')).toBeInTheDocument();
  });

  it('should calculate the progress correctly when 10%', () => {
    const counter = { currentCounter: 1, totalCounter: 10 };
    renderWithTheme(<ProgressBar counter={counter} />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveAttribute('progress', '10'); // Verifica se a propriedade progress é 50
  });

  it('should calculate the progress correctly when 30%', () => {
    const counter = { currentCounter: 3, totalCounter: 10 };
    renderWithTheme(<ProgressBar counter={counter} />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveAttribute('progress', '30'); // Verifica se a propriedade progress é 50
  });

  it('should calculate the progress correctly when 50%', () => {
    const counter = { currentCounter: 5, totalCounter: 10 };
    renderWithTheme(<ProgressBar counter={counter} />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveAttribute('progress', '50'); // Verifica se a propriedade progress é 50
  });

  it('should calculate the progress correctly when 90%', () => {
    const counter = { currentCounter: 9, totalCounter: 10 };
    renderWithTheme(<ProgressBar counter={counter} />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveAttribute('progress', '90'); // Verifica se a propriedade progress é 50
  });

  it('should limit the progress to MAX_PROGRESS when last question', () => {
    const counter = { currentCounter: 10, totalCounter: 10 };
    renderWithTheme(<ProgressBar counter={counter} />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveAttribute('progress', String(MAX_PROGRESS));
  });

  it('should render the timer when provided', () => {
    const counter = { currentCounter: 1, totalCounter: 10 };
    const timer = '00:30';
    renderWithTheme(<ProgressBar counter={counter} timer={timer} />);
    expect(screen.getByText(timer)).toBeInTheDocument();
  });
});
