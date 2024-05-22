import path from 'path'
import { defineConfig } from 'vitepress'

const sidebarTitle = '导航'
export default defineConfig({
  lang: 'zh',
  vite: {
    server: {
      port: 8888,
    },
    resolve: {
      alias: {
        "@vue/components": path.resolve(__dirname, '../.vitepress/theme/components'),
        "@vitepress/components": path.resolve(__dirname, '../.vitepress/theme/vitepress.components.ts'),
      }
    },
  },
  title: 'Vue Core',
  appearance: 'dark',
  srcDir: './src',
  assetsDir: '../static',

  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

    anchor: {
      // slugify,
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],

    [
      'meta',
      { name: 'wwads-cn-verify', content: '5878a7ab84fb43402106c575658472fa' },
    ],

    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'META_IMAGE',
      },
    ],

    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'KFPPRRIS',
        'data-spa': 'auto',
        defer: '',
      },
    ],

    // Vue School Top banner
    // [
    //   'script',
    //   {
    //     src: 'https://vueschool.io/banner.js?affiliate=vuerouter&type=top',
    //     // @ts-expect-error: vitepress bug
    //     async: true,
    //     type: 'text/javascript',
    //   },
    // ],

    // ...(isProduction ? productionHead : []),
  ],
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: 'deep',
      label: '页面导航'
    },
    lastUpdatedText: '上次更新',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        },
        miniSearch: {}
      }
    },
    // 文档页脚文本配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      // {
      //   text: '基础',
      //   items: [
      //     { text: 'TS', link: '/docs/vue/' },
      //     { text: 'JS', link: '/docs/vue/' },
      //     { text: 'CSS', link: '/musicscores/' },
      //     { text: 'HTML', link: '/musicscores/' },
      //   ]
      // },
      // {
      //   text: '框架',
      //   items: [
      //     {
      //       text: 'Front end', items: [
      //         { text: 'Vue', link: '/vue/' },
      //         { text: 'React', link: '/react/' },
      //         { text: 'UI Components', link: '/ui/' },
      //         { text: '无界', link: '/wujie/' },
      //         { text: '乾坤', link: '/qiankun/' },
      //       ]
      //     },
      //     {
      //       text: 'Server', items: [
      //         { text: 'NodeJS', link: '/nodejs/' },
      //         { text: 'NestJS', link: '/nestjs/' },
      //         { text: 'Nginx', link: '/nginx/' },
      //       ]
      //     },
      //   ]
      // },
      // {
      //   text: '音乐',
      //   items: [
      //     {
      //       text: '乐理',
      //       items: [
      //         { text: '初识乐理', link: '/musicscores/' }
      //       ]
      //     },
      //     {
      //       text: '吉他',
      //       items: [
      //         { text: '一级', link: '/musicscores/' }
      //       ]
      //     },
      //   ]
      // },
      // {
      //   text: '骑行',
      //   link: '/cycling/'
      // },
      // {
      //   text: '笔记',
      //   link: '/note/'
      // },
    ],
    sidebar: {
      '/reactive/': [
        {
          text: '响应式：核心',
          items: [
            { text: 'ref', link: '/reactive/ref.html' },
            { text: 'reactive', link: '/reactive/reactive.html' },
            { text: 'computed', link: '/reactive/computed.html' },
            { text: 'effect', link: '/reactive/effect.html' },
            { text: 'effectScope', link: '/reactive/effectScope.html' },
          ]
        }
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Zzhiren',
      },
      // {
      //   icon: 'discord',
      //   link: 'https://chat.vuejs.org',
      // },
    ],

    footer: {
      copyright: 'Copyright © 2019-present Eduardo San Martin Morote',
      message: 'Released under the MIT License.',
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/:path',
    //   text: 'Suggest changes',
    // },

    // algolia: {
    //   appId: '69Y3N7LHI2',
    //   apiKey: '45441f4b65a2f80329fd45c7cb371fea',
    //   indexName: 'pinia',
    // },

    // carbonAds: {
    //   code: 'CEBICK3I',
    //   // custom: 'CEBICK3M',
    //   placement: 'routervuejsorg',
    // },
  },
})