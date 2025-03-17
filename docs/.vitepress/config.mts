import { defineConfig } from 'vitepress'

const base = "/MX-MTR/"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  // head: [
  //   ['script', { src: '/live2d.js' }],
  // ],
  title: "MX MTR",
  description: "MX MTR服务器官网",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      //{ text: 'Examples', link: '/markdown-examples' },
      {
        text: '更多服务',
        items: [
          { text: "加入QQ群", link: "https://qm.qq.com/q/jfnBBYpNFm" },
          { text: "关于内服", link: "/Top/关于内服" },
          { text: "联系我们", link: "/Top/联系我们" },
        ]
      }
    ],

    sidebar: [
      {
        text: '基本服务',
        items: [
          { text: '加入服务器', link: '/加入服务器' },
          { text: '服务器内置服务or指令', link: '/服务器内置服务or指令' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]

  }
})
