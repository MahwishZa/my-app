import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main UI elements', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /my to-do list/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/new task/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /clear completed/i })).toBeInTheDocument();
});
