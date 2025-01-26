import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { ToggleTheme } from '../../src/ui/ToggleTheme';

import 'jest-styled-components';

const theme = {
  colors: {
    themeText: '#000',
    svgIconBg: '#fff',
    svgIconFill: '#333',
  },
};

const renderWithTheme = (children: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme as DefaultTheme}>
      {children}
    </ThemeProvider>);
};

describe('ToggleTheme Component', () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    onChange: mockOnChange,
    id: 'theme-toggle',
    value: 'dark',
    checked: false,
    currentTheme: 'dark',
  };

  it('renders correctly with initial props when dark theme', () => {
    renderWithTheme(<ToggleTheme {...defaultProps} />);
    expect(screen.getByLabelText('Theme:')).toBeInTheDocument();
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('renders MoonIcon when currentTheme is light', () => {
    const customProps = {
      ...defaultProps,
      currentTheme: "light",
      value: "light"
    };
    renderWithTheme(<ToggleTheme {...customProps} />);
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  });

  it('calls onChange when toggle is clicked', () => {
    renderWithTheme(<ToggleTheme {...defaultProps} />);
    const checkbox = screen.getByTestId('test-toogle-theme-checkbox');
    
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('toggles the checkbox state on click', () => {
    const { rerender } = renderWithTheme(<ToggleTheme {...defaultProps} checked={false} />);
    const checkbox = screen.getByTestId('test-toogle-theme-checkbox');
    
    expect(checkbox).not.toBeChecked();

    rerender(
      <ThemeProvider theme={theme as DefaultTheme}>
        <ToggleTheme {...defaultProps} checked={true} />
      </ThemeProvider>);

    expect(checkbox).toBeChecked();
  });

  it('associates label with input via htmlFor', () => {
    renderWithTheme(<ToggleTheme {...defaultProps} />);
    const label = screen.getByText('Theme:');
    const checkbox = screen.getByTestId('test-toogle-theme-checkbox');

    expect(label).toHaveAttribute('for', 'theme-toggle');
    expect(checkbox).toHaveAttribute('id', 'theme-toggle');
  });
});
