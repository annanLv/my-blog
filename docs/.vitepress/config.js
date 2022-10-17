module.exports = {
  title: 'nan',
  base: './',
  dest: './dist',  // 设置输出目录
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    sidebar: [
      {
        text: 'vue',
        collapsible: true,
        items: []
      },
      {
        text: 'ts',
        collapsible: true,
        items: [
          { text: 'ts操作基础手册', link: '/ts/TS操作基础手册' }
        ]
      }
    ],
  },
  description: 'Just playing around.'
}
