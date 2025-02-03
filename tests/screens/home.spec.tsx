import { MemoryRouter, Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { createMemoryHistory } from 'history';

import { HomeScreen } from '@screens/Home';

import { themes } from '@styles/theme';

const renderWithTheme = (children: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={themes.light as DefaultTheme}>
        {children}
      </ThemeProvider>
    </MemoryRouter>
  );
};

describe('Home Screen', () => {
  it('should render the home screen elements', () => {
    renderWithTheme(<HomeScreen />);
    expect(screen.getByTestId('aws-icon')).toBeInTheDocument();
    expect(screen.getByText('Iniciar simulado')).toBeInTheDocument();
  });

  it('should go to /quiz page when the button is pressed', () => {
    const history = createMemoryHistory();
    
    render(
      <Router location={history.location} navigator={history}>
        <ThemeProvider theme={themes.light as DefaultTheme}>
          <HomeScreen />
        </ThemeProvider>
      </Router>
    );

    const startButton = screen.getByTestId('btn-quiz-start');
    fireEvent.click(startButton);
    expect(history.location.pathname).toBe('/quiz');
  });
});
