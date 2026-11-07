import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Inscrib3 positioning and prioritizes the Chrome extension', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /making bitcoin programmable/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /add to chrome/i })[0]).toHaveAttribute(
    'href',
    'https://chromewebstore.google.com/detail/inscrib3/hafphignbjdmblopkophkohgnphalclg',
  );
  expect(screen.getByRole('link', { name: /open the inscrib3 web wallet/i })).toHaveAttribute('href', 'https://wallet.inscrib3.com');
  expect(screen.getAllByRole('link', { name: /^docs$/i })[0]).toHaveAttribute(
    'href',
    'https://docs.inscrib3.com',
  );
  expect(screen.getByRole('link', { name: /docs\.inscrib3\.com/i })).toHaveAttribute(
    'href',
    'https://docs.inscrib3.com',
  );
  expect(screen.getByRole('heading', { name: /our next chapter stands on years of work/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /pipe indexer/i })).toHaveAttribute(
    'href',
    'https://github.com/inscrib3/pipe-indexer',
  );
});
