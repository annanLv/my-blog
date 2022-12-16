import { defineConfig } from "vitepress";

const config = defineConfig({
  title: 'blog',
  base: "/my-blog/",
  description: 'blog',
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/blog-site/logo.png", crossorigin: "" }],
    ["meta", { name: "referrer", content: "never" }],
  ],
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    // socialLinks: [{ icon: "github", link: "" }],
    /*nav: [
      { text: "项目预览", link: "" },
      {
        text: "项目文档",
        link: "https",
      },
    ],*/
    sidebar: [
      {
        text: 'vue',
        collapsible: true,
        items: [
          // { text: '首页', link: '/'}
        ]
      },
      {
        text: 'ts',
        collapsible: true,
        items: [
          { text: 'ts操作基础手册', link: '/ts/TS操作基础手册.md',}
        ]
      }
    ],
  }
})

export default config
