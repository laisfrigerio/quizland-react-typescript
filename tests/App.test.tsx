import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the title', () => {
  render(<App />);
  const title = screen.getByText(/Hello, React \+ TypeScript!/i);
  expect(title).toBeInTheDocument();
});
