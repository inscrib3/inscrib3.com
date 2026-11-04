import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Inscrib3 positioning and wallet link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /making bitcoin programmable/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /launch wallet/i })[0]).toHaveAttribute(
    'href',
    'https://wallet.inscrib3.com',
  );
  expect(screen.getByRole('heading', { name: /our next chapter stands on years of work/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /pipe indexer/i })).toHaveAttribute(
    'href',
    'https://github.com/inscrib3/pipe-indexer',
  );
});
