/**
 * @see https://vuepress.vuejs.org/zh/
 */
module.exports = {
  port: '4000',
  dest: 'dist',
  base: '/Linux_All_in_one/',
  title: 'Linux_All_in_one',
  description: 'Linux 运维、软件运维、Docker 教程、网络安全',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
  themeConfig: {
    logo: '/images/dunwu-logo-100.png',
    repo: 'adminlove520/Linux_All_in_one',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: 'Languages',
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '💻 Linux 命令',
            link: '/linux/cli/',
          },
          {
            text: '⚙️ Linux 运维',
            link: '/linux/ops/',
          },
          {
            text: '📦 Linux 软件运维',
            link: '/linux/soft/',
          },
          {
            text: '🐳 Docker 教程',
            link: '/docker/',
          },
          {
            text: '🔒 Linux与网络安全',
            link: '/Cybersecurity/',
            target: '_blank',
            rel: '',
          },
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
      },
    },
  },
  plugins: [
    [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
      },
    ],
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        },
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: (info) => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
      },
    ],
    ['flowchart'],
  ],
}
