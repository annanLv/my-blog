import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '博客', link: '/blog/H5与客户端交互', activeMatch: '^/blog/H5与客户端交互' },
  { text: '前端系列',
    items: [
      { text: 'vue', link: '/vue/1vue/1vue入门', activeMatch: '^/vue' },
      { text: 'typescript', link: '/typescript/', activeMatch: '^/typescript' },
      { text: 'uniapp', link: '/uniapp/1uni-app基础.md', activeMatch: '^/uniapp' },
      { text: '浏览器', link: '/browser/事件.md', activeMatch: '^/browser' },
      { text: '知识点', link: '/interview/总结.md', activeMatch: '^/interview' },
    ]
  }
]
  /*{ text: '导航', link: '/nav', activeMatch: '^/nav' },
  {
    text: '前端',
    items: [
      { text: 'JavaScript 基础知识', link: },
      { text: 'ES6 常用知识', link:  },
      { text: 'TypeScript 基础知识', link: },
      { text: '浏览器相关知识', link:  },
      { text: '源码阅读', link: },
    ],
    activeMatch:
  },
  {
    text: 'Workflow',
    items: [
      {
        text: '常用工具/方法',
        items: [
          { text: '工具库整理', link:  },
          { text: '常用正则整理', link:  },
          { text: '常用方法整理', link:  }
        ]
      },
      {
        text: 'CSS 相关',
        items: [
          { text: 'CSS 语法', link:  },
          { text: 'CSS 奇淫技巧', link:  },
          { text: 'Sass 常用技巧', link: }
        ]
      },
      {
        text: 'Vue 小技巧',
        link:
      },
      { text: 'npm 常用命令', link:  },
      // {
      //   text: '终端相关',
      //   items: [
      { text: 'Zsh 配置', link:  },
      { text: '命令行工具', link: },
      { text: 'Shell 命令', link:  },
      //   ]
      // },
      { text: 'Git 相关技巧', link: },
      { text: 'Git 命令清单', link:  }
    ],
    activeMatch:
  },
  { text: '踩坑记录', link: , activeMatch:  },
  {
    text: '提效工具',
    items: [
      {
        text: '软件推荐与配置',
        items: [
          { text: '多平台软件', link: },
          { text: 'Mac 平台', link:  },
          { text: 'Windows 平台', link: },
          { text: '浏览器设置与扩展', link:  },
          { text: 'Visual Studio Code 配置', link:  },
          { text: 'WebStorm 配置', link: }
        ]
      },
      { text: '在线工具', link:  },
      { text: '书签脚本', link:  }
    ],
    activeMatch:
  },
]*/