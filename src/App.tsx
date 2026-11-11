import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import logo from './logo.png';
import { journey, navigation, principles, roadmap } from './siteData';

const ProgrammableScene = lazy(() => import('./ProgrammableScene'));

const WALLET_URL = 'https://wallet.inscrib3.com';
const EXTENSION_URL = 'https://chromewebstore.google.com/detail/inscrib3/hafphignbjdmblopkophkohgnphalclg';
const WALLET_REPOSITORY = 'https://github.com/inscrib3/arkade-wallet';
const GITHUB_URL = 'https://github.com/inscrib3';
const DOCS_URL = 'https://docs.inscrib3.com';
const APP_URL = 'https://app.mutinynet.inscrib3.com';
const APP_REPOSITORY = 'https://github.com/inscrib3/app.mutinynet.inscrib3.com';
const API_REPOSITORY = 'https://github.com/inscrib3/arkade-api';

const openSourceProjects = [
  ['arkade-wallet', WALLET_REPOSITORY],
  ['app.mutinynet.inscrib3.com', APP_REPOSITORY],
  ['arkade-api / contracts', API_REPOSITORY],
  ['inscrib3.com', 'https://github.com/inscrib3/inscrib3.com'],
  ['docs.inscrib3.com', 'https://github.com/inscrib3/docs.inscrib3.com'],
];

class SceneErrorBoundary extends React.Component<React.PropsWithChildren, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function ExtensionIcon() {
  return (
    <svg className="extension-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3.5h6v3h3.5V12h-3v2.5H12V18H6.5V9H9V3.5Z" />
      <path d="M4 8.5h2.5V18H16v2.5H4V8.5Z" />
    </svg>
  );
}

function Reveal({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && element.classList.add('is-visible'),
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Inscrib3 home">
      <img src={logo} alt="" />
      <span>INSCRIB3</span>
    </a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Brand />
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.href}
              className={
                item.label === 'Docs'
                  ? 'docs-nav-link'
                  : item.label === 'Mutinynet App'
                    ? 'app-nav-link'
                  : item.label === 'Web wallet'
                    ? 'wallet-nav-link'
                    : undefined
              }
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-mobile-cta" href={EXTENSION_URL} target="_blank" rel="noreferrer">
            <span><ExtensionIcon /> Add to Chrome</span> <Arrow diagonal />
          </a>
        </div>
        <a className="nav-cta" href={EXTENSION_URL} target="_blank" rel="noreferrer">
          <ExtensionIcon /> Add to Chrome <Arrow diagonal />
        </a>
        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

function SceneLayer() {
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.toLowerCase().includes('jsdom')) return;
    try {
      const canvas = document.createElement('canvas');
      setWebgl(Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl')));
    } catch {
      setWebgl(false);
    }
  }, []);

  return (
    <div className="scene-layer">
      <div className="scene-fallback" />
      {webgl && (
        <SceneErrorBoundary>
          <Suspense fallback={null}>
            <ProgrammableScene />
          </Suspense>
        </SceneErrorBoundary>
      )}
    </div>
  );
}

function SectionLabel({ number, children }: React.PropsWithChildren<{ number: string }>) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="section-inner hero-content">
        <a className="hero-release" href={APP_URL} target="_blank" rel="noreferrer"><i /> NEW RELEASE · INSCRIB3 APP IS LIVE ON MUTINYNET <Arrow diagonal /></a>
        <p className="eyebrow">INSCRIB3 / OPEN-SOURCE BITCOIN PRODUCTS</p>
        <h1>
          Making Bitcoin
          <span>Programmable.</span>
        </h1>
        <p className="hero-copy">
          Use the self-custodial wallet, then explore native swaps, permissionless pools, liquidity, price charts,
          and portable rewards in the new Mutinynet App.
        </p>
        <div className="hero-actions">
          <a className="button button-primary button-extension" href={EXTENSION_URL} target="_blank" rel="noreferrer">
            <ExtensionIcon /> Get the Chrome extension <Arrow diagonal />
          </a>
          <a className="button button-secondary" href={WALLET_URL} target="_blank" rel="noreferrer">
            Open web wallet <Arrow diagonal />
          </a>
        </div>
        <a className="hero-explore" href={APP_URL} target="_blank" rel="noreferrer">Launch the Mutinynet App <Arrow diagonal /></a>
        <p className="hero-trust"><i /> Wallet <span>·</span> Native liquidity <span>·</span> Open source <span>·</span> Built with Arkade</p>
      </div>
      <a className="scroll-cue" href="#vision">
        <span>Scroll to explore</span>
        <i aria-hidden="true" />
      </a>
      <div className="hero-index" aria-hidden="true">
        <span>UTXO / 001</span>
        <span>ARKADE / ACTIVE</span>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="content-section vision" id="vision">
      <div className="section-inner">
        <SectionLabel number="01">The vision</SectionLabel>
        <Reveal className="editorial-grid">
          <h2>Bitcoin has more to offer.</h2>
          <div className="editorial-copy">
            <p>
              Bitcoin's output architecture provides a powerful foundation for innovation. But powerful protocols
              alone are not enough.
            </p>
            <p>
              We turn unexplored possibilities into products people can actually use. Less abstraction. More
              utility.
            </p>
          </div>
        </Reveal>
        <Reveal className="signal-strip">
          {['Outputs', 'Logic', 'Products', 'Utility'].map((item, index) => (
            <React.Fragment key={item}>
              <div className="signal-item">
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
              {index < 3 && <div className="signal-line"><i /></div>}
            </React.Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="content-section journey-section" id="journey">
      <div className="section-inner">
        <SectionLabel number="02">Our UTXO journey</SectionLabel>
        <Reveal className="journey-intro">
          <div>
            <p className="overline">Built through experimentation</p>
            <h2>Our next chapter stands on years of work.</h2>
          </div>
          <div>
            <p>
              Before Arkade, Inscrib3 explored the frontier of UTXO-based protocols through wallets, indexers,
              developer tooling, and real applications.
            </p>
            <p>
              That history is not being replaced. It is the foundation for what we build next.
            </p>
          </div>
        </Reveal>

        <div className="journey-ledger">
          <div className="journey-spine" aria-hidden="true"><i /></div>
          {journey.map((chapter, index) => (
            <Reveal className={`journey-chapter ${chapter.active ? 'is-active' : ''}`} key={chapter.year}>
              <div className="journey-year">
                <i />
                <span>{chapter.year}</span>
              </div>
              <div className="journey-card">
                <span className="journey-phase">{chapter.phase}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <div className="journey-projects">
                  {chapter.projects.map((project) => (
                    <a key={project.href} href={project.href} target="_blank" rel="noreferrer">
                      {project.label} <Arrow diagonal />
                    </a>
                  ))}
                </div>
                <span className="journey-index">0{index + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="journey-summary">
          {[
            ['Wallets', 'Interfaces for emerging Bitcoin protocols'],
            ['Indexers', 'Open infrastructure for protocol data'],
            ['Tooling', 'SDKs and libraries for developers'],
            ['Products', 'Turning experiments into utility'],
          ].map(([title, description]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{description}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Arkade() {
  return (
    <section className="content-section arkade-section">
      <div className="section-inner">
        <SectionLabel number="03">Built with Arkade</SectionLabel>
        <Reveal className="arkade-heading">
          <h2>A new foundation for what's next.</h2>
          <div>
            <p>
              Inscrib3 is moving new product development to Arkade—an open execution environment for programmable
              Bitcoin applications.
            </p>
            <p>
              Arkade is developed independently by Ark Labs. We use it to build products; we did not create the
              protocol.
            </p>
            <a className="text-link" href="https://arkadeos.com" target="_blank" rel="noreferrer">
              Explore Arkade <Arrow diagonal />
            </a>
          </div>
        </Reveal>
        <Reveal className="architecture" aria-label="Bitcoin to utility architecture">
          {[
            ['Foundation', 'Bitcoin'],
            ['Execution', 'Arkade'],
            ['Application', 'Inscrib3 products'],
            ['Outcome', 'Real-world utility'],
          ].map(([label, title], index) => (
            <React.Fragment key={title}>
              <div className={`architecture-node architecture-node-${index + 1}`}>
                <span>{label}</span>
                <strong>{title}</strong>
              </div>
              {index < 3 && <div className="architecture-link"><span /></div>}
            </React.Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function WalletShowcase() {
  return (
    <section className="content-section product-section" id="products">
      <div className="section-inner">
        <SectionLabel number="04">First product</SectionLabel>
        <Reveal className="product-intro">
          <div>
            <p className="overline">Meet the first building block</p>
            <h2>Inscrib3 Wallet</h2>
          </div>
          <div className="product-copy">
            <h3>Your gateway to programmable Bitcoin.</h3>
            <p>
              Our open-source wallet for Bitcoin-native experiences. Install the extension for one-click access from
              any tab, or open the web wallet instantly with no installation.
            </p>
            <p className="experimental-note">Experimental software. Review the project documentation before use.</p>
            <div className="product-actions">
              <a className="button button-primary button-extension" href={EXTENSION_URL} target="_blank" rel="noreferrer">
                <ExtensionIcon /> Install for Chrome <Arrow diagonal />
              </a>
              <a className="button button-secondary" href={WALLET_URL} target="_blank" rel="noreferrer">
                Open web wallet <Arrow diagonal />
              </a>
            </div>
            <a className="pwa-alternative" href={WALLET_REPOSITORY} target="_blank" rel="noreferrer">
              Open source from day one — review the wallet code <Arrow diagonal />
            </a>
          </div>
        </Reveal>

        <Reveal className="wallet-stage">
          <div className="wallet-orbit wallet-orbit-one" />
          <div className="wallet-orbit wallet-orbit-two" />
          <div className="browser-device">
            <div className="browser-bar">
              <div><i /><i /><i /></div>
              <span>wallet.inscrib3.com</span>
              <span>↗</span>
            </div>
            <iframe src={WALLET_URL} title="Live Inscrib3 Wallet preview" loading="lazy" tabIndex={-1} />
            <a href={WALLET_URL} target="_blank" rel="noreferrer" aria-label="Open the Inscrib3 web wallet" />
          </div>
          <div className="extension-device">
            <div className="extension-top">
              <img src={logo} alt="" />
              <span>Browser extension</span>
            </div>
            <iframe src={WALLET_URL} title="Inscrib3 browser extension interface preview" loading="lazy" tabIndex={-1} />
            <a href={EXTENSION_URL} target="_blank" rel="noreferrer" aria-label="Install the Inscrib3 Chrome extension" />
          </div>
          <div className="extension-callout"><span>Recommended</span><strong>Install once.<br />Use from any tab.</strong></div>
          <div className="product-badge product-badge-one"><span>02</span> WEB APP</div>
          <div className="product-badge product-badge-two"><span>01</span> CHROME EXTENSION</div>
        </Reveal>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="content-section principles-section">
      <div className="section-inner">
        <SectionLabel number="06">Why we build</SectionLabel>
        <Reveal className="principles-heading">
          <h2>Protocols are possibilities.<br />Products create utility.</h2>
        </Reveal>
        <div className="principles-grid">
          {principles.map((principle) => (
            <Reveal className="principle-card" key={principle.title}>
              <div className={`principle-object principle-object-${principle.shape}`} aria-hidden="true">
                <i /><i /><i />
              </div>
              <div className="principle-number">{principle.number}</div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppRelease() {
  return (
    <section className="content-section app-release-section" id="app">
      <div className="section-inner">
        <SectionLabel number="05">Now live on Mutinynet</SectionLabel>
        <Reveal className="app-release-card">
          <div className="app-release-copy">
            <p className="overline">INSCRIB3 APP / PUBLIC TEST RELEASE</p>
            <h2>Native liquidity.<br /><span>Built on Bitcoin.</span></h2>
            <p>
              Swap native BTC and Arkade assets, create permissionless pools, provide liquidity, inspect price
              history, and earn portable points—without wrapped Bitcoin or a custodial deposit account.
            </p>
            <div className="app-release-actions">
              <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">Launch Mutinynet App <Arrow diagonal /></a>
              <a className="button button-secondary" href={`${DOCS_URL}/app/overview`} target="_blank" rel="noreferrer">Read the App docs <Arrow diagonal /></a>
            </div>
            <p className="app-network-note"><i /> MUTINYNET · EXPERIMENTAL · USE TEST FUNDS ONLY</p>
          </div>
          <div className="app-feature-grid">
            {[
              ['01', 'Native swaps', 'BTC / asset and asset / asset routes with exact integer arithmetic.'],
              ['02', 'Pools & charts', 'Permissionless liquidity with reserve history from 1 minute to 30 days.'],
              ['03', 'Portable points', '10 points per opened pool; settled swaps scale with protocol fee sats.'],
              ['04', 'Live leaderboard', 'Personal rank, score breakdown, wallet activity, and Top 5 players.'],
            ].map(([number, title, description]) => <div key={number}><span>{number}</span><strong>{title}</strong><p>{description}</p></div>)}
          </div>
        </Reveal>
        <Reveal className="migration-strip">
          <div><span>POINTS PORTABILITY</span><strong>Mutinynet points will migrate to Mainnet.</strong></div>
          <p>Rewards are bound to the wallet's stable Taproot identity—not the network-specific address prefix. Keep the same wallet recovery identity to retain attribution.</p>
          <a href={`${DOCS_URL}/app/points`} target="_blank" rel="noreferrer">How migration works <Arrow diagonal /></a>
        </Reveal>
      </div>
    </section>
  );
}

function DeveloperCta() {
  return (
    <section className="developer-section" id="developers">
      <div className="section-inner">
        <Reveal className="developer-card">
          <div className="developer-signal" aria-hidden="true"><i /><i /><i /></div>
          <div className="developer-copy">
            <p className="overline">For developers / Third-party integration</p>
            <h2>Build with Inscrib3.</h2>
            <p>
              Integrate programmable Bitcoin experiences into your product. Start with the technical documentation,
              implementation guides, and open-source wallet code.
            </p>
          </div>
          <div className="developer-actions">
            <a className="button button-primary" href={DOCS_URL} target="_blank" rel="noreferrer">
              Read integration docs <Arrow diagonal />
            </a>
            <a className="button button-secondary" href={WALLET_REPOSITORY} target="_blank" rel="noreferrer">
              Explore the code <Arrow diagonal />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="content-section roadmap-section" id="roadmap">
      <div className="section-inner">
        <SectionLabel number="07">Product roadmap</SectionLabel>
        <Reveal className="roadmap-intro">
          <h2>We're only getting started.</h2>
          <p>
            One product is the beginning. Each release moves us closer to making programmable Bitcoin useful.
          </p>
        </Reveal>
        <div className="roadmap-system">
          <div className="roadmap-track" aria-hidden="true"><span /></div>
          {roadmap.map((item, index) => (
            <Reveal className={`roadmap-node ${item.active ? 'is-active' : ''}`} key={item.status}>
              <div className="roadmap-marker"><i />0{index + 1}</div>
              <span className="roadmap-status">{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className="content-section open-section" id="open-source">
      <div className="section-inner open-layout">
        <div>
          <SectionLabel number="08">Open source</SectionLabel>
          <Reveal>
            <h2>Built in the open.</h2>
            <p>
              The wallet, App frontend, coordinator, contracts, website, and documentation are public. Verify how
              requests, fees, points, approvals, and deployments work—or help improve them.
            </p>
            <a className="button button-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              Explore our GitHub <Arrow diagonal />
            </a>
          </Reveal>
        </div>
        <Reveal className="code-window" aria-label="Inscrib3 open source repositories">
           <div className="code-window-top">
             <span>INSCRIB3 / PUBLIC</span>
             <i /><i /><i />
           </div>
           {openSourceProjects.map(([name, href], index) => <div className="code-line" key={name}><span>0{index + 1}</span><strong><a href={href} target="_blank" rel="noreferrer">{name}</a></strong><em>public</em></div>)}
           <a href="https://github.com/inscrib3" target="_blank" rel="noreferrer">
             github.com/inscrib3 <Arrow diagonal />
           </a>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-section">
      <div className="final-halo" aria-hidden="true"><i /><i /><i /></div>
      <Reveal className="final-content">
        <p className="eyebrow">THE NEXT OUTPUT IS YOURS</p>
        <h2>The future of Bitcoin is something we build.</h2>
        <p>Install the Chrome extension or open the web wallet and put programmable Bitcoin one click away.</p>
        <div className="hero-actions">
          <a className="button button-primary button-extension" href={EXTENSION_URL} target="_blank" rel="noreferrer">
            <ExtensionIcon /> Add Inscrib3 to Chrome <Arrow diagonal />
          </a>
          <a className="button button-secondary" href={WALLET_URL} target="_blank" rel="noreferrer">
            Continue on the web <Arrow diagonal />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <Brand />
      <p>Making Bitcoin programmable.</p>
      <div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://x.com/inscrib3" target="_blank" rel="noreferrer">X</a>
        <a href="https://arkadeos.com" target="_blank" rel="noreferrer">Arkade</a>
        <a href={DOCS_URL} target="_blank" rel="noreferrer">Docs</a>
        <a href={WALLET_URL} target="_blank" rel="noreferrer">Web wallet</a>
        <a href={EXTENSION_URL} target="_blank" rel="noreferrer">Chrome extension</a>
      </div>
      <span>© {new Date().getFullYear()} INSCRIB3</span>
    </footer>
  );
}

function App() {
  return (
    <div className="site">
      <a className="skip-link" href="#vision">Skip to content</a>
      <SceneLayer />
      <Navigation />
      <main>
        <Hero />
        <Vision />
        <Journey />
        <Arkade />
        <WalletShowcase />
        <AppRelease />
        <DeveloperCta />
        <Principles />
        <Roadmap />
        <OpenSource />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
