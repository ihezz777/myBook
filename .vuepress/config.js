module.exports = {
  title: 'Ihezz',
  description: 'Ihezz777',
  displayAllHeaders: true,

  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    repo: 'https://github.com/ihezz777/myBook',
    repoLabel: 'Github',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'GIT',
        collapsable: false,
        children: [
          '/GIT/configAccount',
          '/GIT/generateKey',
        ]
      },
      {
        title: '函数式编程',
        collapsable: false,
        children: [
          '/FuncPro/function',
          '/FuncPro/introduce',
          '/FuncPro/curry',
          '/FuncPro/Partial',
          '/FuncPro/pureFunc',
          '/FuncPro/compose',
          '/FuncPro/functor',
          '/FuncPro/mixins',
          '/FuncPro/PointFree',
        ]
      },
      {
        title: '性能优化',
        collapsable: false,
        children: [
          '/WebOpt/webpack',
          '/WebOpt/tree-shaking',
        ]
      },
      {
        title: 'Tools',
        collapsable: false,
        children: [
          'Tools/type-check',
          'Tools/countdown',
          'Tools/verificationv-identity-card',
          'Tools/FormValidation',
          'Tools/foating-point-operation',
          'Tools/load-javascript',
        ]
      },
      {
        title: 'TypeScript',
        collapsable: false,
        children: [
          '/TS/interface',
          '/TS/class',
          '/TS/func',
          '/TS/enumenumeration',
        ]
      },
      {
        title: 'Nodejs',
        collapsable: false,
        children: [
          '/Nodejs/npm',
        ]
      },
      {
        title: 'Ngnix',
        collapsable: false,
        children: [
          '/Nginx/README',
        ]
      },
      {
        title: '面试',
        collapsable: false,
        children: [
          '/Interview/JS',
        ]
      },
      {
        title: 'Java',
        collapsable: false,
      }
    ]
  },
}
