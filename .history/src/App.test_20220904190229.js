import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.get(/learn reac/i);
  expect(linkElement).toBeInTheDocument();
});
describe('App')
