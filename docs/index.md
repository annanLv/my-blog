---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 安楠
  text: 上了生活的贼船, 那就做个快乐的小海盗
  tagline: 每天进步一点点...
  image:
    src: /logo.jpg
    alt: 安楠
  actions:
    - text: let's go->
      link: /blog/H5与客户端交互
#    - text: 前端导航
#      link: /nav
#      theme: alt
#    - text: mmPlayer
#      link: https://netease-music.fe-mm.com
#      theme: alt
features:
  - icon: 📖
    title: 博客
    details: 前端知识点<small>（记录）</small><br />
    link: /blog/H5与客户端交互
    linkText: 前端知识点
#  - icon: 📘
#    title: 源码阅读
#    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
#    link: 
#    linkText: 源码阅读
  - icon: 💡
    title: 学习进步一点点
    details: 不断加油吧
    link: 
    #    linkText: 学习
#  - icon: 🧰
#    title: 工具
#    details: 
#    link: 
#    linkText: 工具
#  - icon: 🐞
#    title: 踩坑
#    details: 
#    link: 
#    linkText: 踩坑的地方
  - icon: ✨
    title: 学习进步。
    details: '<small class="bottom-small">咸鱼的小开发</small>'
    link:
---

<style>
.m-home-layout .image-src:hover {
}

.m-home-layout .image-src {
  /*border-radius: 999px;*/
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  --vp-c-brand: #646cff;
  --vp-c-text-dark-1: rgba(255, 255, 255, .87);
  --vp-c-brand-light: #747bff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-dark:#747bff;
  --vp-c-brand-lighter:#747bff;
}
</style>
