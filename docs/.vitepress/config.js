module.exports = {
  title: 'nan',
  base: './',
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    sidebar: [
      {
        text: 'ts',
        collapsible: true,
        items: [
          { text: 'ts操作基础手册', link: '/ts/TS操作基础手册' }
        ]
      },
    ],
  },
  description: 'blog.'
}
