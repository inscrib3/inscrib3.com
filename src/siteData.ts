export const roadmap = [
  {
    status: 'Available now',
    title: 'Inscrib3 Wallet',
    description: 'Self-custodial Chrome extension and web wallet for Bitcoin and Arkade assets.',
    active: true,
  },
  {
    status: 'Live on Mutinynet',
    title: 'Inscrib3 App',
    description: 'Native swaps, permissionless pools, fixed-supply launches, price charts, portable points, and leaderboard.',
    active: true,
  },
  {
    status: 'Live on Mutinynet',
    title: 'Bitcoin-native launchpad',
    description: 'Wallet-issued fixed supply, BTC bonding curves, atomic graduation, and permanent canonical liquidity.',
    active: true,
  },
  {
    status: 'Next release',
    title: 'In development',
    description: 'The next product node will be revealed when it is ready.',
  },
];

export const principles = [
  {
    number: '01',
    title: 'Programmability',
    description: 'Expanding what can be built with Bitcoin transactions.',
    shape: 'logic',
  },
  {
    number: '02',
    title: 'Utility',
    description: 'Turning technical possibility into applications people can use.',
    shape: 'utility',
  },
  {
    number: '03',
    title: 'Open source',
    description: 'Building transparently so ideas can be tested and improved together.',
    shape: 'open',
  },
];

export const journey = [
  {
    year: '2023',
    phase: 'Protocol access',
    title: 'From protocols to interfaces.',
    description:
      'We started by making emerging UTXO protocols approachable through wallet experiences, including the Inspip browser extension for PIPE.',
    projects: [
      { label: 'Inspip wallet', href: 'https://github.com/inscrib3/inspip' },
    ],
  },
  {
    year: '2024',
    phase: 'Open infrastructure',
    title: 'Indexing the experimental edge.',
    description:
      'We built open-source infrastructure across PIPE, Flux, Ordinals, and Blok—turning protocol activity into data applications could use.',
    projects: [
      { label: 'PIPE indexer', href: 'https://github.com/inscrib3/pipe-indexer' },
      { label: 'Flux indexer', href: 'https://github.com/inscrib3/flux-indexer' },
      { label: 'BlokAI indexer', href: 'https://github.com/inscrib3/blokiai-indexer' },
    ],
  },
  {
    year: '2025',
    phase: 'Developer tooling',
    title: 'Making infrastructure composable.',
    description:
      'SDKs, React tooling, and reference implementations brought our Ordinals infrastructure closer to product teams and application developers.',
    projects: [
      { label: 'TypeScript SDK', href: 'https://github.com/inscrib3/sdk' },
      { label: 'React library', href: 'https://github.com/inscrib3/react' },
      { label: 'Reference app', href: 'https://github.com/inscrib3/example' },
    ],
  },
  {
    year: 'Now',
    phase: 'Arkade direction',
    title: 'Carrying the work forward.',
    description:
      'Everything we learned from wallets, indexers, and UTXO protocols now informs our next chapter: useful, open-source products built with Arkade.',
    projects: [
      { label: 'Arkade wallet', href: 'https://github.com/inscrib3/arkade-wallet' },
    ],
    active: true,
  },
];

export const navigation = [
  { label: 'Vision', href: '#vision' },
  { label: 'Journey', href: '#journey' },
  { label: 'Products', href: '#products' },
  { label: 'Mutinynet App', href: 'https://app.mutinynet.inscrib3.com' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Open source', href: '#open-source' },
  { label: 'Web wallet', href: 'https://wallet.inscrib3.com' },
  { label: 'Docs', href: 'https://docs.inscrib3.com' },
];
