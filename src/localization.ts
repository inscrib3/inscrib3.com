import { useLayoutEffect } from 'react';

export type SiteLanguage = 'en' | 'zh-CN';

const chinese: Record<string, string> = {
  'Inscrib3 home': 'Inscrib3 首页',
  'Primary navigation': '主导航',
  'Vision': '愿景',
  'Journey': '历程',
  'Products': '产品',
  'Mutinynet App': 'Mutinynet 应用',
  'Roadmap': '路线图',
  'Open source': '开源',
  'Web wallet': '网页钱包',
  'Docs': '文档',
  'Add to Chrome': '添加到 Chrome',
  'Close navigation': '关闭导航',
  'Open navigation': '打开导航',
  'NEW RELEASE · INSCRIB3 APP IS LIVE ON MUTINYNET': '全新发布 · INSCRIB3 应用已在 MUTINYNET 上线',
  'INSCRIB3 / OPEN-SOURCE BITCOIN PRODUCTS': 'INSCRIB3 / 开源比特币产品',
  'Making Bitcoin': '让比特币',
  'Programmable.': '可编程。',
  'Use the self-custodial wallet, then explore native swaps, permissionless pools, liquidity, price charts, and portable rewards in the new Mutinynet App.':
    '使用自托管钱包，并在全新的 Mutinynet 应用中探索原生兑换、无需许可的流动性池、流动性、价格图表和可携带奖励。',
  'Get the Chrome extension': '获取 Chrome 扩展程序',
  'Open web wallet': '打开网页钱包',
  'Launch the Mutinynet App': '启动 Mutinynet 应用',
  'Wallet': '钱包',
  'Native liquidity': '原生流动性',
  'Built with Arkade': '基于 Arkade 构建',
  'Scroll to explore': '滚动探索',
  'ARKADE / ACTIVE': 'ARKADE / 运行中',
  'The vision': '愿景',
  'Bitcoin has more to offer.': '比特币的潜力远不止于此。',
  "Bitcoin's output architecture provides a powerful foundation for innovation. But powerful protocols alone are not enough.":
    '比特币的输出架构为创新提供了强大基础，但仅有强大的协议还不够。',
  'We turn unexplored possibilities into products people can actually use. Less abstraction. More utility.':
    '我们将尚未探索的可能性转化为人们真正可用的产品。减少抽象，创造更多实用价值。',
  'Outputs': '输出',
  'Logic': '逻辑',
  'Utility': '实用价值',
  'Our UTXO journey': '我们的 UTXO 历程',
  'Built through experimentation': '在探索中成长',
  'Our next chapter stands on years of work.': '多年的积累，开启我们的新篇章。',
  'Before Arkade, Inscrib3 explored the frontier of UTXO-based protocols through wallets, indexers, developer tooling, and real applications.':
    '在 Arkade 之前，Inscrib3 已通过钱包、索引器、开发者工具和实际应用探索基于 UTXO 的协议前沿。',
  'That history is not being replaced. It is the foundation for what we build next.':
    '这段历史不会被取代，而是我们继续构建的基础。',
  'Wallets': '钱包',
  'Interfaces for emerging Bitcoin protocols': '面向新兴比特币协议的界面',
  'Indexers': '索引器',
  'Open infrastructure for protocol data': '面向协议数据的开放基础设施',
  'Tooling': '开发工具',
  'SDKs and libraries for developers': '面向开发者的 SDK 和程序库',
  'Turning experiments into utility': '将实验转化为实用价值',
  'A new foundation for what’s next.': '面向未来的新基础。',
  "A new foundation for what's next.": '面向未来的新基础。',
  'Inscrib3 is moving new product development to Arkade—an open execution environment for programmable Bitcoin applications.':
    'Inscrib3 正将新产品开发迁移至 Arkade——一个面向可编程比特币应用的开放执行环境。',
  'Arkade is developed independently by Ark Labs. We use it to build products; we did not create the protocol.':
    'Arkade 由 Ark Labs 独立开发。我们使用它构建产品，但并非该协议的创建者。',
  'Explore Arkade': '探索 Arkade',
  'Bitcoin to utility architecture': '从比特币到实用价值的架构',
  'Foundation': '基础层',
  'Execution': '执行层',
  'Application': '应用层',
  'Inscrib3 products': 'Inscrib3 产品',
  'Outcome': '成果',
  'Real-world utility': '现实世界的实用价值',
  'First product': '首款产品',
  'Meet the first building block': '认识第一个基础组件',
  'Your gateway to programmable Bitcoin.': '通往可编程比特币的入口。',
  'Our open-source wallet for Bitcoin-native experiences. Install the extension for one-click access from any tab, or open the web wallet instantly with no installation.':
    '我们为比特币原生体验打造的开源钱包。安装扩展程序，即可从任意标签页一键访问；也可无需安装，直接打开网页钱包。',
  'Experimental software. Review the project documentation before use.': '实验性软件。使用前请查阅项目文档。',
  'Install for Chrome': '安装 Chrome 扩展程序',
  'Open source from day one — review the wallet code': '从第一天起即开源——查看钱包代码',
  'Live Inscrib3 Wallet preview': 'Inscrib3 钱包实时预览',
  'Open the Inscrib3 web wallet': '打开 Inscrib3 网页钱包',
  'Browser extension': '浏览器扩展程序',
  'Inscrib3 browser extension interface preview': 'Inscrib3 浏览器扩展程序界面预览',
  'Install the Inscrib3 Chrome extension': '安装 Inscrib3 Chrome 扩展程序',
  'Recommended': '推荐',
  'Install once.': '一次安装。',
  'Use from any tab.': '任意标签页均可使用。',
  'WEB APP': '网页应用',
  'CHROME EXTENSION': 'CHROME 扩展程序',
  'Why we build': '我们的构建理念',
  'Protocols are possibilities.': '协议带来可能。',
  'Products create utility.': '产品创造价值。',
  'Now live on Mutinynet': '现已在 Mutinynet 上线',
  'INSCRIB3 APP / PUBLIC TEST RELEASE': 'INSCRIB3 应用 / 公开测试版',
  'Native liquidity.': '原生流动性。',
  'Built on Bitcoin.': '构建于比特币之上。',
  'Swap native BTC and Arkade assets, create permissionless pools, launch fixed-supply tokens on BTC bonding curves, and earn portable points—without wrapped Bitcoin or a custodial deposit account.':
    '兑换原生 BTC 和 Arkade 资产，创建无需许可的流动性池，在 BTC 联合曲线上发行固定供应量代币并赚取可携带积分——无需封装比特币或托管存款账户。',
  'Launch Mutinynet App': '启动 Mutinynet 应用',
  'Read the App docs': '阅读应用文档',
  'MUTINYNET · EXPERIMENTAL · USE TEST FUNDS ONLY': 'MUTINYNET · 实验环境 · 仅使用测试资金',
  'Native swaps': '原生兑换',
  'BTC / asset and asset / asset routes with exact integer arithmetic.': '采用精确整数运算的 BTC / 资产及资产 / 资产兑换路径。',
  'Pools & charts': '流动性池与图表',
  'Permissionless liquidity with reserve history from 1 minute to 30 days.': '无需许可的流动性，提供从 1 分钟到 30 天的储备历史。',
  'Bitcoin-native launches': '比特币原生发行',
  'Fixed supply, curve trading, atomic graduation, and permanent canonical liquidity.': '固定供应量、曲线交易、原子升级和永久规范流动性。',
  'Portable points': '可携带积分',
  'Pool and launch creation, settled trades, personal rank, and live leaderboard.': '创建流动性池和发行项目、已结算交易、个人排名和实时排行榜。',
  'POINTS PORTABILITY': '积分可携带性',
  'Mutinynet points will migrate to Mainnet.': 'Mutinynet 积分将迁移至主网。',
  "Rewards are bound to the wallet's stable Taproot identity—not the network-specific address prefix. Keep the same wallet recovery identity to retain attribution.":
    '奖励与钱包稳定的 Taproot 身份绑定，而非特定网络的地址前缀。请保留相同的钱包恢复身份以继续保有归属。',
  'How migration works': '了解迁移方式',
  'For developers / Third-party integration': '面向开发者 / 第三方集成',
  'Build with Inscrib3.': '使用 Inscrib3 构建。',
  'Integrate programmable Bitcoin experiences into your product. Start with the technical documentation, implementation guides, and open-source wallet code.':
    '将可编程比特币体验集成到您的产品中。从技术文档、实施指南和开源钱包代码开始。',
  'Read integration docs': '阅读集成文档',
  'Explore the code': '浏览代码',
  'Product roadmap': '产品路线图',
  "We're only getting started.": '我们才刚刚起步。',
  'One product is the beginning. Each release moves us closer to making programmable Bitcoin useful.':
    '一款产品只是起点。每次发布，都让可编程比特币离真正实用更近一步。',
  'Built in the open.': '公开透明地构建。',
  'The wallet, App frontend, website, and documentation are public. Verify the user experience, wallet approvals, interfaces, and deployments—or help improve them.':
    '钱包、应用前端、网站和文档均公开。您可以验证用户体验、钱包授权、接口和部署，也可以帮助我们改进。',
  'Explore our GitHub': '浏览我们的 GitHub',
  'Inscrib3 open source repositories': 'Inscrib3 开源代码仓库',
  'public': '公开',
  'THE NEXT OUTPUT IS YOURS': '下一个输出由你创造',
  'The future of Bitcoin is something we build.': '比特币的未来，由我们共同构建。',
  'Install the Chrome extension or open the web wallet and put programmable Bitcoin one click away.':
    '安装 Chrome 扩展程序或打开网页钱包，一键触达可编程比特币。',
  'Add Inscrib3 to Chrome': '将 Inscrib3 添加到 Chrome',
  'Continue on the web': '在网页上继续',
  'Inscrib3 community links': 'Inscrib3 社区链接',
  'Join the community': '加入社区',
  'Making Bitcoin programmable.': '让比特币可编程。',
  'Chrome extension': 'Chrome 扩展程序',
  'Skip to content': '跳至正文',

  'Available now': '现已可用',
  'Self-custodial Chrome extension and web wallet for Bitcoin and Arkade assets.':
    '面向比特币和 Arkade 资产的自托管 Chrome 扩展程序及网页钱包。',
  'Live on Mutinynet': '已在 Mutinynet 上线',
  'Native swaps, permissionless pools, fixed-supply launches, price charts, portable points, and leaderboard.':
    '原生兑换、无需许可的流动性池、固定供应量发行、价格图表、可携带积分和排行榜。',
  'Bitcoin-native launchpad': '比特币原生发行平台',
  'Wallet-issued fixed supply, BTC bonding curves, atomic graduation, and permanent canonical liquidity.':
    '钱包发行的固定供应量、BTC 联合曲线、原子升级和永久规范流动性。',
  'Next release': '下一版本',
  'In development': '开发中',
  'The next product node will be revealed when it is ready.': '下一个产品节点准备就绪后将正式公布。',
  'Programmability': '可编程性',
  'Expanding what can be built with Bitcoin transactions.': '拓展比特币交易所能构建的可能性。',
  'Turning technical possibility into applications people can use.': '将技术可能性转化为人们可用的应用。',
  'Building transparently so ideas can be tested and improved together.': '透明构建，让创意得到共同验证和改进。',
  'Protocol access': '协议接入',
  'From protocols to interfaces.': '从协议走向界面。',
  'We started by making emerging UTXO protocols approachable through wallet experiences, including the Inspip browser extension for PIPE.':
    '我们从钱包体验入手，让新兴 UTXO 协议更加易用，其中包括用于 PIPE 的 Inspip 浏览器扩展程序。',
  'Inspip wallet': 'Inspip 钱包',
  'Open infrastructure': '开放基础设施',
  'Indexing the experimental edge.': '为实验前沿建立索引。',
  'We built open-source infrastructure across PIPE, Flux, Ordinals, and Blok—turning protocol activity into data applications could use.':
    '我们为 PIPE、Flux、Ordinals 和 Blok 构建开源基础设施，将协议活动转化为应用可用的数据。',
  'PIPE indexer': 'PIPE 索引器',
  'Flux indexer': 'Flux 索引器',
  'BlokAI indexer': 'BlokAI 索引器',
  'Developer tooling': '开发者工具',
  'Making infrastructure composable.': '让基础设施可组合。',
  'SDKs, React tooling, and reference implementations brought our Ordinals infrastructure closer to product teams and application developers.':
    'SDK、React 工具和参考实现，让我们的 Ordinals 基础设施更贴近产品团队和应用开发者。',
  'TypeScript SDK': 'TypeScript SDK',
  'React library': 'React 程序库',
  'Reference app': '参考应用',
  'Now': '现在',
  'Arkade direction': 'Arkade 方向',
  'Carrying the work forward.': '延续积累，继续前行。',
  'Everything we learned from wallets, indexers, and UTXO protocols now informs our next chapter: useful, open-source products built with Arkade.':
    '我们从钱包、索引器和 UTXO 协议中获得的一切经验，如今正塑造新的篇章：使用 Arkade 构建实用的开源产品。',
  'Arkade wallet': 'Arkade 钱包',

  'Inscrib3 — Making Bitcoin Programmable': 'Inscrib3 — 让比特币可编程',
  'Open-source products for programmable Bitcoin: a self-custodial Arkade wallet and a Mutinynet App for native swaps, pools, liquidity, charts, and portable points.':
    '面向可编程比特币的开源产品：自托管 Arkade 钱包，以及提供原生兑换、流动性池、流动性、图表和可携带积分的 Mutinynet 应用。',
  'Explore our open-source Arkade wallet and Mutinynet App for native swaps, permissionless liquidity, price charts, and portable points.':
    '探索我们的开源 Arkade 钱包和 Mutinynet 应用，体验原生兑换、无需许可的流动性、价格图表和可携带积分。',
  'Open-source Arkade wallet and Mutinynet App for native swaps, permissionless liquidity, charts, and portable points.':
    '开源 Arkade 钱包和 Mutinynet 应用，提供原生兑换、无需许可的流动性、图表和可携带积分。',
};

export function detectSiteLanguage(languages?: readonly string[]): SiteLanguage {
  const browserLanguages =
    languages ??
    (typeof navigator === 'undefined'
      ? []
      : navigator.languages?.length
        ? navigator.languages
        : [navigator.language]);

  return browserLanguages[0]?.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
}

function translateValue(value: string): string {
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  const normalized = value.trim().replace(/\s+/g, ' ');
  const translation = chinese[normalized];
  return translation ? `${leading}${translation}${trailing}` : value;
}

function translateNode(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE && node.textContent) {
    const translated = translateValue(node.textContent);
    if (translated !== node.textContent) node.textContent = translated;
    return;
  }

  if (!(node instanceof Element)) return;

  ['aria-label', 'title'].forEach((attribute) => {
    const value = node.getAttribute(attribute);
    if (!value) return;
    const translated = translateValue(value);
    if (translated !== value) node.setAttribute(attribute, translated);
  });

  node.childNodes.forEach(translateNode);
}

export function applyLanguage(root: ParentNode, language: SiteLanguage): void {
  if (language !== 'zh-CN') return;
  root.childNodes.forEach(translateNode);
}

function translateMetadata(): void {
  document.title = translateValue(document.title);
  document
    .querySelectorAll<HTMLMetaElement>(
      'meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[property="og:image:alt"], meta[name="twitter:title"], meta[name="twitter:description"], meta[name="twitter:image:alt"]',
    )
    .forEach((meta) => {
      meta.content = translateValue(meta.content);
    });
}

export function useAutomaticLanguage(): SiteLanguage {
  const language = detectSiteLanguage();

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    if (language !== 'zh-CN') return;

    applyLanguage(document.body, language);
    translateMetadata();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') {
          translateNode(mutation.target);
          return;
        }
        mutation.addedNodes.forEach(translateNode);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  return language;
}
