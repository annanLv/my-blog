# webSocket

> 它是一种网络通信协议, 是 `html5` 开始提供的一种在单个 TCP 链接上进行全双工通讯的协议

## 如何创建 webSocket 对象
> new WebSocket(url)

> new WebSocket(url, protocols)

::: tip url/protocols

`url`: 要链接的URL, 这应该是 webSocket 服务器将响应的 URL

`procotols`(可选): 单个协议字符串或协议字符串数组。 这些字符串用于指示子协议,
以便单个服务器可以实现多个 WebSocket 子协议
(例如, 您可能希望一个服务器能够根据指定的协议处理不同类型的交互)。
如果省略它, 则默认使用空数组, 即[].

:::

```js

let ws = new WebSocket('ws://echo.websocket.org')

```


## 实例属性

### binaryType
> `WebSocket.binaryType` BinaryType 属性控制通过 webSocket 连接接受的二进制数据的类型

```js

var binaryType = aWebSocket.binaryType

```

::: tip 返回值

一条**DOMString**: 

    blob: 如果传输的是 Blob.这是默认值

    arraybuffer: 如果传输的是 ArrayBuffer 类型的数据

:::


### bufferedAmount

> webSocket.bufferedAmount 是一个只读属性, 用于返回已经被 `send()` 方法放入队列中但还没有被发送到网络中
的数据的字节数。一旦队列中的所有数据被发送至网络，则该属性值将被重置为0. 

> 但是, 若在发送过程中连接被关闭, 则属性值不会重置为0. 如果你不断地调用 `send()`, 则该属性值会持续增长.

```js

var bufferedAmount = aWebSocket.bufferedAmount

```

::: tip 返回值

一个 unsigned long

:::

### extensions
> `WebSocket.extensions` 是只读属性, 返回服务器已选择的扩展值. 目前, 链接可以协定的扩展值只有空字符串或者一个扩展列表.

```js

var extensions = aWebSocket.extensions

```
::: tip 返回值

A DOMString

:::

### protocol
> `WebSocket.protocol` 是个只读属性, 用于返回服务器选中的子协议的名字; 这是一个在创建 `WebSocket` 对象时, 
在参数 `protocols`中指定的字符串, 当没有已建立的链接时为空串.

```js

var protocol = aWebSocket.protocol

```

::: tip 返回值

DOMSting

:::


### readyState

> 返回当前 `WebSocket` 的链接状态, 只读.

```js

var readyState = WebSocket.readyState

```

::: tip 返回值

0 (WebSocket.CONNECTING) 正在链接中(套接字已创建. 连接尚未打开)

1 (WebSocket.OPEN) 已经链接并且可以通讯

2 (WebSocket.ClOSING) 已经链接并且可以通讯

3 (WebSocket.CLOSED) 链接已关闭或者没有链接成功

:::









