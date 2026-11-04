# Inscrib3

**Making Bitcoin programmable.**

Inscrib3 is an independent product-building team exploring the potential of
Bitcoin's output architecture. We turn protocols and infrastructure into
useful, accessible, open-source applications.

Our next generation of products is built with
[Arkade](https://arkadeos.com), an open execution environment for programmable
Bitcoin applications. Bitcoin remains the foundation; Arkade provides the
execution environment; Inscrib3 builds the products.

> We are not building another blockchain. We are building useful products on
> Bitcoin.

## Our journey

Our current direction builds on years of work across UTXO-based protocols:

- **Protocol access:** wallet experiences such as
  [Inspip](https://github.com/inscrib3/inspip) for PIPE.
- **Open infrastructure:** indexers for
  [PIPE](https://github.com/inscrib3/pipe-indexer),
  [Flux](https://github.com/inscrib3/flux-indexer), and
  [BlokAI](https://github.com/inscrib3/blokiai-indexer).
- **Developer tooling:** a
  [TypeScript SDK](https://github.com/inscrib3/sdk),
  [React library](https://github.com/inscrib3/react), and
  [reference application](https://github.com/inscrib3/example).
- **Programmable Bitcoin:** new open-source products built with Arkade.

That history is not being replaced. It is the foundation for what we build
next.

## Inscrib3 Wallet

[Inscrib3 Wallet](https://wallet.inscrib3.com) is our first product in this new
chapter. It is available as a browser extension and an installable Progressive
Web App.

- Launch: [wallet.inscrib3.com](https://wallet.inscrib3.com)
- Source code: [inscrib3/arkade-wallet](https://github.com/inscrib3/arkade-wallet)

The wallet is experimental software. Review its documentation and risk notices
before using it.

## This website

The website is an interactive, responsive experience built with:

- React and TypeScript
- React Three Fiber and Three.js
- CSS-based responsive design and motion
- GitHub Pages

The WebGL experience lives in `src/ProgrammableScene.tsx` and is loaded lazily.
The site includes a CSS fallback when WebGL is unavailable and supports reduced
motion preferences. Roadmap and journey content is configured in
`src/siteData.ts`.

### Development

```bash
npm install --legacy-peer-deps
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Validation

```bash
npm run build
CI=true npm test -- --watchAll=false
```

### Deployment

Pushes to `main` are built and deployed by
`.github/workflows/deploy-pages.yml`. GitHub Pages must use **GitHub Actions** as
its source and `inscrib3.com` as its custom domain.

## Open source

We build in public because useful Bitcoin infrastructure grows through
experimentation, transparency, and community participation.

- GitHub: [github.com/inscrib3](https://github.com/inscrib3)
- Website: [inscrib3.com](https://inscrib3.com)
- X: [x.com/inscrib3](https://x.com/inscrib3)

Issues and pull requests are welcome. Please review the documentation and
contribution guidelines of each repository before contributing.

## Support Inscrib3

If you find our open-source work useful, you can support continued development
with a Bitcoin donation:

```text
bc1qv8xerenssu3dzphp2kf88wgs5h2ytu8ke2x7yl
```

Please verify the address carefully before sending. Bitcoin transactions are
irreversible.
