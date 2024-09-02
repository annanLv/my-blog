import { defineConfig } from "vitepress";
import { head, nav, algolia } from "./configs";
import { getSideBarList } from "../util";

export default defineConfig({
  title: "an nan's blog",
  base: "/my-blog/",
  description: '安楠的博客',

  cleanUrls: true,
  // 暂时关闭
  lastUpdated: false,

  head,

  /* markdown 配置 */
  markdown: {
    // 行数
    lineNumbers: true
  },

  themeConfig: {
    logo: '/img.png',
    algolia,
    outline: {
      level: 'deep',
      label: '目录'
    },
    nav,
    socialLinks: [{ icon: 'github', link: 'https://github.com/annanLv' }],

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    sidebar: {
      ...getSideBarList('vue'),
      ...getSideBarList('blog'),
      ...getSideBarList('browser'),
      // ...getSideBarList('interview'),
      ...getSideBarList('typescript'),
      ...getSideBarList('uniapp'),
      ...getSideBarList("version-manage")
    },
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present annanLv'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
  }
})

