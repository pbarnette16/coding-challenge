import { render, screen } from '@testing-library/react';
import App from './App';

test('Displays the header logo', () => {
  const app = render(<App />);
  const logo = app.queryByAltText('Adslot');
  expect(logo).toBeInTheDocument();
});

test('Displays the Bookings Header', () => {
  const app = render(<App />);
  const logo = app.queryByText('Bookings');
  expect(logo).toBeInTheDocument();
});
