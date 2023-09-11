// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Primadonna Dev Blog',
  author: 'JinWoo Hyun',
  headerTitle: 'Primadonna',
  description: '닷슬래시대시 서버 개발자의 개발 블로그',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://primadonna.work',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/profile.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'primadonna@dotslashdash.com',
  github: 'https://github.com/PrimadonnaGit',
  twitter: 'https://twitter.com/primadonna_twit',
  facebook: 'https://www.facebook.com/profile.php?id=100079931731283',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/%EC%A7%84%EC%9A%B0-%ED%98%84-6752a6217/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: 'primadonna.work', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: true, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: 'G-RYRBT21FK8', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'utterances', // supported providers: giscus, utterances, disqus
    utterancesConfig: {
      theme: 'github-light',
      repo: 'PrimadonnaGit/primadonna-blog',
      label: 'comment',
      issueTerm: 'pathname',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    //   provider: 'algolia',
    //   algoliaConfig: {
    //     // The application ID provided by Algolia
    //     appId: 'R2IYF7ETH7',
    //     // Public API key: it is safe to commit it
    //     apiKey: '599cec31baffa4868cae4e79f180729b',
    //     indexName: 'docsearch',
    //   },
  },
}

module.exports = siteMetadata
