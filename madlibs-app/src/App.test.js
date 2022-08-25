import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const inputForNoun= screen.getByPlaceholderText('noun');
  expect(inputForNoun).toBeInTheDocument();
});
