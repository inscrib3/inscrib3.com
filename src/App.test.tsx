import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { applyLanguage, detectSiteLanguage } from './localization';

test('detects Chinese from the browser language and defaults to English', () => {
  expect(detectSiteLanguage(['zh-CN', 'en-US'])).toBe('zh-CN');
  expect(detectSiteLanguage(['zh-TW'])).toBe('zh-CN');
  expect(detectSiteLanguage(['en-US', 'zh-CN'])).toBe('en');
  expect(detectSiteLanguage([])).toBe('en');
});

test('applies the Chinese translation to content and accessibility labels', () => {
  const container = document.createElement('div');
  container.innerHTML = '<h1>Making Bitcoin</h1><a aria-label="Open navigation">Open web wallet</a>';
  applyLanguage(container, 'zh-CN');

  expect(container).toHaveTextContent('让比特币');
  expect(container).toHaveTextContent('打开网页钱包');
  expect(container.querySelector('a')).toHaveAttribute('aria-label', '打开导航');
});

test('renders the wallet, Mutinynet App, docs, and open-source projects', () => {
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
  expect(screen.getAllByRole('link', { name: /mutinynet app/i })[0]).toHaveAttribute(
    'href',
    'https://app.mutinynet.inscrib3.com',
  );
  expect(screen.getByRole('heading', { name: /native liquidity.*built on bitcoin/i })).toBeInTheDocument();
  expect(screen.getAllByText(/bitcoin-native launchpad/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/mutinynet points will migrate to mainnet/i)).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { name: /^inscrib3 wallet$/i }).length).toBeGreaterThan(0);
  expect(screen.getAllByRole('heading', { name: /^inscrib3 app$/i }).length).toBeGreaterThan(0);
  expect(screen.getByRole('link', { name: /^app\.mutinynet\.inscrib3\.com$/i })).toHaveAttribute(
    'href',
    'https://github.com/inscrib3/app.mutinynet.inscrib3.com',
  );
  expect(screen.queryByRole('link', { name: /arkade-api/i })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /our next chapter stands on years of work/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /pipe indexer/i })).toHaveAttribute(
    'href',
    'https://github.com/inscrib3/pipe-indexer',
  );
  expect(screen.getAllByRole('link', { name: /discord/i })[0]).toHaveAttribute('href', 'https://discord.gg/dZ7GSFb2ST');
  expect(screen.getAllByRole('link', { name: /x \/ twitter/i })[0]).toHaveAttribute('href', 'https://x.com/inscrib3');
  expect(screen.getAllByRole('link', { name: /^github/i })[0]).toHaveAttribute('href', 'https://github.com/inscrib3');
});
