import { render, screen } from '@testing-library/react';
import MaineApp from './App';


test('renders learn react link', () => {
  render(<MaineApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
