import{_ as e,o as t,c as r,U as a}from"./chunks/framework.2f2c55cd.js";const y=JSON.parse('{"title":"TS描述文件声明","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/3高级/4TS描述文件声明.md","filePath":"typescript/3高级/4TS描述文件声明.md"}'),p={name:"typescript/3高级/4TS描述文件声明.md"},s=a('<h1 id="ts描述文件声明" tabindex="-1">TS描述文件声明 <a class="header-anchor" href="#ts描述文件声明" aria-label="Permalink to &quot;TS描述文件声明&quot;">​</a></h1><p>TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。</p><p>假如我们想使用第三方库，比如 jQuery等等</p><p>声明文件以 <strong>.d.ts</strong> 为后缀 如：<code>hello.d.ts</code></p><p>声明文件或模块的语法格式如下：<code>declare module Module_Name { }</code></p><p><strong>很多流行的第三方库的声明文件不需要我们定义了</strong></p><ul><li><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types" target="_blank" rel="noreferrer">https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types</a></li><li><a href="https://www.typescriptlang.org/dt/search?search=" target="_blank" rel="noreferrer">https://www.typescriptlang.org/dt/search?search=</a></li></ul>',7),c=[s];function o(i,_,n,l,d,h){return t(),r("div",null,c)}const S=e(p,[["render",o]]);export{y as __pageData,S as default};
