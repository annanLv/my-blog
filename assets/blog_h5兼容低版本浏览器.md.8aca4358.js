import{_ as s,o as n,c as a,U as l}from"./chunks/framework.2f2c55cd.js";const F=JSON.parse('{"title":"vite+vue3兼容低版本浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"blog/h5兼容低版本浏览器.md","filePath":"blog/h5兼容低版本浏览器.md","lastUpdated":1688711045000}'),p={name:"blog/h5兼容低版本浏览器.md"},e=l(`<h1 id="vite-vue3兼容低版本浏览器" tabindex="-1">vite+vue3兼容低版本浏览器 <a class="header-anchor" href="#vite-vue3兼容低版本浏览器" aria-label="Permalink to &quot;vite+vue3兼容低版本浏览器&quot;">​</a></h1><blockquote><p>部分机型h5会造成白屏现象</p></blockquote><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><div class="language-Shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">安装</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vitejs/plugin-legacy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vitejs/plugin-legacy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">--必须安装</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Terser，因为</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">plugin-legacy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">使用</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Terser</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">进行缩小.-</span><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">terser</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">安装</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">regenerator-runtime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">regenerator-runtime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.js中配置</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> legacy </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-legacy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">vue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 解决较老手机浏览器白屏的问题</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">legacy</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">targets</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ie &gt;= 11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">additionalLegacyPolyfills</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">regenerator-runtime/runtime</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,6),o=[e];function t(r,c,i,y,D,C){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
