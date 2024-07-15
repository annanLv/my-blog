import{_ as s,o as n,c as a,U as l}from"./chunks/framework.2f2c55cd.js";const D=JSON.parse('{"title":"TS中的兼容性","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/2进阶/1ts兼容类型.md","filePath":"typescript/2进阶/1ts兼容类型.md"}'),p={name:"typescript/2进阶/1ts兼容类型.md"},e=l(`<h1 id="ts中的兼容性" tabindex="-1">TS中的兼容性 <a class="header-anchor" href="#ts中的兼容性" aria-label="Permalink to &quot;TS中的兼容性&quot;">​</a></h1><h2 id="自动类型推论" tabindex="-1">自动类型推论 <a class="header-anchor" href="#自动类型推论" aria-label="Permalink to &quot;自动类型推论&quot;">​</a></h2><ul><li><p>根据初始值进行类型推论</p><p>不用明确告诉编译器具体是什么类型, 编译器就知道是什么类型</p><p>根据初始化值自动推断</p><p><strong>注意点：</strong> 如果是先定义在初始化, 那么是无法自动推断的</p></li><li><p>上下文类型推论</p><p>TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处的位置相关时</p></li></ul><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 最佳类型推断</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等价于 let uanme: string = &quot;陈乔恩&quot;;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> uname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">陈乔恩</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">uname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">徐璐</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// uname = 123;  // 报错</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// uname = true; // 报错</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> uage</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">uage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">uage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等价于 let x: (number | null)[] = [0, 1, null];</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// x = [18, 28, 38, null, true];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 上下文类型推断</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmousedown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">mouseEvent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mouseEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">button</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="对象类型兼容性" tabindex="-1">对象类型兼容性 <a class="header-anchor" href="#对象类型兼容性" aria-label="Permalink to &quot;对象类型兼容性&quot;">​</a></h2><ul><li>可多不可少</li><li>会进行递归检查</li></ul><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 对象类型赋值给接口类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 可多不可少</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">INameTest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> n1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">祝绪丹</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> n2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">江疏影</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> n3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">INameTest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// val = n3;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 必须一一对应，会进行递归检查</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITestInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> p1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">吴宣仪</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">}};</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> p2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">陈小纭</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">}};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">ITestInfo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> p1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// t = p2;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="函数类型兼容性" tabindex="-1">函数类型兼容性 <a class="header-anchor" href="#函数类型兼容性" aria-label="Permalink to &quot;函数类型兼容性&quot;">​</a></h2><ul><li>参数个数</li><li>参数类型</li><li>参数返回值</li><li>双向协变</li><li>函数重载</li><li>可选参数及剩余参数</li></ul><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 参数个数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 可少不可多</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (a:number, b:number) =&gt; {};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:number) =&gt; {};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 参数类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 参数类型必须相同</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (x:number)=&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:number)=&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func3 = (x:string)=&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func3; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func3 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回值类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 返回值类型必须相同</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = ():number=&gt; 18;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = ():number=&gt; 28;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func3 = ():string=&gt; &#39;TS真好玩&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func3; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func3 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数双向协变</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.参数的双向协变</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (x:(number | string)) =&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:number) =&gt;{};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func1 = func2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.返回值双向协变</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 不能将返回值是联合类型的赋值给具体类型的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可以将返回值是具体类型的赋值给联合类型的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func1 = (x:boolean):(number | string) =&gt; x ? 18 : &#39;张含韵&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let func2 = (x:boolean):number =&gt; 28;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// func1 = func2; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">func2 = func1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数重载</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 不能将重载少的赋值给重载多的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可以将重载多的赋值给重载少</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function add(x:number, y:number):number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function add(x:string, y:string):string;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function add(x, y) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    return x + y;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function sub(x:number, y:number):number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">function sub(x, y) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    return x - y;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let fn = add;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// fn = sub; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let fn = sub;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">fn = add; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可选参数及剩余参数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 当一个函数有剩余参数时，它被当做无限个可选参数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">z</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> z))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">?,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">?)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">?,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">z</span><span style="color:#89DDFF;">?)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y))</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><h2 id="枚举类型知识点补充" tabindex="-1">枚举类型知识点补充 <a class="header-anchor" href="#枚举类型知识点补充" aria-label="Permalink to &quot;枚举类型知识点补充&quot;">​</a></h2><p>TS中支持两种枚举, 一种是数字枚举, 一种是字符串枚举</p><ul><li><p>数字枚举</p><blockquote><p>1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果</p><p>2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增</p><p>3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化</p></blockquote></li><li><p>字符串枚举</p><blockquote><p>1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值</p><p>2.采用[index]的形式不能获取到内容,需要传入[key]</p><p>3.字符串枚举不能使用常量或者计算结果给枚举值赋值</p><p>4.它可以使用内部的其它枚举值来赋值</p></blockquote></li><li><p>异构枚举：枚举中既包含数字又包含字符串, 我们就称之为异构枚举</p><blockquote><p>1.如果是字符串枚举, 那么无法通过原始值获取到枚举值</p></blockquote></li><li><p>把枚举成员当做类型来使用</p></li></ul><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// TS中支持两种枚举, 一种是数字枚举, 一种是字符串枚举</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.数字枚举</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 默认情况下就是数字枚举</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Male,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Female</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Male);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Female);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender[0]);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const val = 100;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const num = () =&gt; 200;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // Male = 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // Female</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Male = val,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Female = num()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.字符串枚举</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        2.采用[index]的形式不能获取到内容,需要传入[key]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        3.字符串枚举不能使用常量或者计算结果给枚举值赋值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//        4.它可以使用内部的其它枚举值来赋值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Direction {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   up = &quot;UP&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   down = &quot;DOWN&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction.up);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction.down);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction[0]); // undefined</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Direction[&quot;up&quot;]); // UP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const val = &quot;金晨&quot;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const res = () =&gt; &quot;王鸥&quot;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum User {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // a = val,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // b = res()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    c = &quot;HTML&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    d = c</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.异构枚举</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 枚举中既包含数字又包含字符串, 我们就称之为异构枚举</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意点: 如果是字符串枚举, 那么无法通过原始值获取到枚举值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Male = 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   Female = &#39;女&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Male);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender.Female);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender[1]);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Gender[&#39;女&#39;]);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.把枚举成员当做类型来使用</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Gender</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Male </span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Female</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITestInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Gender</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// age: (Gender.Male | Gender.Female)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITestInterface</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// age: Gender.Male</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Gender</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Female</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><h2 id="枚举类型兼容性" tabindex="-1">枚举类型兼容性 <a class="header-anchor" href="#枚举类型兼容性" aria-label="Permalink to &quot;枚举类型兼容性&quot;">​</a></h2><ul><li>数字枚举与数字兼容</li><li>数字枚举与数字枚举不兼容</li><li>字符串枚举与字符串不兼容</li></ul><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 数字枚举与数字兼容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Male,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Female</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let value:Gender;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = Gender.Male;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = 100;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 数字枚举与数字枚举不兼容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Male, // 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Female // 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">enum Animal{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Dog, // 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Cat // 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let value:Gender;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = Gender.Male;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">value = Animal.Dog; // 报错</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 字符串枚举与字符串不兼容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enum Gender{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Male = &#39;张若昀&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     Female  = &#39;唐艺昕&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let value:Gender;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value = Gender.Male;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value = Gender.Female;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value = &quot;娃嘻嘻&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="类的兼容性" tabindex="-1">类的兼容性 <a class="header-anchor" href="#类的兼容性" aria-label="Permalink to &quot;类的兼容性&quot;">​</a></h2><p>类的工作方式与对象字面类型和接口类似，但有一个例外：它们同时具有静态和实例类型。当比较一个 类类型的两个对象时，只有实例的成员被比较。静态成员和构造函数不影响兼容性。</p><p>一个类中的私有成员和保护成员会影响其兼容性。当一个类的实例被检查兼容性时，如果目标类型包含 一个私有成员，那么源类型也必须包含一个源自同一类的私有成员。同样地，这也适用于有保护成员的 实例。这允许一个类与它的超类进行赋值兼容，但不允许与来自不同继承层次的类进行赋值兼容，否则 就会有相同的形状。</p><ul><li><code>public</code>: 可多不可少</li><li><code>private / protected</code>: 不能互相赋值</li></ul><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// public</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Animal {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  age: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(name: string, numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Size {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可多不可少</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let a: Animal;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let s: Size;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">s = a; // 正确</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">a = s; // 错误</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// private / protected</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Animal {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  private feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(name: string, numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">class Size {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  private feet: number;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  constructor(numFeet: number) {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let a: Animal;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let s: Size;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">s = a; // 错误</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">a = s; // 错误</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="泛型的兼容性" tabindex="-1">泛型的兼容性 <a class="header-anchor" href="#泛型的兼容性" aria-label="Permalink to &quot;泛型的兼容性&quot;">​</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 因为TypeScript是一个结构化的类型系统，类型参数只在作为成员类型的一部分被消耗时影响到结果类型。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">interface Empty&lt;T&gt; {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let x: Empty&lt;number&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">let y: Empty&lt;string&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">x = y; // 正确，因为y符合x的结构</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 在上面， x 和 y 是兼容的，因为它们的结构没有以区分的方式使用类型参数。通过给 Empty&lt;T&gt; 增加一</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 个成员来改变这个例子，显示了这是如何工作的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">interface NotEmpty&lt;T&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   data: T;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> let x: NotEmpty&lt;number&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> let y: NotEmpty&lt;string&gt;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> x = y; // 错误，因为x和y不兼容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,24),c=[e];function t(o,r,i,y,b,u){return n(),a("div",null,c)}const F=s(p,[["render",t]]);export{D as __pageData,F as default};
