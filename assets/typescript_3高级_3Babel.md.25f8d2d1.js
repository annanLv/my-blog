import{_ as s,o as n,c as a,U as l}from"./chunks/framework.2f2c55cd.js";const u=JSON.parse('{"title":"Babel","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/3高级/3Babel.md","filePath":"typescript/3高级/3Babel.md"}'),p={name:"typescript/3高级/3Babel.md"},e=l(`<h1 id="babel" tabindex="-1">Babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;Babel&quot;">​</a></h1><ul><li><p>经过一系列的配置，使得 TS 和 webpack 已经结合到了一起，除了 webpack，开发中还经常需要结合 babel 来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将 babel 引入到项目中。</p><ol><li><p>安装依赖包：</p><ul><li><code>npm i -D @babel/core @babel/preset-env babel-loader core-js</code></li><li>共安装了 4 个包，分别是： <ul><li>@babel/core <ul><li>babel 的核心工具</li></ul></li><li>@babel/preset-env <ul><li>babel 的预定义环境</li></ul></li><li>@babel-loader <ul><li>babel 在 webpack 中的加载器</li></ul></li><li>core-js <ul><li>core-js 用来使老版本的浏览器支持新版 ES 语法</li></ul></li></ul></li></ul></li><li><p>修改 webpack.config.js 配置文件</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ...略...</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">             test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">             use</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                     loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">babel-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                     options</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">                         presets</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                             [</span></span>
<span class="line"><span style="color:#F07178;">                                 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@babel/preset-env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                                 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                                     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">targets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">                                         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">chrome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">58</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                                         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">ie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">                                     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                                     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">corejs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                                     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">useBuiltIns</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">usage</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">                                 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                             ]</span></span>
<span class="line"><span style="color:#F07178;">                         ]</span></span>
<span class="line"><span style="color:#F07178;">                     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                 </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                     loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">                 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">             ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">             exclude</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">     ]</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...略...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ul><li>如此一来，使用 ts 编译后的文件将会再次被 babel 处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的 targets 中指定要兼容的浏览器版本。</li></ul></li></ol></li></ul>`,2),o=[e];function r(c,t,F,i,D,y){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
