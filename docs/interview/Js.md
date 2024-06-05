# JS

## 原型和原型链
> 在Js中，每个对象都有一个属性，称为原型（prototype）

::: tip 原型链

在Js中，每个对象（包括函数）都有一个内置属性 `__proto__` ，这个属性指向创建他的函数对象的原型对象，即`prototype`属性。

当访问一个对象的属性或方法时，首先会在对象中的自身查找，如果找不到就会沿着`__proto__`属性指向的原型链向上查找，直到找到对应的属性或方法，
或者达到原型链的末尾。这种层层递进的结构形成了所谓的原型链。

:::

## 作用域与作用域链
> 作用域是静态的一块代码所在的地盘，是静态的，编写代码的时候就确定了（n+1）. 执行上下文是动态的，只有函数的时候才会产生（n+1），调用结束后就会自动释放

+ 分类：全局作用域，函数作用域，es6有了块级作用域

> 作用域链：变量取值时，先在创建该变量的作用域中找，如果没有找到，就向上级作用域找，直到查找到全局作用域，这么一个查找过程形成的作用域链就叫做作用域链

::: tip 作用

作用域可以隔绝变量，不同作用域下同名变量不会冲突

:::

## 构造函数new的过程
+ 创建一个新对象
+ 将新对象内部的 `[[Prototype]]` 属性被赋值为构造函数的 `prototype` 属性（继承构造函数的属性和方法）
+ 构造函数内部的 `this` 被赋值为这个新对象（`this`指向新对象）
+ 执行构造函数内部的代码（给新对象添加属性）
+ 如果构造函数返回对象，则返回该对象；否则，返回刚创建的新对象（空对象）

::: tip
+ 创建一个空对象
+ 构造函数内部的this指向这个空对象
+ 通过 this. 给该对象添加属性
+ 构造函数默认 return this (this就是该空对象)
:::

```js
function _new(Fn, ...args) {
    // Object.create(现有的对象)  使用现有的对象作为新对象的原型
    // 1. 新建一个对象，并将构造函数的原型作为新对象的原型，继承构造函数原型上的方法
    let obj = Object.create(Fn.prototype)
    // 2. 将构造函数的 this 指向新的对象，执行构造函数内部代码并拿到返回值
    let ref = Fn.apply(obj, args)
    // 3. 构造函数有返回则返回构造函数的返回值，没有则返回新对象obj
    return res instanceof Object ? res : obj
}
```

```js
function _new(Fn, ...args) {
    // 1. 新建一个对象
    let obj = {}
    // 2. 心对西那个的原型指针指向构造函数的原型， 继承构造函数原型上的方法
    obj.__proto__ = Fn.prototype
    // 3. 将构造函数的this指向新的对象，执行构造函数内部代码并拿到返回值
    let res = Fn.apply(obj, args)
    // 4. 构造函数有返回则返回构造函数的返回值，没有则返回新对象obj
    return res instanceof Object ? res : obj
}
```

## 大文件上传处理方案
1. 分片上传：这是一种将大文件分成小块上传的方案。每个分片都是由独立的请求上传，可以在上传过程中暂停和恢复。
2. 断点续传：这是一种基于分片上传的方案，它可以在上传过程中捕获上传的状态，以便在上传过程中发生错误或中断时恢复上传。这种方案通常需要服务端进行支持。
3. 使用 WebRTC 进行点对点文件传输：这是一种直接将文件上传到另一个设备或浏览器的方案。这种方案可以避免上传到服务器的延迟和带宽限制，但可能会涉及到安全风险。
4. 使用第三方服务：这种方案可以使用云存储服务（例如 Amazon S3、Google Cloud Storage、Microsoft Azure等）或者其他第三方服务

分片上传代码示例

::: code-group

```html
<input type="file" id="file-input">
<button onclick="upload()">上传文件</button>
```

```js
const upperLimitSize = 1024 * 1024 * 50  // 50兆
function upload() {
    const fileDom = document.querySelector("#file-input")
    // 首先第一步先获取文件对象
    const file = fileDom.files[0]
    // 判断是否文件大小超过上限，如果没有就直接做上传操作
    if (file.size < upperLimitSize) {
        // 直接上传文件的操作
        console.log('上传成功')
        return
    }
    // 文件切片相关的处理
    let currentChunk = 0  // 当前片数
    const chunkSize = 1024 * 1024 * 5  // 每个切片的大小
    const totalChunks = Math.ceil(file.size / chunkSize)  // 总共需要切多少片

    /**
     * uploadChunk
     * @desc 切片上传
     * @param start 起始
     * @param end 结束
     * @param chunkIndex 第几个切片
     */
    function uploadChunk(start, end, chunkIndex) {
        console.log('start, end, chunkIndex', start, end, chunkIndex)
        console.log(file.slice(start, end), file.size, end)  // file.slice(start, end) 这是每次需要上传的片段
    }
    
    // 切片后分别上传
    while (currentChunk < totalChunks) {
        let start = currentChunk * chunkSize
        let end = Math.min(((currentChunk + 1) * chunkSize), file.size)
        uploadChunk(start, end, currentChunk)
        currentChunk++
    }
}
```

:::


## axios里中断请求怎么操作？
> 在 `v0.22.0` 之前，可以使用 `CancelToken` 发起取消请求。
> 从 `v0.22.0` 开始，`Axios` 支持 `AbortController` 以获取API的方式取消请求。

### CancelToken

::: tip 注意点

在 `GET` 请求中 `CancelToken` 作为第二个参数传入，在 `POST` 请求中 `CancelToken` 作为第三个参数传入

:::

```js

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/user/12345', {
    cancelToken: source.token
}).catch(function (thrown) {
    if (axios.isCancel(thrown)) {
        console.log('取消请求', thrown.message)
    } else {
        // handle error
    }
})

axios.post('/user/12345', {
    name: 'new name'
}, {
    cancelToken: source.token
})


// 参数可选
source.cancel('用户发起了取消操作')

```

### AbortController
```js

const controller = new AbortController()

axios.get('/user/12345', {
    signal: controller.signal
}).then(function (response) {
    // ...
})

// 取消请求
controller.abort()

```



















