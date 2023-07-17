import{_ as t,o as e,c as d,U as a}from"./chunks/framework.2f2c55cd.js";const g=JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"vue/1vue/2生命周期.md","filePath":"vue/1vue/2生命周期.md","lastUpdated":1689573633000}'),r={name:"vue/1vue/2生命周期.md"},n=a('<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><h2 id="钩子函数" tabindex="-1">钩子函数 <a class="header-anchor" href="#钩子函数" aria-label="Permalink to &quot;钩子函数&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">钩子函数</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">beforeCreated</td><td style="text-align:center;">在实例初始化之后, 数据观测(<code>data observer</code>) 和 事件配制(<code>event/watcher</code>)之前被调用</td></tr><tr><td style="text-align:center;">created</td><td style="text-align:center;">在实例创建完成后被立即调用, 在这一步, 实例已完成相关的配置: 数据观测(<code>data observer</code>), 属性和方法的运算, <code>watch/event</code> 事件回调. 然而, 挂载阶段还没开始, <code>$el</code> 属性目前不可见</td></tr><tr><td style="text-align:center;">beforeMount</td><td style="text-align:center;">在挂载开始之前被调用: 相关的 <code>render</code> 函数首次被调用</td></tr><tr><td style="text-align:center;">mounted</td><td style="text-align:center;"><code>el</code> 被新创建的 <code>vm.$el</code> 替换, 并挂载实例上去之后调用该钩子, 如果 root实例挂载了一个文档内元素, 当 mounted 被调用时, vm.$el 也在文档内。</td></tr><tr><td style="text-align:center;">beforeUpdate</td><td style="text-align:center;">数据更新时调用, 发生在虚拟 DOM 打补丁之前. 这里适合在更新之前访问现有的DOM, 比如手动移除已添加的事件监听器. 该钩子在服务器端渲染期间不被调用, 因为只有初次渲染会在服务端进行</td></tr><tr><td style="text-align:center;">updated</td><td style="text-align:center;">由于数据更改导致的虚拟 DOM 重新渲染和打补丁, 在这之后会调用该钩子.</td></tr><tr><td style="text-align:center;">activated</td><td style="text-align:center;"><code>keep-alive</code> 组件激活时调用. 该钩子在服务器端渲染期间不被调用</td></tr><tr><td style="text-align:center;">deactivated</td><td style="text-align:center;"><code>keep-alive</code> 组件停用时调用. 该钩子在服务器端渲染期间不被调用</td></tr><tr><td style="text-align:center;">break-spaces</td><td style="text-align:center;">保留</td></tr><tr><td style="text-align:center;">break-spaces</td><td style="text-align:center;">保留</td></tr></tbody></table>',3),c=[n];function l(o,s,i,_,x,h){return e(),d("div",null,c)}const u=t(r,[["render",l]]);export{g as __pageData,u as default};
